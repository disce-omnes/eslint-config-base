# Sharable eslint config with strict rules (limited formatting)

## Links

- [npm package](https://www.npmjs.com/package/@disceomnes/eslint-config-base)

## Semver

- Patch version is incremented when existing rule is changed but eslint version is the same
- Minor version is incremented when config is updated to make use of new eslint rules or options. eslint dependency is also updated
- See [eslint semver policy](https://github.com/eslint/eslint#semantic-versioning-policy)

## Main features

- Rules are based on eslint version 8.21
- Most rules are configured in the strictest way possible with some exceptions
- Some rules are configured as warnings where a possible use case exists or when they are often broken during development
- Strict mode errors are checked for
- Most formatting rules are disabled
  - Some rules still conflict with prettier, notably no-mixed-operators
  - This config is meant to be used with [dprint](https://dprint.dev/) as formatter

## Code smells

- Maximum cyclomatic complexity is 3
- Maximum nesting depth is 3
- Maximum number of lines in a file is 300 (excluding empty lines & comments)
- Maximum number of lines in a function is 50 (including empty lines & comments)
- Maximum number of params in a function is 4
- Maximum number of statements in a function is 20

## Strictness

- Variable initialization is required
- Bitwise operators are forbidden
- eval is forbidden
- Short-hand type conversions are forbidden except for !! and +
- Magic numbers are forbidden (except for basic integers such as 1)
- Nested ternaries are allowed
- Shadowing variables is forbidden
- Explicit usage of undefined is forbidden (prefer null)
- var keyword is forbidden so its associated rules are disabled
- Constant assignment is preferred
- A number of regex strictness rules are applied

## Style rules

- camelCase is enforced for variable names
- Some non-specific variable names (e.g. res) are discouraged
- Unused variables must be prefixed with _
- Variable & property name length should not exceed 30 characters
- comments are uncapitalized
- Each variable declaration requires a separate keyword
- Curly braces can be omitted after control statements if body is a single statement on the same line (`if (foo) return`)
- Function expressions are forbidden (prefer function declarations)
- Callbacks as arrow functions are preferred
- Object destructuring is preferred
- Imports are sorted
- Object keys are sorted if there are more than 10 of them (empty lines can be used to reset sorting)
- Blank lines are required between certain statement (e.g. before throw)
