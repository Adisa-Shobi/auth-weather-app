import { NextAuthConfig } from 'next-auth';

export const authConfig = {

  pages: {
    signIn: '/login',
    error: '/login',
  },
  providers: [
    // added later in auth.ts since it requires bcrypt which is only compatible with Node.js
    // while this file is also used in non-Node.js environments
  ],
  
  callbacks: {
    // redirect: async ({ url, baseUrl }) => {
    //   // Allows relative callback URLs
    // if (url.startsWith("/")) return `${baseUrl}${url}`
    // // Allows callback URLs on the same origin
    // else if (new URL(url).origin === baseUrl) return url
    // return baseUrl
    // },


    authorized({ auth, request: { nextUrl } }) {
      let isLoggedIn = !!auth?.user;
      let isOnDashboard = nextUrl.pathname.startsWith('/protected');

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/protected', nextUrl));
      }

      return true;
    },
  },
} satisfies NextAuthConfig;
