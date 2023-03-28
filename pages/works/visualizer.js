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
            Pathfinding Visualizer
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
          Developed a web app using React and Bootstrap to visualize the search
          patterns of various pathfinding algorithms, including BFS, DFS, Best
          First, Dijkstra, and A*. The app allows users to customize mazes and
          adjust the visualization speed, and it supports two types of
          heuristics. Notable features include an intuitive control panel and a
          sleek design.
        </p>
        <h3 className="mt-4 ml-4 inline-block bg-secondary rounded-sm px-2 mr-2">
          Stack
        </h3>
        React, Bootstrap, JavaScript, HTML, CSS
        <br />
        <h3 className="mt-2 ml-4 inline-block bg-secondary rounded-sm px-2 mr-2">
          Link
        </h3>
        <Link
          href="https://chrisliang12.github.io/pathfinding-visualizer-react/"
          className="hover:text-sky-300"
        >
          https://chrisliang12.github.io/pathfinding-visualizer-react/
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
        <Subtitle>Highlight</Subtitle>
        <ul className="list-inside list-disc indent-4">
          <li>
            Developed a pathfinding visualization app with React and Bootstrap.
          </li>
          <li>
            Implemented visualization for several algorithms, including BFS,
            DFS, Best First, Dijkstra, and A* with multiple heuristics options.
          </li>
          <li>
            Added maze customization features to let users create and solve
            their own mazes.
          </li>
          <li>
            Included easy-to-use control panel with speed and maze size control
            options.
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
