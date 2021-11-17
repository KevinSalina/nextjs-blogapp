import React from 'react'
import { getProviders, signIn } from 'next-auth/react'
import {
  Text,
  Heading,
  Box,
  HStack,
  Button
} from '@chakra-ui/react'

const signin = ({ providers }) => {
  return (
    <>
      <Heading>Log In</Heading>

      <Box>
        <HStack>
          {Object.values(providers).map(provider => (
            <Button key={provider.name} onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </Button>
          ))}
        </HStack>
      </Box>
    </>

  )
}


export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers }
  }
}

export default signin
