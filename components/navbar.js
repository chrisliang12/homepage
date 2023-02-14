import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import {SiCoffeescript} from "react-icons/si";
import ThemeToggle from "./theme_toggle";

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  return (
    <Link
    href={href}
    className={active? "bg-purple-300 p-2 m-2 rounded-lg hover:underline underline-offset-4 text-stone-800" : "hover:bg-sky-100 p-2 m-2 rounded-lg hover:underline underline-offset-4 hover:bg-opacity-20 hover:text-purple-300 " }
    >
      {children}
    </Link>
  )
}

const Navbar = () => {
  const router = useRouter();
  const path = router.pathname;
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 bg-orange-50 dark:bg-[rgb(36,36,36)] text-slate-800 dark:text-white rounded-xl backdrop-filter backdrop-blur-lg bg-opacity-30 dark:backdrop-filter dark:backdrop-blur-lg dark:bg-opacity-30">
      <motion.div 
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 0.5 }}
      className="flex flex-row items-center my-auto">
        <SiCoffeescript className="h-5 w-5 my-2 mr-1 ml-3" />
        <Link href="/" className="font-bold my-2 mr-3">
          Yong Liang
        </Link>
        <LinkItem href="/" path={path} className="font-light">
          About
        </LinkItem>
        <LinkItem href="/work" path={path} className="font-light">
          Work
        </LinkItem>
        <LinkItem href="/coursework" path={path} className="font-light">
          Coursework
        </LinkItem>
      </motion.div>

      <ThemeToggle className="absolute" />
      
    </header>
  );
};

export default Navbar;
