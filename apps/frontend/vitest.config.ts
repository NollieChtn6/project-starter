import { mergeConfig, defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import baseConfig from "../../vitest.config.base";

export default mergeConfig(
  baseConfig,
  defineConfig({
    plugins: [react()],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/vitest.setup.ts",
      include: ["src/**/*.test.{ts,tsx}"],
      exclude: ["**/node_modules/**", "e2e", "**/e2e/**"],
      coverage: {
        enabled: true,
        reportsDirectory: "coverage/",
      },
    },
  }),
);
