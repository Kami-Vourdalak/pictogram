module.exports = {
    extends: [
      'standard',
      'plugin:vue/recommended',
      'plugin:@typescript-eslint/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      }
    },
    plugins: [
      '@typescript-eslint',
      'vue'
    ],
    rules: {
      // Add or modify ESLint rules here for customization
    }
  };
  