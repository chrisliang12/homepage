import { SiTailwindcss, SiReact, SiFramer } from "react-icons/si";
import { TbBrandNextjs, TbBrandFramer } from "react-icons/tb";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="sticky top-[100vh] pb-1">
      <p className="text-center opacity-20 font-light tracking-wider">
        &copy; {new Date().getFullYear()} Yong Liang | Powered by{" "}
        <Link href="https://reactjs.org/" className="hover:text-sky-300"><SiReact className="inline-block" />{" "}</Link>
        <Link href="https://nextjs.org/" className="hover:text-sky-300"><TbBrandNextjs className="inline-block" />{" "}</Link>
        <Link href="https://tailwindcss.com/" className="hover:text-sky-300"><SiTailwindcss className="inline-block" />{" "}</Link>
        <Link href="https://www.framer.com/motion/" className="hover:text-sky-300"><TbBrandFramer className="inline-block" /></Link>
      </p>
    </div>
  );
}
