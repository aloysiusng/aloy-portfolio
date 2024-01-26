"use client";
import Navigation from "../components/navigation";

export default function Page() {
  return (
    <div className="block duration-500 relative transform transition-all translate-y-12 ease-out" data-replace='{ "translate-y-12": "translate-y-0" }'>
      <Navigation location="Contact" href="/contact" />
      <div className="flex flex-col items-center justify-center w-screen h-screen"></div>
    </div>
  );
}
