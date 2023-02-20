import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Greeting() {
  const [text, count] = useTypewriter({
    words: ["Hi!", "Welcome to my homepage!"],
    loop: 1,
    typeSpeed: 100,
    delaySpeed: 2000,
  });

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 0.5 }}
      className="h-12 max-w-3xl bg-primary rounded-2xl mx-auto flex backdrop-filter bg-opacity-30 backdrop-blur-lg items-center dark:backdrop-filter dark:bg-opacity-30 dark:backdrop-blur-lg"
    >
      <h2 className="font-light my-2 mx-auto text-lg">
        {text}
        <Cursor cursorColor="#F7AB0A" />
      </h2>
    </motion.div>
  );
}
