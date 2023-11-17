"use server";

import { formatRes } from "../utils";
import { SuggestSearchApiHeaders, SuggestSearchApiQueryParams, SuggestSearchApiResponse } from "./types/suggest";

const braveToken = process.env.BRAVE_API_KEY as string;
const braveSuggestToken = process.env.BRAVE_SUGGEST_API_KEY as string;

/**
 * Get a list of search suggestions for a given search term
 * Documentation: https://api.search.brave.com/app/documentation/suggest/query
 * @param searchTerm A search term to get suggestions for
 * @returns A list of suggestions for the given search term
 */
export const getSearchSuggestions = formatRes(
  async (
    searchTerm: string,
    options?: { params?: Omit<SuggestSearchApiQueryParams, "q">; headers?: Omit<SuggestSearchApiHeaders, "X-Subscription-Token"> }
  ) => {
    const params = new URLSearchParams();

    params.set("q", searchTerm);

    // Add optional params
    if (options?.params) {
      for (const [key, value] of Object.entries(options.params)) {
        params.set(key, value as string);
      }
    }

    const response = await fetch(`https://api.search.brave.com/res/v1/suggest/search?${params}`, {
      headers: {
        "X-Subscription-Token": braveSuggestToken,
        ...options?.headers,
      },
      next: { tags: ["suggest"] },
    });

    if (response.status === 200) {
      const data = (await response.json()) as SuggestSearchApiResponse;
      return { suggestions: data.results, query: data.query.original } as { suggestions: SuggestSearchApiResponse["results"]; query: string };
    } else {
      const error = await response.json();
      console.error(error);
      throw new Error("Error fetching search suggestions");
    }
  }
);
