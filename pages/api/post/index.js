import { getSession } from 'next-auth/react'
import prisma from '../../../lib/prisma'

// POST /api/post
export default async function handler(req, res) {
  const { title, content } = req.body

  const session = await getSession({ req })

  const userId = session.user.id

  if (!title || !content) res.status(400).json({ message: 'Missing data. Please include title and content.' })

  const results = await prisma.post.create({
    data: {
      title,
      content,
      author: {
        connect: { id: userId }
      }
    }
  })

  res.json(results)

}