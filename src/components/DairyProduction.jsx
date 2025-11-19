// import React, { useEffect } from "react";
// import { Droplets } from "lucide-react";
// import { useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { updateField } from "../redux/dairySlice";
// import AnimalSelector from "./AnimalSelector";
// import LanguageSelector from "./LanguageSelector";
// import "../i18n";
// import { useTranslate } from "../i18n";



// export default function DairyProduction() {
//   const location = useLocation();
//   const dispatch = useDispatch();

//   // 🐄 Determine current animal by route
//   const animalType = location.pathname.includes("buffalo") ? "buffalo" : "cow";
//   // const animalType = location.pathname.includes("cow") ? "cow" : "buffalo";
//   const animalLabel = animalType === "cow" ? "गाई" : "म्हैस";

//   // 🧩 Get current animal data from Redux
//   const animal = useSelector((state) => state.dairy[animalType]);

//   //🧮 Calculations
//   const avgMilkPerAnimal =
//     animal.milkProducingAnimals > 0
//       ? (animal.totalMilkProduction / animal.milkProducingAnimals).toFixed(2)
//       : "0.00";




//   const milkIncome = (animal.totalMilkProduction * animal.milkPrice).toFixed(2);
//   // const dungRate = animalType === "buffalo" ? 20 : 16;
//   const dungRate = 16;
//   const dungIncome = (animal.totalAnimals * dungRate).toFixed(2);
//   const totalIncome = (parseFloat(milkIncome) + parseFloat(dungIncome)).toFixed(2);

//   // 🧭 Handle field updates
//   const handleChange = (field, value) => {
//   dispatch(updateField({ animalType, field, value }));
//   };
//     const { t } = useTranslate();

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-4 sm:p-6 mb-0">
//       <div className="max-w-5xl mx-auto">
//         {/*  Header */}
//         <LanguageSelector />
//         <div className="mb-6 text-center">
//           <h1 className="text-2xl sm:text-3xl font-bold text-green-700 mb-1">
//             {t.title}   {/* दुध उत्पादन व्यवस्थापन */}
//           </h1>
//           <p className="text-sm sm:text-base text-gray-600">
//             {t["sub-title"]}   {/* आपले दुध उत्पादन मापन करा आणि उत्पन्न मोजा */}
//           </p>
//         </div>

//         {/* 🟢 Animal Selector (Route-Synced) */}

//         {/* <AnimalSelector /> */}

//         {/* 🥛 Milk Price */}
//         {/* <div className="bg-white rounded-xl shadow-md p-4 border border-green-400 flex flex-col justify-center mb-6">
//           <label className="block text-green-700 font-semibold mb-2 text-sm flex items-center gap-2">
//             <Droplets size={18} className="text-green-600" />
//             दुधाचा दर (प्रति लिटर ₹) - {animalLabel}
//           </label>
//           <input
//             type="number"
//             value={animal.milkPrice}
//             onChange={(e) => handleChange("milkPrice", e.target.value)}
//             placeholder="0"
//             className="w-full px-4 py-2 border-2 border-green-200 rounded-lg 
//                       focus:border-green-500 focus:outline-none bg-green-50 text-2xl 
//                       font-bold text-green-700"
//           />
//         </div>  */}

//         {/* 🟢 Animal Selector (Route-Synced) + Milk Price (Side by Side on PC) */}
//         {/* 🟢 Animal Selector + Milk Price Inline on Laptop/PC */}
//         <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center lg:gap-8 mb-4 lg:mb-0">
//           {/* Animal Selector */}
//           <div className="lg:w-1/2 w-full">
//             <AnimalSelector />
//           </div>

//           {/* Milk Price */}
//           <div className="lg:w-1/2 w-full bg-white rounded-xl shadow-md p-4 border border-green-400">
//             <label className="block text-green-700 font-semibold mb-2 text-sm flex items-center gap-2">
//               <Droplets size={18} className="text-green-600" />
//               दुधाचा दर (प्रति लिटर ₹) - {animalLabel}
//             </label>
//             <input
//               type="number"
//               value={animal.milkPrice || ""}
//               onChange={(e) => {
//                 const value = e.target.value;

//                 // ✅ Allow empty, integers, and decimals like 30, 30.1, 30.32
//                 if (value === "" || /^\d*\.?\d{0,2}$/.test(value)) {
//                   handleChange("milkPrice", value === "" ? "" : parseFloat(value));
//                 }
//               }}
//               placeholder="0.00"
//               inputMode="decimal" // ✅ shows numeric keypad with '.' on mobile
//               className="w-full px-4 py-2 border-2 border-green-200 rounded-lg 
//              focus:border-green-500 focus:outline-none bg-green-50 text-2xl 
//              font-bold text-green-700"
//             // translate="no"
//             // data-gt-ignore="true"
//             />


//           </div>
//         </div>


//         {/* 🧮 Main Grid */}
//         <div className="grid lg:grid-cols-2 gap-6 items-stretch">
//           {/* Left Grid - Inputs */}
//           <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between">
//             <div>
//               <h2 className="text-xl font-bold text-green-700 mb-5 pb-3 border-b-2 border-green-200">
//                 दुध उत्पादन ({animalLabel})
//               </h2>

//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2 text-sm">
//                    {t.totalAnimalLabel.replace("{animalLabel}", animalLabel)} {/* एकून {animalLabel} */}
//                   </label>
//                   <input
//                     type="text"

//                     value={animal.totalAnimals || ""}
//                     onChange={(e) => handleChange("totalAnimals", e.target.value)}
//                     placeholder="0"
//                     className="w-full px-4 py-2.5 border-2 border-green-200 rounded-lg focus:border-green-500 focus:outline-none bg-green-50"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2 text-sm">
//                     दुध देणाऱ्या {animalLabel}
//                   </label>
//                   <input
//                     type="text"
//                     value={animal.milkProducingAnimals || ""}
//                     onChange={(e) =>
//                       handleChange("milkProducingAnimals", e.target.value)
//                     }
//                     placeholder="0"
//                     className="w-full px-4 py-2.5 border-2 border-green-200 rounded-lg focus:border-green-500 focus:outline-none bg-green-50"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2 text-sm">
//                     भाकड {animalLabel}
//                   </label>
//                   <input
//                     type="text"
//                     value={animal.workingAnimals || ""}
//                     onChange={(e) => handleChange("workingAnimals", e.target.value)}
//                     placeholder="0"
//                     className="w-full px-4 py-2.5 border-2 border-green-200 rounded-lg focus:border-green-500 focus:outline-none bg-green-50"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2 text-sm">
//                    {t.totalMilkProductionLabel}   {/* एकूण दुध उत्पादन (लिटर) */}
//                   </label>
//                   <input
//                     type="text"
//                     value={animal.totalMilkProduction || ""}
//                     onChange={(e) => handleChange("totalMilkProduction", e.target.value)}
//                     placeholder="0"
//                     className="w-full px-4 py-2.5 border-2 border-green-200 rounded-lg focus:border-green-500 focus:outline-none bg-green-50"
//                   />


//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Grid - Results */}
//           <div className="space-y-4 flex flex-col justify-between">
//             <div className="bg-white rounded-xl shadow-md p-5 border border-green-400">
//               <p className="text-gray-600 text-sm font-medium mb-1">
//                 दुधातील {animalLabel}चे सरासरी दूध
//               </p>
//               <p className="text-3xl font-bold text-green-700">
//                 {avgMilkPerAnimal} <span className="text-lg text-gray-500">लिटर</span>
//               </p>
//             </div>

//             <div className="bg-white rounded-xl shadow-md p-5 border border-green-400">
//               <p className="text-gray-600 text-sm font-medium mb-1">
//                 एकूण {animalLabel}चे सरासरी दूध
//               </p>
//               <p className="text-3xl font-bold text-green-700">
//                 {animal.totalAnimals > 0
//                   ? (animal.totalMilkProduction / animal.totalAnimals).toFixed(2)
//                   : "0.00"}{" "}
//                 <span className="text-lg text-gray-500">लिटर</span>
//               </p>
//             </div>

//             <div className="bg-white rounded-xl shadow-md p-5 border border-green-400">
//               <div className="flex items-center gap-2 mb-1">
//                 <p className="text-gray-600 text-sm font-medium">दुधापासून उत्पन्न</p>
//               </div>
//               <p className="text-3xl font-bold text-green-700">₹{milkIncome}</p>
//             </div>

//             <div className="bg-white rounded-xl shadow-md p-5 border border-green-400">
//               <div className="flex items-center gap-2 mb-1">
//                 <p className="text-gray-600 text-sm font-medium">
//                   गोबर उत्पन्न <span className="text-sm"> (दर {dungRate} ₹/प्रति {animalLabel})</span>
//                 </p>
//               </div>
//               <p className="text-3xl font-bold text-green-700">₹{dungIncome}</p>
//             </div>

//             {/* <div className="bg-white rounded-xl shadow-md p-5 border border-green-400">
//               <p className="text-gray-600 text-sm font-medium mb-1">एकूण उत्पन्न</p>
//               <p className="text-3xl font-bold text-green-700">₹{totalIncome}</p>
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// import React, { useEffect } from "react";
// import { Droplets } from "lucide-react";
// import { useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { updateField } from "../redux/dairySlice";
// import AnimalSelector from "./AnimalSelector";
// import LanguageSelector from "./LanguageSelector";
// import "../i18n";
// import { useTranslate } from "../i18n";



// export default function DairyProduction() {
//   const location = useLocation();
//   const dispatch = useDispatch();
//   const { t } = useTranslate();


//   // 🐄 Determine current animal by route
//   const animalType = location.pathname.includes("buffalo") ? "buffalo" : "cow";
//   // const animalType = location.pathname.includes("cow") ? "cow" : "buffalo";
//   //const animalLabel = animalType === "cow" ? "गाई" : "म्हैस";
//   const animalLabel = animalType === "cow" ? t.cowLabel : t.buffaloLabel;

//   // const avgMilkingLabel = animalType === "cow" 
//   //   ? t.avgMilkingCowLabel 
//   //   : t.avgMilkingBuffaloLabel;
//   // const avgMilkLabel = animalType === "cow" 
//   //   ? t.avgMilkCowLabel 
//   //   : t.avgMilkBuffaloLabel;

//    const productionHeaderLabel = animalType === "cow" 
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
//   // const dungRate = animalType === "buffalo" ? 20 : 16;
//   const dungRate = 16;
//   const dungIncome = (animal.totalAnimals * dungRate).toFixed(2);
//   const totalIncome = (parseFloat(milkIncome) + parseFloat(dungIncome)).toFixed(2);

//   // 🧭 Handle field updates
//   const handleChange = (field, value) => {
//     dispatch(updateField({ animalType, field, value }));
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-4 sm:p-6 mb-0">
//       <div className="max-w-5xl mx-auto">
//         {/*  Header */}
//         {/* <LanguageSelector /> */}
//         <div className="mb-6 text-center">

//           <h1 className="text-2xl sm:text-3xl font-bold text-green-700 mb-1">
//             {t.title}   {/* दुध उत्पादन व्यवस्थापन */}
//           </h1>
//           <p className="text-sm sm:text-base text-gray-600">
//             {t.subTitle}   {/* आपले दुध उत्पादन मापन करा आणि उत्पन्न मोजा */}
//           </p>
//         </div>

//         {/* 🟢 Animal Selector (Route-Synced) */}

//         {/* <AnimalSelector /> */}

//         {/* 🥛 Milk Price */}
//         {/* <div className="bg-white rounded-xl shadow-md p-4 border border-green-400 flex flex-col justify-center mb-6">
//           <label className="block text-green-700 font-semibold mb-2 text-sm flex items-center gap-2">
//             <Droplets size={18} className="text-green-600" />
//             दुधाचा दर (प्रति लिटर ₹) - {animalLabel}
//           </label>
//           <input
//             type="number"
//             value={animal.milkPrice}
//             onChange={(e) => handleChange("milkPrice", e.target.value)}
//             placeholder="0"
//             className="w-full px-4 py-2 border-2 border-green-200 rounded-lg 
//                       focus:border-green-500 focus:outline-none bg-green-50 text-2xl 
//                       font-bold text-green-700"
//           />
//         </div>  */}

//         {/* 🟢 Animal Selector (Route-Synced) + Milk Price (Side by Side on PC) */}
//         {/* 🟢 Animal Selector + Milk Price Inline on Laptop/PC */}
//         <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center lg:gap-8 mb-4 lg:mb-0">
//           {/* Animal Selector */}
//           <div className="lg:w-1/2 w-full">
//             <AnimalSelector />
//           </div>

//           {/* Milk Price */}
//           <div className="lg:w-1/2 w-full bg-white rounded-xl shadow-md p-4 border border-green-400">
//             <label className="block text-green-700 font-semibold mb-2 text-sm flex items-center gap-2">
//               <Droplets size={18} className="text-green-600" />
//               {`${t.milkRateLabel} - ${animalLabel}`}
//             </label>
//             <input
//               type="number"
//               value={animal.milkPrice || ""}
//               onChange={(e) => {
//                 const value = e.target.value;

//                 // ✅ Allow empty, integers, and decimals like 30, 30.1, 30.32
//                 if (value === "" || /^\d*\.?\d{0,2}$/.test(value)) {
//                   handleChange("milkPrice", value === "" ? "" : parseFloat(value));
//                 }
//               }}
//               placeholder="0.00"
//               inputMode="decimal" // ✅ shows numeric keypad with '.' on mobile
//               className="w-full px-4 py-2 border-2 border-green-200 rounded-lg 
//              focus:border-green-500 focus:outline-none bg-green-50 text-2xl 
//              font-bold text-green-700"
//             // translate="no"
//             // data-gt-ignore="true"
//             />


//           </div>
//         </div>


//         {/* 🧮 Main Grid */}
//         <div className="grid lg:grid-cols-2 gap-6 items-stretch">
//           {/* Left Grid - Inputs */}
//           <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between">
//             <div>
//               <h2 className="text-xl font-bold text-green-700 mb-5 pb-3 border-b-2 border-green-200">
//                 {`${t.milkProductionLabel}`}
//               </h2>

//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2 text-sm">
//                      {`${t.totalAnimalLabel} ${animalLabel}`}
//                   </label>
//                   <input
//                     type="text"

//                     value={animal.totalAnimals || ""}
//                     onChange={(e) => handleChange("totalAnimals", e.target.value)}
//                     placeholder="0"
//                     className="w-full px-4 py-2.5 border-2 border-green-200 rounded-lg focus:border-green-500 focus:outline-none bg-green-50"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2 text-sm">
//                    {`${t.milkProducingLabel} ${animalLabel}`}
//                   </label>
//                   <input
//                     type="text"
//                     value={animal.milkProducingAnimals || ""}
//                     onChange={(e) =>
//                       handleChange("milkProducingAnimals", e.target.value)
//                     }
//                     placeholder="0"
//                     className="w-full px-4 py-2.5 border-2 border-green-200 rounded-lg focus:border-green-500 focus:outline-none bg-green-50"
//                   />
//                 </div>

//                 <div>  
//                   <label className="block text-gray-700 font-semibold mb-2 text-sm">
//                     {`${t.workingLabel} ${animalLabel}`} 
//                   </label>
//                   <input
//                     type="text"
//                     value={animal.workingAnimals || ""}
//                     onChange={(e) => handleChange("workingAnimals", e.target.value)}
//                     placeholder="0"
//                     className="w-full px-4 py-2.5 border-2 border-green-200 rounded-lg focus:border-green-500 focus:outline-none bg-green-50"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2 text-sm">
//                     {t.totalMilkProductionLabel}   {/* एकूण दुध उत्पादन (लिटर) */}
//                   </label>
//                   <input
//                     type="text"
//                     value={animal.totalMilkProduction || ""}
//                     onChange={(e) => handleChange("totalMilkProduction", e.target.value)}
//                     placeholder="0"
//                     className="w-full px-4 py-2.5 border-2 border-green-200 rounded-lg focus:border-green-500 focus:outline-none bg-green-50"
//                   />


//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Grid - Results */}
//           <div className="space-y-4 flex flex-col justify-between">
//             <div className="bg-white rounded-xl shadow-md p-5 border border-green-400">
//               <p className="text-gray-600 text-sm font-medium mb-1">
//                {productionHeaderLabel}
//               </p>
//               <p className="text-3xl font-bold text-green-700">
//                 {avgMilkPerAnimal} <span className="text-lg text-gray-500">लिटर</span>
//               </p>
//             </div>

//             <div className="bg-white rounded-xl shadow-md p-5 border border-green-400">
//               <p className="text-gray-600 text-sm font-medium mb-1">
//                 {totalAnimalFieldLabel}
//               </p>
//               <p className="text-3xl font-bold text-green-700">
//                 {animal.totalAnimals > 0
//                   ? (animal.totalMilkProduction / animal.totalAnimals).toFixed(2)
//                   : "0.00"}{" "}
//                 <span className="text-lg text-gray-500">लिटर</span>
//               </p>
//             </div>

//             <div className="bg-white rounded-xl shadow-md p-5 border border-green-400">
//               <div className="flex items-center gap-2 mb-1">
//                 <p className="text-gray-600 text-sm font-medium">{t.incomeFromMilkLabel}</p>
//               </div>
//               <p className="text-3xl font-bold text-green-700">₹{milkIncome}</p>
//             </div>

//             <div className="bg-white rounded-xl shadow-md p-5 border border-green-400">
//               <div className="flex items-center gap-2 mb-1">
//                 <p className="text-gray-600 text-sm font-medium">
//                   {/* गोबर उत्पन्न <span className="text-sm"> (दर {dungRate} ₹/प्रति {animalLabel})</span> */}
//                   {t.dungIncomeLabel2} <span className="text-sm">{`${t.rateLabel2} ${dungRate}₹/${t.perLabel} ${animalLabel}`}</span>
//                 </p>
//               </div>
//               <p className="text-3xl font-bold text-green-700">₹{dungIncome}</p>
//             </div>

//             {/* <div className="bg-white rounded-xl shadow-md p-5 border border-green-400">
//               <p className="text-gray-600 text-sm font-medium mb-1">एकूण उत्पन्न</p>
//               <p className="text-3xl font-bold text-green-700">₹{totalIncome}</p>
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useEffect } from "react";
// import { Droplets } from "lucide-react";
// import { useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { updateField } from "../redux/dairySlice";
// import AnimalSelector from "./AnimalSelector";
// import LanguageSelector from "./LanguageSelector";
// import "../i18n";
// import { useTranslate } from "../i18n";
// import vetrinalogo from '../assets/vetrinalogo.png';


// export default function DairyProduction() {
//   const location = useLocation();
//   const dispatch = useDispatch();
//   const { t } = useTranslate();


//   // 🐄 Determine current animal by route
//   const animalType = location.pathname.includes("buffalo") ? "buffalo" : "cow";
//   // const animalType = location.pathname.includes("cow") ? "cow" : "buffalo";
//   //const animalLabel = animalType === "cow" ? "गाई" : "म्हैस";
//   const animalLabel = animalType === "cow" ? t.cowLabel : t.buffaloLabel;

//   // const avgMilkingLabel = animalType === "cow" 
//   //   ? t.avgMilkingCowLabel 
//   //   : t.avgMilkingBuffaloLabel;
//   // const avgMilkLabel = animalType === "cow" 
//   //   ? t.avgMilkCowLabel 
//   //   : t.avgMilkBuffaloLabel;

//    const productionHeaderLabel = animalType === "cow" 
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
//   // const dungRate = animalType === "buffalo" ? 20 : 16;
//   const dungRate = 16;
//   const dungIncome = (animal.totalAnimals * dungRate).toFixed(2);
//   const totalIncome = (parseFloat(milkIncome) + parseFloat(dungIncome)).toFixed(2);

//   // 🧭 Handle field updates
//   const handleChange = (field, value) => {
//     dispatch(updateField({ animalType, field, value }));
//   };

//   return (
//     <div className="min-h-screen bg-white
//       p-4 sm:p-6 mb-0">
//       <div className="max-w-5xl mx-auto">
//         {/*  Header */}
//         {/* <LanguageSelector /> */}
//         <div className="mb-6 text-center flex justify-between">
//           <div className="vetrinaText">
//               <h3 className="text-vetCust font-extrabold">Vetrina Healthcare Pvt Ltd</h3>
//           </div>
//          <div className=""> 
//           <h1 className="text-2xl sm:text-3xl font-bold text-green-700 mb-1">
//             {t.title}   {/* दुध उत्पादन व्यवस्थापन */}
//           </h1>
//           <p className="text-sm sm:text-base text-gray-600">
//             {t.subTitle}   {/* आपले दुध उत्पादन मापन करा आणि उत्पन्न मोजा */}
//           </p>
//           </div>
//           <div className="vetLogo">
//              <img src={vetrinalogo} width={130} height={130} alt="vetrina logo" />
//           </div>
//         </div>

//         {/* 🟢 Animal Selector (Route-Synced) */}

//         {/* <AnimalSelector /> */}

//         {/* 🥛 Milk Price */}
//         {/* <div className="bg-white rounded-xl shadow-md p-4 border border-green-400 flex flex-col justify-center mb-6">
//           <label className="block text-green-700 font-semibold mb-2 text-sm flex items-center gap-2">
//             <Droplets size={18} className="text-green-600" />
//             दुधाचा दर (प्रति लिटर ₹) - {animalLabel}
//           </label>
//           <input
//             type="number"
//             value={animal.milkPrice}
//             onChange={(e) => handleChange("milkPrice", e.target.value)}
//             placeholder="0"
//             className="w-full px-4 py-2 border-2 border-green-200 rounded-lg 
//                       focus:border-green-500 focus:outline-none bg-green-50 text-2xl 
//                       font-bold text-green-700"
//           />
//         </div>  */}

//         {/* 🟢 Animal Selector (Route-Synced) + Milk Price (Side by Side on PC) */}
//         {/* 🟢 Animal Selector + Milk Price Inline on Laptop/PC */}
//         <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center lg:gap-8 mb-4 lg:mb-0">
//           {/* Animal Selector */}
//           <div className="lg:w-1/2 w-full">
//             <AnimalSelector />
//           </div>

//           {/* Milk Price */}
//           <div className="lg:w-1/2 w-full bg-white rounded-xl shadow-md p-4 border border-green-400">
//             <label className="block text-green-700 font-semibold mb-2 text-sm flex items-center gap-2">
//               <Droplets size={18} className="text-green-600" />
//               {`${t.milkRateLabel} - ${animalLabel}`}
//             </label>
//             <input
//               type="number"
//               value={animal.milkPrice || ""}
//               onChange={(e) => {
//                 const value = e.target.value;

//                 // ✅ Allow empty, integers, and decimals like 30, 30.1, 30.32
//                 if (value === "" || /^\d*\.?\d{0,2}$/.test(value)) {
//                   handleChange("milkPrice", value === "" ? "" : parseFloat(value));
//                 }
//               }}
//               placeholder="0.00"
//               inputMode="decimal" // ✅ shows numeric keypad with '.' on mobile
//               className="w-full px-4 py-2 border-2 border-green-200 rounded-lg 
//              focus:border-green-500 focus:outline-none bg-green-50 text-2xl 
//              font-bold text-green-700"
//             // translate="no"
//             // data-gt-ignore="true"
//             />


//           </div>
//         </div>


//         {/* 🧮 Main Grid */}
//         <div className="grid lg:grid-cols-2 gap-6 items-stretch">
//           {/* Left Grid - Inputs */}
//           <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between">
//             <div>
//               <h2 className="text-xl font-bold text-green-700 mb-5 pb-3 border-b-2 border-green-200">
//                 {`${t.milkProductionLabel}`}
//               </h2>

//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2 text-sm">
//                      {`${t.totalAnimalLabel} ${animalLabel}`}
//                   </label>
//                   <input
//                     type="text"

//                     value={animal.totalAnimals || ""}
//                     onChange={(e) => handleChange("totalAnimals", e.target.value)}
//                     placeholder="0"
//                     className="w-full px-4 py-2.5 border-2 border-green-200 rounded-lg focus:border-green-500 focus:outline-none bg-green-50"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2 text-sm">
//                    {`${t.milkProducingLabel} ${animalLabel}`}
//                   </label>
//                   <input
//                     type="text"
//                     value={animal.milkProducingAnimals || ""}
//                     onChange={(e) =>
//                       handleChange("milkProducingAnimals", e.target.value)
//                     }
//                     placeholder="0"
//                     className="w-full px-4 py-2.5 border-2 border-green-200 rounded-lg focus:border-green-500 focus:outline-none bg-green-50"
//                   />
//                 </div>

//                 <div>  
//                   <label className="block text-gray-700 font-semibold mb-2 text-sm">
//                     {`${t.workingLabel} ${animalLabel}`} 
//                   </label>
//                   <input
//                     type="text"
//                     value={animal.workingAnimals || ""}
//                     onChange={(e) => handleChange("workingAnimals", e.target.value)}
//                     placeholder="0"
//                     className="w-full px-4 py-2.5 border-2 border-green-200 rounded-lg focus:border-green-500 focus:outline-none bg-green-50"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2 text-sm">
//                     {t.totalMilkProductionLabel}   {/* एकूण दुध उत्पादन (लिटर) */}
//                   </label>
//                   <input
//                     type="text"
//                     value={animal.totalMilkProduction || ""}
//                     onChange={(e) => handleChange("totalMilkProduction", e.target.value)}
//                     placeholder="0"
//                     className="w-full px-4 py-2.5 border-2 border-green-200 rounded-lg focus:border-green-500 focus:outline-none bg-green-50"
//                   />


//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Grid - Results */}
//           <div className="space-y-4 flex flex-col justify-between">
//             <div className="bg-white rounded-xl shadow-md p-5 border border-green-400">
//               <p className="text-gray-600 text-sm font-medium mb-1">
//                {productionHeaderLabel}
//               </p>
//               <p className="text-3xl font-bold text-green-700">
//                 {avgMilkPerAnimal} <span className="text-lg text-gray-500">{t.literLabel}</span>
//               </p>
//             </div>

//             <div className="bg-white rounded-xl shadow-md p-5 border border-green-400">
//               <p className="text-gray-600 text-sm font-medium mb-1">
//                 {totalAnimalFieldLabel}
//               </p>
//               <p className="text-3xl font-bold text-green-700">
//                 {animal.totalAnimals > 0
//                   ? (animal.totalMilkProduction / animal.totalAnimals).toFixed(2)
//                   : "0.00"}{" "}
//                 <span className="text-lg text-gray-500">लिटर</span>
//               </p>
//             </div>

//             <div className="bg-white rounded-xl shadow-md p-5 border border-green-400">
//               <div className="flex items-center gap-2 mb-1">
//                 <p className="text-gray-600 text-sm font-medium">{t.incomeFromMilkLabel}</p>
//               </div>
//               <p className="text-3xl font-bold text-green-700">₹{milkIncome}</p>
//             </div>

//             <div className="bg-white rounded-xl shadow-md p-5 border border-green-400">
//               <div className="flex items-center gap-2 mb-1">
//                 <p className="text-gray-600 text-sm font-medium">
//                   {/* गोबर उत्पन्न <span className="text-sm"> (दर {dungRate} ₹/प्रति {animalLabel})</span> */}
//                   {t.dungIncomeLabel2} <span className="text-sm">{`${t.rateLabel2} ${dungRate}₹/${t.perLabel} ${animalLabel}`}</span>
//                 </p>
//               </div>
//               <p className="text-3xl font-bold text-green-700">₹{dungIncome}</p>
//             </div>

//             {/* <div className="bg-white rounded-xl shadow-md p-5 border border-green-400">
//               <p className="text-gray-600 text-sm font-medium mb-1">एकूण उत्पन्न</p>
//               <p className="text-3xl font-bold text-green-700">₹{totalIncome}</p>
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// original code 
// import React, { useEffect } from "react";
// import { Droplets } from "lucide-react";
// import { useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { updateField } from "../redux/dairySlice";
// import AnimalSelector from "./AnimalSelector";
// import LanguageSelector from "./LanguageSelector";
// import "../i18n";
// import { useTranslate } from "../i18n";
// import vetrinalogo from '../assets/vetrinalogo.png';
// export default function DairyProduction() {
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

//   // 🧭 Handle field updates
//   const handleChange = (field, value) => {
//     dispatch(updateField({ animalType, field, value }));
//   };

//   return (
//     <div className="min-h-screen bg-white  p-4 sm:p-6 mb-0">
//       <div className="max-w-5xl mx-auto">
//         {/*  Header */}
//         {/*
//          <div className="mb-6 text-center flex justify-between items-center">
       
//         <div className="mb-10">
//           <div className="vetrinaText relative">
//             <h3 className="text-vetCust font-extrabold absolute w-55">Vetrina Healthcare Pvt Ltd</h3>
//           </div>
//           <div className="vetLogo">
//             <img src={vetrinalogo} width={130} height={130} alt="vetrina logo" />
//           </div>
//       </div>
//          <div className="mb-30"> 
//             <h1 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-1">
//               {t.title} 
//             </h1>
//             <p className="text-sm sm:text-base text-gray-600">
//               {t.subTitle}   
//             </p>
//           </div>
          
         
//         </div> */}

//         <div className="mb-6">
//           {/* Header section with logo on left and text on right */}
//           <div className="flex justify-between items-center mb-4">     
//             <div className="vetrinaText">
//               <h3 className="text-vetCust font-extrabold  text-right">Vetrina Healthcare Pvt.Ltd.</h3>
//             </div>
//              <div className="vetLogo">
//               <img src={vetrinalogo} width={150} height={150} alt="vetrina logo" />
//             </div>
//           </div>

//           {/* Title section below */}
//           <div className="text-center">
//             <h1 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-1">
//               {t.title}   {/* दुध उत्पादन व्यवस्थापन */}
//             </h1>
//             <p className="text-sm sm:text-base text-gray-600">
//               {t.subTitle}   {/* आपले दुध उत्पादन मापन करा आणि उत्पन्न मोजा */}
//             </p>
//           </div>
//         </div>

//         {/* 🟠 Animal Selector + Milk Price Inline */}
//         <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center lg:gap-6 mb-2">
//           {/* Animal Selector */}
//           <div className="lg:w-1/2 w-full mb-4 lg:mb-0">
//             <AnimalSelector/>
//           </div>

//           {/* Milk Price */}
//           <div className="lg:w-1/2 w-full bg-white rounded-xl shadow-md p-4  border-orange-300
//                           bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-md p-5
//                           border-orange-300 hover:shadow-lg transition-shadow
          
//                         ">
//             <label className="block text-orange-700 font-semibold mb-2 text-sm flex items-center gap-2">
//               <Droplets size={18} className="text-orange-600" />
//               {`${t.milkRateLabel} - ${animalLabel}`}
//             </label>
//             <input
//               type="number"
//               value={animal.milkPrice || ""}
//               onChange={(e) => {
//                 const value = e.target.value;
//                 if (value === "" || /^\d*\.?\d{0,2}$/.test(value)) {
//                   handleChange("milkPrice", value === "" ? "" : parseFloat(value));
//                 }
//               }}
//               placeholder="0.00"
//               inputMode="decimal"
//               className="w-full px-4 py-2 border-2 border-orange-200 rounded-lg 
//                          focus:border-orange-500 focus:outline-none focus:ring-2 
//                          focus:ring-orange-200 bg-orange-50 text-2xl 
//                          font-bold text-orange-700 transition-all"
//             />
//           </div>
//         </div>

//         {/* 🧮 Main Grid */}
//         <div className="grid lg:grid-cols-2 gap-6 items-stretch">
//           {/* Left Grid - Inputs */}
//           <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between border border-orange-100
//                           bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-md p-5
//                           border-orange-300 hover:shadow-lg transition-shadow">
//             <div>
//               <h2 className="text-xl font-bold text-orange-700 mb-5 pb-3 border-b-2 border-orange-200 flex items-center gap-2">
//                 <span className="w-1 h-6 bg-orange-600 rounded"></span>
//                 {`${t.milkProductionLabel}`}
//               </h2>

//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2 text-sm">
//                     {`${t.totalAnimalLabel} ${animalLabel}`}
//                   </label>
//                   <input
//                     type="text"
//                     value={animal.totalAnimals || ""}
//                     onChange={(e) => handleChange("totalAnimals", e.target.value)}
//                     placeholder="0"
//                     className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg 
//                                focus:border-orange-500 focus:outline-none focus:ring-2 
//                                focus:ring-orange-100  transition-all font-semibold
//                                hover:border-orange-300"
//                   // className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg 
//                   //            focus:border-orange-500 focus:outline-none focus:ring-2 
//                   //            focus:ring-orange-100 bg-orange-50 transition-all
//                   //            hover:border-orange-300"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2 text-sm">
//                     {`${t.milkProducingLabel} ${animalLabel}`}
//                   </label>
//                   <input
//                     type="text"
//                     value={animal.milkProducingAnimals || ""}
//                     onChange={(e) => handleChange("milkProducingAnimals", e.target.value)}
//                     placeholder="0"
//                     className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg 
//                                focus:border-orange-500 focus:outline-none focus:ring-2 
//                                focus:ring-orange-100  transition-all font-semibold
//                                hover:border-orange-300"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2 text-sm">
//                     {`${t.workingLabel} ${animalLabel}`}
//                   </label>
//                   <input
//                     type="text"
//                     value={animal.workingAnimals || ""}
//                     onChange={(e) => handleChange("workingAnimals", e.target.value)}
//                     placeholder="0"
//                     className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg 
//                                focus:border-orange-500 focus:outline-none focus:ring-2 
//                                focus:ring-orange-100  transition-all font-semibold
//                                hover:border-orange-300"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2 text-sm">
//                     {t.totalMilkProductionLabel}
//                   </label>
//                   <input
//                     type="text"
//                     value={animal.totalMilkProduction || ""}
//                     onChange={(e) => handleChange("totalMilkProduction", e.target.value)}
//                     placeholder="0"
//                     className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg 
//                                focus:border-orange-500 focus:outline-none focus:ring-2 
//                                focus:ring-orange-100  transition-all  font-semibold
//                                hover:border-orange-300"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Grid - Results */}
//           <div className="space-y-4 flex flex-col justify-between">
//             <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-md p-5  border-orange-300 hover:shadow-lg transition-shadow">
//               <p className="text-gray-500 text-sm font-semibold mb-1">
//                 {productionHeaderLabel}
//               </p>
//               <p className="text-3xl font-bold text-orange-700">
//                 {avgMilkPerAnimal} <span className="text-lg text-gray-500">{t.literLabel}</span>
//               </p>
//             </div>

//             <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-md p-5  border-orange-300 hover:shadow-lg transition-shadow">
//               <p className="text-gray-500 text-sm font-semibold mb-1">
//                 {totalAnimalFieldLabel}
//               </p>
//               <p className="text-3xl font-bold text-orange-700">
//                 {animal.totalAnimals > 0
//                   ? (animal.totalMilkProduction / animal.totalAnimals).toFixed(2)
//                   : "0.00"}{" "}
//                 <span className="text-lg text-gray-500">लिटर</span>
//               </p>
//             </div>

//             <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-md p-5  border-orange-300 hover:shadow-lg transition-shadow">
//               <div className="flex items-center gap-2 mb-1">
//                 <p className="text-gray-500 text-sm font-semibold">{t.incomeFromMilkLabel}</p>
//               </div>
//               <p className="text-3xl font-bold text-orange-700">₹{milkIncome}</p>
//             </div>

//             <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-md p-5  border-orange-300 hover:shadow-lg transition-shadow">
//               <div className="flex items-center gap-2 mb-1">
//                 <p className="text-gray-500 text-sm font-semibold">
//                   {t.dungIncomeLabel2} <span className="text-sm">{`${t.rateLabel2} ${dungRate}₹/${t.perLabel} ${animalLabel}`}</span>
//                 </p>
//               </div>
//               <p className="text-3xl font-bold text-orange-700">₹{dungIncome}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useEffect } from "react";
import { Droplets } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "../redux/dairySlice";
import AnimalSelector from "./AnimalSelector";
import LanguageSelector from "./LanguageSelector";
import "../i18n";
import { useTranslate } from "../i18n";
import vetrinalogo from '../assets/vetrinalogo.png';
import MilkProductionExpenses from "./MilkProductionExpenses";
// import Sidebar from "./Sidebar";


export default function DairyProduction() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { t } = useTranslate();


  // 🐄 Determine current animal by route 
  // const animalType = location.pathname.includes("buffalo") ? "buffalo" : "cow";
  const animalType = location.pathname.includes("cow") ? "cow" : "buffalo";
  const animalLabel = animalType === "cow" ? t.cowLabel : t.buffaloLabel;

  const productionHeaderLabel = animalType === "cow"
    ? t.avgMilkingCowLabel
    : t.avgMilkingBuffaloLabel;

  const totalAnimalFieldLabel = animalType === "cow"
    ? t.avgMilkCowLabel
    : t.avgMilkBuffaloLabel;

  // 🧩 Get current animal data from Redux
  const animal = useSelector((state) => state.dairy[animalType]);

  //🧮 Calculations
  const avgMilkPerAnimal =
    animal.milkProducingAnimals > 0
      ? (animal.totalMilkProduction / animal.milkProducingAnimals).toFixed(2)
      : "0.00";

  const milkIncome = (animal.totalMilkProduction * animal.milkPrice).toFixed(2);
  const dungRate = 16;
  const dungIncome = (animal.totalAnimals * dungRate).toFixed(2);
  const totalIncome = (parseFloat(milkIncome) + parseFloat(dungIncome)).toFixed(2);

  // 🧭 Handle field updates
  const handleChange = (field, value) => {
    dispatch(updateField({ animalType, field, value }));
  };

  return (
    <div className="min-h-screen bg-white  p-4 sm:p-6 mb-0">
      <div className="max-w-5xl mx-auto">
        
        {/*  Header */}
        {/*
         <div className="mb-6 text-center flex justify-between items-center">
       
        <div className="mb-10">
          <div className="vetrinaText relative">
            <h3 className="text-vetCust font-extrabold absolute w-55">Vetrina Healthcare Pvt Ltd</h3>
          </div>
          <div className="vetLogo">
            <img src={vetrinalogo} width={130} height={130} alt="vetrina logo" />
          </div>
      </div>
         <div className="mb-30"> 
            <h1 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-1">
              {t.title} 
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              {t.subTitle}   
            </p>
          </div>
          
         
        </div> */}
     

        {/* 🧮 Main Grid */}
        <MilkProductionExpenses/>
      
      </div>
    </div>
  );
}
