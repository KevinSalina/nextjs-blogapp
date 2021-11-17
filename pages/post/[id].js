import React from "react"
import {
  Heading,
  Text,
  Button
} from '@chakra-ui/react'
import ReactMarkdown from "react-markdown"
import axios from "axios"
import { useSession } from 'next-auth/react'
import Router from "next/router"

import prisma from "../../lib/prisma"

const PostPage = (props) => {

  const { data: session, status } = useSession()

  let title = props.title
  if (!props.published) {
    title = `${title} (Draft)`
  }

  console.log(props)

  const publishPost = async (id) => {
    try {
      const results = await axios.put(`/api/publish/${id}`)
      console.log(results)
      Router.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  const deletePost = async (id) => {
    try {
      const result = await axios.delete(`/api/post/${id}`)
      console.log(result)
      Router.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  if (status === 'Loading') {
    return (
      <Text>Loading...</Text>
    )
  }

  const postBelongsToUser = session?.user?.id === props.authorId

  return (
    <>
      <Heading>
        {title}
      </Heading>
      <Text>By {props?.author?.name || 'Unknown Author'}</Text>
      <ReactMarkdown>{props.content}</ReactMarkdown>
      {!props.published && status === 'authenticated' && postBelongsToUser && (
        <Button onClick={() => publishPost(props.id)}>
          Publish
        </Button>
      )}
      {status === 'authenticated' & postBelongsToUser && (
        <Button onClick={() => deletePost(props.id)}>
          Delete
        </Button>
      )}

    </>
  )
}

export async function getServerSideProps(context) {

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
    props: singlePost
  }
}

export default PostPage;