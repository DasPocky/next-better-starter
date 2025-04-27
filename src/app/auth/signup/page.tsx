import Link from 'next/link';
import { Route } from 'next';
import { SignUpForm } from '@/components/auth/signup-form';

export default function SignUpPage() {
  return (
    <div className="flex min-h-svh items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm space-y-6">
        <SignUpForm />
        <p className="text-center text-sm">
          Schon registriert?{' '}
          <Link href={'/auth/signin' as Route} className="underline">
            Anmelden
          </Link>
        </p>
      </div>
    </div>
  );
}
