module.exports = {
  possibleProblems: {
    "array-callback-return": [
      2,
      {
        allowImplicit: false,
        checkForEach: true,
      },
    ],
    "constructor-super": 2,
    "for-direction": 2,
    "getter-return": [
      2,
      {
        allowImplicit: false,
      },
    ],
    "no-async-promise-executor": 2,
    "no-await-in-loop": 1,
    "no-class-assign": 2,
    "no-compare-neg-zero": 2,
    "no-cond-assign": [2, "except-parens"],
    "no-const-assign": 2,
    "no-constant-binary-expression": 2,
    "no-constant-condition": [
      1,
      {
        checkLoops: true,
      },
    ],
    "no-constructor-return": 2,
    "no-control-regex": 2,
    "no-debugger": 1,
    "no-dupe-args": 2,
    "no-dupe-class-members": 2, // useless in TS
    "no-dupe-else-if": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-duplicate-imports": [
      2,
      {
        includeExports: true,
      },
    ],
    "no-empty-character-class": 2,
    "no-empty-pattern": 2,
    "no-ex-assign": 2,
    "no-fallthrough": [
      2,
      {
        // prettier-ignore
        commentPattern: "falls?\s?through",
      },
    ],
    "no-func-assign": 2,
    "no-import-assign": 2,
    "no-inner-declarations": [2, "functions"],
    "no-invalid-regexp": [
      2,
      {
        allowConstructorFlags: [],
      },
    ],
    "no-irregular-whitespace": [
      2,
      {
        skipStrings: false,
        skipComments: false,
        skipRegExps: false,
        skipTemplates: false,
      },
    ],
    "no-loss-of-precision": 2,
    "no-misleading-character-class": 2,
    "no-new-symbol": 2,
    "no-obj-calls": 2,
    "no-promise-executor-return": 2,
    "no-prototype-builtins": 2,
    "no-self-assign": [
      "error",
      {
        props: true,
      },
    ],
    "no-self-compare": 2,
    "no-setter-return": 2,
    "no-sparse-arrays": 2,
    "no-template-curly-in-string": 1,
    "no-this-before-super": 2,
    "no-undef": [
      2,
      {
        typeof: false,
      },
    ],
    "no-unexpected-multiline": 2,
    "no-unmodified-loop-condition": 2,
    "no-unreachable": 1,
    "no-unreachable-loop": [
      2,
      {
        ignore: [],
      },
    ],
    "no-unsafe-finally": 2,
    "no-unsafe-negation": [
      2,
      {
        enforceForOrderingRelations: true,
      },
    ],
    "no-unsafe-optional-chaining": [
      2,
      {
        disallowArithmeticOperators: true,
      },
    ],
    "no-unused-private-class-members": 1,
    "no-unused-vars": [
      1,
      {
        vars: "all",
        varsIgnorePattern: "",
        args: "all",
        argsIgnorePattern: "^_",
        ignoreRestSiblings: false,
        destructuredArrayIgnorePattern: "^_",
        caughtErrors: "all",
        caughtErrorsIgnorePattern: "",
      },
    ],
    "no-use-before-define": [
      2,
      {
        functions: false,
        classes: true,
        variables: true,
        allowNamedExports: false,
      },
    ],
    "no-useless-backreference": 2,
    "require-atomic-updates": [
      2,
      {
        allowProperties: false,
      },
    ],
    "use-isnan": [
      2,
      {
        enforceForSwitchCase: true,
        enforceForIndexOf: true,
      },
    ],
    "valid-typeof": [
      2,
      {
        requireStringLiterals: true,
      },
    ],
  },
}
