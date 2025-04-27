// src/db/index.ts
import { drizzle } from "drizzle-orm/node-postgres";           // Postgres-Driver :contentReference[oaicite:2]{index=2}
import * as schema from "@/db/schema";
import pg from "pg";

export const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL! });
export const db   = drizzle(pool, { schema });
