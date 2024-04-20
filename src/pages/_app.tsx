
import "@/styles/globals.css";
import { MediaQueryProvider } from "@/utils/MediaQueryProvider";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MediaQueryProvider>
      <Component {...pageProps} />
    </MediaQueryProvider>
  );
}
