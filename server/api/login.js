import { defineEventHandler, readBody, createError } from 'h3';
import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { pool } from '../db';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log('Body reçu :', body);

  if (!body.email || !body.password) {
    return { error: 'Email and password are required' };
  }

  try {
    const [rows] = await pool.execute(
      'SELECT * FROM users WHERE email = ?',
      [body.email]
    );

    if (rows.length === 0) {
      return { error: 'User not found' };
    }

    const user = rows[0];

    const isPasswordValid = await bcrypt.compare(body.password, user.password);

    if (!isPasswordValid) {
      return { error: 'Incorrect password' };
    }

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    )

    return {
      success: true,
      userId: user.id,
      token
    }

  } catch (error) {
    console.log(error.message, error.stack);
  }
});
