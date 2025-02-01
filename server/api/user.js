import { defineEventHandler, readBody, createError } from 'h3';
import mysql from 'mysql2/promise';
import { pool } from '../db';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  try {
    const userId = event.context.user?.id;

    if (!userId) {
      throw createError({ statusCode: 401, statusMessage: 'Unauthorized' });
    }

    const [result] = await pool.execute(
      `INSERT INTO nutrition (sexe, size, years, weight, activity, calories, user_id) 
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        body.sexe,
        body.size,
        body.years,
        body.weight,
        body.activity,
        body.calories,
        userId,
      ]
    );

    return {
      success: true,
      insertId: result.insertId,
    };
  } catch (error) {
    console.error('Erreur lors de l\'insertion dans nutrition:', error);
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.message || 'Erreur interne du serveur',
    });
  }
});
