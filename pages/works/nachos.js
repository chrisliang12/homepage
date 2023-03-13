import Title from "@/components/title";
import Link from "next/link";
import Subtitle from "@/components/subtitle";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjVisualizer = () => {
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
          An re-implementation of Nachos operating system. The main work of this
          project includes: building the nachos thread system, implementing a
          core set of system calls and developing an memory management system
          with demand paging and page swapping. Nachos can run user-level MIPS
          program.{" "}
        </p>

        <h3 className="mt-4 ml-4 inline-block bg-secondary rounded-sm px-2 mr-2">
          Stack
        </h3>
        <p className="inline-block">Java, C</p>
        <br />

        <h3 className="mt-2 ml-4 inline-block bg-secondary rounded-sm px-2 mr-2">
          Link
        </h3>
        <Link
          href="https://github.com/chrisliang12/OS-Project"
          className="hover:text-sky-300"
        >
          https://github.com/chrisliang12/OS-Project
        </Link>
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
        <ul className="list-outside ml-8 list-disc ">
          <li>
            Built the nachos thread system, including an Alarm class to enable
            timer interrupts and other thread-related system calls like
            thread.join()
          </li>
          <li>
            Implemented condition variables using interrupts disable and restore
          </li>
          <li>
            Developed a core set of file system calls, including creat(),
            open(), read(), write(), close() and unlink()
          </li>
          <li>
            Implemented process-related system calls - exec(), join() and exit()
          </li>
          <li>
            Supported for multiprogramming with the implementation of page table
          </li>
          <li>
            Enhanced the multiprogramming capability by implementing demand
            paging and page swapping mechanism with the clock algorithm
          </li>
          <li>
            You can run multiple user-level MIPS program on top of the Nachos at
            the same time
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
        <div className="w-full aspect-video relative">
          <Image
            src="/pathfinding/demo.gif"
            fill
            alt="pathfinding app demo"
            className="rounded-2xl"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ProjVisualizer;
