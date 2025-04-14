import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig([
  {
    files: ["**/*.{js,jsx}"],
    plugins: ["react", "react-refresh"],
    extends: [
      "plugin:react/recommended",
      "eslint:recommended",
      "plugin:react/jsx-runtime",
      "plugin:react-hooks/recommended",
    ],
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: { globals: globals.browser },
  },
  { ignorePatterns: [".eslint.config.js/*", "dist/*"] },
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "no-unused-vars": "off",
      "react/prop-types": "off",
    },
  },
]);
