import React from 'react'
import {
  IconButton,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import {
  SunIcon,
  MoonIcon
} from '@chakra-ui/icons'


export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      aria-label='Toggle color mode'
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
    />
  )
}
