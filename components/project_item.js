import { motion } from "framer-motion";
import Image from "next/image";

const ProjectItem = ({ children, imgSrc, delay }) => {
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
    >
      <div className="relative w-full aspect-video">
        <Image
          src={imgSrc}
          alt="image"
          fill
          className="mx-auto rounded-2xl"
        />
      </div>
      {children}
    </motion.div>
  )
}

export default ProjectItem