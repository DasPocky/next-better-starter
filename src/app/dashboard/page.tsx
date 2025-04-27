import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { signOutAction } from '@/actions/auth';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const APP_NAME = process.env.APP_NAME ?? 'App Name';

export default async function Dashboard() {
  const session = await auth.api.getSession({ headers: await headers() });

  return (
    <main className="flex min-h-svh items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-1.5">
          <CardTitle className="text-2xl">
            Willkommen, {session?.user.name ?? 'Gast'}!
          </CardTitle>

          {/* App-Name einblenden */}
          <CardDescription>{APP_NAME}</CardDescription>

          <CardDescription>Dein persönliches Dashboard</CardDescription>
        </CardHeader>

        <CardContent className="flex justify-center">
          <form action={signOutAction}>
            <Button variant="outline" type="submit">
              Abmelden
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
