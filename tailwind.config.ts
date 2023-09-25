import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    backgroundPosition: {
      "bottom-right-1": "5rem 17rem",
      "bottom-right-2": "115% -100%",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2.5rem",
      },
    },
    fontFamily: {
      manrope: ["manrope", "sans"],
      Inter: ["Inter", "sans"],
      "Inter-bold": ["Inter-bold", "sans"],
    },
    extend: {
      boxShadow: {
        primary: "0px 12px 23px 0px rgba(55, 125, 255, 0.06)",
        1: "0px 64px 64px -48px rgba(0, 0, 0, 0.10)",
        2: "0px 64px 64px 0px rgba(15, 15, 15, 0.06)",
      },
      colors: {
        background: {
          1: "#F4F5F6",
          2: "F3F3F3",
        },
        typograhy: {
          1: "#323B4B",
          2: "#4E5D78",
          3: "#8A94A6",
          4: "#B0B7C3",
        },
        dark: {
          1: "#202020",
          2: "#363853",
          5: "#F9F9F9",
        },
        gray: {
          1: "#CFCFCF",
          2: "#4F4F4F",
          3: "#EFEFEF",
          4: "rgba(32, 32, 32, 0.21)",
          5: "#898989",
        },
        red: {
          1: "#EF466F",
        },
        line: {
          1: "#DCDCDC",
        },
        primary: {
          1: "#534CDA",
          2: "#38CB89",
          3: "#0060FE",
          4: "#04C044",
          5: "#45B26B",
          6: "#074FC6",
        },
        "neutrals-6": "#E6E8EC",
        "neutrals-8": "#FCFCFD",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
