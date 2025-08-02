module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    '*.md',
    'docs/**',
    'documentation/**',
    '**/*.md',
    'node_modules/**',
    'build/**',
    'public/**',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [],
  rules: {
    // Désactiver TOUTES les règles problématiques
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'no-unused-vars': 'off',
    'prefer-const': 'off',
    'no-undef': 'off',
  },
};
