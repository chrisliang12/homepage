import Title from "@/components/title";
import Link from "next/link";
import Subtitle from "@/components/subtitle";
import Image from "next/image";

const Proj_Transmission = () => {
  return (
    <div>
      <div className="text-xl breadcrumbs text-purple-300">
        <ul>
          <li>
            <Link href="/work" className="text-white">
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
          <li>
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
            Reliable Transmission Emulator
          </li>
        </ul>
      </div>
      <div className="relative w-3/4 aspect-video mx-auto my-2">
        <Image
          alt="image"
          src="/../public/SWP/swp.png"
          fill
          className="mx-auto rounded-2xl"
        />
      </div>
      <p className="text-justify indent-4">
        An emulator with an CLI in which a customized reliable transmission
        protocol based on Sliding Window is implemented. The emulator supports a
        maximum of 256 senders and receivers. Each sender is capable of handling
        multiple messages toward multiple receivers, and each receiver is
        capable of handling multiple sender's messages simultaneously.{" "}
      </p>

      <h3 className="mt-4 ml-4 inline-block bg-sky-300 rounded-sm px-2 mr-2">
        Stack
      </h3>
      <p className="inline-block">C, Multi-threading</p>
      <br />

      <h3 className="mt-2 ml-4 inline-block bg-sky-300 rounded-sm px-2 mr-2">
        Link
      </h3>
      <Link
        href="https://github.com/chrisliang12"
        className="hover:text-sky-300"
      >
        https://github.com/chrisliang12
      </Link>

      <Subtitle>Feature</Subtitle>
      <ul className="list-inside list-disc indent-4">
        <li>Selective retransmission and cumulative ACK</li>
        <li>Two-way handshake process</li>
        <li>Self-designed frame header (max frame size: 64bytes)</li>
        <li>Reliable cmd parser to handle multiple cmd input at once</li>
        <li>Pass the tests with corruption rates of 60%</li>
      </ul>
      <Subtitle>Demo</Subtitle>
    </div>
  );
};

export default Proj_Transmission;
