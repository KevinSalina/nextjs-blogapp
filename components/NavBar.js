import React from 'react'
import {
  Button,
  Flex,
  HStack,
  Container,
  Box,
  IconButton,
  useColorMode,
  useColorMOdeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'

import { DarkModeSwitch } from './DarkModeSwitch'

const NavLink = ({ href, children }) => {
  return (
    <NextLink href={href} passHref>
      <Button as='a' variant='ghost'>
        {children}
      </Button>
    </NextLink>
  )
}

const NavBar = () => {
  return (
    <Flex
      as='nav'
      position='sticky'
      zIndex='10'
      top='0'
      backdropFilter='blur(20px)'
      flexDir='row'
      align='center'
      w='full'
      py={2}
      mx='auto'
    >
      <Container
        maxW='container.xl'
      >
        <Flex
          w='full'
          justifyContent='space-between'
        >
          <HStack>
            <NavLink href='/'>
              Home
            </NavLink>
          </HStack>
          <DarkModeSwitch />
        </Flex>
      </Container>
    </Flex>
  )
}

export default NavBar
