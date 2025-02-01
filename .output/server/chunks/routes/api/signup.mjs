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

const signup = defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (!body.email || !body.password) {
    return { error: "Email and password are required" };
  }
  const hashedPassword = await bcrypt.hash(body.password, 10);
  try {
    const [result] = await pool.execute(
      "INSERT INTO users (email, password) VALUES (?, ?)",
      [body.email, hashedPassword]
    );
    const userId = result.insertId;
    const token = jwt.sign(
      { userId },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    return {
      success: true,
      userId,
      token,
      message: "Sign Up successful"
    };
  } catch (error) {
    console.log(error.message, error.stack);
  }
});

export { signup as default };
//# sourceMappingURL=signup.mjs.map
