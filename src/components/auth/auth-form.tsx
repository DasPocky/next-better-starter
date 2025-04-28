'use client';

import { useForm, type DefaultValues, type Control, type FieldValues } from 'react-hook-form';
import { z, type ZodTypeAny } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import type { ReactNode } from 'react';

type Props<T extends ZodTypeAny> = {
  title: string;
  schema: T;
  defaultValues?: DefaultValues<z.infer<T>>;
  onSubmit: (_values: z.infer<T>) => Promise<void>;
  children: (control: Control<FieldValues>) => ReactNode;
};

export function AuthForm<T extends ZodTypeAny>({
  title,
  schema,
  defaultValues,
  onSubmit,
  children,
}: Props<T>) {
  const form = useForm<z.infer<T>>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {children(form.control as unknown as Control<FieldValues>)}
            <Button type="submit" className="w-full">
              Weiter
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
