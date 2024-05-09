const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'selector',
    theme: {
        extend: {
            borderColor: ['autofill'],
            shadowFill: ['autofill'],
            textFill: ['autofill'],
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    600: '#303f9f',
                    500: '#4c52aa',
                    400: '#6565b5',
                    300: '#7c7abf',
                    200: '#928fca',
                    100: '#a8a4d5',
                },
                dark: {
                    DEFAULT: '#333333',
                    900: '#121212',
                    800: '#282828',
                    700: '#3f3f3f',
                    600: '#575757',
                    500: '#717171',
                    400: '#8b8b8b',
                },
                mixed: {
                    900: '#17171f',
                    800: '#2c2c34',
                    700: '#43434a',
                    600: '#5b5b61',
                    500: '#747479',
                    400: '#8e8e93',
                },
                light: {
                    DEFAULT: '#dfdfdf',
                    100: '#ffffff',
                    200: '#e5e7eb',
                    300: '#d1d5db',
                    400: '#b5b9bf',
                    500: '#9b9ea4',
                    600: '#81848a',
                    700: '#686b70',
                    800: '#4f5358',
                    900: '#393c41',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
