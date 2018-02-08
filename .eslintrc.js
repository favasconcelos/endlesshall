module.exports = {
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 8,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
        },
    },
    rules: {
        'max-len': 0,
        'no-invalid-this': 0,
        'valid-jsdoc': 0,
        'object-curly-spacing': 0,
        'new-cap': 0,
        'linebreak-style': 0,
        'arrow-parens': [2, 'as-needed'],
        'space-before-function-paren': 0,
        'require-jsdoc': 0,
    },
    env: {
        node: true,
        es6: true,
        browser: true,
    },
};
