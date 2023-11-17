import MainSearch from "@/components/SearchBar/MainSearch";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex max-h-[850px] h-screen flex-col items-center justify-center gap-16 px-6 sm:px-12 md:px-24 py-16">
      <Image src="/logo.png" alt="OceanHero Logo" width={600} height={186} className="max-w-[18rem] md:max-w-[20rem]" />
      <MainSearch />
    </main>
  );
}
