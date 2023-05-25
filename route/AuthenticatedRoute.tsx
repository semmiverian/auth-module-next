import { getServerSession } from 'next-auth';
import { handler } from '../app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export const AuthenticatedRoute = async (props: any) => {
  const session = await getServerSession(handler);

  if (!session) {
    return redirect('/login');
  }

  return props.children;
};
