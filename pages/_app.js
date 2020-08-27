import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme/theme";
import { StaticKitProvider } from "@statickit/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <StaticKitProvider site="8cc40183445b">
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </StaticKitProvider>
    </>
  );
}

export default MyApp;
