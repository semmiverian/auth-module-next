'use client';
import { signIn, signOut, useSession } from 'next-auth/react';

export const Login = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <h1>Loading</h1>;
  }

  if (status === 'unauthenticated') {
    return (
      <button
        className="outline-red-100"
        onClick={() => signIn(undefined, { callbackUrl: '/dashboard' })}
      >
        Login
      </button>
    );
  }

  if (status === 'authenticated') {
    return (
      <button
        className="outline-red-100"
        onClick={() => signOut({ callbackUrl: '/login' })}
      >
        Logout
      </button>
    );
  }

  return null;
};

export const Welcome = () => {
  const { data: session, status } = useSession();
  console.log('file: components.tsx:38 ~ Welcome ~ session:', session);

  if (status === 'loading') {
    return <h1>Loading</h1>;
  }

  return <h1>Welcome {session?.user?.email}</h1>;
};
