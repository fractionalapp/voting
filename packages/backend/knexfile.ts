import { config } from "cfs-dotenv";

config();

export const development = {
  client: 'better-sqlite3',
  connection: {
    filename: "./mydb.sqlite"
  },
  useNullAsDefault: true,
};