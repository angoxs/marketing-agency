import Document, { Html } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <Html lang="en">
            {initialProps.styles}
            <script
              type="text/javascript"
              id="hs-script-loader"
              async
              defer
              src="//js.hs-scripts.com/8357088.js"
            ></script>

            <link rel="shortcut icon" href="/logo/logo.png" />

            {sheet.getStyleElement()}
          </Html>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
