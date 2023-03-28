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
            Surfstore
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
          Surfstore is a distributed key-value store that allows users to store
          and synchronize their files in the cloud. The key-value store consists
          of Meta Stores, which store file metadata, and Block Stores, which
          store the actual block data of the file. The RAFT Consensus Algorithm
          is implemented with the Meta Store to make the service fault-tolerant.
          For the Block Stores, a technique called Consistent Hashing is adopted
          to efficiently scale the service. A binary search algorithm is used in
          the Consistent Hashing Ring to accelerate the server lookup.{" "}
        </p>
        <h3 className="mt-4 ml-4 inline-block bg-secondary rounded-sm px-2 mr-2">
          Stack
        </h3>
        Go, gRPC, Protobuf, SQLite, RAFT Consensus Algorithm, Consistent Hashing
        <br />
        <h3 className="mt-2 ml-4 inline-block bg-secondary rounded-sm px-2 mr-2">
          Link
        </h3>
        <Link
          href="https://github.com/ucsd-cse224-wi23/proj5-chrisliang12"
          className="hover:text-sky-300"
        >
          https://github.com/ucsd-cse224-wi23/proj5-chrisliang12{" "}
        </Link>
        <br />
        <h3 className="mt-2 ml-4 inline-block bg-secondary rounded-sm px-2 mr-2">
          Associated with
        </h3>
        <p className="inline-block">CSE 224 - Networked Systems</p>
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
          <li>A scalable key-value store that provides cloud file syncing.</li>
          <li>Maintained a local index file implemented with SQLite.</li>
          <li>Scaled the cloud storage with Consistent Hashing.</li>
          <li>
            Implemented binary search in Consistent Hashing Ring for fast server
            lookup.
          </li>
          <li>
            Increased fault-tolerance with a subset of RAFT Consensus Algorithm.
          </li>
          <li>
            Developed conflict resolution and persistence using object
            versioning
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
          src="https://www.youtube.com/embed/XN9wwwKW0zI"
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full aspect-video rounded-2xl"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default ProjVisualizer;
