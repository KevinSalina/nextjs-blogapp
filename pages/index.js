import Head from 'next/head'
import {
  Heading,
  VStack,
  Box
} from '@chakra-ui/react'

import Post from "../components/Post"
import prisma from '../lib/prisma'

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

  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true }
      }
    }
  })
  return { props: { feed } }
}

