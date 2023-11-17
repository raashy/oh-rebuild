"use client";

import { ImageIcon, LucideListVideo, NewspaperIcon, Search } from "lucide-react";
import React from "react";

const Tabs = ({ path, q }: { path: string; q: string }) => {
  const tabs = [
    {
      label: "All",
      icon: Search,
      href: `/search?q=${encodeURIComponent(q)}`,
    },
    {
      label: "Images",
      icon: ImageIcon,
      href: `/search/images?q=${encodeURIComponent(q)}`,
    },
    {
      label: "Videos",
      icon: LucideListVideo,
      href: `/search/videos?q=${encodeURIComponent(q)}`,
    },
    {
      label: "News",
      icon: NewspaperIcon,
      href: `/search/news?q=${encodeURIComponent(q)}`,
    },
  ];

  const selectedTab = tabs.find((tab) => tab.href.includes(path)) || tabs[0];

  console.log(path, q);

  return (
    <div className="flex gap-12 mt-3 pl-4">
      {tabs.map(({ label, icon: Icon, href }) => (
        <a
          href={href}
          key={label}
          className={`flex relative items-center justify-start rounded-sm py-3 hover:opacity-80 transition  gap-2 ${
            selectedTab.label === label ? "opacity-100 text-oceanblue" : "opacity-50"
          }`}
        >
          <Icon className="inline text-sm" size={18} />
          <span className="line-clamp-1">{label}</span>

          {selectedTab.label === label && <div className="w-full h-[2px] bg-oceanblue absolute bottom-0 left-0"></div>}
        </a>
      ))}
    </div>
  );
};

export default Tabs;
