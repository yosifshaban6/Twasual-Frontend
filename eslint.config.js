import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";
import globals from "globals";

export default [
  js.configs.recommended,

  {
    files: ["src/**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      import: importPlugin,
      prettier,
    },
    rules: {
      // Prettier formatting
      "prettier/prettier": [
        "error",
        {
          semi: true,
          trailingComma: "es5",
          singleQuote: false,
          printWidth: 80,
          tabWidth: 2,
          useTabs: false,
          bracketSpacing: true,
        },
      ],

      // Best practices
      "no-console": "warn",
      "no-var": "error",
      "prefer-const": "error",
      "no-unused-vars": "off", // ✅ turn off unused vars warning
      eqeqeq: ["error", "always"],

      // Import rules
      "import/no-unresolved": "off", // ✅ disable unresolved import error
      "import/prefer-default-export": "off",
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],

      // React
      "react/prop-types": "off",
      "react/jsx-filename-extension": ["warn", { extensions: [".jsx"] }],
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-props-no-spreading": "off",
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "function-declaration",
          unnamedComponents: "arrow-function",
        },
      ],

      // React Hooks
      ...reactHooks.configs.recommended.rules,
    },

    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        alias: {
          map: [
            ["@", "./src"],
            ["/", "./public"],
          ],
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
  },

  {
    ignores: ["node_modules/", "dist/", "build/", "coverage/"],
  },
];
