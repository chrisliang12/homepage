import Title from "@/components/title";
import Link from "next/link";
import Subtitle from "@/components/subtitle";
import Image from "next/image";
import { motion } from "framer-motion";

const Proj_Transmission = () => {
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
        className="text-xl breadcrumbs text-primary"
      >
        <ul>
          <li>
            <Link href="/work" className="text-info">
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
          <li>
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
            Reliable Transmission Emulator
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
          An emulator with an CLI in which a customized reliable transmission
          protocol based on Sliding Window is implemented. The emulator supports
          a maximum of 256 senders and receivers. Each sender is capable of
          handling multiple messages toward multiple receivers, and each
          receiver is capable of handling multiple sender&apos;s messages
          simultaneously.{" "}
        </p>

        <div className="relative w-full aspect-video mx-auto my-4">
          <Image
            alt="image"
            src="/../public/SWP/swp.png"
            fill
            className="mx-auto rounded-2xl"
          />
        </div>

        <h3 className="ml-4 inline-block bg-secondary rounded-sm px-2 mr-2">
          Stack
        </h3>
        <p className="inline-block">C, Multi-threading</p>
        <br />

        <h3 className="mt-2 ml-4 inline-block bg-secondary rounded-sm px-2 mr-2">
          Link
        </h3>
        <Link
          href="https://github.com/chrisliang12"
          className="hover:text-sky-300"
        >
          https://github.com/chrisliang12
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
        <Subtitle>Feature</Subtitle>
        <ul className="list-inside list-disc indent-4">
          <li>Selective retransmission and cumulative ACK</li>
          <li>Two-way handshake process</li>
          <li>Self-designed frame header (max frame size: 64bytes)</li>
          <li>Reliable cmd parser to handle multiple cmd input at once</li>
          <li>Pass the tests with corruption rates of 60%</li>
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
        <div class="mockup-code">
          <pre>
            <code>
              # initialize the program with 10 senders and 10 receivers with an
              0.6 corruption rate.
            </code>
          </pre>
          <pre data-prefix=">" className="text-success">
            <code>./tritontalk -s 10 -r 10 -c 0.6</code>
          </pre>
          <pre>
            <code>Messages will be corrupted with probability = 0.6</code>
          </pre>
          <pre>
            <code>Available Sender id(s)</code>
          </pre>
          <pre>
            <code>{"    "}sender_id=0</code>
          </pre>
          <pre>
            <code>{"    "}sender_id=1</code>
          </pre>
          <pre>
            <code>{"    "}sender_id=2</code>
          </pre>
          <pre>
            <code>{"    "}sender_id=3</code>
          </pre>
          <pre>
            <code>{"    "}sender_id=4</code>
          </pre>
          <pre>
            <code>{"    "}sender_id=5</code>
          </pre>
          <pre>
            <code>{"    "}sender_id=6</code>
          </pre>
          <pre>
            <code>{"    "}sender_id=7</code>
          </pre>
          <pre>
            <code>{"    "}sender_id=8</code>
          </pre>
          <pre>
            <code>{"    "}sender_id=9</code>
          </pre>
          <pre>
            <code>Available Receiver id(s):</code>
          </pre>
          <pre>
            <code>{"    "}recv_id=0</code>
          </pre>
          <pre>
            <code>{"    "}recv_id=1</code>
          </pre>
          <pre>
            <code>{"    "}recv_id=2</code>
          </pre>
          <pre>
            <code>{"    "}recv_id=3</code>
          </pre>
          <pre>
            <code>{"    "}recv_id=4</code>
          </pre>
          <pre>
            <code>{"    "}recv_id=5</code>
          </pre>
          <pre>
            <code>{"    "}recv_id=6</code>
          </pre>
          <pre>
            <code>{"    "}recv_id=7</code>
          </pre>
          <pre>
            <code>{"    "}recv_id=8</code>
          </pre>
          <pre>
            <code>{"    "}recv_id=9</code>
          </pre>
          <pre>
            <code># sender 0 send a msg &quot;hello&quot; to recv 0</code>
          </pre>

          <pre className="text-success">
            <code>msg 0 0 hello</code>
          </pre>
          <pre className="text-warning">
            <code>
              {"<"}RECV_0{">"}:[hello]
            </code>
          </pre>
          <pre>
            <code>
              # You can also paste multiple cmds once to here and it will
              execute the cmds in order
            </code>
          </pre>
          <pre>
            <code># To exit the program, simply type &quot;exit&quot;</code>
          </pre>
        </div>
      </motion.div>
    </div>
  );
};

export default Proj_Transmission;
