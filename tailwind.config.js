/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            colors: {
                'accent': 'rgb(227, 45, 145)',
                'dark-background': 'rgb(22, 22, 22)',
                'light-background': '#f5f5f5',
            }
        },
    },
    plugins: [],
}