# Sharable eslint config with strict rules (limited formatting)

## Main features

- Rules are based on eslint version 8.19
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
- Maximum number of params in a function is 3
- Maximum number of statements in a function is 20

## Strictness

- Variable initialization is required
- Bitwise operators are forbidden
- eval is forbidden
- Short-hand type conversions are forbidden except for !! and +
- Magic numbers are forbidden (except for basic integers such as 1)
- Nested ternaries are allowed
- Reassigning parameters is forbidden
- Shadowing variables is forbidden
- Explicit usage of undefined is forbidden (prefer null)
- var keyword is forbidden so its associated rules are disabled
- Constant assignment is preferred
- A number of regex strictness rules are applied

## Style rules

- camelCase is enforced for variable names
- Some non-specific variable names (e.g. res) are discouraged
- With a few exceptions variable & property name length is bounded between 3 & 30
- comments are uncapitalized
- Each variable declaration requires a separate keyword
- Function expressions are forbidden (prefer function declarations)
- Callbacks as arrow functions are preferred
- Object destructuring is preferred
- Imports are sorted
- Object keys are sorted if there are more than 10 of them
- Blank lines are required between certain statement (e.g. before throw)
