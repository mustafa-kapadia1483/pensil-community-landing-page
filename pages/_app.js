import { MantineProvider } from "@mantine/core";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import { useMantineTheme } from "@mantine/core";

import { ContextProvider } from "../state/Context";
import Layout from "../components/Layout";
import { NotificationsProvider } from "@mantine/notifications";

const theme = {
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

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <NotificationsProvider>
        <ContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ContextProvider>
      </NotificationsProvider>
    </MantineProvider>
  );
}

export default MyApp;
