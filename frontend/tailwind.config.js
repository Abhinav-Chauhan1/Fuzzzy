/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            {
                fussy: {
                    primary: "#20232C",
                    secondary: "#16171C",
                    accent: "#1A1D24",
                    neutral: "rgb(59 130 246)",
                    "base-100": "#E4EE97",
                    "info": "#ffffff",
                    "body":{
                        "background-image":  "url('../src/assets/images/bg1.jpg')",
                    },
                },
                fussylight: {
                    primary: "#6482AD",
                    secondary: "#7FA1C3",
                    accent: "#E2DAD6",
                    neutral: "rgb(59 130 246)",
                    "base-100": "#ffffff",
                    "info": "#000000",
                    "body":{
                        "background-image":  "url('../src/assets/images/bg_white.jpg')",
                    },
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};