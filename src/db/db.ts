import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite";

// Open the SQLite database
const expoDb = openDatabaseSync("app.db");

// Initialize Drizzle with the database
export const db = drizzle(expoDb);
