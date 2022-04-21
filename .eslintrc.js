module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: ['error', 'never'],
    'react/jsx-filename-extension': 0,
    'no-peram-reassign': 0,
    'react/static-property-placement': 0,
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 0,
    'jsx-ally/anchor-is-valid': 0,
    'no-shadows': 0,
    'react/prop-types': 0,
    'default-param-last': 0,
    'react/destructuring-assignment': 0,
    'max-len': 0,
    'no-alert': 0,
    'import/no-extraneous-dependencies': 0,
    'linebreak-style': 0,
  },
}
