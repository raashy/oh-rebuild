import { Languages, Phrases } from "./types";

/**
 * Translations for the app
 * Add new translations here
 */
export const translations = {
  en: {
    searchButton: "Ocean Search",
    searchPlaceholder: "Search to save the ocean",
    noRecentSearches: "Keep searching to see your recent searches here",
    loadingSuggestions: "Loading suggestions",
    noSuggestions: "No suggestions found",
    suggestionsPlaceholder: "Type something to see suggestions",
    genericError: "Something went wrong",
  },
  bn: {
    searchButton: "অনুসন্ধান",
    searchPlaceholder: "সমুদ্র সংরক্ষণ করতে অনুসন্ধান করুন",
    noRecentSearches: "আপনার সাম্প্রতিক অনুসন্ধানগুলি দেখতে অনুসন্ধান করুন",
    loadingSuggestions: "পরামর্শ লোড হচ্ছে",
    noSuggestions: "কোনও পরামর্শ পাওয়া যায়নি",
    suggestionsPlaceholder: "পরামর্শ দেখতে কিছু লিখুন",
    genericError: "কিছু ভুল হয়েছে",
  },
};

/* 
  Helper function to get a translation for a given language and key
  @param ln - The language to get the translation for
  @param key - The key of the translation to get
  @returns The translation for the given language and key
*/
export function getTranslation<T>(ln: Languages, key: Phrases) {
  return translations?.[ln]?.[key] ?? translations.en[key];
}

/* 
  Helper function to generate a translation function for a given language
  @param ln - The language to get the translation for
  @returns A function that takes a key and returns the translation for the given language and key
*/
export function initTranslate(ln: Languages) {
  return (key: Phrases) => getTranslation(ln, key);
}
