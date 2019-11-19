module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    "plugin:react/recommended",
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:import/typescript'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "react/jsx-props-no-spreading": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".ts", ".tsx"] }],
    "prefer-const": "error",
    "no-var": "error"
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    "jest/globals": true,
    "browser": true
  },
  plugins: ["jest", "import"]
};