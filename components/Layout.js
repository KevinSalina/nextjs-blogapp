import React from 'react'
import {
  Container,
  Flex
} from '@chakra-ui/react'

import NavBar from './NavBar'

export const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container
        as='main'
        maxW='container.xl'
      >
        <Flex
          w='full'
          direction='column'
          align='flex-start'
        >
          {children}
        </Flex>
      </Container>
    </>
  )
}
