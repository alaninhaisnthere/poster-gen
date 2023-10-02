import { NextAuth } from 'next-auth'

export default NextAuth({
  providers: [
    import('next-auth/providers').then((providers) => providers.Spotify({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    })),
  ],
  callbacks: {
    async signIn() {
      return '/';
    },
  },
  session: {
    maxAge: 30 * 24 * 60 * 60
  },
})
