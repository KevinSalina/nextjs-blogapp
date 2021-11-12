import React from 'react'
import {
  LinkBox,
  LinkOverlay,
  Heading,
  Text,
  Box,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import ReactMarkdown from 'react-markdown'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

const Post = ({ post }) => {
  const authorName = post.author ? post.author.name : 'Unkown author'

  const newTheme = {

  }

  const bg = useColorModeValue('gray.50', 'gray.700')
  const color = useColorModeValue('black', 'white')
  const hoverColor = useColorModeValue('gray.200', 'gray.600')

  return (
    <LinkBox mt={5} as="article" w='full' p={5} borderWidth='1px' rounded='md' bg={bg} color={color} _hover={{ bg: hoverColor, cursor: 'pointer' }} boxShadow="base" transition='all .2s ease'>
      <Box mb={3}>
        <LinkOverlay as={NextLink} href={`/post/${post.id}`} pass>
          <Heading as='h3' size='lg'>{post.title}</Heading>
        </LinkOverlay>
        <Text fontSize='sm'>{authorName}</Text>
      </Box>
      <ReactMarkdown components={ChakraUIRenderer()}>
        {post.content}
      </ReactMarkdown>
    </LinkBox>
  )
}

export default Post
