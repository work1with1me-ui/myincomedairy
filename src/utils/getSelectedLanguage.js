// src/utils/getSelectedLanguage.js
export const getSelectedLanguage = () => {
  try {
    const lang = localStorage.getItem("vetz_selected_lang") || "en";

    // Map Google Translate codes to your GeneratePdf language keys
    switch (lang) {
      case "mr":
        return "marathi";
      case "hi":
        return "hindi";
      case "en":
        return "english";
      default:
        return "english"; // fallback
    }
  } catch (err) {
    console.warn("Error reading language:", err);
    return "english";
  }
};
