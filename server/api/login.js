import bcrypt from 'bcrypt';
import { createError, defineEventHandler, readBody } from 'h3';
import jwt from 'jsonwebtoken';
import { pool } from '../db';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body.email || !body.password) {
    throw createError({
      statusCode: 400,
      message: 'Email et mot de passe sont requis'
    });
  }

  try {
    const [rows] = await pool.execute(
      'SELECT * FROM users WHERE email = ?',
      [body.email]
    );

    if (rows.length === 0) {
      throw createError({
        statusCode: 404,
        message: 'Utilisateur non trouvé'
      });
    }

    const user = rows[0];
    const isPasswordValid = await bcrypt.compare(body.password, user.password);

    if (!isPasswordValid) {
      throw createError({
        statusCode: 401,
        message: 'Mot de passe incorrect'
      });
    }

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    return {
      success: true,
      userId: user.id,
      token,
      message: 'Connexion réussie'
    };
  } catch (error) {
    console.error('Erreur login:', error);
    
    if (error.statusCode) {
      throw error;
    }
    
    throw createError({
      statusCode: 500,
      message: 'Une erreur est survenue lors de la connexion'
    });
  }
});
