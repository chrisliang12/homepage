import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ children, imgSrc, delay, link, stack, order }) => {
  return (
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
        delay: delay,
      }}
      exit={{ y: 25, opacity: 0 }}
      className="card bg-base-100 shadow-xl hover:shadow-2xl"
    >
      <Link href={link}>
        <figure className="relative w-full aspect-video">
          <Image
            src={imgSrc}
            alt="image"
            fill
            className="mx-auto rounded-2xl"
          />
        </figure>
        <div className="card-body">{children}</div>
      </Link>
    </motion.div>
  );
};

export default ProjectItem;
