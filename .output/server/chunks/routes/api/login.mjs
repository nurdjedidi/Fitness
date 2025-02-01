import { c as defineEventHandler, r as readBody } from '../../_/nitro.mjs';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { p as pool } from '../../_/db.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'mysql2/promise';

const login = defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (!body.email || !body.password) {
    return { error: "Email and password are required" };
  }
  try {
    const [rows] = await pool.execute(
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
  }
});

export { login as default };
//# sourceMappingURL=login.mjs.map
