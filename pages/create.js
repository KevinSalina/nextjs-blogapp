import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import axios from 'axios'

import {
  FormControl,
  FormLabel,
  Flex,
  Heading,
  Input,
  Button,
  VStack,
  Textarea
} from '@chakra-ui/react'

export default function Create() {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')


  const handleSubmit = async (e) => {
    try {
      const data = { title, content }
      const results = await axios.post('/api/post', data)
      console.log(results)
      Router.push({
        pathname: '/drafts',
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Flex
      w='full'
      direction='column'
      pt='50px'
      align='flex-start'
    >
      <Heading mb={5}>New Draft</Heading>
      <VStack mb={5} w='full'>
        <FormControl id="title">
          <FormLabel>Title</FormLabel>
          <Input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
        </FormControl>
        <FormControl id="content">
          <FormLabel>Content</FormLabel>
          <Textarea onChange={(e) => setContent(e.target.value)} value={content} h='20vh' />
        </FormControl>
      </VStack>
      <Button
        isDisabled={!title || !content}
        onClick={handleSubmit}
      >
        Create
      </Button>
    </Flex>
  )
}

