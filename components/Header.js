import React from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/client'

const Header = () => {
  const router = useRouter()
  const isActive = (pathname) => router.asPath === pathname

  const [session, loading] = useSession()

  return (
    <>
    </>
  )
}

export default Header
