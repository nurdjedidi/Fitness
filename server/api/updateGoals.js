import { defineEventHandler, readBody, createError } from 'h3';
import mysql from 'mysql2/promise';
import { pool } from '../db'

export default defineEventHandler(async (event) => { 
    const body = await readBody(event);
    console.log('body reçu dans /api/updateGoals :', body);
    const userId = event.context.user?.id;

    try { 
        const [nutritionRows] = await pool.execute(
            'SELECT id FROM nutrition WHERE user_id = ?',
            [userId]
        );

        if (nutritionRows.length === 0) {
            throw new Error("Aucune entrée de nutrition trouvée pour cet utilisateur");
        }

        const nutritionId = nutritionRows[0].id;

        const [goalsRows] = await pool.execute('UPDATE goals SET goal = ? WHERE nutrition_id = ?', [body.goals, nutritionId]);

        return { 
            success: true,
            data: {
              goal: goalsRows
            }
        }
    }
    catch (err) { 
        console.error("Erreur lors de l'ajouts des objectifs :", err.message, err.stack);
    }
})