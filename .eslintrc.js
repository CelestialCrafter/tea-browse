module.exports = {
	env: {
		es6: true,
		node: true,
		commonjs: true
	},
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	plugins: ['react', 'import', 'prettier'],
	rules: {
		'no-console': 'warn',
		'no-eval': 'error',
		'import/first': 'error',
		'prettier/prettier': 'error'
	},
	extends: ['react-app', 'eslint:recommended', 'plugin:prettier/recommended']
};
