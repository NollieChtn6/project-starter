import { mergeConfig, defineConfig } from "vitest/config";
import baseConfig from "../../vitest.config.base";

export default mergeConfig(
  baseConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "node",
      include: ["src/**/*.test.ts"],
      coverage: {
        reportsDirectory: "coverage/",
      },
    },
  }),
);
