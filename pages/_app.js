import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";

import pageInformation from "../pageInformation.json";
import { ContextProvider } from "../state/Context";
import Layout from "../components/Layout/Layout";
import { NotificationsProvider } from "@mantine/notifications";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [colorScheme, setColorScheme] = useState("dark");
  const [primaryColor, setPrimaryColor] = useState(
    pageInformation.primaryColor
  );
  const toggleColorScheme = value =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  const theme = {
    primaryColor,
    colorScheme,
    fontFamily: "Montserrat, sans-serif",
    headings: { fontFamily: "Montserrat, sans-serif" },
    breakpoints: {
      xs: 500,
      sm: 800,
      md: 1000,
      lg: 1200,
      xl: 1400,
      xxl: 4000,
    },
    components: {
      Button: {
        styles: (theme, params) => ({
          root: {
            // fontSize: 30
          },
        }),
      },
      Text: {
        styles: {
          root: {
            wordBreak: "break-word",
          },
        },
      },
      Title: {
        styles: {
          root: {
            wordBreak: "break-word",
          },
        },
      },
      ThemeIcon: {
        styles: {
          root: {
            color: "#000",
          },
        },
      },
    },
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <NotificationsProvider>
          <ContextProvider setPrimaryColor={setPrimaryColor}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ContextProvider>
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default MyApp;
