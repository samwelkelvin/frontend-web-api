import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    
    files: ["**/*.js"], // Adjust the file pattern if necessary
    ignores: ["**/*.config.js"], // Ignore config files
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest", // ECMAScript version
        sourceType: "module", // Using ECMAScript modules
      },
      globals: {
        ...globals.browser,
        ...globals.node, // Include Node.js globals
        ...globals.jest,// Include jest globals
        console: "readonly", // Explicitly define console as a global variable
        $: true,
        jQuery: true,
        window: true,
        document: true,
        next: true,
      },
    },
    rules: {
      // "no-console": "warn", // Warn about console statementscls
      eqeqeq: "error", // Enforce strict equality
      curly: "error", // Require following curly brace conventions
      "no-var": "warn", // Disallow using var
      "no-unused-vars": "warn",
      "arrow-body-style": "warn"
    },
  },
  pluginJs.configs.recommended,
];