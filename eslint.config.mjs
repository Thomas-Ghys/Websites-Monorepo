import nx from '@nx/eslint-plugin';
import html from '@html-eslint/eslint-plugin';

export default [
	...nx.configs['flat/base'],
	...nx.configs['flat/typescript'],
	...nx.configs['flat/javascript'],
	{
		ignores: ['**/dist']
	},
	{
		files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.mjs', '**/*.jsx'],
		rules: {
			'@nx/enforce-module-boundaries': [
				'error',
				{
					enforceBuildableLibDependency: true,
					allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
					depConstraints: [
						{
							sourceTag: 'type:app',
							onlyDependOnLibsWithTags: [
								'type:app',
								'type:smart-component',
								'type:data-access',
								'type:ui-component',
								'type:model'
							]
						},
						{
							sourceTag: 'type:smart-component',
							onlyDependOnLibsWithTags: [
								'type:smart-component',
								'type:data-access',
								'type:ui-component',
								'type:model'
							]
						},
						{
							sourceTag: 'type:data-access',
							onlyDependOnLibsWithTags: [
								'type:data-access',
								'type:ui-component',
								'type:model'
							]
						},
						{
							sourceTag: 'type:ui-component',
							onlyDependOnLibsWithTags: [
								'type:ui-component',
								'type:model'
							]
						},
						{
							sourceTag: 'type:model',
							onlyDependOnLibsWithTags: [
								'type:model'
							]
						},
						{
							sourceTag: 'domain:thomasghys.eu',
							onlyDependOnLibsWithTags: [
								'domain:thomasghys.eu',
								'domain:common'
							]
						},
						{
							sourceTag: 'domain:wild-safari-consultants.fun',
							onlyDependOnLibsWithTags: [
								'domain:wild-safari-consultants.fun',
								'domain:common'
							]
						},
						{
							sourceTag: 'domain:common',
							onlyDependOnLibsWithTags: [
								'domain:common'
							]
						}
					]
				}
			],
			'default-case': 'error',
			'no-array-constructor': 'error',
			'no-empty-function': [
				'error',
				{
					allow: ['constructors']
				}
			],
			'no-eval': 'error',
			'no-implied-eval': 'error',
			'no-lone-blocks': 'error',
			'no-lonely-if': 'error',
			'no-script-url': 'error',
			'no-undef-init': 'error',
			'no-useless-escape': 'error',
			'no-useless-rename': 'error',
			'prefer-arrow-callback': 'error',
			'prefer-const': 'error',
			'prefer-object-has-own': 'error',
			'quote-props': ['error', 'as-needed'],
			'spaced-comment': 'error',
			'array-bracket-spacing': 'error',
			'arrow-parens': 'error',
			'arrow-spacing': 'error',
			'block-spacing': 'error',
			'brace-style': 'error',
			'comma-dangle': 'error',
			'comma-spacing': 'error',
			'func-call-spacing': 'error',
			'implicit-arrow-linebreak': 'error',
			indent: [
				'error',
				'tab',
				{
					SwitchCase: 1
				}
			],
			'key-spacing': 'error',
			'keyword-spacing': 'error',
			'new-parens': 'error',
			'no-extra-parens': ['error', 'functions'],
			'no-multi-spaces': 'error',
			'no-trailing-spaces': 'error',
			'no-whitespace-before-property': 'error',
			'object-curly-spacing': 'error',
			'operator-linebreak': 'error',
			'padded-blocks': ['error', 'never'],
			'padding-line-between-statements': 'error',
			quotes: ['error', 'single'],
			'rest-spread-spacing': 'error',
			semi: 'error',
			'semi-spacing': 'error',
			'semi-style': 'error',
			'space-before-blocks': 'error',
			'space-in-parens': 'error',
			'space-infix-ops': 'error',
			'space-unary-ops': 'error',
			'switch-colon-spacing': 'error',
			'template-curly-spacing': 'error',
			'wrap-regex': 'error',
			'@typescript-eslint/no-inferrable-types': 'error',
			'@typescript-eslint/no-unused-vars': 'error',
			'new-cap': 'error'
		}
	},
	{
		files: [
			'**/*.ts',
			'**/*.tsx',
			'**/*.cts',
			'**/*.mts',
			'**/*.js',
			'**/*.jsx',
			'**/*.cjs',
			'**/*.mjs'
		],
		// Override or add rules here
		rules: {}
	},
	{
		...html.configs['flat/recommended'],
		files: ['**/*.html'],
		rules: {
			'@html-eslint/no-duplicate-attrs': 'error',
			'@html-eslint/no-duplicate-id': 'error',
			'@html-eslint/no-inline-styles': 'error',
			'@html-eslint/no-obsolete-tags': 'error',
			'@html-eslint/no-script-style-type': 'error',
			'@html-eslint/no-target-blank': 'error',
			'@html-eslint/require-button-type': 'error',
			'@html-eslint/require-closing-tags': 'error',
			'@html-eslint/require-doctype': 'error',
			'@html-eslint/require-li-container': 'error',
			'@html-eslint/require-meta-charset': 'error',
			'@html-eslint/no-multiple-h1': 'error',
			'@html-eslint/require-lang': 'error',
			'@html-eslint/require-meta-description': 'error',
			'@html-eslint/require-title': 'error',
			'@html-eslint/no-abstract-roles': 'error',
			'@html-eslint/no-accesskey-attrs': 'error',
			'@html-eslint/no-aria-hidden-body': 'error',
			'@html-eslint/no-non-scalable-viewport': 'error',
			'@html-eslint/no-positive-tabindex': 'error',
			'@html-eslint/no-skip-heading-levels': 'error',
			'@html-eslint/require-frame-title': 'error',
			'@html-eslint/require-img-alt': 'error',
			'@html-eslint/require-meta-viewport': 'error',
			'@html-eslint/attrs-newline': 'error',
			'@html-eslint/element-newline': 'error',
			'@html-eslint/id-naming-convention': ['error', 'kebab-case'],
			'@html-eslint/no-extra-spacing-attrs': 'error',
			'@html-eslint/no-multiple-empty-lines': 'error',
			'@html-eslint/no-trailing-spaces': 'error',
			'@html-eslint/quotes': ['error', 'double'],
			'@html-eslint/sort-attrs': 'error'
		}
	}
];
