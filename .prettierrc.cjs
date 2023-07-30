module.exports = {
	bracketSpacing: true,
	endOfLine: 'lf',
	bracketSameLine: false,
	jsxSingleQuote: true,
	semi: false,
	singleQuote: true,
	tabWidth: 4,
	trailingComma: 'es5',
	useTabs: true,
	plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-astro'],
	overrides: [
		{
			files: '**/*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
}
