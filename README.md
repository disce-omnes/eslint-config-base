# Sharable eslint config with strict rules (no semi)

## Main features

- Rules are based on eslint version 8.19
- Most rules are configured in the strictest way possible with a couple of exceptions
- Some rules are configured as warnings where a possible use case exists or when they are often broken during development
- Strict mode errors are checked for
- Formatting rules conflicting with prettier are disabled
- camelCase is enforced for variable names
- comments are uncapitalized
- Maximum cyclomatic complexity is 3
- Some non-specific variable names (e.g. data) are discouraged
- With a few exceptions variable & property name length is bounded between 3 & 30
- Variable initialization is required
- Maximum nesting depth is 3
- Maximum number of lines in a file is 300 (excluding empty lines & comments)
- Maximum number of lines in a function is 50 (excluding empty lines & comments)
- Maximum number of params in a function is 3
- Maximum number of statements in a function is 20
- Block-style comments are required for multiline comments
- Bitwise operators are forbidden
- eval is forbidden
- Short-hand type conversions are forbidden except for !! and +
- Magic numbers are forbidden
- Nested ternaries are allowed
- Reassigning parameters is forbidden
- Increment & decrement operators are forbidden except in for loops
- Shadowing variables is forbidden
- Explicit usage of undefined is forbidden (prefer null)
- var keyword is forbidden so its associated rules are disabled
- Each variable declaration requires separate keyword
- Callbacks as arrow functions are preferred
- Constant assignment is preferred
- Constant assignment is preferred
- Object destructuring is preferred
- A number of regex strictness rules are applied
- Imports are sorted
- Object keys are sorted if there are more than 10 of them
