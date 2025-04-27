import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

export default async function Dashboard() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <h1 className="text-2xl">
      Willkommen, {session?.user.name ?? 'Gast'}!
    </h1>
  );
}
