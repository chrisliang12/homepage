import { motion } from "framer-motion";

const Subtitle = ({ children, delay }) => {
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
        delay: delay ? delay : 0,
      }}
      exit={{ y: 25, opacity: 0 }}
      className="mt-4 mb-2"
    >
      <h2 className="text-xl underline underline-offset-4 decoration-purple-300">
        {children}
      </h2>
    </motion.div>
  );
};

export default Subtitle;
