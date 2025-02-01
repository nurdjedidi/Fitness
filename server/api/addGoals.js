import { defineEventHandler, readBody, createError } from 'h3';
import mysql from 'mysql2/promise';
import { pool } from '../db'

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    console.log('body reçu dans /api/addGoals :', body);
    const userId = event.context.user?.id;
    console.log(userId)

    try {
        const [nutritionRows] = await pool.execute(
            'SELECT id FROM nutrition WHERE user_id = ?',
            [userId]
        );

        if (nutritionRows.length === 0) {
            throw new Error("Aucune entrée de nutrition trouvée pour cet utilisateur");
        }

        const nutritionId = nutritionRows[0].id;
        console.log("nutri id", nutritionId)

        const [goalsRows] = await pool.execute('INSERT INTO goals (goal, nutrition_id) VALUES (?, ?)', [body.goals, nutritionId]);

        return {
            success: true,
            data: {
                goal: goalsRows,
                nutrition_id: nutritionId,
            }
        }
    }
    catch (err) {
        console.error("Erreur lors de l'ajouts des objectifs :", err.message, err.stack);
    }
})