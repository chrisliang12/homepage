import Navbar from "../navbar";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Yong&apos;s Homepage</title>
        <meta name="description" content="Yong Liang - Homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
