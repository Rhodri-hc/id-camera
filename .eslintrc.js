module.exports = {
  extends: ['taro/react', 'prettier', 'plugin:prettier/recommended'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-mutable-exports': 'off',
    'import/no-commonjs': 'warn',
    '@typescript-eslint/no-shadow': 'warn'
  }
}
