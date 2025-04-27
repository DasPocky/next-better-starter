import Link from 'next/link';
import { Route } from 'next';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function LandingPage() {
  return (
    <main className="flex min-h-svh items-center justify-center p-6">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl">Logistik&nbsp;Simulator</CardTitle>
          <CardDescription>
            Willkommen! Melde dich an oder registriere dich, um loszulegen.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href={'/auth/signin' as Route}>Anmelden</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={'/auth/signup' as Route}>Registrieren</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
