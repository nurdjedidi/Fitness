import { c as defineEventHandler, r as readBody } from '../../_/nitro.mjs';
import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';

const signup = defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (!body.email || !body.password) {
    return { error: "Email and password are required" };
  }
  const hashedPassword = await bcrypt.hash(body.password, 10);
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });
  try {
    await connection.execute(
      "INSERT INTO users (email, password) VALUES (?, ?)",
      [body.email, hashedPassword]
    );
    return { success: true, message: "Sign Up successful" };
  } catch (error) {
    console.log(error.message, error.stack);
  } finally {
    connection.end();
  }
});

export { signup as default };
//# sourceMappingURL=signup.mjs.map
