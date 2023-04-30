module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['filename-rules', 'only-warn'],
  rules: {
    'func-style': ['error', 'declaration'],
    '@typescript-eslint/no-unused-vars': ['error', {varsIgnorePattern: '^_'}],
  },
  overrides: [
    {
      files: ['lib/**/*'],
      rules: {
        'filename-rules/match': ['error', 'kebab-case'],
      },
    },
  ],
};
