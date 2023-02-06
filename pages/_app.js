import "@/styles/globals.css";
import Layout from "../components/layout/layout";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <AnimatePresence
        initial={true}
        onExitComplete={() => {
          if (typeof window !== "undefined") {
            window.scrollTo({ top: 0 });
          }
        }}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </Layout>
  );
}
