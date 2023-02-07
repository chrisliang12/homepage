import { motion } from "framer-motion";
import Image from "next/image";

export default function Project() {
  return (
    <div>
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
        exit={{ y: 25, opacity: 0 }}
      >
        <h1 className="text-2xl underline underline-offset-8 decoration-purple-300 decoration-4">
          Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
          <div>
            <div className="relative w-full aspect-video">
              <Image
                src="/../public/pathfinding/page.png"
                alt="Surfstore Image"
                fill
                className="mx-auto rounded-2xl"
              />
            </div>
            <h2 className="text-center mt-4 text-xl font-bold">Homepage</h2>
            <p className="text-center">
              My personal homepage built with React, Next.js, Tailwind CSS, Framer Motion and Three.js
            </p>
          </div>
          <div>
            <div className="relative w-full aspect-video">
              <Image
                src="/../public/SWP/swp.png"
                alt="Surfstore Image"
                fill
                className="mx-auto rounded-2xl"
              />
            </div>
            <h2 className="text-center mt-4 text-xl font-bold">
              Reliable Transmission Emulator
            </h2>
            <p className="text-center">
              An emulator with CLI for data transmission based on customized
              Sliding Window Protocol, supporting a maximum of 256 senders and
              receivers.
            </p>
          </div>
          <div>
            <div className="relative w-full aspect-video">
              <Image
                src="/../public/nachos/nachos.jpg"
                alt="Surfstore Image"
                fill
                className="mx-auto rounded-2xl"
              />
            </div>
            <h2 className="text-center mt-4 text-xl font-bold">Nachos</h2>
            <p className="text-center">
              Re-implementation of the famous OS Project
            </p>
          </div>
          <div>
            <div className="relative w-full aspect-video">
              <Image
                src="/../public/surfstore/Architect.png"
                alt="Surfstore Image"
                fill
                className="mx-auto rounded-2xl"
              />
            </div>
            <h2 className="text-center mt-4 text-xl font-bold">Surfstore</h2>
            <p className="text-center">
              A distributed network storage service with fault-tolerance
            </p>
          </div>
          <div>
            <div className="relative w-full aspect-video">
              <Image
                src="/../public/pathfinding/page.png"
                alt="Surfstore Image"
                fill
                className="mx-auto rounded-2xl"
              />
            </div>
            <h2 className="text-center mt-4 text-xl font-bold">
              Pathfinding Visualizer
            </h2>
            <p className="text-center">
              An app built with React to visualize pathfinding algorithms
            </p>
          </div>
          <div>
            <div className="relative w-full aspect-video">
              <Image
                src="/../public/mountain-car/mcar.png"
                alt="Surfstore Image"
                fill
                className="mx-auto rounded-2xl"
              />
            </div>
            <h2 className="text-center mt-4 text-xl font-bold">
              Mountain Car Challenge
            </h2>
            <p className="text-center">
              Implementation of several RL algorithms to solve the mountain car (continuous) challenge
            </p>
          </div>
          <div>
            <div className="relative w-full aspect-video">
              <Image
                src="/../public/youBot/youBot.png"
                alt="Surfstore Image"
                fill
                className="mx-auto rounded-2xl"
              />
            </div>
            <h2 className="text-center mt-4 text-xl font-bold">
              youBot Controller
            </h2>
            <p className="text-center">
              A software controlling a mobile manipulator in the Coppelia
              environment
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
