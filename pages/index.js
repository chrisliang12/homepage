import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";
import { SiBilibili } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import Greeting from "../components/greeting";
import Title from "@/components/title";

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
            src="/avatar.jpg"
            width={100}
            height={100}
            alt="Avatar"
            className="rounded-full border-primary border-4 w-24 md:w-36"
          />
        </div>
        <div className="md:col-start-3 md:col-end-8 text-left md:text-right">
          <h2 className="py-2 text-3xl md:text-5xl headings tracking-widest">
            Yong Liang
          </h2>
          <p className="headings text-normal md:text-lg tracking-wider italic">
            M.S. Student{" "}
            <Link className="hover:text-info" href="https://ucsd.edu/">
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
        <Title>About</Title>
        <p className="text-base my-4 indent-4 break-words text-justify">
          Hello there! My name is Yong, and I am currently a second-year
          Master&apos;s student at UC San Diego. My passion lies in developing
          innovative digital solutions and tackling real-world problems with the
          power of code. I&apos;m on the lookout for opportunities in the
          software industry, with a particular interest in distributed systems
          and software development in general. You can take a look at my{" "}
          <Link className="text-info after:content-['_↗']" href="/work">
            Portfolio
          </Link>{" "}
          to see some of my work. When I&apos;m not working, I&apos;m a music
          enthusiast and have been playing the guitar for over a decade. I often
          share my covers and arrangements on both{" "}
          <Link
            href="https://space.bilibili.com/14674557"
            className="text-info after:content-['_↗']"
          >
            Bilibili
          </Link>{" "}
          and my newly launched{" "}
          <Link
            href="https://www.youtube.com/channel/UC12KqSODuNK6OERQ8RkZCBw"
            className="text-info after:content-['_↗']"
          >
            YouTube channel
          </Link>
          , and I would be thrilled if you would like to check them out!
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
        <Title>Social Media</Title>

        <p className="text-base my-4">
          <Link
            href="https://space.bilibili.com/14674557"
            className="p-2 rounded-md hover:bg-opacity-20 hover:text-secondary hover:bg-info hover:underline hover:underline-offset-4"
          >
            <SiBilibili className="inline-block mr-2" />
            @Lestrade_ (Chinese)
          </Link>
        </p>
        <p className="text-base my-4">
          <Link
            href="https://www.youtube.com/channel/UC12KqSODuNK6OERQ8RkZCBw"
            className="p-2 rounded-md hover:bg-opacity-20 hover:text-secondary hover:bg-info hover:underline hover:underline-offset-4"
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
        <Title>Contact</Title>
        <p className="text-base my-4">
          <Link
            href="mailto:yoliang@ucsd.edu"
            className="p-2 rounded-md hover:bg-opacity-20 hover:text-secondary hover:bg-info hover:underline hover:underline-offset-4"
          >
            <MdEmail className="inline-block mr-2" />
            yoliang@ucsd.edu
          </Link>
        </p>
        <p className="text-base my-4">
          <Link
            href="https://www.linkedin.com/in/yoliang/"
            className="p-2 rounded-md hover:bg-opacity-20 hover:text-secondary hover:bg-info hover:underline hover:underline-offset-4"
          >
            <BsLinkedin className="inline-block mr-2" />
            @yoliang
          </Link>
        </p>
        <p className="text-base my-4">
          <Link
            href="https://github.com/chrisliang12"
            className="p-2 rounded-md hover:bg-opacity-20 hover:text-secondary hover:bg-info hover:underline hover:underline-offset-4"
          >
            <BsGithub className="inline-block mr-2" />
            @chrisliang12
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
