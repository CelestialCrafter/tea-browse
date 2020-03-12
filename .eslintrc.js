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
	plugins: ['react', 'prettier'],
	rules: {
		'no-eval': 'error',
		'prettier/prettier': 'error',
		strict: ['error', 'global']
	},
	extends: ['react-app', 'eslint:recommended', 'plugin:prettier/recommended']
};
