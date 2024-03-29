import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layouts/Layout";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import AuthContextProvider from "../context/AuthContext";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import LogRocket from "logrocket";

if (
  process.env.NEXT_PUBLIC_LOG_ROCKET_PROJECT &&
  process.env.NEXT_PUBLIC_LOG_ROCKET_PROJECT.length > 0
) {
  LogRocket.init(process.env.NEXT_PUBLIC_LOG_ROCKET_PROJECT);
  console.log("Initialized Log Rocket.");
} else {
  console.log("Failed to initialize Log Rocket.");
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-6H5GXV3KTJ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6H5GXV3KTJ');
        `}
      </Script>
      <Layout>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <AuthContextProvider>
          <AnimatePresence initial={false}>
            <ParallaxProvider>
              <Component {...pageProps} />
              <Analytics />
            </ParallaxProvider>
          </AnimatePresence>
        </AuthContextProvider>
      </Layout>
    </>
  );
}

export default MyApp;
