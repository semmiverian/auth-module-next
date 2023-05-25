import { OnBoardRoute } from '@/route/OnboardRoute';

const Onboard = () => {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <OnBoardRoute>
        <h1>Onboard Page</h1>
      </OnBoardRoute>
    </div>
  );
};

export default Onboard;
