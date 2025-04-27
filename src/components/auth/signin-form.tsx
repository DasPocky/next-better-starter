'use client';

import { AuthForm } from '@/components/auth/auth-form';
import { SignInFields } from '@/components/auth/signin-fields';
import { signInSchema } from '@/components/auth/signin-schema';
import { signInAction } from '@/actions/auth';

export function SignInForm() {
  return (
    <AuthForm
      title="Anmelden"
      schema={signInSchema}
      defaultValues={{ email: '', password: '' }}
      onSubmit={signInAction}
    >
      {control => <SignInFields control={control} />}
    </AuthForm>
  );
}
