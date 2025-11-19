// src/utils/i18nLoader.js
export async function loadTranslation(languageCode) {
  const lang = languageCode || localStorage.getItem("vetz_selected_lang") || "en";

  try {
    const translations = await import(`../locales/${lang}.json`);
    return translations.default;
  } catch (err) {
    console.warn(`⚠️ Translation file not found for ${lang}, falling back to English`);
    const translations = await import(`../locales/en.json`);
    return translations.default;
  }
}
