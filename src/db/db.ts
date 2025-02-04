import { drizzle } from "drizzle-orm/expo-sqlite";
import * as SQLite from "expo-sqlite";

const sqliteDb = SQLite.openDatabaseSync("app.db");

export const db = drizzle(sqliteDb);
