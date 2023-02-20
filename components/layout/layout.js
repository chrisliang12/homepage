import Navbar from "../navbar";
import Head from "next/head";
import Footer from "../footer";
import Rig from "../rig";
import React, { Suspense, useState } from "react";

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("myDark");
  console.log(theme);
  return (
    <div data-theme={theme} className="bg-base-100 min-h-screen">
      <Head>
        <title>Yong&apos;s Homepage</title>
        <meta name="description" content="Yong Liang - Homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar theme={theme} setTheme={setTheme} />
      <div className="max-w-3xl mx-auto px-8 pb-3">
        <Rig />

        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
