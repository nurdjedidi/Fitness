import { c as defineEventHandler, r as readBody, e as createError } from '../../_/nitro.mjs';
import { p as pool } from '../../_/db.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'jsonwebtoken';
import 'node:path';
import 'mysql2/promise';

const user = defineEventHandler(async (event) => {
  var _a;
  const body = await readBody(event);
  try {
    const userId = (_a = event.context.user) == null ? void 0 : _a.id;
    if (!userId) {
      throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
    }
    const [result] = await pool.execute(
      `INSERT INTO nutrition (sexe, size, years, weight, activity, calories, user_id) 
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        body.sexe,
        body.size,
        body.years,
        body.weight,
        body.activity,
        body.calories,
        userId
      ]
    );
    return {
      success: true,
      insertId: result.insertId
    };
  } catch (error) {
    console.error("Erreur lors de l'insertion dans nutrition:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.message || "Erreur interne du serveur"
    });
  }
});

export { user as default };
//# sourceMappingURL=user.mjs.map
