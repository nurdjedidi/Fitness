import bcrypt from 'bcrypt';
import { createError, defineEventHandler, readBody } from 'h3';
import jwt from 'jsonwebtoken';
import { pool } from '../db';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body.email || !body.password || !body.name) {
    throw createError({
      statusCode: 400,
      message: 'Email, mot de passe et nom sont requis'
    });
  }

  try {
    // Vérifier si l'email existe déjà
    const [existingUsers] = await pool.execute(
      'SELECT id FROM users WHERE email = ?',
      [body.email]
    );

    if (existingUsers.length > 0) {
      throw createError({
        statusCode: 409,
        message: 'Cet email est déjà utilisé'
      });
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);

    const [result] = await pool.execute(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [body.name, body.email, hashedPassword]
    );

    const userId = result.insertId;

    const token = jwt.sign(
      { userId: userId },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    return {
      success: true,
      userId,
      token,
      message: 'Inscription réussie'
    };
  } catch (error) {
    console.error('Erreur signup:', error);
    
    if (error.statusCode) {
      throw error;
    }
    
    throw createError({
      statusCode: 500,
      message: 'Une erreur est survenue lors de l\'inscription'
    });
  }
});
