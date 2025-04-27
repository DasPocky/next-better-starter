import next from 'eslint-plugin-next';
import eslint from '@eslint/js';

export default [
  ...next.config({ extends: ['next', 'next/typescript', 'next/core-web-vitals'] }),
  eslint.configs.recommended,
];