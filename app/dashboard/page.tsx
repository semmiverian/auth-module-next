import { AuthenticatedRoute } from '@/route/AuthenticatedRoute';
import { Login, Welcome } from '@/components';

const Dashboard = () => {
  console.log('Dashboard page called?');
  return (
    <div>
      <div>
        Dashboard Page, <Welcome />
      </div>
      <Login />
    </div>
  );
};

export default Dashboard;
