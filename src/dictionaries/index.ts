
import { en } from "./en";
import { es } from "./es";

export const dictionaries = {
  en,
  es,
};

export type Locale = keyof typeof dictionaries;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
