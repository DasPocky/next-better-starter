import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import next from 'eslint-plugin-next';

export default [
  ...eslint.configs.recommended,
  {
    plugins: { '@typescript-eslint': tseslint },
    languageOptions: {
      parserOptions: { project: './tsconfig.json' },
    },
    rules: {
      'react/jsx-key': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
    },
  },
  ...next.config({ extends: ['next/core-web-vitals'] }),
];