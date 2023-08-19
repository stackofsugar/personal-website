import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/app.scss";
import { AnimatePresence } from "framer-motion";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <AnimatePresence mode="wait" initial={false} key="0">
                <Component {...pageProps} key="0" />;
            </AnimatePresence>
        </>
    );
}
