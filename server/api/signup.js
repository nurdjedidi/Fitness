import { defineEventHandler, readBody, createError } from 'h3';
import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { pool } from '../db';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body.email || !body.password) {
    return { error: 'Email and password are required' };
  }

  const hashedPassword = await bcrypt.hash(body.password, 10);

  try {
   const [result] = await pool.execute(
      'INSERT INTO users (email, password) VALUES (?, ?)',
      [body.email, hashedPassword]
    );

    const userId = result.insertId

    const token = jwt.sign(
      { userId: userId }, 
      process.env.JWT_SECRET, 
      { expiresIn: '1d' } 
    )

    return {
      success: true,
      userId,
      token,
      message: 'Sign Up successful'
    }
  } catch (error) {
    console.log(error.message, error.stack);
  } 
});
