import { c as defineEventHandler, r as readBody, e as createError } from '../../_/nitro.mjs';
import mysql from 'mysql2/promise';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';

const user = defineEventHandler(async (event) => {
  var _a;
  const body = await readBody(event);
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });
  try {
    const userId = (_a = event.context.user) == null ? void 0 : _a.id;
    const [result] = await connection.execute(
      `INSERT INTO nutrition (sexe, size, years, weight, activity, user_id) 
       VALUES (?, ?, ?, ?, ?, ?)`,
      [
        body.sexe,
        body.size,
        body.years,
        body.weight,
        body.activity,
        userId
      ]
    );
    return {
      success: true,
      insertId: result.insertId
    };
  } catch (err) {
    console.error("Erreur MySQL :", err);
    throw createError({
      statusCode: 500,
      statusMessage: "Erreur lors de l'insertion dans la table nutrition",
      data: err
    });
  } finally {
    await connection.end();
  }
});

export { user as default };
//# sourceMappingURL=user.mjs.map