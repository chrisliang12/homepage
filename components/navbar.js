import Link from "next/link";
import Image from "next/image";
import {SunIcon, MoonIcon} from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 bg-gray-700/80 text-white rounded-xl backdrop-blur-sm">
      <div className="flex flex-row items-center">
        <div className="flex-shrink-0">
          <Image
            width={100}
            height={100}
            className="m-2 h-8 w-8 rounded-full"
            src="/../public/avatar.jpg"
            alt="Your Company"
          />
        </div>
        <span className="p-3 text-gray-200 text-lg font-medium">
          Yong Liang
        </span>
        <Link className="p-3" href="#">
          About
        </Link>
        <Link className="p-3" href="#">
          Project
        </Link>
        <Link className="p-3" href="#">
          Contact
        </Link>
      </div>
      <div className="flex flex-row items-center m-3 rounded-lg bg-orange-300">
        <SunIcon className="w-8 h-8 p-1"/>
      </div>
    </header>
  );
};

export default Navbar;
