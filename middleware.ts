import { NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const onboardingRoute = ['/onboard'];
const authenticatedRoute = ['/dashboard', '/'];
const publicRoute = ['/login'];

export async function middleware(
  request: NextRequest,
  response: NextApiResponse
) {
  if (onboardingRoute.includes(request.nextUrl.pathname)) {
    const finishOnboarding = false; // We can grab this value from cookie
    if (finishOnboarding) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  if (authenticatedRoute.includes(request.nextUrl.pathname)) {
    console.log('authentication route redirection logic called?');
    const loggedIn = true; // We can grab this value from cookie
    if (!loggedIn) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  if (publicRoute.includes(request.nextUrl.pathname)) {
    console.log('public route redirection logic called?');

    redirectionLogic(request);
  }
  // return NextResponse.redirect(new URL('/home', request.url));
}

const redirectionLogic = (request: NextRequest) => {
  const loggedIn = true; // We can grab this value from cookie
  const needToVerifyOtp = true;
  const needToResetPassword = false;

  if (!loggedIn) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  if (needToVerifyOtp) {
    return NextResponse.redirect(new URL('/otp', request.url));
  }

  if (needToResetPassword) {
    return NextResponse.redirect(new URL('/resetPassword', request.url));
  }
};
