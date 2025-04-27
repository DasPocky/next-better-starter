'use client';

import { useForm } from 'react-hook-form';
import { z, ZodTypeAny } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ReactNode } from 'react';

type Props<T extends ZodTypeAny> = {
  title: string;
  schema: T;
  onSubmit: (values: z.infer<T>) => Promise<void>;
  children: (
    control: ReturnType<typeof useForm>['control'],
  ) => ReactNode;
};

export function AuthForm<T extends ZodTypeAny>({
  title,
  schema,
  onSubmit,
  children,
}: Props<T>) {
  const form = useForm<z.infer<T>>({
    resolver: zodResolver(schema),
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            {children(form.control)}
            <Button type="submit" className="w-full">
              Weiter
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
