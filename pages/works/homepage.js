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
            Homepage
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
          My personal homepage and portfolio built with modern frameworks.{" "}
        </p>

        <h3 className="mt-4 ml-4 inline-block bg-secondary rounded-sm px-2 mr-2">
          Stack
        </h3>
        <p className="inline-block">
          React, Next.js, Tailwind CSS, daisyUI, Three.js, Framer Motion,
          Blender
        </p>
        <br />

        <h3 className="mt-2 ml-4 inline-block bg-secondary rounded-sm px-2 mr-2">
          Link
        </h3>
        <Link href="https://www.yoliang.xyz/" className="hover:text-sky-300">
          yoliang.xyz
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
            Built a fully responsive multipage website with React and Next.js.
          </li>
          <li>
            Created beautiful UI and light/dark mode with Tailwind CSS and
            daisyUI.
          </li>
          <li>Designed and modeled the personal 3D rig model with Blender.</li>
          <li>
            Achieved a soft lightening and shadow effect through Blender texture
            baking.
          </li>
          <li>
            Loaded the 3D model and created camera motion effect with Three.js.
          </li>
          <li>
            Developed a smooth transition effect between the transition of pages
            with Framer Motion
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
        <div className="w-full aspect-video relative">Wait to edit</div>
      </motion.div>
    </div>
  );
};

export default ProjVisualizer;