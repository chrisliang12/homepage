import Link from "next/link";
import Image from "next/image";

import {SiCoffeescript} from "react-icons/si";
import ThemeToggle from "./theme_toggle";

const Navbar = () => {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 bg-orange-50 dark:bg-[rgb(36,36,36)] text-slate-800 dark:text-white rounded-xl backdrop-blur-sm">
      <div className="flex flex-row items-center my-auto">
        <SiCoffeescript className="h-5 w-5 my-3 mr-1 ml-3" />
        <Link href="/" className="nav-title my-3 mr-3 text-lg font-medium">
          Yong Liang
        </Link>
        <Link className="m-3 font-light" href="#">
          About
        </Link>
        <Link href="/project" className="m-3 font-light">
          Project
        </Link>
        <Link href="/contact" className="m-3 font-light">
          Contact
        </Link>
      </div>

      <ThemeToggle className="absolute" />
      
    </header>
  );
};

export default Navbar;
