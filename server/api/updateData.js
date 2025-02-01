import { defineEventHandler, readBody, createError } from 'h3';
import mysql from 'mysql2/promise';
import { pool } from '../db'
import { error } from 'console';

export default defineEventHandler(async (event) => { 
    const body = await readBody(event);
    const userId = event.context.user?.id;
    const { sexe, size, years, weight, activity } = body

    try { 
        await pool.execute(
            `UPDATE nutrition
             SET sexe = ?, size = ?, years = ?, weight = ?, activity = ? WHERE user_id = ?`,
            [sexe, size, years, weight, activity, userId]
          )

          const [formRows] = await db.query('SELECT * FROM nutrition WHERE user_id = ?', [userId])
          const form = formRows[0] || {}

          return { success: true, data: form }
    }
    catch (err) { 
        console.error("Erreur lors de la mise a jour des données :", error.message, error.stack)
    }
})