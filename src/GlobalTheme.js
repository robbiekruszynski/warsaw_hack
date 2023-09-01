import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";


export const coloring = (mode) => ({
  ...(mode === "dark"
    ? {
        green: {
            900: "#052e33",
            800: "#0b5c66",
            700: "#108b99",
            600: "#16b9cc",
            500: "#1be7ff",
            400: "#49ecff",
            300: "#76f1ff",
            200: "#a4f5ff",
            100: "#d1faff",
        },
        //black
        primary: {
            900: "#060606",
            800: "#0c0c0d",
            700: "#121113",
            600: "#18171a",
            500: "#1e1d20",
            400: "#4b4a4d",
            300: "#787779",
            200: "#a5a5a6",
            100: "#d2d2d2",
        },
        //grey
        gray: {
            900: "#1e1d1e",
            800: "#3b3b3c",
            700: "#59585a",
            600: "#767678",
            500: "#949396",
            400: "#a9a9ab",
            300: "#bfbec0",
            200: "#d4d4d5",
            100: "#eae9ea",
        },
        //plum
        indigo: {
            900: "#0f0f14",
            800: "#1e1e28",
            700: "#2e2d3b",
            600: "#3d3c4f",
            500: "#4c4b63",
            400: "#706f82",
            300: "#9493a1",
            200: "#b7b7c1",
            100: "#dbdbe0",
        },
        //light grey 
        lightgray: {
            900: "#272727",
            800: "#4e4e4e",
            700: "#757575",
            600: "#9c9c9c",
            500: "#c3c3c3",
            400: "#cfcfcf",
            300: "#dbdbdb",
            200: "#e7e7e7",
            100: "#f3f3f3",
        },
        //medium light blue
        lightBlue: {
            900: "#111b2e",
            800: "#21365b",
            700: "#325089",
            600: "#426bb6",
            500: "#5386e4",
            400: "#759ee9",
            300: "#98b6ef",
            200: "#bacff4",
            100: "#dde7fa",
        },
      }
    : {
        green: {
            100: "#052e33",
            200: "#0b5c66",
            300: "#108b99",
            400: "#16b9cc",
            500: "#1be7ff",
            600: "#49ecff",
            700: "#76f1ff",
            800: "#a4f5ff",
            900: "#d1faff",
        },
        //black
        black: {
            100: "#060606",
            200: "#0c0c0d",
            300: "#121113",
            400: "#18171a",
            500: "#1e1d20",
            600: "#4b4a4d",
            700: "#787779",
            800: "#a5a5a6",
            900: "#d2d2d2",
        },
        
        gray: {
            100: "#1e1d1e",
            200: "#3b3b3c",
            300: "#59585a",
            400: "#767678",
            500: "#949396",
            600: "#a9a9ab",
            700: "#bfbec0",
            800: "#d4d4d5",
            900: "#eae9ea",
        },
        //plum
        indigo: {
            100: "#0f0f14",
            200: "#1e1e28",
            300: "#2e2d3b",
            400: "#3d3c4f",
            500: "#4c4b63",
            600: "#706f82",
            700: "#9493a1",
            800: "#b7b7c1",
            900: "#dbdbe0",
        },
        //light gray
        lightgray: {
            100: "#272727",
            200: "#4e4e4e",
            300: "#757575",
            400: "#9c9c9c",
            500: "#c3c3c3",
            600: "#cfcfcf",
            700: "#dbdbdb",
            800: "#e7e7e7",
            900: "#f3f3f3",
        },
        //medium light blue
        lightBlue: {
            100: "#111b2e",
            200: "#21365b",
            300: "#325089",
            400: "#426bb6",
            500: "#5386e4",
            600: "#759ee9",
            700: "#98b6ef",
            800: "#bacff4",
            900: "#dde7fa",
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = coloring(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            //dark mode
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.green[500],
            },
            neutral: {
              dark: colors.gray[700],
              main: colors.gray[500],
              light: colors.gray[200],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            // light mode
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.green[500],
            },
            neutral: {
              dark: colors.gray[700],
              main: colors.gray[500],
              light: colors.gray[200],
            },
            background: {
                default: colors.primary[100],
            },
          }),
    },
    typography: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 11,
        h1: {
          fontFamily: ["Roboto", "sans-serif"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ["Roboto", "sans-serif"].join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: ["Roboto", "sans-serif"].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: ["Roboto", "sans-serif"].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: ["Roboto", "sans-serif"].join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: ["Roboto", "sans-serif"].join(","),
          fontSize: 14,
        },
    },
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};