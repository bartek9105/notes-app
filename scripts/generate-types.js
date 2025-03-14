import dotenv from "dotenv";
import { execSync } from "child_process";

dotenv.config();

const projectId = process.env.VITE_SUPABASE_PROJECT_ID;
if (!projectId) {
  console.error("SUPABASE_PROJECT_ID is missing in .env");
  process.exit(1);
}

execSync(
  `npx supabase gen types typescript --project-id ${projectId} > src/types/database.ts`,
  { stdio: "inherit" }
);
