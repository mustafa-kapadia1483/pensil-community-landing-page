import { MantineProvider } from "@mantine/core";
import "@fontsource/montserrat";

import { ContextProvider } from "../state/Context";
import Layout from "../components/Layout";

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
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <ContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextProvider>
    </MantineProvider>
  );
}

export default MyApp;
