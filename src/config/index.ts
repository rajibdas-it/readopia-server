import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export const node_env = process.env.NODE_ENV;
export const port = Number(process.env.PORT) as number;
export const database_url = process.env.DATABASE_URL;
