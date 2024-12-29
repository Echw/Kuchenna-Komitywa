import { createTheme, rem } from "@mantine/core";

export const theme = createTheme({
  colors: {
    mainGreen: [
      "#f5f9e9",
      "#eaefdc",
      "#d4ddbc",
      "#bdcb99",
      "#a9bb7b",
      "#9cb167",
      "#96ac5c",
      "#81964c",
      "#31582B",
      "#132B13",
      "#D8E0A5",
      "#EBF39D",
    ],
  },

  shadows: {
    md: "1px 1px 3px rgba(0, 0, 0, .25)",
    xl: "5px 5px 3px rgba(0, 0, 0, .25)",
  },

  fontFamily: "Roboto, sans-serif",

  headings: {
    fontFamily: "Poppins, sans-serif",
    sizes: {
      h1: {
        fontSize: rem(120),
      },
      h2: {
        fontSize: rem(56),
        fontWeight: "900",
        lineHeight: "1.1",
      },
    },
  },
});
