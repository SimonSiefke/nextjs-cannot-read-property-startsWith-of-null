import type { AppProps } from "next/app";

const name = "dynamic1.css";

function MyApp({ Component, pageProps }: AppProps) {
  const styles = require(`!!raw-loader!../styles/${name}`).default;
  return <Component {...pageProps} />;
}
export default MyApp;
