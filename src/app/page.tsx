import { Suspense } from "react";
import Headshot, { SkeletonLoader } from "./headshot";
import LinkIcon from "./linkicon";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <nav className="static md:fixed border-r-2 border-gray-50 pt-4 px-4 w-56">
      <h1 className="text-right py-4 border-b-2 border-gray-50 font-bold">M. UNGAR</h1>
      <h2 className="text-right my-4">ABOUT ME</h2>
    </nav>
    <section className="block h-full ml-0 md:ml-64 pt-4 text-justify hyphens-auto">
      <h1>Resume</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, quam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, facilis.</p>
    </section>
    </>
  );
}
