import { Suspense } from "react";
import Headshot, { SkeletonLoader } from "./headshot";
import LinkIcon from "./linkicon";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="static md:fixed box-border border-b-2 md:border-b-0 md:border-r-2 border-gray-50/20 px-0 md:px-8 md:w-[14em] md:text-right text-left pt-[10px]">
        <h1 className="pb-4 md:py-4 border-b-2 text-[1.3em] border-gray-50/20 font-bold ">
          Michael
        </h1>
        <h2 className="uppercase text-2xl my-4 block md font-semibold">
          About Me
        </h2>
        <ul className=" text-2xl leading-relaxed pl-4 md:pl-0">
          <li>
            {/* <Link
              href="https://github.com/umkl"
              className="appearance-auto hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Link> */}
          </li>
          <Link href="https://github.com/umkl">
            <li>Github</li>
          </Link>
          {/* <Link href="https://github.com/umkl">
            <li>Instagram</li>
          </Link>
          <Link href="https://twitter.com/umkl">
            <li>Twitter</li>
          </Link> */}
        </ul>
        <h2 className="uppercase text-2xl my-4 block md font-semibold">Blog</h2>
        <ul className=" text-2xl leading-relaxed pl-4 md:pl-0">
          <Link href="https://github.com/umkl">
            <li>Post Archive</li>
          </Link>
        </ul>
      </nav>
      <section className="block h-full ml-0 md:ml-[16em] text-justify hyphens-auto">
        <h1 className="text-5xl mb-6 leading-relaxed font-bold">Buildfolio</h1>

        {/* <b>Contact:</b> hi@michael-ungar.com <br />
        <b>Role:</b> Full-Stack Dev <br />
        <b>Status:</b> Fulltime Employee <br />
        <b>Location:</b> Vienna, AT <br />
        <h1 className="my-4 pt-4 text-4xl/9 mb-4 font-bold border-t-2">
          Work Experience
        </h1>
        <h2>Fullstack Web Developer (2023 - Present)</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore,
          quam? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Numquam, facilis.
        </p>
        <h2>B-Tastic (2021 - 2023)</h2>
        <h1 className="my-4 pt-4 text-4xl/9 mb-4 font-bold border-t-2">
          Internships
        </h1>
        <h2>Internship Paso Solutions (2021 - 2023)</h2>
        <h2>Internship Paso Solutions (2021 - 2023)</h2>
        <h1 className="my-4 pt-4 text-4xl/9 mb-4 font-bold border-t-2">
          Education
        </h1>
        <h1 className="my-4 pt-4 text-4xl/9 mb-4 font-bold border-t-2">
          Skills & Interests
        </h1>
        <h2>Programming Languages</h2>
        Typescript.
        <h2>Technologies</h2>
        Unix/MacOS, SSG(NextJS), React, Git, Vim
        <h2>Interests</h2>
        Web Development, MCP, Security (primarily Web) */}
        <Link href="https://projects-jz0g8k0e6-bcnz.vercel.app">
          https://projects-jz0g8k0e6-bcnz.vercel.app
        </Link>
        <br />
        <Link href="https://the-evolution-challenge.vercel.app">
          https://the-evolution-challenge.vercel.app
        </Link>
        <br />
        <Link href="https://aura-habits.vercel.app">
          https://aura-habits.vercel.app
        </Link>
      </section>
    </>
  );
}
