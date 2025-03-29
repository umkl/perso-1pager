import Image from "next/image";

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Headshot() {
  await delay(1000);
  return (
    <div className="w-[250px] rounded-lg h-fit block mb-4 overflow-hidden">
      <Image
        className="rounded-lg overflow-hidden shadow-lg"
        src="/raw-headshot.JPG"
        width={450}
        height={300}
        alt={""}
      />
    </div>
  );
}

export function SkeletonLoader() {
  return (
    <div className="w-[250px] h-[167px] rounded-lg bg-foreground/30 animate-pulse"></div>
  );
}
