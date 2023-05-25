import { AuthenticatedRoute } from '@/AuthenticatedRoute';
import { Login, Welcome } from '@/components';

const Dashboard = () => {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <AuthenticatedRoute>
        <div>
          Dashboard Page, <Welcome />
        </div>
        <Login />
      </AuthenticatedRoute>
    </div>
  );
};

export default Dashboard;
