import Navbar from "../navbar";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div className='bg-orange-50 dark:bg-[rgb(36,36,36)] text-white h-screen'>
      <Head>
        <title>Yong&apos;s Homepage</title>
        <meta name="description" content="Yong Liang - Homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <Navbar />
      <main className="max-w-3xl mx-auto">{children}</main>
    </div>
  );
};

export default Layout;
