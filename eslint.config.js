import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "script",
      globals: {
        chrome: "readonly",
        browser: "readonly",
        document: "readonly",
        window: "readonly",
        navigator: "readonly",
        alert: "readonly",
        Blob: "readonly",
        URL: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",
      "no-alert": "warn",
    },
  },
];
