import React from 'react'
import { getProviders, signIn } from 'next-auth/react'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Center,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa'

const Signin = ({ providers }) => {

  const providerColors = {
    GitHub: {
      bg: useColorModeValue('#333', '#f5f5f5'),
      color: useColorModeValue('white', '#333'),
      hoverBg: useColorModeValue('#595959', '#d9d9d9'),
    }
  }


  return (
    <Flex
      align={'center'}
      justify={'center'}
      w='full'
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Log In</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Please Choose Log In Provider
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          minW='300px'
          p={8}>
          <Stack spacing={4}>
            {Object.values(providers).map(provider => (
              <Center key={provider.name} p={0}>
                <Button
                  w={'full'}
                  maxW={'md'}
                  variant={'outline'}
                  bg={providerColors[provider.name].bg}
                  _hover={{ bg: providerColors[provider.name].hoverBg }}
                  color={providerColors[provider.name].color}
                  leftIcon={<FaGithub />}
                  onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                >
                  <Center>
                    <Text>Sign in {provider.name}</Text>
                  </Center>
                </Button>
              </Center>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}


export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers }
  }
}

export default Signin
