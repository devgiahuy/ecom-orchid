// import js from '@eslint/js'
// import globals from 'globals'
// import reactHooks from 'eslint-plugin-react-hooks'
// import reactRefresh from 'eslint-plugin-react-refresh'
// import tseslint from 'typescript-eslint'
// import { defineConfig, globalIgnores } from 'eslint/config'

// export default defineConfig([
//   globalIgnores(['dist']),
//   {
//     files: ['**/*.{ts,tsx}'],
//     extends: [
//       js.configs.recommended,
//       tseslint.configs.recommended,
//       reactHooks.configs['recommended-latest'],
//       reactRefresh.configs.vite,
//     ],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//     },
//   },
// ])
import { EslintConfig, ConfigPrettier } from "@packages/eslint-config";
import { EslintConfigReact } from "@packages/eslint-config-react";
import { EslintConfigReactTest } from "@packages/eslint-config-react-test";
import { EslintConfigExpress } from "@packages/eslint-config-express";

export default [
  ConfigPrettier,
  {
    ignores: [
      "**/node_modules",
      "**/dist",
      "**/build",
      "**/__snapshots__",
      "**/mocks",
      "**/coverage",
    ],
  },
  {
    // Client - React
    files: [
      "apps/*/frontend/**/*.ts",
      "apps/*/frontend/**/*.tsx",
      "apps/*/frontend/**/*.jsx",
      "apps/*/frontend/**/*.js",
    ],
    languageOptions: {
      ...EslintConfig.languageOptions,
      ...EslintConfigReact.languageOptions,
    },
    plugins: { ...EslintConfig.plugins, ...EslintConfigReact.plugins },
    rules: { ...EslintConfig.rules, ...EslintConfigReact.rules },
    settings: { ...EslintConfig.settings, ...EslintConfigReact.settings },
  },
];
