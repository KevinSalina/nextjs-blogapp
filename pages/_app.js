import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'
import theme from '../theme'

import { Layout } from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ChakraProvider resetCSS theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </SessionProvider>
  )
}

export default MyApp
