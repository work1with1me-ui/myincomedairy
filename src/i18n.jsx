import { createContext, useContext, useEffect, useState } from "react";

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [translations, setTranslations] = useState({});
  const [lang, setLang] = useState(
    localStorage.getItem("vetz_selected_lang") || "en"
  );

  useEffect(() => {
    import(`./locales/${lang}.json`)
      .then((data) => setTranslations(data))
      .catch(() => {
        console.warn("Language not found, fallback English");
        import("./locales/en.json").then((data) => setTranslations(data));
      });
  }, [lang]);

  const changeLang = (newLang) => {
    localStorage.setItem("vetz_selected_lang", newLang);
    setLang(newLang);
  };

  return (
    <TranslationContext.Provider
      value={{ t: translations, lang, changeLang }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

// Custom Hook
export const useTranslate = () => useContext(TranslationContext);


// import { createContext, useContext, useEffect, useState } from "react";

// const TranslationContext = createContext();

// export const TranslationProvider = ({ children }) => {
//   const [translations, setTranslations] = useState({});
//   const [lang, setLang] = useState(
//     localStorage.getItem("vetz_selected_lang") || "en"
//   );

//   // 🔹 Load language JSON dynamically
//   useEffect(() => {
//     import(`./locales/${lang}.json`)
//       .then((data) => setTranslations(data))
//       .catch(() => {
//         console.warn("Language not found, fallback to English");
//         import("./locales/en.json").then((data) => setTranslations(data));
//       });
//   }, [lang]);

//   // 🔹 Function to switch language
//   const changeLang = (newLang) => {
//     localStorage.setItem("vetz_selected_lang", newLang);
//     setLang(newLang);
//   };

//   return (
//     <TranslationContext.Provider value={{ t: translations, lang, changeLang }}>
//       {children}
//     </TranslationContext.Provider>
//   );
// };

// // ✅ Custom Hook (Enhanced)
// export const useTranslate = () => {
//   const { t, lang, changeLang } = useContext(TranslationContext);

//   // Translation function with placeholder support
//   const translate = (key, replacements = {}) => {
//     let text = t[key] || key; // fallback to key if missing

//     // Replace {placeholders} dynamically
//     Object.keys(replacements).forEach((placeholder) => {
//       const regex = new RegExp(`{${placeholder}}`, "g");
//       text = text.replace(regex, replacements[placeholder]);
//     });

//     return text;
//   };

//   return { t: translate, lang, changeLang };
// };
