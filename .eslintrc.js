module.exports = {
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array
  ],
  rules: {
    'no-console': 0,
    'no-use-before-define': 0,
    'no-restricted-syntax': 0,
    'no-param-reassign': 0,
    'no-confusing-arrow': 0,
    'no-unused-expressions': 0,
    'class-methods-use-this': 0,
    'object-curly-newline': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/jsx-boolean-value': 0,
    'react/react-in-jsx-scope': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': 0,
  },
};
