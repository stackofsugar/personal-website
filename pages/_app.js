import "bootstrap-icons/font/bootstrap-icons.scss";
import "../styles/app.scss";
import { AnimatePresence } from "framer-motion";
import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <AnimatePresence mode="wait" initial={false} key="0">
                <Component {...pageProps} key="0" />;
            </AnimatePresence>
            <Script strategy="beforeInteractive" src="/js/app.js" />
            <Script strategy="beforeInteractive" src="/js/tileutils.js" />
        </>
    );
}
