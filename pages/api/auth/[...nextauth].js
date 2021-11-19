import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'

import prisma from '../../../lib/prisma'
import allConfigs from '../../../next.config'

const enviroment = process.env.NODE_ENV || 'development'
const { clientId, clientSecret, secret } = allConfigs[enviroment]

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: secret,
  providers: [
    GitHubProvider({
      clientId,
      clientSecret
    })
  ],
  callbacks: {
    session: async (session, user) => {
      return Promise.resolve(session)
    }
  }
})