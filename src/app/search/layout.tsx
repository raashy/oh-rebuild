import MainSearch from "@/components/SearchBar/MainSearch";
import { ImageIcon, LucideListVideo, NewspaperIcon, Search } from "lucide-react";
import Image from "next/image";
import { headers } from "next/headers";
import Tabs from "@/components/SearchLayout/Tabs";
import { PropsWithChildren, ReactNode, Suspense } from "react";
import Loading from "./loading";

export default (props: { children: ReactNode }) => {
  const headersList = headers();

  const url = headersList.get("x-your-pathname") as string;
  const query = headersList.get("x-your-query") as string;

  return (
    <main className="w-full pb-8">
      <div className="flex items-start justify-start w-full px-10 pt-6 gap-10 border-b border-solid">
        <a href="/">
          <Image src="/logo.png" alt="OceanHero Logo" width={600} height={186} className="max-w-[10.5rem]" />
        </a>
        <div className="w-full mt-2.5 flex flex-col">
          <MainSearch hideCta={true} q={query} autofocus={false} path={url} />
          <Tabs path={url} q={query} />
        </div>
      </div>

      {props.children}
    </main>
  );
};
