import { c as defineEventHandler, r as readBody } from '../../_/nitro.mjs';
import { p as pool } from '../../_/db.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'jsonwebtoken';
import 'node:path';
import 'mysql2/promise';

const updateGoals = defineEventHandler(async (event) => {
  var _a;
  const body = await readBody(event);
  console.log("body re\xE7u dans /api/updateGoals :", body);
  const userId = (_a = event.context.user) == null ? undefined : _a.id;
  try {
    const [nutritionRows] = await pool.execute(
      "SELECT id FROM nutrition WHERE user_id = ?",
      [userId]
    );
    if (nutritionRows.length === 0) {
      throw new Error("Aucune entr\xE9e de nutrition trouv\xE9e pour cet utilisateur");
    }
    const nutritionId = nutritionRows[0].id;
    const [goalsRows] = await pool.execute("UPDATE goals SET goal = ? WHERE nutrition_id = ?", [body.goals, nutritionId]);
    return {
      success: true,
      data: {
        goal: goalsRows
      }
    };
  } catch (err) {
    console.error("Erreur lors de l'ajouts des objectifs :", err.message, err.stack);
  }
});

export { updateGoals as default };
//# sourceMappingURL=updateGoals.mjs.map
