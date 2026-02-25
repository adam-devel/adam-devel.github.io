import { Translation, CalloutTranslation } from "./locales/definition"
import enUs from "./locales/en-US"
import fr from "./locales/fr-FR"
import it from "./locales/it-IT"

export const TRANSLATIONS = {
  "en-US": enUs,
  "fr-FR": fr,
  "it-IT": it,
} as const

export const defaultTranslation = "en-US"
export const i18n = (locale: ValidLocale): Translation => TRANSLATIONS[locale ?? defaultTranslation]
export type ValidLocale = keyof typeof TRANSLATIONS
export type ValidCallout = keyof CalloutTranslation
