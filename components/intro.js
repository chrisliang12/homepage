import { Cursor, useTypewriter } from "react-simple-typewriter";
import {motion} from "framer-motion";

export default function Intro() {
  const [text, count] = useTypewriter({
    words: ["Hi! I'm Yong", "Welcome to my website!"],
    loop: 1,
    typeSpeed: 100,
    delaySpeed: 2000
  });
  return (
    <motion.div 
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: 1,
    }}
    transition={{duration: 0.5}}
    className="h-12 max-w-3xl bg-slate-50 dark:bg-zinc-700 rounded-2xl mx-auto flex backdrop-blur-xl items-center">
      <h2 className="font-light my-2 mx-auto text-zinc-700 dark:text-white text-lg">
        {text}
        <Cursor cursorColor="#F7AB0A" />
      </h2>
    </motion.div>
  );
}
