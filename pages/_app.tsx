import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layouts/Layout";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import AuthContextProvider from "../context/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <AuthContextProvider>
        <AnimatePresence initial={false}>
          <ParallaxProvider>
            <Component {...pageProps} />
          </ParallaxProvider>
        </AnimatePresence>
      </AuthContextProvider>
    </Layout>
  );
}

export default MyApp;
