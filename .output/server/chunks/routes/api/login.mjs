import { c as defineEventHandler, r as readBody } from '../../_/nitro.mjs';
import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';

const login = defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (!body.email || !body.password) {
    return { error: "Email and password are required" };
  }
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });
  try {
    const [rows] = await connection.execute(
      "SELECT * FROM users WHERE email = ?",
      [body.email]
    );
    if (rows.length === 0) {
      return { error: "User not found" };
    }
    const user = rows[0];
    const isPasswordValid = await bcrypt.compare(body.password, user.password);
    if (!isPasswordValid) {
      return { error: "Incorrect password" };
    }
    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    return {
      success: true,
      userId: user.id,
      token
    };
  } catch (error) {
    console.log(error.message, error.stack);
  } finally {
    connection.end();
  }
});

export { login as default };
//# sourceMappingURL=login.mjs.map
