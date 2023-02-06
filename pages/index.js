import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";
import { SiBilibili } from "react-icons/si";
import {MdEmail} from "react-icons/md";
import Greeting from "../components/greeting";

export default function Home() {
  return (
    <div>
      {/* Greeting */}
      <Greeting />

      {/* Heading */}
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 0.1,
        }}
        className="my-10 grid grid-cols-1 md:grid-cols-6"
      >
        <div className="mt-5 mx-auto md:col-start-1 md:mt-0">
          <Image
            src="/../public/avatar.jpg"
            width={100}
            height={100}
            alt="Avatar"
            className="rounded-full border-zinc-500 border-4 w-24 md:w-36"
          />
        </div>
        <div className="md:col-start-3 md:col-end-8 text-left md:text-right">
          <h2 className="py-2 text-3xl md:text-5xl headings tracking-widest">
            Yong Liang
          </h2>
          <p className="headings text-normal md:text-lg tracking-wider">
            M.S. Student{" "}
            <Link className="hover:text-purple-300" href="https://ucsd.edu/">
              @UCSD
            </Link>{" "}
            / Coffee & Guitar Enthusiast
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 0.2,
        }}
      >
        <h3 className="text-3xl underline underline-offset-8 decoration-purple-300 decoration-4">
          About
        </h3>
        <p className="text-base my-4 indent-4 break-words text-justify">
          Hi, I’m Yong! I’m currently a second-year Master&apos;s student at UC
          San Diego. I have a strong passion for developing cool digital stuff
          and solving real-world problems with code. That’s why I am seeking
          opportunities to work in the software industry and I am especially
          interested in the networked system and related technology. Besides the
          work, I’m a music enthusiast and also a 10 YOE guitar player. I
          publish my cover or arrangement on{" "}
          <Link
            href="https://space.bilibili.com/14674557"
            className="text-sky-300 after:content-['_↗']"
          >
            Bilibili
          </Link>{" "}
          and{" "}
          <Link
            href="https://www.youtube.com/channel/UC12KqSODuNK6OERQ8RkZCBw"
            className="text-sky-300 after:content-['_↗']"
          >
            Youtube
          </Link>
          . Feel free to check them out.
        </p>
      </motion.div>

      {/* on the web */}
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 0.3,
        }}
      >
        <h3 className="text-2xl underline underline-offset-8 decoration-purple-300 decoration-4">
          On the web
        </h3>
        <p className="text-base my-4">
          <Link
            href="https://github.com/chrisliang12"
            className="p-2 rounded-md hover:bg-opacity-20 hover:text-purple-300 hover:bg-sky-100 hover:underline hover:underline-offset-4"
          >
            <BsGithub className="inline-block mr-2" />
            @chrisliang12
          </Link>
        </p>
        <p className="text-base my-4">
          <Link
            href="https://space.bilibili.com/14674557"
            className="p-2 rounded-md hover:bg-opacity-20 hover:text-purple-300 hover:bg-sky-100 hover:underline hover:underline-offset-4"
          >
            <SiBilibili className="inline-block mr-2" />
            @Lestrade_ (Chinese)
          </Link>
        </p>
        <p className="text-base my-4">
          <Link
            href="https://github.com/chrisliang12"
            className="p-2 rounded-md hover:bg-opacity-20 hover:text-purple-300 hover:bg-sky-100 hover:underline hover:underline-offset-4"
          >
            <BsYoutube className="inline-block mr-2" />
            @Lestrade_ (English)
          </Link>
        </p>
      </motion.div>

      {/* Contact*/}
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 0.4,
        }}
      >
        <h3 className="text-2xl underline underline-offset-8 decoration-purple-300 decoration-4">
          Contact
        </h3>
        <p className="text-base my-4">
          <Link
            href="mailto:yoliang@ucsd.edu"
            className="p-2 rounded-md hover:bg-opacity-20 hover:text-purple-300 hover:bg-sky-100 hover:underline hover:underline-offset-4"
          >
            <MdEmail className="inline-block mr-2" />
            yoliang@ucsd.edu
          </Link>
        </p>
        <p className="text-base my-4">
          <Link
            href="https://www.linkedin.com/in/yoliang/"
            className="p-2 rounded-md hover:bg-opacity-20 hover:text-purple-300 hover:bg-sky-100 hover:underline hover:underline-offset-4"
          >
            <BsLinkedin className="inline-block mr-2" />
            @yoliang
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
