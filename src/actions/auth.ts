'use server';

import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

export async function signInAction(
  data: { email: string; password: string },
) {
  await auth.api.signInEmail({
    body: data,
    headers: await headers(),
  });

  redirect('/dashboard');
}

export async function signUpAction(
  data: { name: string; email: string; password: string },
) {
  await auth.api.signUpEmail({
    body: data,
    headers: await headers(),
  });

  redirect('/dashboard');
}

export async function signOutAction() {

  await auth.api.signOut({ headers: await headers() });

  redirect('/');
  
}