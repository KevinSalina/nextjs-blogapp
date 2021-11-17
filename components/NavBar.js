import React from 'react'
import router from 'next/link'
import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/react'

import {
  Button,
  Flex,
  HStack,
  Container,
  Center,
  Spinner,
  Box,
  Text,
  IconButton,
  useColorMode,
  useColorMOdeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'

import { DarkModeSwitch } from './DarkModeSwitch'
import { AtSignIcon } from '@chakra-ui/icons'

const NavLink = ({ href, children, path }) => {

  const router = useRouter()
  const isActive = (pathname) => router.asPath === pathname

  return (
    <NextLink href={href} passHref>
      <Button as='a' variant='ghost' bg={isActive(path) ? 'gray.100' : null}>
        {children}
      </Button>
    </NextLink>
  )
}

const NavBar = () => {

  const { data: session, status } = useSession()

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
            <NavLink href='/' path='/'>
              Feed
            </NavLink>
            {session ?
              <NavLink href='/drafts' path='/drafts'>
                My Drafts
              </NavLink>
              :
              null
            }

          </HStack>
          <HStack>
            {status === 'loading' ? <Spinner /> : null}
            {session ?
              <>
                <Text>
                  {session.user.name}
                </Text>
                <Text>
                  {session.user.email}
                </Text>
                <NavLink href='/create' path='/create'>
                  New Post
                </NavLink>
                <Button variant='ghost' onClick={() => signOut('github')}>
                  Log out
                </Button>
              </>
              :
              <NavLink href='/auth/signin' path='/auth/signin'>
                Log In
              </NavLink>

            }
            <DarkModeSwitch />
          </HStack>
        </Flex>
      </Container>
    </Flex>
  )
}

export default NavBar
