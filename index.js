const { possibleProblems } = require('./possibleProblems')
const { suggestions } = require('./suggestions')
const { layoutAndFormatting } = require('./layoutAndFormatting')

module.exports = {
  env: {
    'shared-node-browser': true,
    'es2022': true,
  },
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  reportUnusedDisableDirectives: true,
  rules: {
    ...possibleProblems,
    ...suggestions,
    ...layoutAndFormatting,
  },
}
