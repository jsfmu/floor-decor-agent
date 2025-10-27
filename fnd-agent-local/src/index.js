import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import pinoHttp from "pino-http";
import { env } from "./env.js";
import chatRouter from "./routes/chat.js";

const app = express();

// Security basics
app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: "1mb" }));
app.use(
    pinoHttp({
        transport: env.NODE_ENV === "development" ? { target: "pino-pretty" } : undefined,
    })
);

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 60, // limit each IP to 60 requests per windowMs
    standardHeaders: true,
    legacyHeaders: false,
});

// Routes
app.use("/v1/chat", chatRouter);
app.get("/healthz", (_req, res) => res.json({ ok: true }));

// Error handling
app.use((err, _req, res, _next) => {
  const status = Number.isInteger(err?.status) ? err.status : 500;
  res.status(status).json({ error: err?.message || "Internal Server Error", code: err?.code || "INTERNAL_ERROR" });
});


// Start server
app.listen(env.PORT, () => {
    console.log(`API Gateway running at http://localhost:${env.PORT}`);
});