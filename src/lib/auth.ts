import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { db } from "@/db";
import * as schema from "@/db/auth-schema";
import argon2 from "argon2";

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,

  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
    usePlural: true,
  }),

  emailAndPassword: {
    enabled: true,
    password: {
      hash: async (password: string) =>
        argon2.hash(password, { type: argon2.argon2id }),
      verify: async ({ hash, password }) => argon2.verify(hash, password),
    },
  },

  plugins: [nextCookies()],
});