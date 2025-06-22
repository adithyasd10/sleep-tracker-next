import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { checkUser } from '@/lib/checkUser';

export default async function Navbar() {
  const user = await checkUser();
  console.log('Current User:', user);

  return (
    <nav>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b-2 border-gray-200'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <Link href='/' className='flex-shrink-0'>
              <span className="text-md sm:text-2xl font-bold bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 bg-clip-text text-transparent hover:text-emerald-300 transition-colors duration-200">
                SleepTracker
              </span>
            </Link>
          </div>

          <div className='flex items-center space-x-4'>
            <Link
              href='/'
              className="bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 bg-clip-text text-transparent hover:text-emerald-300 transition-colors duration-200 px-2 py-1 rounded-md text-sm sm:px-3 sm:py-2 sm:text-base font-semibold hidden sm:block"

            >
              Home
            </Link>

            <Link
              href='/about'
              className="bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 bg-clip-text text-transparent hover:text-emerald-300 transition-colors duration-200 px-2 py-1 rounded-md text-sm sm:px-3 sm:py-2 sm:text-base font-medium"

            >
              About
            </Link>

            <SignedOut>
              <SignInButton>
                <button className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 hover:from-emerald-600 hover:via-teal-500 hover:to-cyan-600 text-white sm:px-4 sm:py-2 px-3 py-1 text-sm sm:text-md rounded-md font-medium cursor-pointer"
>
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}

