import { defineEventHandler, readBody, createError } from 'h3';
import mysql from 'mysql2/promise';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

  try {
    const userId = event.context.user?.id;
    
    if (!userId) {
        throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
      }

    const [result] = await connection.execute(
      `INSERT INTO nutrition (sexe, size, years, weight, activity, user_id) 
       VALUES (?, ?, ?, ?, ?, ?)`,
      [
        body.sexe,
        body.size,
        body.years,
        body.weight,
        body.activity,
        userId
      ]
    );

    return {
      success: true,
      insertId: result.insertId
    };
  } catch (err) {
    console.error('Erreur MySQL :', err);
    throw createError({
      statusCode: 500,
      statusMessage: 'Erreur lors de l\'insertion dans la table nutrition',
      data: err
    });
  } finally {
    await connection.end();
  }
});
