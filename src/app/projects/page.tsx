"use client";
import Navigation from "../components/navigation";

export default function Page() {
  return (
    <>
      <Navigation location="Contact" href="/contact" />
      <div className="flex flex-col items-center justify-center w-screen h-screen"></div>
    </>
  );
}
