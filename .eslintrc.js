module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "vue/valid-v-slot": "off",
    "vue/multi-word-component-names": "off",
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        next: "*",
        prev: ["import"],
      },
      {
        blankLine: "never",
        next: ["import"],
        prev: ["import"],
      },
      {
        blankLine: "always",
        next: "*",
        prev: ["export"],
      },
      {
        blankLine: "always",
        next: "*",
        prev: ["function", "if", "switch", "try"],
      },
      {
        blankLine: "always",
        next: ["function", "if", "switch", "try"],
        prev: "*",
      },
      {
        blankLine: "always",
        next: ["return"],
        prev: "*",
      },
      {
        blankLine: "always",
        next: "*",
        prev: ["const", "let", "var"],
      },
      {
        blankLine: "never",
        next: ["const", "let", "var"],
        prev: ["const", "let", "var"],
      },
    ],
  },
};
