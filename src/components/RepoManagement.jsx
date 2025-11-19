
// import React, { useEffect, useState } from "react";
// import { Droplets } from "lucide-react";
// import { useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { updateField } from "../redux/dairySlice";
// import AnimalSelector from "./AnimalSelector";
// import LanguageSelector from "./LanguageSelector";
// import "../i18n";
// import { useTranslate } from "../i18n";
// import { handler } from "tailwindcss-animate";

// const Repomanagement = () => {

//   const location = useLocation();
//   const dispatch = useDispatch();
//   const { t } = useTranslate();


//   // 🐄 Determine current animal by route
//   // const animalType = location.pathname.includes("buffalo") ? "buffalo" : "cow";
//   const animalType = location.pathname.includes("cow") ? "cow" : "buffalo";
//   const animalLabel = animalType === "cow" ? t.cowLabel : t.buffaloLabel;

//   const productionHeaderLabel = animalType === "cow"
//     ? t.avgMilkingCowLabel
//     : t.avgMilkingBuffaloLabel;

//   const totalAnimalFieldLabel = animalType === "cow"
//     ? t.avgMilkCowLabel
//     : t.avgMilkBuffaloLabel;

//   // 🧩 Get current animal data from Redux
//   const animal = useSelector((state) => state.dairy[animalType]);

//   //🧮 Calculations
//   const avgMilkPerAnimal =
//     animal.milkProducingAnimals > 0
//       ? (animal.totalMilkProduction / animal.milkProducingAnimals).toFixed(2)
//       : "0.00";

//   const milkIncome = (animal.totalMilkProduction * animal.milkPrice).toFixed(2);
//   const dungRate = 16;
//   const dungIncome = (animal.totalAnimals * dungRate).toFixed(2);
//   const totalIncome = (parseFloat(milkIncome) + parseFloat(dungIncome)).toFixed(2);


//   const [inseminationDate, setInseminationDate] = useState("");
//   const [expectedDate, setExpectedDate] = useState("");
//   const [transitionDate, setTransitionDate] = useState("");
//   const [nextHeatRange, setNextHeatRange] = useState("");

//   const handleDateChange = (e) => {
//     const inputDate = e.target.value;
//     setInseminationDate(inputDate);

//     if (inputDate) {
//       const baseDate = new Date(inputDate);

//       if (!isNaN(baseDate.getTime())) {
//         // 1️⃣ Expected Calving Date = baseDate + 280 days
//         const expected = new Date(baseDate);
//         expected.setDate(expected.getDate() + 280);

//         // 2️⃣ Transition Start Date = expected −30 days
//         const transition = new Date(expected);
//         transition.setDate(expected.getDate() - 30);

//         // 3️⃣ Next Heat Period = baseDate +21 days to +23 days
//         const heatStart = new Date(baseDate);
//         heatStart.setDate(heatStart.getDate() + 20);
//         const heatEnd = new Date(baseDate);
//         heatEnd.setDate(heatEnd.getDate() + 22);

//         // Format all dates as dd/mm/yyyy
//         const fmt = (d) => d.toLocaleDateString("en-GB");  
//         //  const formattedExpected = expected.toLocaleDateString("en-GB"); (for references)

//         setExpectedDate(fmt(expected));
//         setTransitionDate(fmt(transition));
//         setNextHeatRange(`${fmt(heatStart)} to ${fmt(heatEnd)}`);
//       } else {
//         setExpectedDate("");
//         setTransitionDate("");
//         setNextHeatRange("");
//       }
//     } else {
//       setExpectedDate("");
//       setTransitionDate("");
//       setNextHeatRange("");
//     }
//   };



//   return (
//     <div className="grid lg:grid-cols-2 gap-6 items-stretch">
//       {/* Left Grid - Inputs */}
//       <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between border border-orange-100
//                           bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-md p-5
//                           border-orange-300 hover:shadow-lg transition-shadow">
//         <div>
//           <h2 className="text-xl font-bold text-orange-700 mb-5 pb-3 border-b-2 border-orange-200 flex items-center gap-2">
//             <span className="w-1 h-6 bg-orange-600 rounded"></span>
//             प्रजनन व्यवस्थापन
//           </h2>

//           <div className="space-y-4">
//             <div>
//               <label className="block text-gray-700 font-semibold mb-2 text-sm">
//                 गाय नाव / टॅग नंबर
//               </label>
//               <input
//                 type="text"
//                 placeholder="0"
//                 value={animal || ""}
//                 className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg 
//                                focus:border-orange-500 focus:outline-none focus:ring-2 
//                                focus:ring-orange-100  transition-all font-semibold
//                                hover:border-orange-300"
//               // className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg 
//               //            focus:border-orange-500 focus:outline-none focus:ring-2 
//               //            focus:ring-orange-100 bg-orange-50 transition-all
//               //            hover:border-orange-300"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700 font-semibold mb-2 text-sm">
//                 माजाची तारीख
//               </label>
//               <input
//                 type="date"
//                 value={animal || ""}
//                 // placeholder="0"
//                 className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg 
//                                focus:border-orange-500 focus:outline-none focus:ring-2 
//                                focus:ring-orange-100  transition-all font-semibold
//                                hover:border-orange-300"
//               />
//             </div>


//             <div>
//               <label className="block text-gray-700 font-semibold mb-2 text-sm">
//                 कृत्रिम रेतनाची तारीख
//               </label>
//               <input
//                 type="date"
//                 value={inseminationDate || ""}
//                 onChange={handleDateChange}

//                 placeholder="0"
//                 className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg 
//                                focus:border-orange-500 focus:outline-none focus:ring-2 
//                                focus:ring-orange-100  transition-all font-semibold
//                                hover:border-orange-300"
//               />
//             </div>


//             <div>
//               <label className="block text-gray-700 font-semibold mb-2 text-sm">
//                 वळूची माहिती / कांडी नंबर
//               </label>
//               <input
//                 type="text"

//                 value={animal || ""}
//                 placeholder="0"
//                 className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg 
//                                focus:border-orange-500 focus:outline-none focus:ring-2 
//                                focus:ring-orange-100  transition-all  font-semibold
//                                hover:border-orange-300"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right Grid - Results */}
//       <div className="space-y-4 flex flex-col justify-between">
//         <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-md p-5  border-orange-300 hover:shadow-lg transition-shadow">
//           <p className="text-gray-500 text-sm font-semibold mb-1">
//             पुढील माजाची कालावधी
//           </p>
//           <p className="text-3xl font-bold text-orange-700">
//             {nextHeatRange}
//           </p>
//         </div>

//         <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-md p-5  border-orange-300 hover:shadow-lg transition-shadow">
//           <p className="text-gray-500 text-sm font-semibold mb-1">
//             विण्याची तारीख
//           </p>
//           <p className="text-3xl font-bold text-orange-700">
//             {expectedDate}
//             <span className="text-lg text-gray-500"></span>
//           </p>
//         </div>

//         <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-md p-5  border-orange-300 hover:shadow-lg transition-shadow">
//           <div className="flex items-center gap-2 mb-1">
//             <p className="text-gray-500 text-sm font-semibold">संक्रमण काळ</p>
//           </div>
//           <p className="text-3xl font-bold text-orange-700">{transitionDate}</p>
//         </div>

//         <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-md p-5  border-orange-300 hover:shadow-lg transition-shadow">
//           <div className="flex items-center gap-2 mb-1">
//             <p className="text-gray-500 text-sm font-semibold">
//               <span className="text-sm"></span>
//             </p>
//           </div>
//           {/* <p className="text-3xl font-bold text-orange-700">₹{dungIncome}</p> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Repomanagement;


// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { updateField, updateMultipleFields } from "../redux/dairySlice";
// import { useTranslate } from "../i18n";
// import { Download, FolderMinus } from "lucide-react";
// import { generateReproReport } from "./ReproPdf.";
// import LanguageSelector from "./LanguageSelector";

// const Repomanagement = () => {
//   const location = useLocation();
//   const dispatch = useDispatch();
//   const { t , lang} = useTranslate();

//   //  Detect current animal from route
//   const animalType = location.pathname.includes("buffalo") ? "buffalo" : "cow";
//   const animalLabel = animalType === "cow" ? t.cowLabel : t.buffaloLabel;

//   //  Get current animal data from Redux
//   const animal = useSelector((state) => state.dairy[animalType]);

//   //  Handle single field updates (like tagNumber, bullInfo, etc.)
//   const handleChange = (field, value) => {
//     dispatch(updateField({ animalType, field, value }));
//   };


//   const formatDate = (date) => {
//     const d = new Date(date);
//     const day = d.getDate().toString().padStart(2, "0");
//     const month = d.toLocaleString("en-US", { month: "short" }); // Jan, Feb, Mar...
//     const year = d.getFullYear();
//     return `${day}-${month}-${year}`;
//   };
//   // 🧮 Handle insemination date & auto-calculated fields
//   const handleDateChange = (e) => {
//     const inputDate = e.target.value;



//     if (!inputDate) {
//   dispatch(updateMultipleFields({
//     animalType,
//     fields: {
//       expectedDate: "",
//       transitionDate: "",
//       nextHeatRange: "",
//       inseminationDate: "",
//     },
//   }));
//   return;
// }

//     const baseDate = new Date(inputDate);
//     if (isNaN(baseDate.getTime())) return;


//     const gestationDays = animalType === "buffalo" ? 310 : 280;

//     const expected = new Date(baseDate);
//     expected.setDate(expected.getDate() + gestationDays);

//     const transition = new Date(expected);
//     transition.setDate(transition.getDate() - 30);

//     const heatStart = new Date(baseDate);
//     heatStart.setDate(heatStart.getDate() + 19);

//     const heatEnd = new Date(baseDate);
//     heatEnd.setDate(heatEnd.getDate() + 21);

//     // const fmt = (d) => d.toLocaleDateString("en-GB");

//     dispatch(
//       updateMultipleFields({
//         animalType,
//         fields: {
//           inseminationDate: inputDate,
//           expectedDate: formatDate(expected),
//           transitionDate: formatDate(transition),
//           nextHeatRange: `${formatDate(heatStart)} to ${formatDate(heatEnd)}`,
//         },
//       })
//     );
//   };

//   return (
//     <>
//     <div className="grid lg:grid-cols-2 gap-6 items-stretch">
//       {/* Left Grid - Inputs */}
//       <div
//         className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between border border-orange-100
//                    bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-md p-5
//                    border-orange-300 hover:shadow-lg transition-shadow"
//       >
//         <div>
//           <h2 className="text-xl font-bold text-orange-700 mb-5 pb-3 border-b-2 border-orange-200 flex items-center gap-2">
//             <span className="w-1 h-6 bg-orange-600 rounded"></span>
//             {t.breedingManagementLabel || "प्रजनन व्यवस्थापन"} ({animalLabel})
//           </h2>

//           <div className="space-y-4">
//             {/*  Tag Number / Animal Name */}
//             <div>
//               <label className="block text-gray-700 font-semibold mb-2 text-sm">
//                 गाय नाव / टॅग नंबर
//               </label>
//               <input
//                 type="text"
//                 value={animal.tagNumber || ""}
//                 onChange={(e) => handleChange("tagNumber", e.target.value)}
//                 placeholder=""
//                 className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg 
//                            focus:border-orange-500 focus:outline-none focus:ring-2 
//                            focus:ring-orange-100 transition-all font-semibold
//                            hover:border-orange-300"
//               />
//             </div>

//             {/* माजाची तारीख */}
//             <div>
//               <label className="block text-gray-700 font-semibold mb-2 text-sm">
//                 माजाची तारीख
//               </label>
//               <input
//                 type="date"
//                 value={animal.heatDate || ""}
//                 onChange={(e) => handleChange("heatDate", e.target.value)}
//                 className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg 
//                            focus:border-orange-500 focus:outline-none focus:ring-2 
//                            focus:ring-orange-100 transition-all font-semibold
//                            hover:border-orange-300"
//               />
//             </div>

//             {/* कृत्रिम रेतनाची तारीख */}
//             <div>
//               <label className="block text-gray-700 font-semibold mb-2 text-sm">
//                 कृत्रिम रेतनाची तारीख
//               </label>
//               <input
//                 type="date"
//                 value={animal.inseminationDate || ""}
//                 onChange={handleDateChange}
//                 className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg 
//                            focus:border-orange-500 focus:outline-none focus:ring-2 
//                            focus:ring-orange-100 transition-all font-semibold
//                            hover:border-orange-300"
//               />
//             </div>

//             {/* वळूची माहिती / कांडी नंबर */}
//             <div>
//               <label className="block text-gray-700 font-semibold mb-2 text-sm">
//                 वळूची माहिती / कांडी नंबर
//               </label>
//               <input
//                 type="text"
//                 value={animal.bullInfo || ""}
//                 onChange={(e) => handleChange("bullInfo", e.target.value)}
//                 placeholder=""
//                 className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg 
//                            focus:border-orange-500 focus:outline-none focus:ring-2 
//                            focus:ring-orange-100 transition-all font-semibold
//                            hover:border-orange-300"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right Grid - Results */}
//       <div className="space-y-4 flex flex-col justify-between">
//         <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-md p-5 border-orange-300 hover:shadow-lg transition-shadow">
//           <p className="text-gray-700 text-lg font-bold mb-1">पुढील माजाची कालावधी</p>
//           <p className="text-3xl font-bold text-orange-700">{animal.nextHeatRange || "-"}</p>
//         </div>

//         <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-md p-5 border-orange-300 hover:shadow-lg transition-shadow">
//           <p className="text-gray-700 text-lg font-bold mb-1">विण्याची तारीख</p>
//           <p className="text-3xl font-bold text-orange-700">{animal.expectedDate || "-"}</p>
//         </div>

//         <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-md p-5 border-orange-300 hover:shadow-lg transition-shadow">
//           <p className="text-gray-700 text-lg font-bold  mb-1">संक्रमण काळ</p>
//           <p className="text-3xl font-bold text-orange-700">{`${animal.transitionDate} to ${animal.expectedDate}`}</p>
//         </div>
//       </div>
//     </div>
//      <footer>

//         <button 
//           onClick={() => generateReproReport(lang)}
//           className="mt-6 mx-auto flex items-center gap-2 
//           bg-gradient-to-r from-green-600 to-green-800 text-white px-5 py-2 rounded-xl 
//           shadow-lg hover:from-green-700 hover:to-green-900 transition-all duration-200"
//           // className="mt-6 mx-auto flex items-center gap-2 
//           // bg-gradient-to-r from-orange-600 to-orange-800 text-white px-5 py-2 rounded-xl 
//           // shadow-lg hover:from-orange-700 hover:to-orange-900 transition-all duration-200"
//         >
//           <Download size={18} />
//           Download Report (PDF)
//         </button>
//         <button
//             onClick={() => generateReproReport("mr", "jpg")}
//             className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 ml-2"
//           >
//             Download as Image
//         </button>
//      </footer>
//      </>
//   );
// };

// export default Repomanagement;

// // orginal code 12 Nove 25 
// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { updateField, updateMultipleFields } from "../redux/dairySlice";
// import { useTranslate } from "../i18n";
// import { Download, FolderMinus } from "lucide-react";
// import { generateReproReport } from "./ReproPdf.";
// import LanguageSelector from "./LanguageSelector";

// const Repomanagement = () => {
//   const location = useLocation();
//   const dispatch = useDispatch();
//   const { t, lang } = useTranslate();

//   //  Detect current animal from route
//   const animalType = location.pathname.includes("buffalo") ? "buffalo" : "cow";
//   const animalLabel = animalType === "cow" ? t.cowLabel : t.buffaloLabel;

//   //  Get current animal data from Redux
//   const animal = useSelector((state) => state.dairy[animalType]);

//   //  Handle single field updates (like tagNumber, bullInfo, etc.)
//   const handleChange = (field, value) => {
//     dispatch(updateField({ animalType, field, value }));
//   };

//   const handleDateChange = (field, e) => {
//     const inputDate = e.target.value;

//     if (!inputDate) {
//       dispatch(
//         updateMultipleFields({
//           animalType,
//           fields: {
//             expectedDate: "",
//             transitionDate: "",
//             nextHeatRange: "",
//             inseminationDate: "",
//             heatDate: "",
//           },
//         })
//       );
//       return;
//     }

//     const baseDate = new Date(inputDate);
//     if (isNaN(baseDate.getTime())) return;

//     const formatDate = (d) => {
//       const day = d.getDate().toString().padStart(2, "0");
//       const month = d.toLocaleString("en-US", { month: "short" });
//       const year = d.getFullYear();
//       return `${day}-${month}-${year}`;
//     };

//     const gestationDays = animalType === "buffalo" ? 310 : 280;
//     let updatedFields = {};

//     // 🩸 Insemination Date → Expected + Transition
//     if (field === "inseminationDate") {
//       const expected = new Date(baseDate);
//       expected.setDate(expected.getDate() + gestationDays);

//       const transition = new Date(expected);
//       transition.setDate(transition.getDate() - 30);

//       updatedFields = {
//         inseminationDate: inputDate,
//         expectedDate: formatDate(expected),
//         transitionDate: formatDate(transition),
//       };
//     }

//     // 🔥 Heat Date → Only Next Heat Range (19–21 days later)
//     if (field === "heatDate") {
//       const nextHeatStart = new Date(baseDate);
//       nextHeatStart.setDate(nextHeatStart.getDate() + 19);

//       const nextHeatEnd = new Date(baseDate);
//       nextHeatEnd.setDate(nextHeatEnd.getDate() + 21);

//       updatedFields = {
//         heatDate: inputDate,
//         nextHeatRange: `${formatDate(nextHeatStart)} / ${formatDate(nextHeatEnd)}`,
//       };
//     }

//     // ✅ Dispatch updates
//     dispatch(updateMultipleFields({ animalType, fields: updatedFields }));
//   };

//   return (
//     <>
//       <div className="max-w-5xl mx-auto">
//         <div className="grid lg:grid-cols-2 gap-6 items-stretch bg-white">
//           {/* Left Grid - Inputs */}
//           <div
//             className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between border border-orange-100
//                    bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-md p-5
//                    border-orange-300 hover:shadow-lg transition-shadow"
//           > 
//             <div>
//               <h2 className="text-xl font-bold text-orange-700 mb-5 pb-3 border-b-2 border-orange-200 flex items-center gap-2">
//                 <span className="w-1 h-6 bg-orange-600 rounded"></span>
//                 {t.breedingManagementLabel || "प्रजनन व्यवस्थापन"} ({animalLabel})
//               </h2>

//               <div className="space-y-4">
//                 {/*  Tag Number / Animal Name */}
//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2 text-sm">
//                     नाव / टॅग नंबर
//                   </label>
//                   <input
//                     type="text"
//                     value={animal.tagNumber || ""}
//                     onChange={(e) => handleChange("tagNumber", e.target.value)}
//                     placeholder=""
//                     className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg 
//                            focus:border-orange-500 focus:outline-none focus:ring-2 
//                            focus:ring-orange-100 transition-all font-semibold
//                            hover:border-orange-300"
//                   />
//                 </div>

//                 {/* माजाची तारीख */}
//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2 text-sm">
//                     माजाची तारीख
//                   </label>
//                   <input
//                     type="date"
//                     value={animal.heatDate || ""}
//                     onChange={(e) => handleDateChange("heatDate", e)}
//                     className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg 
//                            focus:border-orange-500 focus:outline-none focus:ring-2 
//                            focus:ring-orange-100 transition-all font-semibold
//                            hover:border-orange-300"
//                   />
//                 </div>

//                 {/* कृत्रिम रेतनाची तारीख */}
//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2 text-sm">
//                     कृत्रिम रेतनाची तारीख
//                   </label>
//                   <input
//                     type="date"
//                     value={animal.inseminationDate || ""}
//                     onChange={(e) => handleDateChange("inseminationDate", e)}
//                     className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg 
//                            focus:border-orange-500 focus:outline-none focus:ring-2 
//                            focus:ring-orange-100 transition-all font-semibold
//                            hover:border-orange-300"
//                   />
//                 </div>

//                 {/* वळूची माहिती / कांडी नंबर */}
//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2 text-sm">
//                     वळूची माहिती / कांडी नंबर
//                   </label>
//                   <input
//                     type="text"
//                     value={animal.bullInfo || ""}
//                     onChange={(e) => handleChange("bullInfo", e.target.value)}
//                     placeholder=""
//                     className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg 
//                            focus:border-orange-500 focus:outline-none focus:ring-2 
//                            focus:ring-orange-100 transition-all font-semibold
//                            hover:border-orange-300"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Grid - Results */}
//           <div className="space-y-4 flex flex-col justify-between  lg:space-y-0">
//             <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-md p-5 border-orange-300 hover:shadow-lg transition-shadow">
//               <p className="text-gray-700 text-lg font-bold mb-1">पुढील माजाचा कालावधी</p>
//               <p className="text-3xl font-bold text-orange-700">{animal.nextHeatRange || "-"}</p>
//             </div>

//             <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-md p-5 border-orange-300 hover:shadow-lg transition-shadow">
//               <p className="text-gray-700 text-lg font-bold mb-1">विण्याची तारीख</p>
//               <p className="text-5xl font-bold text-orange-700">{animal.expectedDate || "-"}</p>
//             </div>

//             <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-md p-5 border-orange-300 hover:shadow-lg transition-shadow">
//               <p className="text-gray-700 text-lg font-bold  mb-1">संक्रमण काळ</p>
//               <p className="text-3xl font-bold text-orange-700">{`${animal.transitionDate} to ${animal.expectedDate}`}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//      <div className="max-w-2xl">
//         <div className="flex justify-center pt-5">
//           <button
//             onClick={() => generateReproReport(lang)}
//             className="mx-auto flex items-center gap-2 
//           bg-gradient-to-r from-green-600 to-green-800 text-white px-5 rounded-xl 
//           shadow-lg hover:from-green-700 hover:to-green-900 transition-all duration-200"
//           // className="mt-6 mx-auto flex items-center gap-2 
//           // bg-gradient-to-r from-orange-600 to-orange-800 text-white px-5 py-2 rounded-xl 
//           // shadow-lg hover:from-orange-700 hover:to-orange-900 transition-all duration-200"
//           >
//             <Download size={18} />
//             Download Report (PDF)
//           </button>
//           <button
//             onClick={() => generateReproReport("mr", "jpg")}
//             className="mx-auto items-center gap-2 
//           bg-gradient-to-r from-green-600 to-green-800 text-white px-5 py-2 rounded-xl 
//           shadow-lg hover:from-green-700 hover:to-green-900 transition-all duration-200"
//           >
//             Download as Image
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Repomanagement;


import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateField, updateMultipleFields } from "../redux/dairySlice";
import { useTranslate } from "../i18n";
import { Download, FolderMinus } from "lucide-react";
import { generateReproReport } from "./ReproPdf.";
import LanguageSelector from "./LanguageSelector";

const Repomanagement = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { t, lang } = useTranslate();
  
  //  Detect current animal from route
  const animalType = location.pathname.includes("buffalo") ? "buffalo" : "cow";
  const animalLabel = animalType === "cow" ? t.cowLabel : t.buffaloLabel;

  //  Get current animal data from Redux
  const animal = useSelector((state) => state.dairy[animalType]);

  //  Handle single field updates (like tagNumber, bullInfo, etc.)
  const handleChange = (field, value) => {
    dispatch(updateField({ animalType, field, value }));
  };

  const handleDateChange = (field, e) => {
    const inputDate = e.target.value;

    if (!inputDate) {
      dispatch(
        updateMultipleFields({
          animalType,
          fields: {
            expectedDate: "",
            transitionDate: "",
            nextHeatRange: "",
            inseminationDate: "",
            heatDate: "",
          },
        })
      );
      return;
    }

    const baseDate = new Date(inputDate);
    if (isNaN(baseDate.getTime())) return;

    const formatDate = (d) => {
      const day = d.getDate().toString().padStart(2, "0");
      const month = d.toLocaleString("en-US", { month: "short" });
      const year = d.getFullYear();
      return `${day}-${month}-${year}`;
    };

    const gestationDays = animalType === "buffalo" ? 310 : 280;
    let updatedFields = {};

    //  Insemination Date → Expected + Transition
    if (field === "inseminationDate") {
      const expected = new Date(baseDate);
      expected.setDate(expected.getDate() + gestationDays);

      const transition = new Date(expected);
      transition.setDate(transition.getDate() - 30);

      updatedFields = {
        inseminationDate: inputDate,
        expectedDate: formatDate(expected),
        transitionDate: formatDate(transition),
      };
    }

    //  Heat Date → Only Next Heat Range (19–21 days later)
    if (field === "heatDate") {
      const nextHeatStart = new Date(baseDate);
      nextHeatStart.setDate(nextHeatStart.getDate() + 19);

      const nextHeatEnd = new Date(baseDate);
      nextHeatEnd.setDate(nextHeatEnd.getDate() + 21);

      updatedFields = {
        heatDate: inputDate,
        nextHeatRange: `${formatDate(nextHeatStart)} to ${formatDate(nextHeatEnd)}`,
      };
    }

    // ✅ Dispatch updates
    dispatch(updateMultipleFields({ animalType, fields: updatedFields }));
  };

  return (
    <>
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 items-stretch bg-white">
          {/* Left Grid - Inputs */}
          <div
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between border border-orange-100
                   bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-md p-5 border
                   border-orange-300 hover:shadow-lg transition-shadow"
          >
            <div>
              <h2 className="text-xl font-bold text-orange-700 mb-5 pb-3 border-b-2 border-orange-200 flex items-center gap-2">
                <span className="w-1 h-6 bg-orange-600 rounded"></span>
                {t.breedingManagementLabel || "प्रजनन व्यवस्थापन"} ({animalLabel})
              </h2>

              <div className="space-y-4">
                {/*  Tag Number / Animal Name */}
                <div className="">
                  <label className="block text-gray-700 font-semibold mb-2 text-sm">
                    {t.animalTagLabel || ""}
                  </label>
                  <input
                    type="text"
                    value={animal.tagNumber || ""}
                    onChange={(e) => handleChange("tagNumber", e.target.value)}
                    placeholder="TAG-101"
                    className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg 
                           focus:border-orange-500 focus:outline-none focus:ring-2 
                           focus:ring-orange-100 transition-all font-semibold
                           hover:border-orange-300"
                  />
                </div>

                {/* माजाची तारीख */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm">
                    {t.heatDateLabel || "माजाची तारीख"}
                  </label>
                  <input
                    type="date"
                    value={animal.heatDate || ""}
                    onChange={(e) => handleDateChange("heatDate", e)}
                    className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg 
                           focus:border-orange-500 focus:outline-none focus:ring-2 
                           focus:ring-orange-100 transition-all font-semibold
                           hover:border-orange-300"
                    
                  />
                </div>

                {/* कृत्रिम रेतनाची तारीख */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm">
                    {t.aiInsemDateLabel || "कृत्रिम रेतनाची तारीख"}
                  </label>
                  <input
                    type="date"
                    value={animal.inseminationDate || ""}
                    onChange={(e) => handleDateChange("inseminationDate", e)}
                    className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg 
                           focus:border-orange-500 focus:outline-none focus:ring-2 
                           focus:ring-orange-100 transition-all font-semibold
                           hover:border-orange-300"
                  />
                </div>

                {/* वळूची माहिती / कांडी नंबर */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm">
                    {t.stallionDetailLabel || "वळूची माहिती / कांडी नंबर"}
                  </label>
                  <input
                    type="text"
                    value={animal.bullInfo || ""}
                    onChange={(e) => handleChange("bullInfo", e.target.value)}
                    placeholder="D123"
                    className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg 
                           focus:border-orange-500 focus:outline-none focus:ring-2 
                           focus:ring-orange-100 transition-all font-semibold
                           hover:border-orange-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Grid - Results */}
          <div className="space-y-4 flex flex-col justify-between  lg:space-y-0">
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl
             shadow-md p-5 lg:py-8 border border-orange-300 hover:shadow-lg transition-shadow">
              <p className="text-gray-700 text-lg font-bold mb-1">{t.heatNextDateLabel || "पुढील माजाचा कालावधी"}</p>
              <p className="text-3xl font-bold text-orange-700">{animal.nextHeatRange || "DD/MM/YYYY"}</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl  shadow-md p-5 
              lg:py-11  border border-orange-300 hover:shadow-lg transition-shadow">
              <p className="text-gray-700 text-lg font-bold mb-1">{t.calvingDateLabel || "विण्याची तारीख"}</p>
              <p className="text-5xl font-bold text-orange-700">{animal.expectedDate || "DD/MM/YYYY"}</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-md p-5 
             lg:py-8  border border-orange-300 hover:shadow-lg transition-shadow">
              <p className="text-gray-700 text-lg font-bold  mb-1">{t.periodOfChangeLabel || "संक्रमण काळ"}</p>
              <p className="text-3xl font-bold text-orange-700">  
                {animal.transitionDate && animal.expectedDate
                ? `${animal.transitionDate} to ${animal.expectedDate}`
                : "DD/MM/YYYY"}
              </p>
            </div>
          </div>
        </div>
      </div>
       <div className="mt-3"> 
{/*         
      <div className="max-w-5xl mx-auto mt-6">
        <div className="flex lg:flex-wrap justify-start gap-4">
          <button
            onClick={() => generateReproReport(lang)}
            className="flex items-center gap-2 
          bg-gradient-to-r from-green-600 to-green-800 text-white px-6 lg:py-2.5 rounded-xl 
          shadow-lg hover:from-green-700 hover:to-green-900 transition-all duration-200 mb-10"
          >
            <Download size={18} />
            {t.downloadReportLabel  ||  "Download Report (PDF)"}
          </button>
          <button
            onClick={() => generateReproReport(lang, "jpg")}
            className="flex items-center gap-2 
          bg-gradient-to-r from-green-600 to-green-800 text-white px-6 lg:py-2.5 rounded-xl 
          shadow-lg hover:from-green-700 hover:to-green-900 transition-all duration-200 mb-10"
          >
            <Download size={18} />

            {t.downloadPhotoLabel || "Download as Image"}
          </button>
        </div>

      </div> */}
       <div className="max-w-5xl mx-auto mt-6">
  <div className="flex flex-wrap justify-start gap-4">

    {/* PDF Button */}
    <button
      onClick={() => generateReproReport(lang)}
      className="flex items-center gap-2 
      bg-gradient-to-r from-green-600 to-green-800 text-white 
      px-6 py-2.5 rounded-xl shadow-lg 
      hover:from-green-700 hover:to-green-900 transition-all duration-200 mb-1
      whitespace-normal text-left"
    >
      <Download size={18} />
      {t.downloadReportLabel || "Download Report (PDF)"}
    </button>

    {/* Image Button */}
    <button
      onClick={() => generateReproReport(lang, 'jpg')}
      className="flex items-center gap-2 
      bg-gradient-to-r from-green-600 to-green-800 text-white 
      px-6 py-2.5 rounded-xl shadow-lg 
      hover:from-green-700 hover:to-green-900 transition-all duration-200 
      whitespace-normal text-left"
    >
      <Download size={18} />
      {t.downloadPhotoLabel || "Download as Image"}
    </button>

  </div>
</div>

      </div>
    </>
  );
};

export default Repomanagement;



