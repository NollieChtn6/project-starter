import { startServer } from "../src/index";

describe("Backend server", () => {
  it("should start the server successfully", () => {
    const result = startServer();
    expect(result).toBe("Server started successfully");
  });
});
