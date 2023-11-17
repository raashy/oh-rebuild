import { translations } from "./translations";

export type PhrasesCollection = typeof translations;
export type Phrases = keyof PhrasesCollection["en"];
export type Languages = keyof PhrasesCollection;
