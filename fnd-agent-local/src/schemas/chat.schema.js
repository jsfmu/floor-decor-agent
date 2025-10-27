import { z } from "zod";

export const ChatRequest = z.object({
  conversation_id: z.string().optional(),
  messages: z.array(
    z.object({
      role: z.enum(["user", "assistant", "system"]),
      content: z.string().min(1),
    })
  ).min(1),
  stream: z.boolean().optional().default(false),
});
