import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },

// ----------- OVERRIDES FOR NODE‑ONLY FILES ------------
  overrides: [
    {
      files: ["index.js", "vite.config.js", "src/api/**/*.js"],
      env: {
        node: true,          // <-- tells ESLint that `process` etc. exist
        commonjs: true,
      },

module.exports = {
  // …existing config…
  globals: {
    paypal: "readonly", // tells ESLint that `paypal` exists globally
  },
};
  },
])
