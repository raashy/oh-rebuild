import React from "react";
import SuggestionItem from "./SuggestionItem";
import { SuggestSearchApiResponse } from "@/actions/brave/types/suggest";
import { uuid } from "uuidv4";
import { initTranslate } from "@/lib/Translations/translations";
import { AlertCircle, Loader2 } from "lucide-react";

export default ({
  suggestions,
  currentQuery,
  loading,
  resultQuery,
  error,
  path,
}: {
  suggestions: SuggestSearchApiResponse["results"];
  currentQuery: string;
  loading: boolean;
  resultQuery: string;
  error: string | null;
  path: string;
}) => {
  const translate = initTranslate("en");

  return (
    <div className="flex z-10 flex-col bg-background shadow-lg min-h-[8rem] max-h-[30rem] top-[100%] left-0 absolute border border-solid border-t-0 w-full rounded-b-3xl">
      <div className="border-t border-solid w-[calc(100% - 1rem)] mx-4">
        {(!currentQuery || !suggestions?.length || error) && (
          <div className="text-primary/80 min-h-[8rem] flex justify-center items-center gap-3">
            {error ? (
              <>
                {translate("genericError")}
                <AlertCircle className="text-border contrast-75" />
              </>
            ) : loading || currentQuery !== resultQuery || error ? (
              <>
                {translate("loadingSuggestions")}
                <Loader2 className="text-border contrast-75 animate-spin" />
              </>
            ) : currentQuery ? (
              translate("noSuggestions")
            ) : (
              translate("suggestionsPlaceholder")
            )}
          </div>
        )}
      </div>

      {suggestions?.length > 0 && !error && currentQuery && (
        <div className="flex flex-col w-full pt-1 pb-2">
          {suggestions.map((suggestion) => {
            return <SuggestionItem path={path} suggestion={suggestion} key={uuid()} q={resultQuery} />;
          })}
        </div>
      )}
    </div>
  );
};
