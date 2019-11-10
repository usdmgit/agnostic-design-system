module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    "plugin:react/recommended",
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/jsx-filename-extension": [1, {"extensions": [".ts", ".tsx"]}],
    "prefer-const": "error",
    "no-var": "error",
    "prettier/prettier": [
      "error", {
        "singleQuote": true,
        "semi": true
      }
    ]
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
