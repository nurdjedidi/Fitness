import { defineEventHandler, readBody, createError } from 'h3';
import mysql from 'mysql2/promise';
import { pool } from '../db'

export default defineEventHandler(async (event) => { 
    const userId = event.context.user?.id;
    console.log(userId)

    try { 
        const [nutritionRows] = await pool.execute(
            'SELECT * FROM nutrition WHERE user_id = ?',
            [userId]
        );

        const nutritionId = nutritionRows[0].id;
        console.log(nutritionId)

        const [goalsRows] = await pool.execute('SELECT * FROM goals WHERE nutrition_id = ?', [nutritionId]);
        console.log('Nutrition Rows:', goalsRows);

        const [recipesRows] = await pool.execute('SELECT * FROM recipes WHERE nutrition_id = ?', [nutritionId]);
        console.log("Recipes rows :", recipesRows)

        return { 
            success: true,
            data: {
              nutrition: nutritionRows,
              goals: goalsRows,
              recipes: recipesRows
            }
        }
    }
    catch (err) { 
        console.error("Erreur lors de l'ajouts des objectifs :", err.message, err.stack);
    }
})