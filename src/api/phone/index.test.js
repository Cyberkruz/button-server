import request from 'supertest'
import routes from '.'
import express from '../../services/express'

const app = express(routes)

test('GET /receive 200', async () => {
  const { status } = await request(app).get('/receive')
  expect(status).toBe(200)
})

test('GET /call 200', async () => {
  const { status, body } = await request(app).get('/call')
  expect(status).toBe(200)
  expect(typeof body).toBe('object')
  expect(body.hello).toBe('world')
})
