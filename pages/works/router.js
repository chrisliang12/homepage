import Link from "next/link";
import Subtitle from "@/components/subtitle";
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
            Simple Router
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
          A simple router implementation running on top of Mininet. The router
          can routes normal packets/frames like Ethernet Frames, IP Packets,
          TCP/UDP segments, etc. Some networking protocols are also implemented,
          such as Ethernet, ARP, IP and ICMP.{" "}
        </p>
        <h3 className="mt-4 ml-4 inline-block bg-secondary rounded-sm px-2 mr-2">
          Stack
        </h3>
        C, Mininet, VirtualBox
        <br />
        {/* <h3 className="mt-2 ml-4 inline-block bg-secondary rounded-sm px-2 mr-2"> */}
        {/*   Link */}
        {/* </h3> */}
        {/* <Link href="https://www.yoliang.xyz/" className="hover:text-sky-300"> */}
        {/*   yoliang.xyz */}
        {/* </Link> */}
        <h3 className="mt-2 ml-4 inline-block bg-secondary rounded-sm px-2 mr-2">
          Associated with
        </h3>
        CSE 123 - Computer Networks
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
        <ul className="list-inside pl-4 list-disc ">
          <li>Developed a high-performance router using C language. </li>
          <li>
            Implemented a subset of Ethernet, IP, ARP, and ICMP protocols to
            handle relevant packets.
          </li>
          <li>Developed an ARP cache to improve routing efficiency.</li>
          <li>Implemented packet forwarding using Longest Prefix Match.</li>
          <li>
            Tested the router with a variety of network topologies and conducted
            functional testing using commands such as ping, traceroute, and
            wget.
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
          src="https://www.youtube.com/embed/S7O2JZuRZEY"
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full aspect-video rounded-2xl"
        />
      </motion.div>
    </div>
  );
};

export default ProjVisualizer;
