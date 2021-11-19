import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'

import prisma from '../../../lib/prisma'
import allConfigs from '../../../next.config'

// const enviroment = process.env.NODE_ENV || 'development'
// const { clientId, clientSecret, secret } = allConfigs[enviroment]

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })
  ],
  callbacks: {
    session: async (session, user) => {
      return Promise.resolve(session)
    }
  }
})