import { describe, it, expect, vi } from "vitest";

// On how to set/mock env variables in vitest : https://stackoverflow.com/questions/74188472/how-to-set-mock-an-env-variable-in-vitest-process-env-node-env-anything-t
// See official documentation: https://vitest.dev/api/vi.html#vi-stubenv

describe("Environment variables validation", () => {
  beforeEach(() => {
    vi.unstubAllEnvs();
    vi.resetModules();
  });

  it("should load valid environment variables", async () => {
    vi.stubEnv("PORT", "3000");
    vi.stubEnv("DB_HOST", "localhost");
    vi.stubEnv("DB_PORT", "5432");
    vi.stubEnv("DB_USER", "user");
    vi.stubEnv("DB_PASSWORD", "pass");
    vi.stubEnv("DB_SCHEMA", "schema");

    const { env } = await import("./env");

    expect(env.PORT).toBe(3000);
    expect(env.DB_HOST).toBe("localhost");
  });

  it("should throw when environment variables are invalid", async () => {
    // Simulates missing environment variables
    vi.stubEnv("PORT", undefined);
    vi.stubEnv("DB_HOST", undefined);
    vi.stubEnv("DB_PORT", undefined);
    vi.stubEnv("DB_USER", undefined);
    vi.stubEnv("DB_PASSWORD", undefined);
    vi.stubEnv("DB_SCHEMA", undefined);

    try {
      await import("./env");
      throw new Error("Expected import to fail, but it succeeded");
    } catch (err) {
      expect((err as Error).message).toMatch(/Invalid environment variables/);
    }
  });
});
