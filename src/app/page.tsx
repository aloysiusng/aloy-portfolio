import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="flex space-x-28">
        <Link href="/projects" className="text-lg text-slate-300 font-semibold">
          Projects
        </Link>
        <Link href="/contact" className="text-lg text-slate-300 font-semibold">
          Contact
        </Link>
      </div>
      <br></br>
      <div className="my-3">
        <p className="text-6xl text-slate-500 font-bold	font-mono tracking-widest">Aloysius</p>
      </div>
      <div className="my-5">
        <p className="px-5 text-xl text-slate-300 font-serif text-pretty">Hi, I am Aloysius</p>
      </div>
    </div>
  );
}
