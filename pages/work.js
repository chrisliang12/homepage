import { motion } from "framer-motion";
import Image from "next/image";
import ProjectItem from "@/components/project_item";
import Title from "@/components/title";

export default function Project() {
  return (
    <div>
      <Title delay={0.1}>Project</Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
        <ProjectItem
          link="/works/homepage"
          imgSrc="/../public/pathfinding/page.png"
          delay={0.2}
        >
          <h2 className="text-center mt-4 text-xl font-bold">Homepage</h2>
          <p className="text-center">
            My personal homepage built with React, Next.js, Tailwind CSS, Framer
            Motion and Three.js
          </p>
        </ProjectItem>

        <ProjectItem
          link="/works/transmission"
          imgSrc="/../public/SWP/swp.png"
          delay={0.2}
        >
          <h2 className="text-center mt-4 text-xl font-bold">
            Reliable Transmission Emulator
          </h2>
          <p className="text-center">
            An emulator with CLI for data transmission based on customized
            Sliding Window Protocol, supporting a maximum of 256 senders and
            receivers.
          </p>
        </ProjectItem>

        <ProjectItem
          link="/works/nachos"
          imgSrc="/../public/nachos/nachos.jpg"
          delay={0.3}
        >
          <h2 className="text-center mt-4 text-xl font-bold">Nachos</h2>
          <p className="text-center">
            Re-implementation of the famous OS Project
          </p>
        </ProjectItem>

        <ProjectItem
          link="/works/surfstore"
          imgSrc="/../public/surfstore/Architect.png"
          delay={0.3}
        >
          <h2 className="text-center mt-4 text-xl font-bold">Surfstore</h2>
          <p className="text-center">
            A distributed network storage service with fault-tolerance
          </p>
        </ProjectItem>

        <ProjectItem
          link="/works/Visualizer"
          imgSrc="/../public/pathfinding/page.png"
          delay={0.4}
        >
          <h2 className="text-center mt-4 text-xl font-bold">
            Pathfinding Visualizer
          </h2>
          <p className="text-center">
            An app built with React to visualize pathfinding algorithms
          </p>
        </ProjectItem>

        <ProjectItem
          link="/works/rl"
          imgSrc="/../public/mountain-car/mcar.png"
          delay={0.4}
        >
          <h2 className="text-center mt-4 text-xl font-bold">
            Mountain Car Challenge
          </h2>
          <p className="text-center">
            Implementation of several RL algorithms to solve the mountain car
            (continuous) challenge
          </p>
        </ProjectItem>

        <ProjectItem
          link="/works/youBot"
          imgSrc="/../public/youBot/youBot.png"
          delay={0.5}
        >
          <h2 className="text-center mt-4 text-xl font-bold">
            youBot Controller
          </h2>
          <p className="text-center">
            A software controlling a mobile manipulator in the Coppelia
            environment
          </p>
        </ProjectItem>
      </div>
    </div>
  );
}
