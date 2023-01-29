import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function Intro() {
  const [text, count] = useTypewriter({
    words: ["Hi! I'm Yong", "Welcome to my website!"],
    loop: 1,
    speed: 2000,
  });
  return (
    <div className="h-12 max-w-3xl bg-slate-50 dark:bg-zinc-700 rounded-2xl mx-auto flex backdrop-blur-xl items-center">
      <h2 className="font-light my-2 mx-auto text-zinc-700 dark:text-white">
        {text}
        <Cursor cursorColor="#F7AB0A" />
      </h2>
    </div>
  );
}
