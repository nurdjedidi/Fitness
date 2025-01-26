import { defineEventHandler, createError } from 'h3'
import jwt from 'jsonwebtoken'

export default defineEventHandler((event) => {
  const url = event.node.req.url || ''

  const publicRoutes = ['/api/login', '/api/signup']

  if (publicRoutes.some((route) => url.startsWith(route))) {
    return
  }

  const authHeader = event.node.req.headers['authorization'] || ''
  const [scheme, token] = authHeader.split(' ')

  if (scheme !== 'Bearer' || !token) {
    throw createError({ statusCode: 401, statusMessage: 'No token provided' })
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)

    event.context.user = { id: payload.userId }
  } catch (err) {
    throw createError({ statusCode: 401, statusMessage: 'Invalid or expired token' })
  }
})
