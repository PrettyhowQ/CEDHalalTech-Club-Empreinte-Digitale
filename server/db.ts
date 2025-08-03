import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";

neonConfig.webSocketConstructor = ws;

// Pour le développement local sans base de données
const DATABASE_URL = process.env.DATABASE_URL || "postgresql://localhost:5432/ced_dev";

console.log("🔌 Tentative de connexion à la base de données...");

export const pool = new Pool({ connectionString: DATABASE_URL });
export const db = drizzle({ client: pool, schema });