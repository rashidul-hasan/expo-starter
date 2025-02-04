import { sqliteTable as table, integer, text, uniqueIndex } from "drizzle-orm/sqlite-core";

export const users = table(
  "users",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    name: text("name", { length: 255 }).notNull(),
    email: text("email").notNull(),
  },
  (table) => [uniqueIndex("email_idx").on(table.email)]
);
