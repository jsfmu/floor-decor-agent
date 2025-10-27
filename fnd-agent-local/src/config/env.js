import dotenv from "dotenv";
dotenv.config();

export const env = {
  PORT: Number(process.env.PORT || 8080),
  NODE_ENV: process.env.NODE_ENV || "development",
  ORCH_URL: process.env.ORCH_URL || "http://localhost:7001/chat",
};
