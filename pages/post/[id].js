import React from "react"
import {
  Heading,
  Text
} from '@chakra-ui/react'
import ReactMarkdown from "react-markdown"



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
  const post = {
    id: 1,
    title: "Prisma is the perfect ORM for Next.js",
    content: "[Prisma](https://github.com/prisma/prisma) and Next.js go _great_ together!",
    published: false,
    author: {
      name: "Nikolas Burk",
      email: "burk@prisma.io",
    },
  }
  return {
    props: post,
  }
}

export default Post
