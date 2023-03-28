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
            youBot Controller
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
          A program written in Matlab to control an mobile manipulator. The
          software includes a trajectory generator, a kinematics simulaotr, and
          a feedforward + feedback controller. Tested the program via 3D
          simulation in CoppeliaSim.
        </p>
        <h3 className="mt-4 ml-4 inline-block bg-secondary rounded-sm px-2 mr-2">
          Stack
        </h3>
        Matlab, CoppeliaSim, Feedforward + Feedback Control, Robot Kinematics
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
        {/* <br /> */}
        <h3 className="mt-2 ml-4 inline-block bg-secondary rounded-sm px-2 mr-2">
          Associated with
        </h3>
        MAE 204 - Robotics
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
          src="https://www.youtube.com/embed/47fY2Zvqdqk"
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full aspect-video rounded-2xl"
        >
          <p>
            Your browser doesn&apos;t support iframes or the content cannot be
            displayed. (If you are in Mainland China, you need to use a VPN to
            watch this YouTube video)
          </p>
        </iframe>
      </motion.div>
    </div>
  );
};

export default ProjVisualizer;
