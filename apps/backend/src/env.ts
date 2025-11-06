import dotenv from "dotenv";
import path from "node:path";

dotenv.config({ path: path.resolve(__dirname, "../../../.env") });

import { cleanEnv, num, str } from "envalid";

export const env = cleanEnv(
  process.env,
  {
    PORT: num(),
    DB_HOST: str(),
    DB_PORT: num(),
    DB_USER: str(),
    DB_PASSWORD: str(),
    DB_SCHEMA: str(),
  },
  {
    reporter: ({ errors }) => {
      if (Object.keys(errors).length > 0) {
        throw new Error(
          `❌ Invalid environment variables:\n${Object.entries(errors)
            .map(([key, err]) => `• ${key}: ${err.name} (${err.message})`)
            .join("\n")}`,
        );
      }
    },
  },
);
