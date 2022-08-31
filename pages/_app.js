import { MantineProvider } from "@mantine/core";
import "@fontsource/montserrat";

import { ContextProvider } from "../state/Context";
import Layout from "../components/Layout";
import { NotificationsProvider } from "@mantine/notifications";

const theme = {
  fontFamily: "Montserrat, sans-serif",
  headings: { fontFamily: "Montserrat, sans-serif" },
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
