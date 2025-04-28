import Link from 'next/link';
import type { Route } from 'next';
import { SignInForm } from '@/components/auth/signin-form';

export default function SignInPage() {
  return (
    <div className="flex min-h-svh items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm space-y-6">
        <SignInForm />
        <p className="text-center text-sm">
          Noch kein Konto?{' '}
          <Link href={'/auth/signup' as Route} className="underline">
            Registrieren
          </Link>
        </p>
      </div>
    </div>
  );
}
