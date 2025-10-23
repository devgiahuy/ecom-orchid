// eslint.config.js
import js from "@eslint/js";
import ts from "typescript-eslint";
import next from "eslint-config-next";
import globals from "globals";
import tailwind from "eslint-plugin-tailwindcss";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  next,
  prettier,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
    },
    plugins: {
      tailwindcss: tailwind,
      "react-hooks": reactHooks,
    },
    rules: {
      // React & Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Tailwind
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-custom-classname": "off",

      // General
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "react/jsx-no-target-blank": "off",
    },
    settings: {
      tailwindcss: {
        callees: ["classnames", "clsx", "ctl"],
        config: "tailwind.config.js",
        removeDuplicates: true,
      },
    },
  },
];
