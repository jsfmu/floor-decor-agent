import { ChatRequest } from "../schemas/chat.schema.js";
import { env } from "../config/env.js";

export async function postChat(req, res, next) {
  try {
    const parsed = ChatRequest.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        error: parsed.error.issues?.[0]?.message || "Invalid request",
        code: "BAD_REQUEST",
      });
    }

    const { conversation_id, messages, stream } = parsed.data;
    const ctrl = stream ? new AbortController() : undefined;

    const r = await fetch(env.ORCH_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: ctrl?.signal,
      body: JSON.stringify({ conversation_id, messages, stream: !!stream }),
    });

    if (!stream) {
      const text = await r.text();
      return res
        .status(r.status)
        .type(r.headers.get("content-type") || "application/json")
        .send(text);
    }

    // Stream (SSE) passthrough
    res.set({
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    });
    res.flushHeaders?.();
    req.on("close", () => ctrl?.abort());

    for await (const chunk of r.body) res.write(chunk);
    res.end();
  } catch (err) {
    next(err);
  }
}
