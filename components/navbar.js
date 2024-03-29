import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import ThemeToggle from "./theme_toggle";
import { HiMenuAlt2 } from "react-icons/hi";

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  return (
    <Link
      href={href}
      className={
        active
          ? "hidden md:block bg-primary p-2 m-2 rounded-lg hover:underline underline-offset-4 title"
          : "title hover:bg-primary p-2 m-2 rounded-lg hover:underline underline-offset-4 hover:bg-opacity-20 hidden md:block"
      }
    >
      {children}
    </Link>
  );
};

const Navbar = ({ theme, setTheme }) => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <header className="sticky top-0 flex justify-between items-start max-w-6xl mx-auto z-20 bg-base-100 rounded-xl backdrop-filter backdrop-blur-lg bg-opacity-30">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 0.5 }}
        className="flex flex-row items-center"
      >
        <Link href="/" className="font-black my-2">
          <Image
            src="/logo.png"
            height={30}
            width={30}
            className="mr-1 ml-3 inline-block"
            alt="logo"
          />
        </Link>
        <LinkItem href="/" path={path} className="font-light">
          About
        </LinkItem>
        <LinkItem href="/work" path={path} className="font-light">
          Portfolio
        </LinkItem>
        <LinkItem href="/coursework" path={path} className="font-light">
          Coursework
        </LinkItem>
      </motion.div>

      <div className="flex flex-row items-center">
        <ThemeToggle theme={theme} setTheme={setTheme} />

        <div className="md:hidden">
          <div className="dropdown dropdown-end dropdown-hover">
            <motion.div
              key="light"
              tabIndex="0"
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 25, opacity: 0, scale: 0 }}
              className="flex flex-row items-center"
            >
              <HiMenuAlt2
                tabIndex="0"
                className="w-9 h-9 m-2 p-1 text-primary rounded-lg border border-primary focus:text-secondary focus:border-secondary"
              />
            </motion.div>
            <ul
              tabIndex="0"
              className="menu menu-compact text-neutral dropdown-content mr-2 p-2 shadow bg-secondary rounded-box w-52"
            >
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/work">Portfolio</Link>
              </li>
              <li>
                <Link href="/coursework">Coursework</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
