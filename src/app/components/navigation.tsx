"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface NavigationProps {
  location?: string;
  href?: string;
}

export default function Navigation({ location = "", href = "" }: NavigationProps) {
  return (
    <div className="sticky top-0 z-50 p-4">
      <div className="flex justify-between px-4">
        <Link href="/" className="flex items-center text-lg text-slate-300 font-semibold mr-5">
          <ChevronLeft strokeWidth={3} size={48} />
          Home
        </Link>
        <Link href={href} className="flex items-center text-lg text-slate-300 font-semibold ml-5">
          {location}
          <ChevronRight strokeWidth={3} size={48} />
        </Link>
      </div>
    </div>
  );
}
