'use client';

import { useForm, type DefaultValues } from 'react-hook-form';
import { z, type ZodTypeAny } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { ReactNode } from 'react';

type Props<T extends ZodTypeAny> = {
  title: string;
  schema: T;
  /** Leere Strings als Default halten die Inputs von Anfang an „controlled“ */
  defaultValues?: DefaultValues<z.infer<T>>;
  onSubmit: (values: z.infer<T>) => Promise<void>;
  children: (control: ReturnType<typeof useForm>['control']) => ReactNode;
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
