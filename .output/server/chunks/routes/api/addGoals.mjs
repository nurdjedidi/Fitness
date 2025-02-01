import { c as defineEventHandler, r as readBody } from '../../_/nitro.mjs';
import { p as pool } from '../../_/db.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'jsonwebtoken';
import 'node:path';
import 'mysql2/promise';

const addGoals = defineEventHandler(async (event) => {
  var _a;
  const body = await readBody(event);
  console.log("body re\xE7u dans /api/addGoals :", body);
  const userId = (_a = event.context.user) == null ? undefined : _a.id;
  console.log(userId);
  try {
    const [nutritionRows] = await pool.execute(
      "SELECT id FROM nutrition WHERE user_id = ?",
      [userId]
    );
    if (nutritionRows.length === 0) {
      throw new Error("Aucune entr\xE9e de nutrition trouv\xE9e pour cet utilisateur");
    }
    const nutritionId = nutritionRows[0].id;
    console.log("nutri id", nutritionId);
    const [goalsRows] = await pool.execute("INSERT INTO goals (goal, nutrition_id) VALUES (?, ?)", [body.goals, nutritionId]);
    return {
      success: true,
      data: {
        goal: goalsRows,
        nutrition_id: nutritionId
      }
    };
  } catch (err) {
    console.error("Erreur lors de l'ajouts des objectifs :", err.message, err.stack);
  }
});

export { addGoals as default };
//# sourceMappingURL=addGoals.mjs.map
