'use client';

import { AuthForm } from '@/components/auth/auth-form';
import { SignUpFields } from '@/components/auth/signup-fields';
import { signUpSchema } from '@/components/auth/signup-schema';
import { signUpAction } from '@/actions/auth';

export function SignUpForm() {
  return (
    <AuthForm
      title="Registrieren"
      schema={signUpSchema}
      onSubmit={signUpAction}
    >
      {control => <SignUpFields control={control} />}
    </AuthForm>
  );
}
