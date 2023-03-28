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
            Online Library Service
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
          An full-stack online library service implemented with React and Spring
          Boot, allowing users to search, borrow, return, and review books.
        </p>
        <h3 className="mt-4 ml-4 inline-block bg-secondary rounded-sm px-2 mr-2">
          Stack
        </h3>
        TypeScript, React, Bootstrap, Spring, Spring Boot, MySQL, OktaSDK
        <br />
        {/* <h3 className="mt-2 ml-4 inline-block bg-secondary rounded-sm px-2 mr-2"> */}
        {/*   Link */}
        {/* </h3> */}
        {/* <Link */}
        {/*   href="https://github.com/chrisliang12/lib-app" */}
        {/*   className="hover:text-sky-300" */}
        {/* > */}
        {/*   https://github.com/chrisliang12/lib-app */}
        {/* </Link> */}
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
            Built a multi-page online library service with React and TypeScript,
            providing a responsive and user-friendly front-end.
          </li>
          <li>
            Developed the backend with Spring, Spring Boot, and MySQL, creating
            robust and scalable server-side functionality.
          </li>
          <li>
            Implemented user authentication and authorization using OAuth 2 and
            OIDC with the Okta SDK to enhance security.
          </li>
          <li>
            Enabled users to browse, search, borrow, return, and review books
            within the application, providing a comprehensive online library
            service.
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
        <div className="w-full aspect-video relative my-4">
          <Image
            src="/lib/lib-demo1.gif"
            fill
            alt="pathfinding app demo"
            className="rounded-2xl"
          />
        </div>
        <div className="w-full aspect-video relative my-4">
          <Image
            src="/lib/lib-demo2.gif"
            fill
            alt="pathfinding app demo"
            className="rounded-2xl"
          />
        </div>
        <iframe
          src="https://www.youtube.com/embed/u-dPpQ3lWlE"
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
