import { c as defineEventHandler, r as readBody, e as createError } from '../../_/nitro.mjs';
import { p as pool } from '../../_/db.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'jsonwebtoken';
import 'node:path';
import 'mysql2/promise';

const addRecipes = defineEventHandler(async (event) => {
  var _a;
  const body = await readBody(event);
  console.log("Body re\xE7u dans /api/addRecipes :", body);
  const userId = (_a = event.context.user) == null ? undefined : _a.id;
  if (!userId) {
    throw createError({ statusCode: 401, message: "Non autoris\xE9" });
  }
  try {
    const [nutritionRows] = await pool.execute(
      "SELECT id FROM nutrition WHERE user_id = ?",
      [userId]
    );
    if (nutritionRows.length === 0) {
      throw createError({ statusCode: 404, message: "Aucune entr\xE9e de nutrition trouv\xE9e" });
    }
    const nutritionId = nutritionRows[0].id;
    const recipesJSON = JSON.stringify(body.names || []);
    await pool.execute(
      `INSERT INTO recipes 
            (recipes, add_calories, carbs, lipids, proteins, nutrition_id) 
            VALUES (?, ?, ?, ?, ?, ?)`,
      [
        recipesJSON,
        body.calories || 0,
        body.carbs || 0,
        body.lipids || 0,
        body.proteins || 0,
        nutritionId
      ]
    );
    return { success: true };
  } catch (err) {
    console.error("Erreur lors de l'ajout des recettes :", err);
    throw createError({
      statusCode: 500,
      message: "Erreur serveur lors de la sauvegarde des recettes"
    });
  }
});

export { addRecipes as default };
//# sourceMappingURL=addRecipes.mjs.map
