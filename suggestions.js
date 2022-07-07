/* eslint-disable max-lines,no-magic-numbers */
module.exports = {
  suggestions: {
    'accessor-pairs': [
      2,
      {
        setWithoutGet: true,
        getWithoutSet: false,
        enforceForClassMembers: true,
      },
    ],
    'arrow-body-style': [
      2,
      'as-needed',
      {
        requireReturnForObjectLiteral: false,
      },
    ],
    'block-scoped-var': 0,
    'camelcase': [
      2,
      {
        properties: 'always',
        ignoreDestructuring: false,
        ignoreImports: false,
        ignoreGlobals: false,
        allow: [],
      },
    ],
    'capitalized-comments': [
      1,
      'never',
      {
        line: {
          ignorePattern: '',
          ignoreInlineComments: false,
          ignoreConsecutiveComments: false,
        },
        block: {
          ignorePattern: '',
          ignoreInlineComments: false,
          ignoreConsecutiveComments: false,
        },
      },
    ],
    'class-methods-use-this': [
      1,
      {
        exceptMethods: [],
        enforceForClassFields: true,
      },
    ],
    'complexity': [
      1,
      {
        max: 3,
      },
    ],
    'consistent-return': [
      2,
      {
        treatUndefinedAsUnspecified: true,
      },
    ],
    'consistent-this': [2, 'that'],
    'curly': [2, 'multi-line', 'consistent'],
    'default-case': [
      2,
      {
        commentPattern: '^no default$',
      },
    ],
    'default-case-last': 2,
    'default-param-last': 2,
    'dot-notation': [
      2,
      {
        allowKeywords: true,
        allowPattern: '',
      },
    ],
    'eqeqeq': [2, 'smart'],
    'func-name-matching': [
      2,
      'always',
      {
        considerPropertyDescriptor: true,
        includeCommonJSModuleExports: false,
      },
    ],
    'func-names': [
      2,
      'as-needed',
      {
        generators: 'as-needed',
      },
    ],
    'func-style': [
      2,
      'declaration',
      {
        allowArrowFunctions: false,
      },
    ],
    'grouped-accessor-pairs': [1, 'getBeforeSet'],
    'guard-for-in': 2,
    'id-denylist': [
      1,
      'res',
      'element',
      'prop',
      'property',
      'key',
      'value',
      'param',
      'parameter',
      'num',
      'number',
      'str',
      'string',
      'bool',
      'boolean',
      'arr',
      'array',
      'obj',
      'object',
      'func',
      'foo',
      'bar',
      'baz',
      'content',
    ],
    'id-length': [
      1,
      {
        min: 3,
        max: 30,
        properties: 'always',
        exceptions: ['k', 'v', 'el', 'ev', 'x', 'y'],
        exceptionPatterns: [''],
      },
    ],
    'id-match': 0,
    'init-declarations': [2, 'always'],
    'max-classes-per-file': [
      2,
      {
        max: 1,
        ignoreExpressions: false,
      },
    ],
    'max-depth': [
      1,
      {
        max: 3,
      },
    ],
    'max-lines': [
      1,
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'max-lines-per-function': [
      1,
      {
        max: 50,
        skipBlankLines: false,
        skipComments: false,
        IIFEs: true,
      },
    ],
    'max-nested-callbacks': [
      2,
      {
        max: 3,
      },
    ],
    'max-params': [
      1,
      {
        max: 3,
      },
    ],
    'max-statements': [
      1,
      // can't be used in a object as a max property with another option
      // possibly a bug
      20,
      {
        ignoreTopLevelFunctions: true,
      },
    ],
    'multiline-comment-style': [0, 'starred-block'],
    'new-cap': [
      2,
      {
        newIsCap: true,
        capIsNew: true,
        newIsCapExceptions: [],
        newIsCapExceptionPattern: '',
        capIsNewExceptions: [],
        capIsNewExceptionPattern: '',
        properties: true,
      },
    ],
    'no-alert': 1,
    'no-array-constructor': 2,
    'no-bitwise': [
      2,
      {
        allow: [],
        int32Hint: false,
      },
    ],
    'no-caller': 2,
    'no-case-declarations': 2,
    'no-confusing-arrow': [
      2,
      {
        allowParens: true,
        onlyOneSimpleParam: false,
      },
    ],
    'no-console': [
      0,
      {
        allow: [],
      },
    ],
    'no-continue': 0,
    'no-delete-var': 0, // useless in strict mode
    'no-div-regex': 2,
    'no-else-return': [
      2,
      {
        allowElseIf: false,
      },
    ],
    'no-empty': [
      1,
      {
        allowEmptyCatch: false,
      },
    ],
    'no-empty-function': [
      1,
      {
        // already covered by no-useless-constructor
        allow: ['constructors'],
      },
    ],
    'no-eq-null': 0,
    'no-eval': [
      2,
      {
        allowIndirect: true,
      },
    ],
    'no-extend-native': [
      2,
      {
        exceptions: [],
      },
    ],
    'no-extra-bind': 2,
    'no-extra-boolean-cast': [
      2,
      {
        enforceForLogicalOperands: true,
      },
    ],
    'no-extra-label': 2,
    'no-extra-semi': 2,
    'no-floating-decimal': 2,
    'no-global-assign': [
      2,
      {
        exceptions: [],
      },
    ],
    'no-implicit-coercion': [
      2,
      {
        /* eslint-disable id-denylist */
        boolean: true,
        number: true,
        string: true,
        /* eslint-enable id-denylist */
        disallowTemplateShorthand: true,
        allow: ['!!', '+'],
      },
    ],
    'no-implicit-globals': [
      2,
      {
        lexicalBindings: true,
      },
    ],
    'no-implied-eval': 2,
    'no-inline-comments': [
      0,
      {
        ignorePattern: '',
      },
    ],
    'no-invalid-this': [
      2,
      {
        capIsConstructor: true,
      },
    ],
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': [
      0,
      {
        allowLoop: false,
        allowSwitch: false,
      },
    ],
    'no-lone-blocks': 2,
    'no-lonely-if': 2,
    'no-loop-func': 2,
    'no-magic-numbers': [
      2,
      {
        ignore: [-1, 0, 1, 2],
        ignoreArrayIndexes: false,
        ignoreDefaultValues: true,
        enforceConst: true,
        detectObjects: false,
      },
    ],
    'no-mixed-operators': [
      2,
      {
        groups: [
          ['+', '-', '*', '/', '%', '**', '?:'],
          ['&', '|', '^', '~', '<<', '>>', '>>>', '?:'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||', '??'],
          ['in', 'instanceof', '?:'],
        ],
        allowSamePrecedence: true,
      },
    ],
    'no-multi-assign': [
      2,
      {
        ignoreNonDeclaration: false,
      },
    ],
    'no-multi-str': 0,
    'no-negated-condition': 2,
    'no-nested-ternary': 0,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-object': 2,
    'no-new-wrappers': 2,
    'no-nonoctal-decimal-escape': 2,
    'no-octal': 0, // useless in strict mode
    'no-octal-escape': 0, // useless in strict mode
    'no-param-reassign': [
      2,
      {
        props: true,
        ignorePropertyModificationsFor: ['acc'],
        ignorePropertyModificationsForRegex: [],
      },
    ],
    'no-plusplus': [
      0,
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-proto': 2,
    'no-redeclare': [
      2,
      {
        builtinGlobals: true,
      },
    ],
    'no-regex-spaces': 2,
    'no-restricted-exports': [
      2,
      {
        restrictedNamedExports: [],
      },
    ],
    'no-restricted-globals': [0],
    'no-restricted-imports': [
      0,
      {
        paths: [],
        patterns: [],
      },
    ],
    'no-restricted-properties': [0],
    'no-restricted-syntax': [0],
    'no-return-assign': [2, 'except-parens'],
    'no-return-await': 0,
    'no-script-url': 0,
    'no-sequences': [
      2,
      {
        allowInParentheses: true,
      },
    ],
    'no-shadow': [
      2,
      {
        builtinGlobals: true,
        hoist: 'functions',
        ignoreOnInitialization: false,
        allow: [],
      },
    ],
    'no-shadow-restricted-names': 0,
    'no-ternary': 0,
    'no-throw-literal': 2,
    'no-undef-init': 2,
    'no-undefined': 0,
    'no-underscore-dangle': [
      2,
      {
        allow: [],
        allowAfterThis: false,
        allowAfterSuper: false,
        allowAfterThisConstructor: false,
        enforceInMethodNames: false,
        enforceInClassFields: false,
        allowFunctionParams: true,
      },
    ],
    'no-unneeded-ternary': [
      2,
      {
        defaultAssignment: false,
      },
    ],
    'no-unused-expressions': [
      2,
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
        enforceForJSX: true,
      },
    ],
    'no-unused-labels': 2,
    'no-useless-call': 2,
    'no-useless-catch': 2,
    'no-useless-computed-key': [
      2,
      {
        enforceForClassMembers: true,
      },
    ],
    'no-useless-concat': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 2,
    'no-useless-rename': [
      2,
      {
        ignoreImport: false,
        ignoreExport: false,
        ignoreDestructuring: false,
      },
    ],
    'no-useless-return': 2,
    'no-var': 2,
    'no-void': [
      2,
      {
        allowAsStatement: true,
      },
    ],
    'no-warning-comments': [
      0,
      {
        terms: ['todo', 'fixme', 'xxx'],
        location: 'anywhere',
      },
    ],
    'no-with': 0, // useless in strict mode
    'object-shorthand': [
      2,
      'always',
      {
        avoidQuotes: true,
        ignoreConstructors: false,
        avoidExplicitReturnArrows: true,
      },
    ],
    'one-var': [
      2,
      {
        var: 'never',
        let: 'never',
        const: 'never',
        separateRequires: true, // possibly doesn't work
      },
    ],
    'one-var-declaration-per-line': [
      0, // useless with one-var set no never
      'initializations',
    ],
    'operator-assignment': [2, 'always'],
    'prefer-arrow-callback': [
      2,
      {
        allowNamedFunctions: false,
        allowUnboundThis: false,
      },
    ],
    'prefer-const': [
      2,
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: false,
      },
    ],
    'prefer-destructuring': [
      2,
      {
        /* eslint-disable id-denylist */
        VariableDeclarator: {
          array: true,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: true,
        },
        /* eslint-enable id-denylist */
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'prefer-exponentiation-operator': 2,
    'prefer-named-capture-group': 2,
    'prefer-numeric-literals': 2,
    'prefer-object-has-own': 2,
    'prefer-object-spread': 2,
    'prefer-promise-reject-errors': [
      2,
      {
        allowEmptyReject: false,
      },
    ],
    'prefer-regex-literals': [
      2,
      {
        disallowRedundantWrapping: true,
      },
    ],
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prefer-template': 0,
    'quote-props': [
      2,
      'consistent-as-needed',
      // keyword object prop can't be used
      // possibly a bug
    ],
    'radix': [2, 'as-needed'],
    'require-await': 0,
    'require-unicode-regexp': 2,
    'require-yield': 2,
    'sort-imports': [
      2,
      {
        ignoreCase: true,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: true,
      },
    ],
    'sort-keys': [
      2,
      'asc',
      {
        caseSensitive: false,
        minKeys: 11,
        natural: true,
      },
    ],
    'sort-vars': [
      2,
      {
        ignoreCase: true,
      },
    ],
    'spaced-comment': [
      2,
      'always',
      {
        line: {
          markers: ['/'],
          exceptions: [],
        },
        block: {
          markers: [],
          exceptions: [],
          balanced: true,
        },
      },
    ],
    'strict': [
      1,
      'never', // useless because of impliedStrict in parserOptions
    ],
    'symbol-description': 2,
    'vars-on-top': 0,
    'yoda': [
      2,
      'never',
      {
        exceptRange: true,
        onlyEquality: false,
      },
    ],
  },
}
