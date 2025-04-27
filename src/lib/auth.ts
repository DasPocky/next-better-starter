import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";        // :contentReference[oaicite:5]{index=5}
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "@/db/schema";

export const db = drizzle(process.env.DATABASE_URL!);

export const auth = betterAuth({
  secret:  process.env.BETTER_AUTH_SECRET,                            // :contentReference[oaicite:6]{index=6}
  baseURL: process.env.BETTER_AUTH_URL,
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,             // mappt Drizzle-Tabellen → Better-Auth
    usePlural: true
  }),
  emailAndPassword: { enabled: true },                                // :contentReference[oaicite:7]{index=7}
  socialProviders: {
    github: {
      clientId:     process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!
    }
  }
});
