const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                text: 'rgb(var(--text) / <alpha-value>)',
                background: 'rgb(var(--background) / <alpha-value>)',
                primary: {
                    DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
                },
                secondary: {
                    DEFAULT: 'rgb(var(--secondary) / <alpha-value>)',
                },
                accent: {
                    DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
                },
                brand: {
                    DEFAULT: '#2CB67D',
                    50: '#AEEBD2',
                    100: '#9EE7C9',
                    200: '#7DE0B7',
                    300: '#5CD8A5',
                    400: '#3BD092',
                    500: '#2CB67D',
                    600: '#21895E',
                    700: '#165C3F',
                    800: '#0B2E20',
                    900: '#000101',
                },
                charcoal: {
                    50: '#ECEEEC',
                    100: '#D7DAD7',
                    200: '#B0B5B0',
                    300: '#889188',
                    400: '#626A62',
                    500: '#3E433E',
                    600: '#313531',
                    700: '#252825',
                    800: '#191A19',
                    900: '#0C0D0C',
                },
                tomato: {
                    50: '#FFEEEB',
                    100: '#FFE1DC',
                    200: '#FEBFB3',
                    300: '#FEA090',
                    400: '#FD7E68',
                    500: '#FD6043',
                    600: '#FC2803',
                    700: '#C01E02',
                    800: '#7E1401',
                    900: '#420A01',
                },
                negroni: {
                    50: '#FDFAF7',
                    100: '#FBF5EF',
                    200: '#F6E8DA',
                    300: '#F2DECA',
                    400: '#EDD1B5',
                    500: '#E9C7A5',
                    600: '#D99E63',
                    700: '#C1782F',
                    800: '#7F4F1F',
                    900: '#422910',
                },
            },
            fontFamily: {
                sans: [
                    'League Spartan Variable',
                    ...defaultTheme.fontFamily.sans,
                ],
                serif: ['Libre Baskerville', ...defaultTheme.fontFamily.serif],
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
