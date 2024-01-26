/*
 * Some portion of the code in this file is derived from the chronark.com template by Andreas Thomas.
 * The original code and license information can be found at https://github.com/chronark/chronark.com.
 *
 * Copyright (c) 2023 Andreas Thomas
 * MIT License: https://opensource.org/licenses/MIT
 */
"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Navigation from "../components/navigation";
const socials = [
  {
    icon: <Linkedin size={45} />,
    href: "https://www.linkedin.com/in/aloysiusng23/",
    label: "LinkedIn",
    handle: "Aloysius Ng",
  },
  {
    icon: <Mail size={45} />,
    href: "mailto:aloysiusng5@gmail.com",
    label: "Email",
    handle: "aloysiusng5@gmail.com",
  },
  {
    icon: <Github size={45} />,
    href: "https://github.com/aloysiusng",
    label: "GitHub",
    handle: "aloysiusng",
  },
];
export default function Page() {
  return (
    <div className="block duration-500 relative transform transition-all translate-y-12 ease-out" data-replace='{ "translate-y-12": "translate-y-0" }'>
      <Navigation location="Projects" href="/projects" />
      <div className="flex flex-col items-center justify-center w-screen h-screen -mt-20">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
          {socials.map((s) => (
            <div key={s.href}>
              <Link href={s.href} target="_blank" className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16">
                <span className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent" aria-hidden="true" />
                <span className="relative z-10 flex items-center justify-center w-20 h-20 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">{s.icon}</span>
                <div className="z-10 flex flex-col items-center">
                  <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">{s.handle}</span>
                  <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">{s.label}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
