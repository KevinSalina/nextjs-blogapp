import prisma from '../../../lib/prisma'

// PUT api/publish/[draft id]

export default async function handler(req, res) {

  const { id } = req.query

  const post = await prisma.post.update({
    where: {
      id: Number(id)
    },
    data: {
      published: true
    }
  })

  res.json(post)
}