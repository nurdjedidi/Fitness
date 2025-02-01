import { defineEventHandler, createError } from 'h3'
import jwt from 'jsonwebtoken'

const publicRoutes = ['/api/login', '/api/signup']

export default defineEventHandler((event) => {
  const url = event.node.req.url || ''

  if (!url.startsWith('/api')) return

  if (publicRoutes.some(route => url.startsWith(route))) {
    return
  }

  const authHeader = event.node.req.headers.authorization || ''
  const [scheme, token] = authHeader.split(' ')

  if (!authHeader || scheme.toLowerCase() !== 'bearer' || !token) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Authentification requise',
      headers: {
        'WWW-Authenticate': 'Bearer realm="API"'
      }
    })
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    event.context.user = { id: payload.userId }
  } catch (error) {
    console.error('Erreur JWT:', error)
    throw createError({
      statusCode: 401,
      statusMessage: 'Token invalide ou expiré',
      headers: {
        'WWW-Authenticate': 'Bearer error="invalid_token"'
      }
    })
  }

  event.node.res.setHeader('Access-Control-Allow-Origin', '*')
  event.node.res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  event.node.res.setHeader('Access-Control-Allow-Headers', 'Authorization')
})