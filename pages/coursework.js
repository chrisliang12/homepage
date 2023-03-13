import { motion } from "framer-motion";
import Title from "../components/title";

export default function Coursework() {
  return (
    <div>
      {/* Coursework */}
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
          delay: 0.1,
        }}
        exit={{ y: 25, opacity: 0 }}
      >
        <Title>Computer Science and Engineering</Title>
        <table className="table-auto mt-4">
          <tbody>
            <tr>
              <td className="w-20 text-justify">CSE 30</td>
              <td>Computer Organization and System Programming</td>
            </tr>
            <tr>
              <td className="w-20 text-justify justif">CSE 100</td>
              <td>Advanced Data Structure</td>
            </tr>
            <tr>
              <td className="w-20 text-justify justif">CSE 101</td>
              <td>Desgin and Analysis of Algorithms</td>
            </tr>
            <tr>
              <td className="w-20 text-justify justif">CSE 110</td>
              <td>Software Engineering</td>
            </tr>
            <tr>
              <td className="w-20 text-justify justif">CSE 120</td>
              <td>Principles of Computer Operating Systems</td>
            </tr>
            <tr>
              <td className="w-20 text-justify justif">CSE 123</td>
              <td>Computer Networks</td>
            </tr>
            <tr>
              <td className="w-20 text-justify justif">CSE 224</td>
              <td>Networked Systems</td>
            </tr>
            <tr>
              <td className="w-20 text-justify justif">CSE 232</td>
              <td>Database Systems</td>
            </tr>
          </tbody>
        </table>
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
        className="divider"
      ></motion.div>

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
        <Title>Dynamic System and Control</Title>
        <table className="table-auto mt-4">
          <tbody>
            <tr>
              <td className="w-20 text-justify">MAE 204</td>
              <td>Robotics</td>
            </tr>
            <tr>
              <td className="w-20 text-justify justif">MAE 207</td>
              <td>Safety for Autonomouse System</td>
            </tr>
            <tr>
              <td className="w-20 text-justify">MAE 208</td>
              <td>Mathematics for Engineers</td>
            </tr>
            <tr>
              <td className="w-20 text-justify justif">MAE 242</td>
              <td>Robot Motion Planning</td>
            </tr>
            <tr>
              <td className="w-20 text-justify justif">MAE 280</td>
              <td>Linear System Theory</td>
            </tr>
          </tbody>
        </table>
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
        className="divider"
      ></motion.div>

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
          delay: 0.5,
        }}
        exit={{ y: 25, opacity: 0 }}
      >
        <p className="mt-4 text-secondary underline underline-offset-4 decoration-secondary">
          Total GPA: 3.81 / 4.00
        </p>
      </motion.div>
    </div>
  );
}
