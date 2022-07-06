const { possibleProblems } = require("./possibleProblems")

module.exports = {
	env: {
		"shared-node-browser": true,
		es2022: true,
	},
	parserOptions: {
		ecmaFeatures: {
			impliedStrict: true,
		},
	},
	reportUnusedDisableDirectives: true,
	rules: {
		...possibleProblems,
	},
}
