import { getServerSession } from 'next-auth';
import { handler } from './api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import { AuthenticatedRoute } from '@/AuthenticatedRoute';

export default async function Home() {
  // const session = await getServerSession(handler);

  // if (!session) {
  //   return redirect('/login');
  // }

  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <AuthenticatedRoute>
        <h1>Testing</h1>
      </AuthenticatedRoute>
    </div>
  );
}
