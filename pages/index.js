import Head from 'next/head'
import {
  Heading,
  VStack,
  Box
} from '@chakra-ui/react'

import Post from "../components/Post"

export default function Home(props) {
  return (
    <>
      <Heading>Public Feed</Heading>
      <VStack w='full' align='flex-start'>
        {props.feed.map(post => (
          <Box key={post.id} w='full'>
            <Post post={post} />
          </Box>
        ))}
      </VStack>
    </>
  )
}

export async function getStaticProps(conext) {
  const feed = [
    {
      id: 1,
      title: "Prisma is the perfect ORM for Next.js",
      content: "[Prisma](https://github.com/prisma/prisma) and Next.js go _great_ together!",
      published: false,
      author: {
        name: "Nikolas Burk",
        email: "burk@prisma.io",
      }
    }
  ]
  return { props: { feed } }
}

