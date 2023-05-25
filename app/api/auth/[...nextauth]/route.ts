import NextAuth, { DefaultUser } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { signIn } from 'next-auth/react';

type CustomUser = DefaultUser & {
  finishOnboarding: boolean;
  otpVerified: boolean;
  passwordReset: boolean;
};

const sleep = async (timer = 500) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timer);
  });
};

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Log in',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (!credentials?.password || !credentials?.username) {
          return null;
        }
        const user = {
          id: '1',
          name: 'Admin',
          email: 'admin@netflix.com',
        };

        await sleep();

        return user;
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      const customUser: CustomUser = {
        ...session.user,
        id: '1',
        finishOnboarding: true,
        otpVerified: true,
        passwordReset: true,
      };

      session.user = customUser;

      return session;
    },
  },
});

export { handler as GET, handler as POST, handler };
