import { getServerSession } from 'next-auth';
import { handler } from '../app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export const PublicRoute = async (props: any) => {
  const session = await getServerSession(handler);

  if (session) {
    return redirect('/dashboard');
  }

  return props.children;
};
