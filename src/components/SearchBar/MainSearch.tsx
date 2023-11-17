"use client";

import React, { useCallback, useEffect, useState, useTransition } from "react";
import { Input } from "../ui/input";
import { initTranslate } from "@/lib/Translations/translations";
import { useAction } from "@/hooks/useActions";
import { getSearchSuggestions } from "@/actions/brave/brave";
import { Search, Loader2, X } from "lucide-react";
import Suggestions from "./Suggestions";
import { setInputValue } from "@/lib/utils";
import { useClickOutside } from "@/hooks/useClickOutside";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default ({ hideCta, q, autofocus = true, path = "/search" }: { hideCta?: boolean; q?: string; autofocus?: boolean; path?: string }) => {
  const ln = "en" as "en" | "bn";
  const translate = initTranslate(ln);

  const [query, setQuery] = useState(q || "");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();

  const { action, data, error, loading, setData } = useAction(getSearchSuggestions, { debounce: true, init: { suggestions: [], query: "" } });
  const ref = useClickOutside<HTMLDivElement>(() => setShowSuggestions(false));
  const inputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current && autofocus) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    query && action(query, { params: { count: 10 } });
  }, [query]);

  useEffect(() => {
    !query && setData({ suggestions: [], query: "" });
  }, [loading, query]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        window.location.href = `${path}?q=${encodeURIComponent(query)}`;
      }

      if (!showSuggestions) {
        setShowSuggestions(true);
      }
    },
    [query, showSuggestions]
  );

  const clearQuery = useCallback(() => {
    setQuery("");
  }, []);

  const performSearch = useCallback(() => query && router.push("/search?q=" + encodeURIComponent(query)), [query]);

  return (
    <div className="flex flex-col items-center justify-center gap-8 max-w-lg w-full">
      {/* The search bar with CTA */}

      <div className={`relative w-full h-max group ${showSuggestions ? "shadow-lg" : ""}`} ref={ref}>
        <div
          className={`border-solid border border-border  w-full rounded-3xl px-4 gap-3 py-3 flex items-center ${
            showSuggestions ? "border-b-0 rounded-b-none" : ""
          }`}
        >
          {/* Show search icon when not loading, else show loading icon */}

          {!loading ? <Search className="text-border contrast-75" /> : <Loader2 className="text-border contrast-75 animate-spin" />}

          {/* The actual input */}

          <Input
            type="text"
            placeholder={translate("searchPlaceholder")}
            id="search-bar"
            className="border-none text-base w-full h-fit p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            value={query}
            onChange={(e) => setInputValue(e, setQuery)}
            onKeyDown={handleKeyDown}
            onClick={() => setShowSuggestions(true)}
            ref={inputRef}
          />

          {/* Show clear icon when query is not empty, else show nothing */}

          {query && (
            <button onClick={clearQuery}>
              <X className="text-border contrast-75" />
            </button>
          )}

          {/* Show suggestions container when the input is focused, hide when clicked outside */}

          {data && showSuggestions && (
            <Suggestions loading={loading} suggestions={data.suggestions} currentQuery={query} resultQuery={data.query} error={error} path={path} />
          )}
        </div>
      </div>

      {/* The Search CTA */}

      {!hideCta && (
        <Button className="bg-secondary transition hover:shadow-md px-5 py-2.5 text-primary/80 rounded-md hover:bg-secondary" onClick={performSearch}>
          {translate("searchButton")}
        </Button>
      )}
    </div>
  );
};
