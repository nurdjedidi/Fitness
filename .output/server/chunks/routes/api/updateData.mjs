import { c as defineEventHandler, r as readBody } from '../../_/nitro.mjs';
import { p as pool } from '../../_/db.mjs';
import { error } from 'console';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'jsonwebtoken';
import 'node:path';
import 'mysql2/promise';

const updateData = defineEventHandler(async (event) => {
  var _a;
  const body = await readBody(event);
  const userId = (_a = event.context.user) == null ? undefined : _a.id;
  const { sexe, size, years, weight, activity } = body;
  try {
    await pool.execute(
      `UPDATE nutrition
             SET sexe = ?, size = ?, years = ?, weight = ?, activity = ? WHERE user_id = ?`,
      [sexe, size, years, weight, activity, userId]
    );
    const [formRows] = await db.query("SELECT * FROM nutrition WHERE user_id = ?", [userId]);
    const form = formRows[0] || {};
    return { success: true, data: form };
  } catch (err) {
    console.error("Erreur lors de la mise a jour des donn\xE9es :", error.message, error.stack);
  }
});

export { updateData as default };
//# sourceMappingURL=updateData.mjs.map
