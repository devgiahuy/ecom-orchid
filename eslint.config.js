// eslint.config.js
import js from "@eslint/js"
import ts from "typescript-eslint"
import globals from "globals"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import prettier from "eslint-config-prettier"

export default [
    js.configs.recommended,
    ...ts.configs.recommended,
    prettier,
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        ignores: ["dist/**", "node_modules/**"],

        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: globals.browser
        },

        plugins: {
            react,
            "react-hooks": reactHooks
        },

        // rules: {
        //     // React
        //     "react/jsx-uses-react": "off",
        //     "react/react-in-jsx-scope": "off",

        //     // React Hooks
        //     "react-hooks/rules-of-hooks": "error",
        //     "react-hooks/exhaustive-deps": "warn",

        //     // Clean code
        //     "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
        //     "no-console": ["warn", { allow: ["warn", "error"] }]
        // },

        rules: {
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",

            // 💡 Giảm strict TypeScript
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],

            // ⚙️ Cảnh báo nhẹ thôi
            "no-console": "off",
            "no-unused-vars": "warn",
            "tailwindcss/suggestCanonicalClasses": "off"
        },

        settings: {
            react: { version: "detect" }
        }
    }
]
