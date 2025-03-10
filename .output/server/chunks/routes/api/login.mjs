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

const login = defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (!body.email || !body.password) {
    throw createError({
      statusCode: 400,
      message: "Email et mot de passe sont requis"
    });
  }
  try {
    const [rows] = await pool.execute(
      "SELECT * FROM users WHERE email = ?",
      [body.email]
    );
    if (rows.length === 0) {
      throw createError({
        statusCode: 404,
        message: "Utilisateur non trouv\xE9"
      });
    }
    const user = rows[0];
    const isPasswordValid = await bcrypt.compare(body.password, user.password);
    if (!isPasswordValid) {
      throw createError({
        statusCode: 401,
        message: "Mot de passe incorrect"
      });
    }
    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    return {
      success: true,
      userId: user.id,
      token,
      message: "Connexion r\xE9ussie"
    };
  } catch (error) {
    console.error("Erreur login:", error);
    if (error.statusCode) {
      throw error;
    }
    throw createError({
      statusCode: 500,
      message: "Une erreur est survenue lors de la connexion"
    });
  }
});

export { login as default };
//# sourceMappingURL=login.mjs.map
