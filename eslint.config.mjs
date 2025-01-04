export default [
  {
    rules: {
      'max-lines': ['error', {'max': 500, 'skipBlankLines': false, 'skipComments': false}],
      'no-class-assign': ['error'],
      'quotes': ['error', 'single'],
      'array-bracket-spacing': ['error', 'never'],
      'block-spacing': ['error', 'never'],
      'key-spacing': ['error', {afterColon: true}],
      'computed-property-spacing': ['error', 'never'],
      'object-curly-spacing': ['error', 'never'],
      'indent': ['error', 2],
      'space-before-function-paren': ['error', {
        'asyncArrow': 'never',
        'named': 'never',
        'anonymous': 'always'
      }],
      'arrow-parens': ['error', 'always'],
      'arrow-spacing': ['error', {'before': true, 'after': true}],
      'space-infix-ops': ['error'],
      'keyword-spacing': ['error', {
        'before': true,
        'after': true
      }],
      'space-in-parens': ['error', 'never'],
      'space-before-blocks': ['error', 'always'],
      'no-trailing-spaces': ['error'],
      'semi': ['error', 'always']
    }
  }
];