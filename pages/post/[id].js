import React from "react"
import {
  Heading,
  Text
} from '@chakra-ui/react'
import ReactMarkdown from "react-markdown"

import prisma from "../../lib/prisma"

const Post = (props) => {
  let title = props.title
  if (!props.published) {
    title = `${title} (Draft)`
  }

  return (
    <>
      <Heading>
        {title}
      </Heading>
      <Text>By {props?.author?.name || 'Unknown Author'}</Text>
      <ReactMarkdown>{props.content}</ReactMarkdown>
    </>
  )
}

export async function getServerSideProps(context) {

  console.log(context.params)

  const singlePost = await prisma.post.findUnique({
    where: {
      id: Number(context.params?.id) || -1
    },
    include: {
      author: {
        select: { name: true }
      }
    }
  })
  return {
    props: singlePost,
  }
}

export default Post;