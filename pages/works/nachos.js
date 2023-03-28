import Link from "next/link";
import Subtitle from "@/components/subtitle";
import { motion } from "framer-motion";

const Nachos = () => {
  return (
    <div>
      <motion.div
        initial={{
          opacity: 0,
          x: 50,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 0.1,
        }}
        exit={{ y: 25, opacity: 0 }}
        className="text-xl breadcrumbs"
      >
        <ul>
          <li>
            <Link href="/work">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-4 h-4 mr-2 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                ></path>
              </svg>
              Work
            </Link>
          </li>
          <li className="text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-4 h-4 mr-2 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              ></path>
            </svg>
            Nachos
          </li>
        </ul>
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
        exit={{ y: 25, opacity: 0 }}
      >
        <p className="text-justify indent-4">
          Re-implemented the Nachos operating system, including building the
          Nachos thread system and implementing a core set of system calls.
          Developed a memory management system with demand paging and page
          swapping. Capable of running user-level MIPS programs.
        </p>
        <div className="pl-4">
          <h3 className="mt-4 inline-block bg-secondary rounded-sm px-2 mr-2">
            Stack
          </h3>
          Java, C
          <br />
          <h3 className="mt-2 inline-block bg-secondary rounded-sm px-2 mr-2">
            Link
          </h3>
          <Link
            href="https://github.com/chrisliang12/OS-Project"
            className="hover:text-sky-300"
          >
            https://github.com/chrisliang12/OS-Project
          </Link>
          <br />
          <h3 className="mt-2 inline-block bg-secondary rounded-sm px-2 mr-2">
            Associated with
          </h3>
          CSE 120 - Operating Systems
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
          delay: 0.3,
        }}
        exit={{ y: 25, opacity: 0 }}
      >
        <Subtitle>Highlights</Subtitle>
        <ul className="list-inside pl-4 list-disc">
          <li>
            Developed the Nachos operating system, including the development of
            the thread system, memory management system, and a core set of
            system calls.
          </li>
          <li>
            Built the Nachos thread system, including support for timer
            interrupts and other thread-related system calls such as
            thread.join().
          </li>
          <li>
            Implemented condition variables using interrupt disable and restore,
            and developed a set of file system calls including creat(), open(),
            read(), write(), close() and unlink().
          </li>
          <li>
            Supported for multiprogramming by implementing demand paging and
            page swapping mechanism with the clock algorithm.
          </li>
          <li>
            Enhanced the multiprogramming capability by implementing a page
            table, and enabling multiple user-level MIPS programs to be run
            concurrently on Nachos.
          </li>
        </ul>
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
          delay: 0.4,
        }}
        exit={{ y: 25, opacity: 0 }}
      >
        <Subtitle>Demo</Subtitle>
        <iframe
          src="https://www.youtube.com/embed/kcTBkb_euwg"
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full aspect-video rounded-2xl"
        />
        <p className="mt-4 text-sm">
          (Note: VPN is needed for the video if you are accessing from China)
        </p>
      </motion.div>
    </div>
  );
};

export default Nachos;
