import { Pool } from "pg";
import { dbPort, dbName, dbPassword, dbUser, host } from "../configuration";

export const pool = new Pool({
  user: dbUser,
  password: dbPassword,
  host: host,
  port: Number(dbPort),
  database: dbName,
});
