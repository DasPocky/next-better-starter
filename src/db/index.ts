import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";

/* alle Tabellen stammen jetzt aus auth-schema.ts */
import * as schema from "@/db/auth-schema";

export const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL!,
});

export const db = drizzle(pool, { schema });
