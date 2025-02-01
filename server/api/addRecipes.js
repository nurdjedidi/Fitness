import { defineEventHandler, readBody, createError } from 'h3';
import mysql from 'mysql2/promise';
import { pool } from '../db'

export default defineEventHandler(async (event) => { 
    const body = await readBody(event);
    console.log('Body reçu dans /api/addRecipes :', body);
    const userId = event.context.user?.id;

    if (!userId) {
        throw createError({ statusCode: 401, message: 'Non autorisé' });
    }

    try {
        const [nutritionRows] = await pool.execute(
            'SELECT id FROM nutrition WHERE user_id = ?',
            [userId]
        );

        if (nutritionRows.length === 0) {
            throw createError({ statusCode: 404, message: "Aucune entrée de nutrition trouvée" });
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
            message: 'Erreur serveur lors de la sauvegarde des recettes' 
        });
    }
});