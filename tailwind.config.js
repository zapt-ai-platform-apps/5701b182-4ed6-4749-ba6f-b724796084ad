export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#6D28D9',
                    DEFAULT: '#5B21B6',
                    dark: '#4C1D95',
                },
                secondary: {
                    light: '#FB923C',
                    DEFAULT: '#F97316',
                    dark: '#EA580C',
                },
                neutral: {
                    100: '#F3F4F6',
                    200: '#E5E7EB',
                    300: '#D1D5DB',
                    400: '#9CA3AF',
                    500: '#6B7280',
                    600: '#4B5563',
                    700: '#374151',
                    800: '#1F2937',
                    900: '#111827',
                },
            },
            fontFamily: {
                sans: ['Roboto', 'Arial', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
            },
            fontSize: {
                'xs': '.75rem',
                'sm': '.875rem',
                'base': '1rem',
                'lg': '1.125rem',
                'xl': '1.25rem',
                '2xl': '1.5rem',
                '3xl': '1.875rem',
                '4xl': '2.25rem',
                '5xl': '3rem',
            },
        },
    },
    plugins: [],
};