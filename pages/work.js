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
          link="/works/surfstore"
          imgSrc="/surfstore/Architect.png"
          delay={0.2}
        >
          <h2 className="card-title">Surfstore</h2>
          <p>
            A distributed key-value store implemented with RAFT Consensus
            Algorithm and Consistent Hashing
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-secondary">Go</div>
            <div className="badge badge-secondary">gRPC</div>
            <div className="badge badge-secondary">Protobuf</div>
            <div className="badge badge-secondary">SQL</div>
            <div className="badge badge-secondary">RAFT</div>
            <div className="badge badge-secondary">Consistent Hashing</div>
          </div>
        </ProjectItem>

        <ProjectItem
          link="/works/homepage"
          imgSrc="/../public/pathfinding/page.png"
          delay={0.2}
        >
          <h2 className="card-title">Homepage</h2>
          <p>
            My personal homepage built with React, Next.js, Tailwind CSS, Framer
            Motion and Three.js
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-secondary">React</div>
            <div className="badge badge-secondary">Next</div>
            <div className="badge badge-secondary">Tailwind</div>
            <div className="badge badge-secondary">daisyUI</div>
            <div className="badge badge-secondary">ThreeJS</div>
            <div className="badge badge-secondary">Framer</div>
          </div>
        </ProjectItem>

        <ProjectItem
          link="/works/library"
          imgSrc="/pathfinding/page.png"
          delay={0.3}
        >
          <h2 className="card-title">Online Library Service</h2>
          <p>
            An full stack online library service which allows users to browse /
            borrow / return books.
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-secondary">React</div>
            <div className="badge badge-secondary">Bootstrap</div>
            <div className="badge badge-secondary">SpringBoot</div>
            <div className="badge badge-secondary">MySQL</div>
            <div className="badge badge-secondary">OktaSDK</div>
            <div className="badge badge-secondary">Stripe</div>
          </div>
        </ProjectItem>

        <ProjectItem
          link="/works/router"
          imgSrc="/router/router.png"
          delay={0.3}
        >
          <h2 className="card-title">Simple Router</h2>
          <p>
            A router implementation developed with C and running on top of
            Mininet.
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-secondary">C</div>
            <div className="badge badge-secondary">Mininet</div>
            <div className="badge badge-secondary">VirtualBox</div>
          </div>
        </ProjectItem>

        <ProjectItem
          link="/works/transmission"
          imgSrc="/SWP/swp.png"
          delay={0.3}
        >
          <h2 className="card-title">Reliable Transmission Emulator</h2>
          <p>Implementation of a customized Sliding Window Protocol. </p>
          <div className="card-actions justify-end">
            <div className="badge badge-secondary">C</div>
          </div>
        </ProjectItem>

        <ProjectItem
          link="/works/nachos"
          imgSrc="/nachos/nachos.jpg"
          delay={0.4}
        >
          <h2 className="card-title">Nachos</h2>
          <p>Re-implementation of the Nachos OS Project</p>
          <div className="card-actions justify-end">
            <div className="badge badge-secondary">C</div>
            <div className="badge badge-secondary">Java</div>
          </div>
        </ProjectItem>

        <ProjectItem
          link="/works/visualizer"
          imgSrc="/pathfinding/page.png"
          delay={0.4}
        >
          <h2 className="card-title">Pathfinding Visualizer</h2>
          <p>An app built with React to visualize pathfinding algorithms</p>
          <div className="card-actions justify-end">
            <div className="badge badge-secondary">React</div>
            <div className="badge badge-secondary">Bootstrap</div>
            <div className="badge badge-secondary">JavaScript</div>
          </div>
        </ProjectItem>

        <ProjectItem
          link="/works/rl"
          imgSrc="/mountain-car/mcar.png"
          delay={0.5}
        >
          <h2 className="card-title">Mountain Car Challenge</h2>
          <p>Solution to the OpenAI mountain car (continuous) challenge</p>
          <div className="card-actions justify-end">
            <div className="badge badge-secondary">Python</div>
            <div className="badge badge-secondary">PyTorch</div>
            <div className="badge badge-secondary">Sarsa</div>
            <div className="badge badge-secondary">Q-learning</div>
            <div className="badge badge-secondary">Deep Learning</div>
          </div>
        </ProjectItem>

        <ProjectItem
          link="/works/youbot"
          imgSrc="/youBot/youBot.png"
          delay={0.5}
        >
          <h2 className="card-title">youBot Controller</h2>
          <p>
            A software controlling a mobile manipulator in the Coppelia
            environment
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-secondary">Matlab</div>
            <div className="badge badge-secondary">Robot Kinematics</div>
            <div className="badge badge-secondary">CoppeliaSim</div>
          </div>
        </ProjectItem>
      </div>
    </div>
  );
}
