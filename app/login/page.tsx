import { Login as LoginComponent } from '@/components';
import { PublicRoute } from '@/route/PublicRoute';
const Login = () => {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <PublicRoute>
        <div>
          <h1>Login Page</h1>
          <LoginComponent />
        </div>
      </PublicRoute>
    </div>
  );
};

export default Login;
