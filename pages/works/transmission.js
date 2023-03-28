import Link from "next/link";
import Subtitle from "@/components/subtitle";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjTransmission = () => {
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
          An emulator with a CLI in which a customized reliable transmission
          protocol based on Sliding Window is implemented. The emulator supports
          a maximum of 256 senders and receivers. Each sender is capable of
          handling multiple messages toward multiple receivers, and each
          receiver is capable of handling multiple sender&apos;s messages
          simultaneously.{" "}
        </p>
        <div className="relative w-full aspect-video mx-auto my-4">
          <Image
            alt="image"
            src="/SWP/swp.png"
            fill
            className="mx-auto rounded-2xl"
          />
        </div>
        <h3 className="ml-4 inline-block bg-secondary rounded-sm px-2 mr-2">
          Stack
        </h3>
        C, Multi-threading
        <br />
        {/* <h3 className="mt-2 ml-4 inline-block bg-secondary rounded-sm px-2 mr-2"> */}
        {/*   Link */}
        {/* </h3> */}
        {/* <Link */}
        {/*   href="https://github.com/chrisliang12" */}
        {/*   className="hover:text-sky-300" */}
        {/* > */}
        {/*   https://github.com/chrisliang12 */}
        {/* </Link> */}
        <h3 className="mt-2 ml-4 inline-block bg-secondary rounded-sm px-2 mr-2">
          Associated with
        </h3>
        <p className="inline-block">CSE 123 - Computer Networks</p>
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
        <ul className="list-inside list-disc pl-4">
          <li>
            Developed an emulator with CLI for customized reliable transmission
            protocol based on Sliding Window.
          </li>
          <li>
            Supported a maximum of 256 senders and receivers, with each sender
            and receiver capable of handling multiple messages.
          </li>
          <li>
            Implemented selective retransmission, cumulative ACK, and a two-way
            handshake process.
          </li>
          <li>
            Created a reliable command parser to handle multiple command inputs
            simultaneously.
          </li>
          <li>
            Designed a frame header with a maximum frame size of 64 bytes.
          </li>
          <li>Successfully passed tests with corruption rates of up to 60%.</li>
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
          src="https://www.youtube.com/embed/4aUqmOAg0Cw"
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full aspect-video rounded-2xl"
        />
      </motion.div>
    </div>
  );
};

export default ProjTransmission;
