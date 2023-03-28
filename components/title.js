import { motion } from "framer-motion";

const Title = ({ children, delay }) => {
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
      className="rounded-lg bg-primary inline-block px-2 py-1 mt-4 title"
    >
      <h1 className="text-xl">{children}</h1>
    </motion.div>
  );
};

export default Title;
