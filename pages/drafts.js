import React from 'react'
import Post from '../components/Post'
import { useSession, getSession } from 'next-auth/react'
import prisma from '../lib/prisma'
import {
  Text,
  Heading,
  VStack,
  Box
} from '@chakra-ui/react'

export default function Drafts(props) {
  const { data: session } = useSession()

  if (!session) return (
    <Text>You must be logged in to view this page</Text>
  )


  return (
    <>
      <Heading>My Drafts</Heading>
      <VStack w='full' align='flex-start'>
        {props.drafts.map(draft => (
          <Box key={draft.id} w='full'>
            <Post post={draft} />
          </Box>
        ))}
      </VStack>
    </>
  )
}


export async function getServerSideProps({ req, res }) {
  const session = await getSession({ req })

  if (!session) {
    res.statusCode = 403
    return {
      props: {
        drafts: []
      }
    }
  }

  const drafts = await prisma.post.findMany({
    where: {
      author: { id: session.user.id },
      published: false
    },
    include: {
      author: {
        select: { name: true }
      }
    }
  })

  return {
    props: {
      drafts
    }
  }

}
