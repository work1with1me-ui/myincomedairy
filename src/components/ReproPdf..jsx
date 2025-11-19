

// import pdfMake from "pdfmake/build/pdfmake";
// import store from "../redux/store";
// import NotoSansDevanagariBase64 from "../assets/fonts/NotoSansDevanagari-Regular";
// import Roboto from "../assets/fonts/RobotoRegular";
// import { stableExpensesDefault, foodExpensesDefault, vaidanExpensesDefault } from "../data/expensesDefaults";
// import { data, useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import vetrinaLogoBase64 from "../assets/fonts/VetrinaLogoBase";
// import NotoSansBengaliBase64 from "../assets/fonts/NotoSansBengali";
// import NotoSansTamilBase64 from "../assets/fonts/NotoSansTamil";

// pdfMake.vfs = pdfMake.vfs || {};
// pdfMake.vfs["NotoSansDevanagari-Regular.ttf"] = NotoSansDevanagariBase64;
// pdfMake.vfs["Roboto-Regular.ttf"] = Roboto;
// pdfMake.vfs["NotoSansBengali-Regular.ttf"] = NotoSansBengaliBase64;
// pdfMake.vfs["NotoSansTamil-Regular.ttf"] = NotoSansTamilBase64;

// pdfMake.fonts = {
//   NotoSansDevanagari: {
//     normal: "NotoSansDevanagari-Regular.ttf",
//     bold: "NotoSansDevanagari-Regular.ttf",
//     italics: "NotoSansDevanagari-Regular.ttf",
//     bolditalics: "NotoSansDevanagari-Regular.ttf",
//   },
//   Roboto: {
//     normal: "Roboto-Regular.ttf",
//     bold: "Roboto-Regular.ttf",
//     italics: "Roboto-Regular.ttf",
//     bolditalics: "Roboto-Regular.ttf"
//   },

//    NotoSansBengali: {
//     normal: "NotoSansBengali-Regular.ttf",
//     bold: "NotoSansBengali-Regular.ttf",
//     italics: "NotoSansBengali-Regular.ttf",
//     bolditalics: "NotoSansBengali-Regular.ttf"
//   },
//    NotoSansTamil: {
//     normal: "NotoSansTamil-Regular.ttf",
//     bold: "NotoSansTamil-Regular.ttf",
//     italics: "NotoSansTamil-Regular.ttf",
//     bolditalics: "NotoSansTamil-Regular.ttf"
//   },

// };

// // Helper function to get translated item name
// const getTranslatedItem = (item, lang) => {
//   if (typeof item === "object" && item !== null) {
//     return item[lang] || item.en || item.mr || "";
//   }
//   return item || "";
// };

// // Helper function to safely format value for PDF cells
// const safeCell = (value, defaultValue = "0") => {
//   const val = value !== undefined && value !== null && value !== "" ? value : defaultValue;
//   return { text: String(val) };
// };


// export const generateDairyReport = async (language = "mr") => {
//   // Import translation file dynamically

//   // const location = useLocation();
//   // const dispatch = useDispatch();

//   let translations;
//   try {
//     const langModule = await import(`../locales/${language}.json`);
//     translations = langModule.default;
//   } catch (err) {
//     console.warn(`Translation file not found for ${language}, falling back to English`);
//     const langModule = await import(`../locales/en.json`);
//     translations = langModule.default;
//   }

//   const t = translations;
//   // const font = language === "en" ? "Roboto" : "NotoSansDevanagari";
//   const font =
//   language === "en" ? "Roboto" :
//   language === "hi" ? "NotoSansDevanagari" :
//   language === "mr" ? "NotoSansDevanagari" :
//   language === "bn" ? "NotoSansBengali" :
//   language === "ta" ? "NotoSansTamil" :
//   language === "te" ? "NotoSansTelugu" :
//   language === "gu" ? "NotoSansGujarati" :
//   language === "kn" ? "NotoSansKannada" :
//   language === "ml" ? "NotoSansMalayalam" :
//   language === "pa" ? "NotoSansGurmukhi" :
//   language === "or" ? "NotoSansOriya" :
//   language === "as" ? "NotoSansBengali" :
//   language === "kok" ? "NotoSansDevanagari" :
//   language === "sd" ? "NotoSansArabic" :
//   language === "ks" ? "NotoNastaliqUrdu" :
//   "Roboto";


//   const animalType = location.pathname.includes("buffalo") ? "buffalo" : "cow";
//   const animalLabel = animalType === "cow" ? t.cowLabel : t.buffaloLabel;


//   const state = store.getState();
//   const animals = [
//     { type: "cow", label: t.cowLabel || t.cow || "Cow", data: state.dairy?.cow || {} },
//     { type: "buffalo", label: t.buffaloLabel || t.buffalo || "Buffalo", data: state.dairy?.buffalo || {} },
//   ];


//   // 🧮 Calculate reproductive cycle dates
// const inseminationDate = data.inseminationDate || null;

// let expectedDate = "";
// let transitionDate = "";
// let nextHeatRange = "";

// if (inseminationDate) {
//   const baseDate = new Date(inseminationDate);
//   if (!isNaN(baseDate.getTime())) {
//     // Gestation: Cow = 280, Buffalo = 310
//     const gestationDays = type === "buffalo" ? 310 : 280;

//     const expected = new Date(baseDate);
//     expected.setDate(expected.getDate() + gestationDays);

//     const transition = new Date(expected);
//     transition.setDate(transition.getDate() - 30);

//     const heatStart = new Date(baseDate);
//     heatStart.setDate(heatStart.getDate() + 19);
//     const heatEnd = new Date(baseDate);
//     heatEnd.setDate(heatEnd.getDate() + 21);

//     const formatDate = (d) => {
//       const day = d.getDate().toString().padStart(2, "0");
//       const month = d.toLocaleString("en-US", { month: "short" });
//       const year = d.getFullYear();
//       return `${day}-${month}-${year}`;
//     };

//     expectedDate = formatDate(expected);
//     transitionDate = formatDate(transition);
//     nextHeatRange = `${formatDate(heatStart)} to ${formatDate(heatEnd)}`;
//   }
// }

//   const content = [];




//   // Generate report for each animal (Cow + Buffalo)
//   for (let i = 0; i < animals.length; i++) {
//     const { type, label, data } = animals[i];

//     const isCow = type == "cow" // detect if current animal is cow


//    const inseminationDate = data.inseminationDate || null;

// let expectedDate = "";
// let transitionDate = "";
// let nextHeatRange = "";

// if (inseminationDate) {
//   const baseDate = new Date(inseminationDate);
//   if (!isNaN(baseDate.getTime())) {
//     // Gestation: Cow = 280, Buffalo = 310
//     const gestationDays = type === "buffalo" ? 310 : 280;

//     const expected = new Date(baseDate);
//     expected.setDate(expected.getDate() + gestationDays);

//     const transition = new Date(expected);
//     transition.setDate(transition.getDate() - 30);

//     const heatStart = new Date(baseDate);
//     heatStart.setDate(heatStart.getDate() + 19);
//     const heatEnd = new Date(baseDate);
//     heatEnd.setDate(heatEnd.getDate() + 21);

//     const formatDate = (d) => {
//       const day = d.getDate().toString().padStart(2, "0");
//       const month = d.toLocaleString("en-US", { month: "short" });
//       const year = d.getFullYear();
//       return `${day}-${month}-${year}`;
//     };

//     expectedDate = formatDate(expected);
//     transitionDate = formatDate(transition);
//     nextHeatRange = `${formatDate(heatStart)} to ${formatDate(heatEnd)}`;
//   }
// }


//     // Add page break for second animal
//     if (i > 0) {
//       content.push({ text: "", pageBreak: "before" });
//     }

//     // vetrina logo 
//     content.push({
//       image: vetrinaLogoBase64,
//       width: 100,
//       alignment: 'left',
//       margin: [0, 30, 0, 0]
//     });

//     content.push({
//       text: "Vetrina Healthcare Pvt.Ltd.",
//       color : "purple",
//       width: 80,
//       alignment: 'right',
//       margin: [0, 20, 0, 0]
//     });

// //        header: function(currentPage, pageCount) {
// //   return {
// //     image: LOGO_BASE64,
// //     width: 60,
// //     alignment: 'right',
// //     margin: [0, 15, 40, 0]
// //   };
// // }

//     // Title
//     content.push({
//       text: `${t.reproManagementLabel || "Reproduction Manangement"} (${label})`,
//       style: "header",
//       color: "#1B5E20",
//       margin: [0, 0, 0, 5],
//     });

//     // Date
//     content.push({
//       text: `${t.date || "Date"}: ${new Date().toLocaleDateString("en-IN")}`,
//       fontSize: 12,
//       color: "#505050",
//       margin: [0, 0, 0, 13],
//     });

//     //  reproduction Info
//     content.push({
//       text: `${t.reproManagementLabel || "Reproduction Manangement"}`,
//       fontSize: 12,
//       bold: true,
//       margin: [0, 0, 0, 5],
//     });


//     content.push({
//       table: {
//         widths: ["*", "*"],
//         body: [
//           [
//             { text: t.details || "Details", style: "tableHeader", fillColor: "#4CAF50" },
//             { text: t.value || "Value", style: "tableHeader", fillColor: "#4CAF50" },
//           ],
//           [
//             { text: `${label} ${t.aimalTagLabel}`},
//             safeCell(data.inseminationDate, "-")
//           ],
//           [  // woriking 
//             { text: `${t.reproStartingDate}` || "Milk Producing" },
//             safeCell(data.expectedDate, "-")
//           ],
//           [  // working 
//             { text: `${t.aiReproDate}` || "Working" },
//             safeCell(data.transitionDate, "-")
//           ],
//           [
//             { text: t.stallionDatails  },
//             safeCell("-")
//           ],
//           [
//             { text: t.reproNextDate || "Milk Rate" },
//             safeCell(data.transitionDate, "-")
//           ],
//           [
//             { text: t.reproductionDate || "Avg Milk (Producing)" },
//             safeCell(avgMilkingPerAnimal, "0.00")
//           ],
//           [
//             { text: t.periodOfChange || "Avg Milk (All)" },
//             safeCell(avgMilkPerAnimal, "0.00")
//           ],
//         ],
//       },
//       style: "table",
//       margin: [0, 0, 0, 10],
//     });

//   }



//   // Document definition
//   const docDefinition = {
//     content: content, 
//     // Footer - optional (हर page पर नीचे)
//     footer: function(currentPage, pageCount) {
//       return {
//         text: `© ${new Date().getFullYear()} ${"Vetrina Healthcare Pvt.Ltd." || "Dairy Management System"}`,
//         alignment: 'center',
//         fontSize: 9,
//         color: '#888',
//         margin: [0, 10, 0, 0]
//       };
//     },

//     defaultStyle: {
//       font: font,
//     },
//     styles: {
//       header: {
//         fontSize: 18,
//         bold: true,
//       },
//       table: {
//         fontSize: 11,
//         alignment: "center",
//       },
//       tableHeader: {
//         bold: true,
//         fontSize: 11,
//         color: "white",
//         alignment: "center",
//       },
//     },
//     defaultStyle: {
//       font: font,
//     },
//     styles: {
//       header: {
//         fontSize: 18,
//         bold: true,
//       },
//       table: {
//         fontSize: 11,
//         alignment: "center",
//       },
//       tableHeader: {
//         bold: true,
//         fontSize: 11,
//         color: "white",
//         alignment: "center",
//       },
//     },
//     pageSize: "A4",
//     pageMargins: [40, 40, 40, 40],
//   };


//   // Generate and download PDF
//   // const fileName = t.fileNameLabel || "Dairy_Management_Report";
//   const fileName =  "Reproduction_Management_Report";
//   pdfMake.createPdf(docDefinition).download(
//     `${fileName}_${new Date().toLocaleDateString("en-IN")}.pdf`
//   );
// };


// generateDairyReport.js


// original code 
// import pdfMake from "pdfmake/build/pdfmake";
// import store from "../redux/store";
// import NotoSansDevanagariBase64 from "../assets/fonts/NotoSansDevanagari-Regular";
// import Roboto from "../assets/fonts/RobotoRegular";
// import { stableExpensesDefault, foodExpensesDefault, vaidanExpensesDefault } from "../data/expensesDefaults";
// import { useLocation } from "react-router-dom";
// import vetrinaLogoBase64 from "../assets/fonts/VetrinaLogoBase";
// import NotoSansBengaliBase64 from "../assets/fonts/NotoSansBengali";
// import NotoSansTamilBase64 from "../assets/fonts/NotoSansTamil";
// import textLogoBase64 from "../assets/fonts/TextLogoBase";

// // register VFS fonts
// pdfMake.vfs = pdfMake.vfs || {};
// pdfMake.vfs["NotoSansDevanagari-Regular.ttf"] = NotoSansDevanagariBase64;
// pdfMake.vfs["Roboto-Regular.ttf"] = Roboto;
// pdfMake.vfs["NotoSansBengali-Regular.ttf"] = NotoSansBengaliBase64;
// pdfMake.vfs["NotoSansTamil-Regular.ttf"] = NotoSansTamilBase64;

// // fonts mapping (fallbacks kept minimal)
// pdfMake.fonts = {
//   NotoSansDevanagari: {
//     normal: "NotoSansDevanagari-Regular.ttf",
//     bold: "NotoSansDevanagari-Regular.ttf",
//     italics: "NotoSansDevanagari-Regular.ttf",
//     bolditalics: "NotoSansDevanagari-Regular.ttf",
//   },
//   Roboto: {
//     normal: "Roboto-Regular.ttf",
//     bold: "Roboto-Regular.ttf",
//     italics: "Roboto-Regular.ttf",
//     bolditalics: "Roboto-Regular.ttf"
//   },
//   NotoSansBengali: {
//     normal: "NotoSansBengali-Regular.ttf",
//     bold: "NotoSansBengali-Regular.ttf",
//     italics: "NotoSansBengali-Regular.ttf",
//     bolditalics: "NotoSansBengali-Regular.ttf"
//   },
//   NotoSansTamil: {
//     normal: "NotoSansTamil-Regular.ttf",
//     bold: "NotoSansTamil-Regular.ttf",
//     italics: "NotoSansTamil-Regular.ttf",
//     bolditalics: "NotoSansTamil-Regular.ttf"
//   }
// };

// // helpers
// const getTranslatedItem = (item, lang) => {
//   if (typeof item === "object" && item !== null) {
//     return item[lang] || item.en || item.mr || "";
//   }
//   return item || "";
// };

// const safeCell = (value, defaultValue = "-") => {
//   const val = value !== undefined && value !== null && value !== "" ? value : defaultValue;
//   return { text: String(val), margin: [0, 6, 0, 6] };
// };

// const formatDateDDMonYYYY = (d) => {
//   if (!d) return "";
//   const date = new Date(d);
//   if (isNaN(date.getTime())) return "";
//   const day = date.getDate().toString().padStart(2, "0");
//   const month = date.toLocaleString("en-US", { month: "short" }); // e.g. Nov
//   const year = date.getFullYear();
//   return `${day}-${month}-${year}`;
// };

// // main export
// export const generateReproReport = async (language = "mr") => {
//   // load translations (fallback to en)
//   let translations;
//   try {
//     const langModule = await import(`../locales/${language}.json`);
//     translations = langModule.default;
//   } catch (err) {
//     try {
//       const langModule = await import(`../locales/en.json`);
//       translations = langModule.default;
//     } catch (e) {
//       translations = {};
//     }
//   }
//   const t = translations || {};

//   // choose pdf font based on language (fall back to Roboto)
//   const font =
//     language === "en" ? "Roboto" :
//       language === "hi" ? "NotoSansDevanagari" :
//         language === "mr" ? "NotoSansDevanagari" :
//           language === "bn" ? "NotoSansBengali" :
//             language === "ta" ? "NotoSansTamil" :
//               "Roboto";

//   // read redux state
//   const state = store.getState();

//   const animals = [
//     { type: "cow", label: t.cowLabel || "Cow", data: state.dairy?.cow || {} },
//     { type: "buffalo", label: t.buffaloLabel || "Buffalo", data: state.dairy?.buffalo || {} },
//   ];

//   const content = [];

//   // for each animal (cow + buffalo) produce a page (cow first then buffalo)
//   for (let i = 0; i < animals.length; i++) {
//     const { type, label, data } = animals[i];

//     // reproduction date calculations (if insemination/calving date provided in data)
//     // Note: support either data.inseminationDate or data.calvingDate as ISO date string
//     const inseminationDate = data.inseminationDate || data.calvingDate || null;
//     const heatDate   = data.heatDate || null;
//     const tagNumber = data.tagNumber || null;
//     const bullInfo  = data.bullInfo || null;

//     let expectedDate = "";
//     let transitionDate = "";
//     let nextHeatRange = "";

//     if (inseminationDate) {
//       const baseDate = new Date(inseminationDate);
//       if (!isNaN(baseDate.getTime())) {
//         const gestationDays = type === "buffalo" ? 310 : 280; // buffalo 310, cow 280
//         const expected = new Date(baseDate);
//         expected.setDate(expected.getDate() + gestationDays);

//         const transition = new Date(expected);
//         transition.setDate(transition.getDate() - 30);

//         const heatStart = new Date(baseDate);
//         heatStart.setDate(heatStart.getDate() + 21);
//         const heatEnd = new Date(baseDate);
//         heatEnd.setDate(heatEnd.getDate() + 23);

//         expectedDate = formatDateDDMonYYYY(expected);
//         transitionDate = formatDateDDMonYYYY(transition);
//         nextHeatRange = `${formatDateDDMonYYYY(heatStart)} / ${formatDateDDMonYYYY(heatEnd)}`;
//       }
//     }

//     // page break before 2nd animal
//     if (i > 0) {
//       content.push({ text: "", pageBreak: "before" });
//     }

//     // header/logo block
//     if (vetrinaLogoBase64) {
//       content.push({
//         columns: [
//           {
//             image: vetrinaLogoBase64,
//             width: 90,
//             margin: [0, 0, 0, 0],
//             alignment: "left"
//           },
//           // {
//           //   width: "*",
//           //   // text: `Vetrina Healthcare Pvt.Ltd.`,
//           //   alignment: "right",
//           //   color: "#4A148C",
//           //   bold: true,
//           //   fontSize: 14,
//           //   margin: [0, 10, 0, 0]
//           // }
//         ],
//         margin: [0, 0, 0, 8]
//       });
//     } else {
//       content.push({
//         text: `Vetrina Healthcare Pvt.Ltd.`,
//         style: "header",
//         margin: [0, 0, 0, 8]
//       });
//     }

//      content.push({
//       image : textLogoBase64,
//       width : 150,
//       height : 10,
//       margin: [0, 0, 0, 0],
//       alignment: "right"

//     });


//     // Title
//     content.push({
//       text: `${t.reproManagementLabel || "Reproduction Management"} (${label})`,
//       style: "subheader",
//       margin: [0, 4, 0, 6]
//     });

//     // meta date
//     content.push({
//       text: `${t.dateLabel || "Date"}: ${new Date().toLocaleDateString("en-IN")}`,
//       fontSize: 10,
//       color: "#666",
//       margin: [0, 0, 0, 8]
//     });

//     // Info table
//     content.push({
//       table: {
//         widths: ["60%", "40%"],
//         body: [
//           [
//             { text: t.details || "Details", style: "tableHeader", fillColor: "#2E7D32", alignment: "center" },
//             { text: t.value || "Value", style: "tableHeader", fillColor: "#2E7D32", alignment: "center" }
//           ],
//           [
//             { text: `${t.animalTagLabel || "Data"}`, margin: [6, 6, 6, 6] },
//             safeCell(tagNumber || "-", "-")
//           ],
//           [
//             { text: `${t.stallionDatails || "Data"}`, margin: [6, 6, 6, 6] },
//             // safeCell(inseminationDate ? formatDateDDMonYYYY(inseminationDate) : "-", "-")
//             safeCell(bullInfo || "-","-")
//           ],
//            [
//             { text: `${t.reproStratingDate}`, margin: [6, 6, 6, 6] },
//             safeCell(heatDate || "-", "-")
//           ],
//           [
//             { text: `${t.aiReproDate}`, margin: [6, 6, 6, 6] },
//             safeCell(inseminationDate ? formatDateDDMonYYYY(inseminationDate) : "-", "-")
//           ],
//           [
//             { text: t.reproductionDate || "Expected Calving Date" },
//             safeCell(expectedDate || "-", "-")
//           ],

//           [
//             { text: t.periodOfChange || "Transition Start" },
//             safeCell(transitionDate || "-", "-")
//           ],
//           [
//             { text: t.reproNextDate || "Next Heat Period" },
//             safeCell(nextHeatRange || "-", "-")
//           ],
//         ]
//       },
//       layout: {
//         fillColor: function (rowIndex, node, columnIndex) {
//           // header row fill
//           return rowIndex === 0 ? "#2E7D32" : null;
//         }
//       },
//       margin: [0, 0, 0, 12],
//       style: "table"
//     });

//     // You can append more sections (expenses, summary) below as needed...
//     // Example: placeholder for Expenses summary

//     // doc definition
//     const docDefinition = {
//       content,
//       defaultStyle: {
//         font
//       },
//       styles: {
//         header: {
//           fontSize: 16,
//           bold: true
//         },
//         subheader: {
//           fontSize: 13,
//           bold: true,
//           color: "#1B5E20"
//         },
//         table: {
//           fontSize: 10,
//           margin: [0, 4, 0, 4]
//         },
//         tableHeader: {
//           bold: true,
//           color: "white",
//           fontSize: 11
//         }
//       },
//       footer: function (currentPage, pageCount) {
//         return {
//           text: `© ${new Date().getFullYear()} Vetrina Healthcare Pvt.Ltd.`,
//           alignment: "center",
//           fontSize: 9,
//           color: "#888",
//           margin: [0, 8, 0, 0]
//         };
//       },
//       pageSize: "A4",
//       pageMargins: [40, 40, 40, 40]
//     };

//     // download
//     const fileName = `Reproduction_Management_Report_${new Date().toLocaleDateString("en-IN").replace(/\//g, "-")}.pdf`;
//     pdfMake.createPdf(docDefinition).download(fileName);
//   };
// }

// import pdfMake from "pdfmake/build/pdfmake";
// import store from "../redux/store";
// import NotoSansDevanagariBase64 from "../assets/fonts/NotoSansDevanagari-Regular";
// import Roboto from "../assets/fonts/RobotoRegular";
// import { stableExpensesDefault, foodExpensesDefault, vaidanExpensesDefault } from "../data/expensesDefaults";
// import { useLocation } from "react-router-dom";
// import vetrinaLogoBase64 from "../assets/fonts/VetrinaLogoBase";
// import NotoSansBengaliBase64 from "../assets/fonts/NotoSansBengali";
// import NotoSansTamilBase64 from "../assets/fonts/NotoSansTamil";
// import textLogoBase64 from "../assets/fonts/TextLogoBase";
// import * as pdfjsLib from "pdfjs-dist/build/pdf";
// import pdfWorker from "pdfjs-dist/build/pdf.worker.min.js?url";

// pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;


// // register VFS fonts
// pdfMake.vfs = pdfMake.vfs || {};
// pdfMake.vfs["NotoSansDevanagari-Regular.ttf"] = NotoSansDevanagariBase64;
// pdfMake.vfs["Roboto-Regular.ttf"] = Roboto;
// pdfMake.vfs["NotoSansBengali-Regular.ttf"] = NotoSansBengaliBase64;
// pdfMake.vfs["NotoSansTamil-Regular.ttf"] = NotoSansTamilBase64;


// // fonts mapping (fallbacks kept minimal)
// pdfMake.fonts = {
//   NotoSansDevanagari: {
//     normal: "NotoSansDevanagari-Regular.ttf",
//     bold: "NotoSansDevanagari-Regular.ttf",
//     italics: "NotoSansDevanagari-Regular.ttf",
//     bolditalics: "NotoSansDevanagari-Regular.ttf",
//   },
//   Roboto: {
//     normal: "Roboto-Regular.ttf",
//     bold: "Roboto-Regular.ttf",
//     italics: "Roboto-Regular.ttf",
//     bolditalics: "Roboto-Regular.ttf"
//   },
//   NotoSansBengali: {
//     normal: "NotoSansBengali-Regular.ttf",
//     bold: "NotoSansBengali-Regular.ttf",
//     italics: "NotoSansBengali-Regular.ttf",
//     bolditalics: "NotoSansBengali-Regular.ttf"
//   },
//   NotoSansTamil: {
//     normal: "NotoSansTamil-Regular.ttf",
//     bold: "NotoSansTamil-Regular.ttf",
//     italics: "NotoSansTamil-Regular.ttf",
//     bolditalics: "NotoSansTamil-Regular.ttf"
//   }
// };

// // helpers
// const getTranslatedItem = (item, lang) => {
//   if (typeof item === "object" && item !== null) {
//     return item[lang] || item.en || item.mr || "";
//   }
//   return item || "";
// };

// const safeCell = (value, defaultValue = "-") => {
//   const val = value !== undefined && value !== null && value !== "" ? value : defaultValue;
//   return { text: String(val), margin: [0, 6, 0, 6] };
// };

// const formatDateDDMonYYYY = (d) => {
//   if (!d) return "";
//   const date = new Date(d);
//   if (isNaN(date.getTime())) return "";
//   const day = date.getDate().toString().padStart(2, "0");
//   const month = date.toLocaleString("en-US", { month: "short" }); // e.g. Nov
//   const year = date.getFullYear();
//   return `${day}-${month}-${year}`;
// };

// // main export
// export const generateReproReport = async (language = "mr",downloadAs = "pdf") => {
//   // load translations (fallback to en)
//   let translations;
//   try {
//     const langModule = await import(`../locales/${language}.json`);
//     translations = langModule.default;
//   } catch (err) {
//     try {
//       const langModule = await import(`../locales/en.json`);
//       translations = langModule.default;
//     } catch (e) {
//       translations = {};
//     }
//   }
//   const t = translations || {};

//   // choose pdf font based on language (fall back to Roboto)
//   const font =
//     language === "en" ? "Roboto" :
//       language === "hi" ? "NotoSansDevanagari" :
//         language === "mr" ? "NotoSansDevanagari" :
//           language === "bn" ? "NotoSansBengali" :
//             language === "ta" ? "NotoSansTamil" :
//               "Roboto";

//   // read redux state
//   const state = store.getState();

//   const animals = [
//     { type: "cow", label: t.cowLabel || "Cow", data: state.dairy?.cow || {} },
//     { type: "buffalo", label: t.buffaloLabel || "Buffalo", data: state.dairy?.buffalo || {} },
//   ];

//   const content = [];

//   // for each animal (cow + buffalo) produce a page (cow first then buffalo)
//   for (let i = 0; i < animals.length; i++) {
//     const { type, label, data } = animals[i];

//     // reproduction date calculations (if insemination/calving date provided in data)
//     // Note: support either data.inseminationDate or data.calvingDate as ISO date string
//     const inseminationDate = data.inseminationDate || data.calvingDate || null;
//     const heatDate   = data.heatDate || null;
//     const tagNumber = data.tagNumber || null;
//     const bullInfo  = data.bullInfo || null;

//     let expectedDate = "";
//     let transitionDate = "";
//     let nextHeatRange = "";

//     if (inseminationDate) {
//       const baseDate = new Date(inseminationDate);
//       if (!isNaN(baseDate.getTime())) {
//         const gestationDays = type === "buffalo" ? 310 : 280; // buffalo 310, cow 280
//         const expected = new Date(baseDate);
//         expected.setDate(expected.getDate() + gestationDays);

//         const transition = new Date(expected);
//         transition.setDate(transition.getDate() - 30);

//         const heatStart = new Date(baseDate);
//         heatStart.setDate(heatStart.getDate() + 21);
//         const heatEnd = new Date(baseDate);
//         heatEnd.setDate(heatEnd.getDate() + 23);

//         expectedDate = formatDateDDMonYYYY(expected);
//         transitionDate = formatDateDDMonYYYY(transition);
//         nextHeatRange = `${formatDateDDMonYYYY(heatStart)} / ${formatDateDDMonYYYY(heatEnd)}`;
//       }
//     }

//     // page break before 2nd animal
//     if (i > 0) {
//       content.push({ text: "", pageBreak: "before" });
//     }

//     // header/logo block
//     if (vetrinaLogoBase64) {
//       content.push({
//         columns: [
//           {
//             image: vetrinaLogoBase64,
//             width: 90,
//             margin: [0, 0, 0, 0],
//             alignment: "left"
//           },
//           // {
//           //   width: "*",
//           //   // text: `Vetrina Healthcare Pvt.Ltd.`,
//           //   alignment: "right",
//           //   color: "#4A148C",
//           //   bold: true,
//           //   fontSize: 14,
//           //   margin: [0, 10, 0, 0]
//           // }
//         ],
//         margin: [0, 0, 0, 8]
//       });
//     } else {
//       content.push({
//         text: `Vetrina Healthcare Pvt.Ltd.`,
//         style: "header",
//         margin: [0, 0, 0, 8]
//       });
//     }

//      content.push({
//       image : textLogoBase64,
//       width : 150,
//       height : 10,
//       margin: [0, 0, 0, 0],
//       alignment: "right"

//     });


//     // Title
//     content.push({
//       text: `${t.reproManagementLabel || "Reproduction Management"} (${label})`,
//       style: "subheader",
//       margin: [0, 4, 0, 6]
//     });

//     // meta date
//     content.push({
//       text: `${t.dateLabel || "Date"}: ${new Date().toLocaleDateString("en-IN")}`,
//       fontSize: 10,
//       color: "#666",
//       margin: [0, 0, 0, 8]
//     });

//     // Info table
//     content.push({
//       table: {
//         widths: ["60%", "40%"],
//         body: [
//           [
//             { text: t.details || "Details", style: "tableHeader", fillColor: "#2E7D32", alignment: "center" },
//             { text: t.value || "Value", style: "tableHeader", fillColor: "#2E7D32", alignment: "center" }
//           ],
//           [
//             { text: `${t.animalTagLabel || "Data"}`, margin: [6, 6, 6, 6] },
//             safeCell(tagNumber || "-", "-")
//           ],
//           [
//             { text: `${t.stallionDatails || "Data"}`, margin: [6, 6, 6, 6] },
//             // safeCell(inseminationDate ? formatDateDDMonYYYY(inseminationDate) : "-", "-")
//             safeCell(bullInfo || "-","-")
//           ],
//            [
//             { text: `${t.reproStratingDate}`, margin: [6, 6, 6, 6] },
//             safeCell(heatDate || "-", "-")
//           ],
//           [
//             { text: `${t.aiReproDate}`, margin: [6, 6, 6, 6] },
//             safeCell(inseminationDate ? formatDateDDMonYYYY(inseminationDate) : "-", "-")
//           ],
//           [
//             { text: t.reproductionDate || "Expected Calving Date" },
//             safeCell(expectedDate || "-", "-")
//           ],

//           [
//             { text: t.periodOfChange || "Transition Start" },
//             safeCell(transitionDate || "-", "-")
//           ],
//           [
//             { text: t.reproNextDate || "Next Heat Period" },
//             safeCell(nextHeatRange || "-", "-")
//           ],
//         ]
//       },
//       layout: {
//         fillColor: function (rowIndex, node, columnIndex) {
//           // header row fill
//           return rowIndex === 0 ? "#2E7D32" : null;
//         }
//       },
//       margin: [0, 0, 0, 12],
//       style: "table"
//     });

//     // You can append more sections (expenses, summary) below as needed...
//     // Example: placeholder for Expenses summary

//     // doc definition
//     const docDefinition = {
//       content,
//       defaultStyle: {
//         font
//       },
//       styles: {
//         header: {
//           fontSize: 16,
//           bold: true
//         },
//         subheader: {
//           fontSize: 13,
//           bold: true,
//           color: "#1B5E20"
//         },
//         table: {
//           fontSize: 10,
//           margin: [0, 4, 0, 4]
//         },
//         tableHeader: {
//           bold: true,
//           color: "white",
//           fontSize: 11
//         }
//       },
//       footer: function (currentPage, pageCount) {
//         return {
//           text: `© ${new Date().getFullYear()} Vetrina Healthcare Pvt.Ltd.`,
//           alignment: "center",
//           fontSize: 9,
//           color: "#888",
//           margin: [0, 8, 0, 0]
//         };
//       },
//       pageSize: "A4",
//       pageMargins: [40, 40, 40, 40]
//     };

//     // // download
//     // const fileName = `Reproduction_Management_Report_${new Date().toLocaleDateString("en-IN").replace(/\//g, "-")}.pdf`;
//     // pdfMake.createPdf(docDefinition).download(fileName);

//     const fileName = `Reproduction_Management_Report_${new Date()
//     .toLocaleDateString("en-IN")
//     .replace(/\//g, "-")}`;

//   const pdfDocGenerator = pdfMake.createPdf(docDefinition);

//   if (downloadAs === "pdf") {
//     pdfDocGenerator.download(`${fileName}.pdf`);
//   } else if (downloadAs === "jpg") {
//     // --- Convert to image and download ---
//     pdfDocGenerator.getBlob(async (pdfBlob) => {
//       const pdfArrayBuffer = await pdfBlob.arrayBuffer();
//       const pdf = await pdfjsLib.getDocument({ data: pdfArrayBuffer }).promise;
//       const page = await pdf.getPage(1);

//       const viewport = page.getViewport({ scale: 2.0 });
//       const canvas = document.createElement("canvas");
//       const context = canvas.getContext("2d");
//       canvas.width = viewport.width;
//       canvas.height = viewport.height;

//       await page.render({ canvasContext: context, viewport }).promise;

//       const imageData = canvas.toDataURL("image/jpeg", 1.0);

//       const link = document.createElement("a");
//       link.href = imageData;
//       link.download = `${fileName}.jpg`;
//       link.click();
//     });
//   }
// };
// }

import pdfMake from "pdfmake/build/pdfmake";
import store from "../redux/store";
// import NotoSansDevanagariBase64 from "../assets/fonts/NotoSansDevanagari-Regular";
// import Roboto from "../assets/fonts/RobotoRegular";
// import { stableExpensesDefault, foodExpensesDefault, vaidanExpensesDefault } from "../data/expensesDefaults";
// import { useLocation } from "react-router-dom";
import vetrinaLogoBase64 from "../assets/fonts/VetrinaLogoBase";
// import NotoSansBengaliBase64 from "../assets/fonts/NotoSansBengali";
// import NotoSansTamilBase64 from "../assets/fonts/NotoSansTamil";
import textLogoBase64 from "../assets/fonts/TextLogoBase";
import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import { all } from "axios";
// import NotoSansKannadaBase64 from "@/assets/fonts/NotoSansKannada";
import { loadAllFonts } from "@/utils/loadfonts";
// import NotoSansGurmukhiBase64 from "../assets/fonts/NotoSansGurmukhi";
// import NotoSansTeluguBase64 from "../assets/fonts/NotoSansTelugu";
// import NotoSansMalayalamBase64 from "../assets/fonts/NotoSansMalayalam";
// import NotoSansGujaratiBase64 from "../assets/fonts/NotoSansGujarati";


pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

// // register VFS fonts default
// pdfMake.vfs = pdfMake.vfs || {};
// pdfMake.vfs["NotoSansDevanagari-Regular.ttf"] = NotoSansDevanagariBase64;
// pdfMake.vfs["Roboto-Regular.ttf"] = Roboto;
// pdfMake.vfs["NotoSansBengali-Regular.ttf"] = NotoSansBengaliBase64;
// pdfMake.vfs["NotoSansTamil-Regular.ttf"] = NotoSansTamilBase64;
// pdfMake.vfs["NotoSansKannada-Regular.ttf"] = NotoSansKannadaBase64;

// // fonts mapping (fallbacks kept minimal)
// pdfMake.fonts = {
//   NotoSansDevanagari: {
//     normal: "NotoSansDevanagari-Regular.ttf",
//     bold: "NotoSansDevanagari-Regular.ttf",
//     italics: "NotoSansDevanagari-Regular.ttf",
//     bolditalics: "NotoSansDevanagari-Regular.ttf",
//   },
//   Roboto: {
//     normal: "Roboto-Regular.ttf",
//     bold: "Roboto-Regular.ttf",
//     italics: "Roboto-Regular.ttf",
//     bolditalics: "Roboto-Regular.ttf"
//   },
//   NotoSansBengali: {
//     normal: "NotoSansBengali-Regular.ttf",
//     bold: "NotoSansBengali-Regular.ttf",
//     italics: "NotoSansBengali-Regular.ttf",
//     bolditalics: "NotoSansBengali-Regular.ttf"
//   },
//   NotoSansTamil: {
//     normal: "NotoSansTamil-Regular.ttf",
//     bold: "NotoSansTamil-Regular.ttf",
//     italics: "NotoSansTamil-Regular.ttf",
//     bolditalics: "NotoSansTamil-Regular.ttf"
//   }
// ,
//   NotoSansKannada: {
//     normal: "NotoSansKannada-Regular.ttf",
//     bold: "NotoSansKannada-Regular.ttf",
//     italics: "NotoSansKannada-Regular.ttf",
//     bolditalics: "NotoSansKannada-Regular.ttf"
//   }
// };

// from pdf generater
// pdfMake.vfs = pdfMake.vfs || {};
// pdfMake.vfs["NotoSansDevanagari-Regular.ttf"] = NotoSansDevanagariBase64;
// pdfMake.vfs["Roboto-Regular.ttf"] = Roboto;
// pdfMake.vfs["NotoSansBengali-Regular.ttf"] = NotoSansBengaliBase64;
// pdfMake.vfs["NotoSansTamil-Regular.ttf"] = NotoSansTamilBase64;
// pdfMake.vfs["NotoSansKannada-Regular.ttf"] = NotoSansKannadaBase64;
// pdfMake.vfs["NotoSansGurmukhi-Regular.ttf"] = NotoSansGurmukhiBase64;
// pdfMake.vfs["NotoSansTelugu-Regular.ttf"] = NotoSansTeluguBase64; 
// pdfMake.vfs["NotoSansMalayalam-Regular.ttf"] = NotoSansMalayalamBase64;
// pdfMake.vfs["NotoSansGujarati-Regular.ttf"] = NotoSansGujaratiBase64;


// pdfMake.fonts = {
//   NotoSansDevanagari: {
//     normal: "NotoSansDevanagari-Regular.ttf",
//     bold: "NotoSansDevanagari-Regular.ttf",
//     italics: "NotoSansDevanagari-Regular.ttf",
//     bolditalics: "NotoSansDevanagari-Regular.ttf",
//   },
//   Roboto: {
//     normal: "Roboto-Regular.ttf",
//     bold: "Roboto-Regular.ttf",
//     italics: "Roboto-Regular.ttf",
//     bolditalics: "Roboto-Regular.ttf"
//   },

//   NotoSansBengali: {
//     normal: "NotoSansBengali-Regular.ttf",
//     bold: "NotoSansBengali-Regular.ttf",
//     italics: "NotoSansBengali-Regular.ttf",
//     bolditalics: "NotoSansBengali-Regular.ttf"
//   },
//   NotoSansTamil: {
//     normal: "NotoSansTamil-Regular.ttf",
//     bold: "NotoSansTamil-Regular.ttf",
//     italics: "NotoSansTamil-Regular.ttf",
//     bolditalics: "NotoSansTamil-Regular.ttf"
//   },
//    NotoSansKannada: {
//     normal: "NotoSansKannada-Regular.ttf",
//     bold: "NotoSansKannada-Regular.ttf",
//     italics: "NotoSansKannada-Regular.ttf",
//     bolditalics: "NotoSansKannada-Regular.ttf"
//   },
//   NotoSansGurmukhi: {
//     normal: "NotoSansGurmukhi-Regular.ttf",
//     bold: "NotoSansGurmukhi-Regular.ttf",
//     italics: "NotoSansGurmukhi-Regular.ttf",
//     bolditalics: "NotoSansGurmukhi-Regular.ttf"
//   },

//   NotoSansTelugu: {
//     normal: "NotoSansTelugu-Regular.ttf",
//     bold: "NotoSansTelugu-Regular.ttf",
//     italics: "NotoSansTelugu-Regular.ttf",
//     bolditalics: "NotoSansTelugu-Regular.ttf"
//   },


//   NotoSansMalayalam: {
//     normal: "NotoSansMalayalam-Regular.ttf",
//     bold: "NotoSansMalayalam-Regular.ttf",
//     italics: "NotoSansMalayalam-Regular.ttf",
//     bolditalics: "NotoSansMalayalam-Regular.ttf"
//   },
//   NotoSansGujarati: {
//     normal: "NotoSansGujarati-Regular.ttf",
//     bold: "NotoSansGujarati-Regular.ttf",
//     italics: "NotoSansGujarati-Regular.ttf",
//     bolditalics: "NotoSansGujarati-Regular.ttf"
//   },
// };

pdfMake.vfs = pdfMake.vfs || {};

await loadAllFonts();
// helpers
const getTranslatedItem = (item, lang) => {
  if (typeof item === "object" && item !== null) {
    return item[lang] || item.en || item.mr || "";
  }
  return item || "";
};

const safeCell = (value, defaultValue = "-") => {
  const val = value !== undefined && value !== null && value !== "" ? value : defaultValue;
  return { text: String(val), margin: [0, 6, 0, 6] };
};

const formatDateDDMonYYYY = (d) => {
  if (!d) return "";
  const date = new Date(d);
  if (isNaN(date.getTime())) return "";
  const day = date.getDate().toString().padStart(2, "0");
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

// main export
export const generateReproReport = async (language = "mr", downloadAs = "pdf") => {
  // load translations (fallback to en)
  let translations;
  try {
    const langModule = await import(`../locales/${language}.json`);
    translations = langModule.default;
  } catch (err) {
    try {
      const langModule = await import(`../locales/en.json`);
      translations = langModule.default;
    } catch (e) {
      translations = {};
    }
  }
  const t = translations || {};

  // choose pdf font based on language
  const font =
    language === "en" ? "Roboto" :
      language === "hi" ? "NotoSansDevanagari" :
        language === "mr" ? "NotoSansDevanagari" :
          language === "bn" ? "NotoSansBengali" :
            language === "ta" ? "NotoSansTamil" :
              language === "te" ? "NotoSansTelugu" :
                language === "gu" ? "NotoSansGujarati" :
                  language === "kn" ? "NotoSansKannada" :
                    language === "ml" ? "NotoSansMalayalam" :
                      language === "pa" ? "NotoSansGurmukhi" :
                        language === "as" ? "NotoSansBengali" :
                          language === "kok" ? "NotoSansDevanagari" :
                            "Roboto";


  // read redux state
  const state = store.getState();

  const animals = [
    { type: "cow", label: t.cowLabel || "Cow", data: state.dairy?.cow || {} },
    { type: "buffalo", label: t.buffaloLabel || "Buffalo", data: state.dairy?.buffalo || {} },
  ];

  const content = [];

  // for each animal (cow + buffalo) produce a page
  for (let i = 0; i < animals.length; i++) {
    const { type, label, data } = animals[i];

    // reproduction date calculations
    const inseminationDate = data.inseminationDate || data.calvingDate || null;
    const heatDate = data.heatDate || null;
    const tagNumber = data.tagNumber || null;
    const bullInfo = data.bullInfo || null;

    let expectedDate = "";
    let transitionDate = "";
    let nextHeatRange = "";

    if (heatDate) {
      const baseHeat = new Date(heatDate);
      if (!isNaN(baseHeat.getTime())) {
        const nextHeatStart = new Date(baseHeat);
        nextHeatStart.setDate(nextHeatStart.getDate() + 19);
        const nextHeatEnd = new Date(baseHeat);
        nextHeatEnd.setDate(nextHeatEnd.getDate() + 21);
        nextHeatRange = `${formatDateDDMonYYYY(nextHeatStart)} to ${formatDateDDMonYYYY(nextHeatEnd)}`;
      }
    }

    if (inseminationDate) {
      const baseDate = new Date(inseminationDate);
      if (!isNaN(baseDate.getTime())) {
        const gestationDays = type === "buffalo" ? 310 : 280;
        const expected = new Date(baseDate);
        expected.setDate(expected.getDate() + gestationDays);

        const transition = new Date(expected);
        transition.setDate(transition.getDate() - 30);

        expectedDate = formatDateDDMonYYYY(expected);
        transitionDate = formatDateDDMonYYYY(transition);
      }
    }

    // page break before 2nd animal 
    if (i > 0) {
      content.push({ text: "", pageBreak: "before" });
    }

    content.push({
      columns: [
        {
          image: textLogoBase64,
          width: 170,
          alignment: "left",
          margin: [0, 5, 0, 0]
        },
        {
          // Right side column with logo and date
          stack: [
            {
              image: vetrinaLogoBase64,
              width: 100,
              alignment: "right",
              margin: [0, 0, 0, 10] // Logo ke niche space
            },
          ],
          width: "auto"
        }
      ],
      columnGap: 260,
      margin: [0, 10, 0, 10]
    });

    // Title
    content.push({
      text: `${t.breedingManagementLabel || "Reproduction Management"} (${label})`,
      style: "subheader",
      color: "#1B5E20",
      margin: [0, 4, 0, 6],
      alignment: "center"
    });

    // Date
    content.push({
      text: `${t.dateLabel || "Date"}: ${new Date().toLocaleDateString("en-IN")}`,
      style: "header",
      fontSize: 10,
      color: "#B0000",
      margin: [0, 0, 0, 5],
      alignment: "right"
    });

    // Info table
    content.push({
      table: {
        widths: ["60%", "40%"],
        body: [
          [
            { text: t.details || "Details", style: "tableHeader", fillColor: "#B500A0", alignment: "center" },
            { text: t.value || "Value", style: "tableHeader", fillColor: "#B500A0", alignment: "center" }
          ],
          [
            { text: `${t.animalTagLabel || "Animal Tag"}`, margin: [6, 6, 6, 6] },
            safeCell(tagNumber || "-", "-")
          ],
          [
            { text: `${t.heatDateLabel || "Heat Period"}`, margin: [6, 6, 6, 6] },
            safeCell(heatDate ? formatDateDDMonYYYY(heatDate) : "-", "-")
          ],
          [
            { text: `${t.aiInsemDateLabel || "AI/Reproduction Date"}`, margin: [6, 6, 6, 6] },
            safeCell(inseminationDate ? formatDateDDMonYYYY(inseminationDate) : "-", "-")
          ],
          [
            { text: `${t.stallionDetailLabel || "Stallion Details"}`, margin: [6, 6, 6, 6] },
            safeCell(bullInfo || "-", "-")
          ],
          [
            { text: t.heatNextDateLabel || "Next Heat Period", margin: [6, 6, 6, 6] },
            safeCell(nextHeatRange || "-", "-")
          ],
          [
            { text: t.calvingDateLabel || "Expected Calving Date", margin: [6, 6, 6, 6] },
            safeCell(expectedDate || "-", "-")
          ],
          [
            { text: t.periodOfChangeLabel || "Transition Start", margin: [6, 6, 6, 6] },
            safeCell(transitionDate && expectedDate
              ? `${transitionDate} to ${expectedDate}` : "-")
          ],
        ]
      },
      layout: {
        fillColor: function (rowIndex, node, columnIndex) {
          return rowIndex === 0 ? "#2E7D32" : null;
        }
      },
      margin: [0, 0, 0, 12],
      style: "table",
    });
  }

  // doc definition (moved outside the loop)
  const docDefinition = {
    content,
    defaultStyle: {
      font
    },
    styles: {
      header: {
        fontSize: 16,
        // bold: true
      },
      subheader: {
        fontSize: 13,
        // bold: true,
        color: "#1B5E20"
      },
      table: {
        fontSize: 10,
        margin: [0, 4, 0, 4]
      },
      tableHeader: {
        // bold: true,
        color: "white",
        fontSize: 11
      }
    },
    footer: function (currentPage, pageCount) {
      return {
        text: `© ${new Date().getFullYear()} Vetrina Healthcare Pvt.Ltd.`,
        alignment: "center",
        fontSize: 9,
        color: "#888",
        margin: [0, 8, 0, 0]
      };
    },
    pageSize: "A4",
    pageMargins: [40, 40, 40, 40]
  };

  const fileName = `${t.fileNameRMLabel}_${new Date()
    .toLocaleDateString("en-IN")
    .replace(/\//g, "-")}`;

  const fileNameBaseJPG = `${t.fileNameRMLabel}_${new Date()
    .toLocaleDateString("en-IN")
    .replace(/\//g, "-")}`;

  const pdfDocGenerator = pdfMake.createPdf(docDefinition);


  return new Promise((resolve, reject) => {
    const location = window.location.pathname;
    const animalType = location.includes("buffalo") ? "buffalo" : "cow";


    if (downloadAs === "pdf") {

      pdfDocGenerator.download(`${fileName}.pdf`);
      resolve();
    }

    else if (downloadAs === "jpg") {

      pdfDocGenerator.getBlob(async (pdfBlob) => {
        try {
          const pdfArrayBuffer = await pdfBlob.arrayBuffer();
          const pdf = await pdfjsLib.getDocument({ data: pdfArrayBuffer }).promise;

          // correct page
          const pageNumber = animalType === "buffalo" ? 2 : 1;
          const page = await pdf.getPage(pageNumber);

          const viewport = page.getViewport({ scale: 2.0 });
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");

          canvas.width = viewport.width;
          canvas.height = viewport.height;

          await page.render({ canvasContext: context, viewport }).promise;

          const imageData = canvas.toDataURL("image/jpeg", 1.0);

          const link = document.createElement("a");
          link.href = imageData;

          const fileNameJPG =
            animalType === "cow"
              ? `${fileNameBaseJPG}_${t.cowLabel2}`
              : `${fileNameBaseJPG}_${t.buffalo}`;


          link.download = `${fileNameJPG}.jpg`;
          link.click();

          resolve();
        } catch (err) {
          reject(err);
        }
      });
    }

    else {
      reject(new Error("Invalid download format"));
    }
  });
}
