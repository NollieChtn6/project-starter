import { env } from "./env";

export async function startServer(): Promise<void> {
  console.log(`🚀 Backend started on port: ${env.PORT}`);
}
