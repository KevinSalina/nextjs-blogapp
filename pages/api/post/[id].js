import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  const { id } = req.query

  if (req.method === 'DELETE') {
    const deletedPost = await prisma.post.delete({
      where: {
        id: Number(id)
      }
    })
    res.json(deletedPost)
  } else if (req.method === 'PATCH') {
    const { title, content } = req.body

    const updatedPost = await prisma.post.update({
      where: {
        id: Number(id)
      },
      data: {
        title,
        content
      }
    })

    res.json(updatedPost)

  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}