import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "@/db/schema";

export const db = drizzle(process.env.DATABASE_URL!);

export const auth = betterAuth({
  secret:  process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,             // mappt Drizzle-Tabellen → Better-Auth
    usePlural: true
  }),
  emailAndPassword: { enabled: true }
});
