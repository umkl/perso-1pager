"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="z-10 container mx-auto mt-[30vh]">
      <div className="rounded-lg w-[320px] h-[200px] bg-red-300"></div>
      <h1 className="font-bold mt-4 text-[1.5rem]">Helloski</h1>
      <p className="text-[1rem]">
        I am Michael and these are the things I am currently building:
      </p>
      <div className="my-6">
        <h2 className="text-[1.2rem] font-bold">intelligent-athletics.com</h2>
        <p>A plattform where you can create exercises</p>
      </div>
    </main>
  );
}
