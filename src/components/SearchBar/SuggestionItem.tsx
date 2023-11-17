import { SuggestResult } from "@/actions/brave/types/suggest";
import { Search } from "lucide-react";
import Link from "next/link";
import React, { useTransition } from "react";

export default ({ suggestion: { query, is_entity, img, title, description }, q, path }: { suggestion: SuggestResult; q: string; path: string }) => {
  //   console.log(query, is_entity, img, title, description);
  console.log("suggestion", path);

  return (
    <a href={`${path}?q=${encodeURIComponent(query)}`} className="flex items-center justify-start py-1 hover:bg-secondary transition px-4 gap-3">
      <Search className="text-border contrast-75 inline text-sm" size={18} />

      <span className="line-clamp-1">
        {query.split(new RegExp(`(${q})`, "i")).map((word, i) => {
          if (word.toLowerCase() !== q.toLowerCase()) {
            return (
              <span key={i} className="font-bold">
                {word}
              </span>
            );
          } else {
            return <span key={i}>{word}</span>;
          }
        })}
      </span>
    </a>
  );
};
