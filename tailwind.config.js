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
                'custom-white': 'rgb(226, 223, 225)',
            },
            screens: {
                xl: "2080px",
            },
            boxShadow: {
              'accent-solid': 'inset 0 -2px 0',
            },
            fontFamily: {
                'roboto': ['Roboto Mono', 'sans-serif'],
                'courier': ['Courier New', 'Courier', 'monospace'],
            },
            fontSize: {
                'base': '24px',
            }
        }
    },
    plugins: [],
    corePlugins:{
        backgroundOpacity: true
    }
}
