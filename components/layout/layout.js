import Navbar from "../navbar";
import Head from "next/head";
import Footer from "../footer";
import Rig from "../rig";
import React, { Suspense } from "react";

const Layout = ({ children, router }) => {
  return (
    <div className="bg-orange-50 dark:bg-[rgb(36,36,36)] text-white min-h-screen">
      <Head>
        <title>Yong&apos;s Homepage</title>
        <meta name="description" content="Yong Liang - Homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className="max-w-3xl mx-auto px-8 pb-3">
        <Rig />

        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
