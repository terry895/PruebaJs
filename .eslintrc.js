module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,  
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
  },
  globals: {
    "$": true,
    "swal": true
  }

};