import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import ts from '@typescript-eslint/eslint-plugin';

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

export default [
  ...compat.config({ extends: ['next/core-web-vitals', 'next/typescript'] }),
  js.configs.recommended,
  {
    plugins: { '@typescript-eslint': ts },
    languageOptions: {
      parserOptions: { project: './tsconfig.json' },
      globals: { React: 'readonly' },
    },
    rules: {
      'no-unused-vars': 'off',

      'react/jsx-key': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
];
