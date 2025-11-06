import { describe, it, expect, vi } from "vitest";

// Mock the env module to provide controlled environment variables for testing
vi.mock("./env", () => ({
  env: {
    PORT: 3000,
    DB_HOST: "localhost",
    DB_PORT: 5432,
    DB_USER: "user",
    DB_PASSWORD: "pass",
    DB_SCHEMA: "schema",
  },
}));

import { startServer } from "./server";

describe("Backend server", () => {
  it("should start the server successfully", async () => {
    await expect(startServer()).resolves.not.toThrow();
  });
});
