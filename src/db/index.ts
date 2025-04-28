import { drizzle } from 'drizzle-orm/node-postgres'
import pg from 'pg'
import * as schema from '@/db/auth-schema'

const g = globalThis as unknown as { db?: ReturnType<typeof drizzle> }

export const db =
  g.db ??
  (() => {
    if (process.env.BUILD_PHASE) return undefined
    const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL! })
    g.db = drizzle(pool, { schema })
    return g.db
  })()
