import Image from "next/image";

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Headshot() {
  await delay(1000);
  return (
    <div className="w-[250px] rounded-lg h-fit block mb-4">
      <Image
        className="rounded-lg shadow-lg"
        src="/raw-headshot.JPG"
        width={450}
        height={300}
        alt={""}
      ></Image>
    </div>
  );
}

export function SkeletonLoader() {
  return (
    <div className="w-[250px] h-[167px] rounded-lg bg-foreground/30 animate-pulse"></div>
  );
}
