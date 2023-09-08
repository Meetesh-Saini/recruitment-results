/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            height: {
                "terminal": "min(500px, 75vh)",
            },
        },
    },
    plugins: [],
}