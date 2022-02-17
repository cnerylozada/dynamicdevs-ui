module.exports = {
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        danger: "var(--danger)",
        green: "var(--green)",
        turquoise: "var(--turquoise)",
        blue: "var(--blue)",
        purple: "var(--purple)",
        lemon: "var(--lemon)",

        text: "var(--text)",

        bg1: "var(--bg1)",
        bg2: "var(--bg2)",
        bg3: "var(--bg3)",

        gray1: "var(--gray1)",
        gray2: "var(--gray2)",
        gray3: "var(--gray3)",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      fontSize: {
        "headline-desktop": "60px",
        "headline-mobile": "36px",

        "sectionHeadline-desktop": "30px",
        "sectionHeadline-mobile": "24px",

        "subHeadline-desktop": "20px",
        "subHeadline-mobile": "18px",

        "paragraph-desktop": "16px",
        "paragraph-mobile": "14px",

        "small-desktop": "12px",
        "small-mobile": "12px",
      },
      letterSpacing: {
        "headline-mob": "5.94px",
        "headline-des": "9.9px",

        "sectionHeadline-mob": "6px",
        "sectionHeadline-des": "7.5px",

        "subHeadline-mob": "3.6px",
        "subHeadline-des": "4px",
      },
    },
  },
  plugins: [],
};
