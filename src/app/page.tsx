import { Suspense } from "react";
import Headshot, { SkeletonLoader } from "./headshot";
import LinkIcon from "./linkicon";
import Link from "next/link";

export default function Home() {
  return (
    <main className="z-10 container mx-auto grid grid-rows-[200px_auto_auto_auto_1fr_100px] md:grid-rows-[200px_1fr_50px_100px_100px] grid-cols-3 md:grid-cols-6  h-full ">
      <div className="col-start-1 col-span-3 md:col-span-6 row-start-2 md:mb-0">
        <Suspense fallback={<SkeletonLoader />}>
          <Headshot />
        </Suspense>
        <h1 className="font-bold text-[2rem]">Hello</h1>
        <p className="text-[1.3rem] mb-4">
          I am Michael and these are the things I am currently building:
        </p>
        <div className="group mb-4 hover:text-blue-200 cursor-pointer">
          <h2 className="text-[1.4rem] font-bold inline-block mb-2 group-hover:underline  cursor-pointer">
            intelligent-athletics.com
          </h2>
          <LinkIcon href="https://intelligent-athletics.com" />
          <p className="text-[1.3rem]">
            A plattform to easily schedule exercises.
          </p>
        </div>
      </div>
      <div className="row-start-3 md:row-start-4 col-start-1 col-span-3 flex flex-col justify-end h-full relative mb-4 md:mb-0">
        <h2 className="font-bold text-[1.5rem] mb-2">Social Media</h2>
        <p className="text-[1.3rem] hover:underline hover:italic cursor-pointer mb-2">
          <b>Medium</b> - Bolzagg{" "}
          <span className="md:hidden lg:inline">-&nbsp;</span>
          <br className="hidden md:block lg:hidden" />
          <span className="text-green-500">Last post 2 days ago</span>
        </p>
        <p className="text-[1.3rem] hover:underline hover:italic cursor-pointer">
          <b>Youtube</b> - Bolzagg{" "}
          <span className="md:hidden lg:inline">-&nbsp;</span>
          <br className="hidden md:block lg:hidden" />
          <span className="text-green-400">Last video 5 days ago</span>
        </p>
      </div>
      <div className="row-start-4 md:row-start-4 col-start-1 col-span-3 md:col-start-4 md:col-span-3 flex flex-col justify-end h-full text-left md:text-right mb-4 md:mb-0">
        <h2 className="text-[1.5rem] font-bold mb-2">More</h2>
        <Link href="https://read.cv/uvenz">
          <p className="text-[1.3rem] hover:underline hover:italic cursor-pointer mb-2">
            Take a look at my <b>CV</b>
          </p>
        </Link>
        <Link href="mailto:mail@michael-ungar.com">
          <p className="text-[1.3rem] hover:underline hover:italic cursor-pointer">
            Say <b>hello@michael-ungar.com</b>
          </p>
        </Link>
        {/* <p className="text-[1.3rem] hover:underline hover:italic cursor-pointer">
          Impressum
        </p> */}
      </div>
    </main>
  );
}
