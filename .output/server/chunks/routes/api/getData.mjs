import { c as defineEventHandler } from '../../_/nitro.mjs';
import { p as pool } from '../../_/db.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'jsonwebtoken';
import 'node:path';
import 'mysql2/promise';

const getData = defineEventHandler(async (event) => {
  var _a;
  const userId = (_a = event.context.user) == null ? undefined : _a.id;
  console.log(userId);
  try {
    const [nutritionRows] = await pool.execute(
      "SELECT * FROM nutrition WHERE user_id = ?",
      [userId]
    );
    const nutritionId = nutritionRows[0].id;
    console.log(nutritionId);
    const [goalsRows] = await pool.execute("SELECT * FROM goals WHERE nutrition_id = ?", [nutritionId]);
    console.log("Nutrition Rows:", goalsRows);
    const [recipesRows] = await pool.execute("SELECT * FROM recipes WHERE nutrition_id = ?", [nutritionId]);
    console.log("Recipes rows :", recipesRows);
    return {
      success: true,
      data: {
        nutrition: nutritionRows,
        goals: goalsRows,
        recipes: recipesRows
      }
    };
  } catch (err) {
    console.error("Erreur lors de l'ajouts des objectifs :", err.message, err.stack);
  }
});

export { getData as default };
//# sourceMappingURL=getData.mjs.map
