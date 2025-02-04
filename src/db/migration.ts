import { db } from "./db";

const runMigrations = async () => {
  try {
    await db.run(`
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT UNIQUE NOT NULL
            );
        `);
    console.log("✅ Migrations applied!");
  } catch (error) {
    console.error("❌ Migration failed:", error);
  }
};

export default runMigrations;
