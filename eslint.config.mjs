// eslint.config.mjs  (ESLint v9 FlatConfig)
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import ts from '@typescript-eslint/eslint-plugin'

const compat = new FlatCompat({ baseDirectory: import.meta.dirname })

export default [
  ...compat.config({ extends: ['next/core-web-vitals', 'next/typescript'] }), // :contentReference[oaicite:6]{index=6}

  ...js.configs.recommended,
  {
    plugins: { '@typescript-eslint': ts },
    languageOptions: {
      parserOptions: { project: './tsconfig.json' },
    },
    rules: {
      'react/jsx-key': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
    },
  },
]
