import type { Config } from 'drizzle-kit';

export default {
  schema: './src/db/schema.ts', // Path to your schema file
  out: './drizzle',         // Output directory for migrations
  dialect: 'sqlite',        // Database dialect
  driver: 'expo',           // Use Expo driver
} satisfies Config;
