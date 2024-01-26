import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="flex space-x-28">
        <Link href="/projects" className="text-lg text-slate-300 font-semibold font-mono">
          Projects
        </Link>
        <Link href="/contact" className="text-lg text-slate-300 font-semibold font-mono">
          Contact
        </Link>
      </div>
      <br></br>
      <div className="my-3">
        <Image src="/aloy.png" width={300} height={300} alt="Aloysius" />
      </div>
      <div className="my-5">
        <p className="px-5 text-xl text-slate-400 font-mono text-pretty text-center">🚀 Welcome to my digital space! I am Aloysius Ng, a highly motivated and results-driven software engineer.</p>
        <p className="px-5 text-xl text-slate-400 font-mono text-pretty text-center">Browse around to see what my friends and I have done!</p>
      </div>
    </div>
  );
}
