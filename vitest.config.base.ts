import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    include: ["**/*.test.{ts,tsx}"],
    exclude: ["node_modules", "dist"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      reportsDirectory: "coverage",
      include: ["apps/backend/src/**/*.{ts,tsx}", "apps/frontend/src/**/*.{ts,tsx}"],
    },
  },
});
