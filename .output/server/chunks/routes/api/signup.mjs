import bcrypt from 'bcrypt';
import { c as defineEventHandler, r as readBody, e as createError } from '../../_/nitro.mjs';
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
  if (!body.email || !body.password || !body.name) {
    throw createError({
      statusCode: 400,
      message: "Email, mot de passe et nom sont requis"
    });
  }
  try {
    const [existingUsers] = await pool.execute(
      "SELECT id FROM users WHERE email = ?",
      [body.email]
    );
    if (existingUsers.length > 0) {
      throw createError({
        statusCode: 409,
        message: "Cet email est d\xE9j\xE0 utilis\xE9"
      });
    }
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const [result] = await pool.execute(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [body.name, body.email, hashedPassword]
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
      message: "Inscription r\xE9ussie"
    };
  } catch (error) {
    console.error("Erreur signup:", error);
    if (error.statusCode) {
      throw error;
    }
    throw createError({
      statusCode: 500,
      message: "Une erreur est survenue lors de l'inscription"
    });
  }
});

export { signup as default };
//# sourceMappingURL=signup.mjs.map
