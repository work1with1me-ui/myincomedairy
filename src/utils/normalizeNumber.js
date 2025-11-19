// // ✅ Universal Digit Normalizer for All Indian Languages
// // Converts localized numerals (Devanagari, Bengali, Tamil, Telugu, Kannada, Malayalam, Gujarati, Gurmukhi, Odia) → English digits

// export const normalizeDigits = (val) => {
//   if (val === null || val === undefined) return 0;
//   if (typeof val !== "string") return Number(val) || 0;

//   // Map of Indian numeral systems → English digits
//   const map = {
//     // Devanagari (Hindi, Marathi, Nepali)
//     '०':'0','१':'1','२':'2','३':'3','४':'4','५':'5','६':'6','७':'7','८':'8','९':'9',
//     // Bengali (Bangla, Assamese)
//     '০':'0','১':'1','২':'2','৩':'3','৪':'4','৫':'5','৬':'6','৭':'7','৮':'8','৯':'9',
//     // Gurmukhi (Punjabi)
//     '੦':'0','੧':'1','੨':'2','੩':'3','੪':'4','੫':'5','੬':'6','੭':'7','੮':'8','੯':'9',
//     // Gujarati
//     '૦':'0','૧':'1','૨':'2','૩':'3','૪':'4','૫':'5','૬':'6','૭':'7','૮':'8','૯':'9',
//     // Oriya / Odia
//     '୦':'0','୧':'1','୨':'2','୩':'3','୪':'4','୫':'5','୬':'6','୭':'7','୮':'8','୯':'9',
//     // Tamil
//     '௦':'0','௧':'1','௨':'2','௩':'3','௪':'4','௫':'5','௬':'6','௭':'7','௮':'8','௯':'9',
//     // Telugu
//     '౦':'0','౧':'1','౨':'2','౩':'3','౪':'4','౫':'5','౬':'6','౭':'7','౮':'8','౯':'9',
//     // Kannada
//     '೦':'0','೧':'1','೨':'2','೩':'3','೪':'4','೫':'5','೬':'6','೭':'7','೮':'8','೯':'9',
//     // Malayalam
//     '൦':'0','൧':'1','൨':'2','൩':'3','൪':'4','൫':'5','൬':'6','൭':'7','൮':'8','൯':'9'
//   };

//   // Replace any local digits with their English equivalents
//   const cleaned = val.replace(
//     /[०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯]/g,
//     (digit) => map[digit] || digit
//   );

//   // Remove commas/spaces, convert to number safely
//   return Number(cleaned.replace(/[^0-9.\-]/g, "")) || 0;
// };


// src/utils/normalizeDigits.js

// const digitMap = {
//   "०": "0","१": "1","२": "2","३": "3","४": "4","५": "5","६": "6","७": "7","८": "8","९": "9",
//   "০": "0","১": "1","২": "2","৩": "3","৪": "4","৫": "5","৬": "6","৭": "7","৮": "8","৯": "9",
//   "૦": "0","૧": "1","૨": "2","૩": "3","૪": "4","૫": "5","૬": "6","૭": "7","૮": "8","૯": "9",
//   "೦": "0","೧": "1","೨": "2","೩": "3","೪": "4","೫": "5","೬": "6","೭": "7","೮": "8","೯": "9",
//   "൦": "0","൧": "1","൨": "2","൩": "3","൪": "4","൫": "5","൬": "6","൭": "7","൮": "8","൯": "9",
//   "௦": "0","௧": "1","௨": "2","௩": "3","௪": "4","௫": "5","௬": "6","௭": "7","௮": "8","௯": "9",
//   "౦": "0","౧": "1","౨": "2","౩": "3","౪": "4","౫": "5","౬": "6","౭": "7","౮": "8","౯": "9",
//   "୦": "0","୧": "1","୨": "2","୩": "3","୪": "4","୫": "5","୬": "6","୭": "7","୮": "8","୯": "9",
// };

// export const normalizeDigits = (input) => {
//   if (typeof input !== "string") return input;
//   return input.split("").map((ch) => digitMap[ch] ?? ch).join("");
// };



// DairyProduction.jsx mein yeh helper function add karo
// src/utils/numberNormalizer.js

/**
 * Converts any language numerals to English numbers
 * Works with: Malayalam, Hindi, Kannada, Tamil, Telugu, Bengali, Gujarati, etc.
//  */
// export const normalizeNumber = (value) => {
//   if (value === null || value === undefined || value === "") return "";
  
//   const numeralMap = {
//     // Malayalam
//     '൦': '0', '൧': '1', '൨': '2', '൩': '3', '൪': '4',
//     '൫': '5', '൬': '6', '൭': '7', '൮': '8', '൯': '9',
//     // Hindi/Devanagari
//     '०': '0', '१': '1', '२': '2', '३': '3', '④': '4',
//     '५': '5', '६': '6', '७': '7', '८': '8', '९': '9',
//     // Kannada
//     '೦': '0', '೧': '1', '೨': '2', '೩': '3', '೪': '4',
//     '೫': '5', '೬': '6', '೭': '7', '೮': '8', '೯': '9',
//     // Bengali
//     '০': '0', '১': '1', '২': '2', '৩': '3', '৪': '4',
//     '৫': '5', '৬': '6', '৭': '7', '৮': '8', '৯': '9',
//     // Tamil
//     '௦': '0', '௧': '1', '௨': '2', '௩': '3', '௪': '4',
//     '௫': '5', '௬': '6', '௭': '7', '௮': '8', '௯': '9',
//     // Gujarati
//     '૦': '0', '૧': '1', '૨': '2', '૩': '3', '૪': '4',
//     '૫': '5', '૬': '6', '૭': '7', '૮': '8', '૯': '9',
//     // Telugu
//     '౦': '0', '౧': '1', '౨': '2', '౩': '3', '౪': '4',
//     '౫': '5', '౬': '6', '౭': '7', '౮': '8', '౯': '9',
//     // Marathi (same as Hindi but including for completeness)
//     '०': '0', '१': '1', '२': '2', '३': '3', '४': '4',
//     '५': '5', '६': '6', '७': '7', '८': '8', '९': '9',
//   };
  
//   let normalized = String(value);
  
//   // Replace all foreign numerals with English
//   Object.keys(numeralMap).forEach(foreign => {
//     normalized = normalized.replace(new RegExp(foreign, 'g'), numeralMap[foreign]);
//   });
  
//   // Remove any non-numeric characters except decimal point and minus sign
//   normalized = normalized.replace(/[^\d.-]/g, '');
  
//   return normalized;
// };

// /**
//  * Parse normalized number to float/int
//  */
// export const parseNormalizedNumber = (value) => {
//   const normalized = normalizeNumber(value);
//   if (normalized === "" || normalized === "-") return 0;
//   return parseFloat(normalized) || 0;
// };

// /**
//  * Custom hook for number inputs with auto-normalization
//  */
// export const useNormalizedInput = (value, onChange) => {
//   const handleChange = (e) => {
//     const inputValue = e.target.value;
//     const normalized = normalizeNumber(inputValue);
//     onChange(normalized);
//   };

//   const handleBlur = (e) => {
//     // Extra normalization on blur in case Google Translate changed it
//     const normalized = normalizeNumber(e.target.value);
//     if (normalized !== e.target.value) {
//       e.target.value = normalized;
//       onChange(normalized);
//     }
//   };

//   return {
//     value: value || "",
//     onChange: handleChange,
//     onBlur: handleBlur,
//     onInput: (e) => {
//       // Real-time fix during typing
//       const normalized = normalizeNumber(e.target.value);
//       if (normalized !== e.target.value) {
//         e.target.value = normalized;
//       }
//     }
//   };
// };