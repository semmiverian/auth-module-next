import { getServerSession } from 'next-auth';
import { handler } from '../app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export const OnBoardRoute = async (props: any) => {
  const session = await getServerSession(handler);
  const finishOnboard = true;

  if (!session) {
    return redirect('/login');
  }

  if (finishOnboard) {
    return redirect('/dashboard');
  }

  return props.children;
};
