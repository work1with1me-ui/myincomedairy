
import React, { useEffect } from "react";
import { Droplets } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "../redux/dairySlice";
import AnimalSelector from "./AnimalSelector";
import LanguageSelector from "./LanguageSelector";
import "../i18n";
import { useTranslate } from "../i18n";
import { useTab } from "../context/TabContext";
import { dictionary } from "pdfmake/build/pdfmake";

const MilkProductionExpenses = () => {

  const location = useLocation();
  const dispatch = useDispatch();
  const { t } = useTranslate();
  const { activeTab } = useTab(); 


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

//   return (
//     // <div className="grid lg:grid-cols-2 gap-6 items-stretch">
//     <div className="grid lg:grid-rows-2 gap-6 items-stretch">
//       {/* Left Grid - Inputs */}
//     <div className="">
//             { activeTab !== "repro" && (
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
//          )}
//       </div>

//      <div className="grid lg:grid-cols-2 gap-6 items-stretch">
//       <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between border border-orange-100
//                           bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-md p-5
//                           border-orange-300 hover:shadow-lg transition-shadow">
//         <div>
//           <h2 className="text-xl font-bold text-orange-700 mb-5 pb-3 border-b-2 border-orange-200 flex items-center gap-2">
//             <span className="w-1 h-6 bg-orange-600 rounded"></span>
//             {`${t.milkProductionLabel}`}
//           </h2>

//           <div className="space-y-4">
//             <div>
//               <label className="block text-gray-700 font-semibold mb-2 text-sm">
//                 {`${t.totalAnimalLabel} ${animalLabel}`}
//               </label>
//               <input
//                 type="text"
//                 value={animal.totalAnimals || ""}
//                 onChange={(e) => handleChange("totalAnimals", e.target.value)}
//                 placeholder="0"
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
//                 {`${t.milkProducingLabel} ${animalLabel}`}
//               </label>
//               <input
//                 type="text"
//                 value={animal.milkProducingAnimals || ""}
//                 onChange={(e) => handleChange("milkProducingAnimals", e.target.value)}
//                 placeholder="0"
//                 className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg 
//                                focus:border-orange-500 focus:outline-none focus:ring-2 
//                                focus:ring-orange-100  transition-all font-semibold
//                                hover:border-orange-300"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700 font-semibold mb-2 text-sm">
//                 {`${t.workingLabel} ${animalLabel}`}
//               </label>
//               <input
//                 type="text"
//                 value={animal.workingAnimals || ""}
//                 onChange={(e) => handleChange("workingAnimals", e.target.value)}
//                 placeholder="0"
//                 className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg 
//                                focus:border-orange-500 focus:outline-none focus:ring-2 
//                                focus:ring-orange-100  transition-all font-semibold
//                                hover:border-orange-300"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700 font-semibold mb-2 text-sm">
//                 {t.totalMilkProductionLabel}
//               </label>
//               <input
//                 type="text"
//                 value={animal.totalMilkProduction || ""}
//                 onChange={(e) => handleChange("totalMilkProduction", e.target.value)}
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
//             {productionHeaderLabel}
//           </p>
//           <p className="text-3xl font-bold text-orange-700">
//             {avgMilkPerAnimal} <span className="text-lg text-gray-500">{t.literLabel}</span>
//           </p>
//         </div>

//         <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-md p-5  border-orange-300 hover:shadow-lg transition-shadow">
//           <p className="text-gray-500 text-sm font-semibold mb-1">
//             {totalAnimalFieldLabel}
//           </p>
//           <p className="text-3xl font-bold text-orange-700">
//             {animal.totalAnimals > 0
//               ? (animal.totalMilkProduction / animal.totalAnimals).toFixed(2)
//               : "0.00"}{" "}
//             <span className="text-lg text-gray-500">लिटर</span>
//           </p>
//         </div>

//         <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-md p-5  border-orange-300 hover:shadow-lg transition-shadow">
//           <div className="flex items-center gap-2 mb-1">
//             <p className="text-gray-500 text-sm font-semibold">{t.incomeFromMilkLabel}</p>
//           </div>
//           <p className="text-3xl font-bold text-orange-700">₹{milkIncome}</p>
//         </div>

//         <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-md p-5  border-orange-300 hover:shadow-lg transition-shadow">
//           <div className="flex items-center gap-2 mb-1">
//             <p className="text-gray-500 text-sm font-semibold">
//               {t.dungIncomeLabel2} <span className="text-sm">{`${t.rateLabel2} ${dungRate}₹/${t.perLabel} ${animalLabel}`}</span>
//             </p>
//           </div>
//           <p className="text-3xl font-bold text-orange-700">₹{dungIncome}</p>
//         </div>
//       </div>

//       </div>
//     </div>
//   );
// }

// export default MilkProductionExpenses;

return (
  <div className="max-w-5xl mx-auto">
  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 items-stretch bg-white mb-3">
    {/*  Left Column */}
    <div className="flex flex-col gap-6">
      
      {/*  Milk Price Input (hide when repro tab active) */}
      {activeTab !== "repro" && (
        <div
          className="bg-white rounded-xl shadow-md p-5 border border-orange-300
                     bg-gradient-to-br from-orange-50 to-white hover:shadow-lg transition-shadow"
        >
          <label className="block text-orange-700 font-semibold mb-2 text-sm flex items-center gap-2">
            <Droplets size={18} className="text-orange-600" />
            {`${t.milkRateLabel} - ${animalLabel}`}
          </label>

          <input
            type="number"
            value={animal.milkPrice || ""}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "" || /^\d*\.?\d{0,2}$/.test(value)) {
                handleChange("milkPrice", value === "" ? "" : parseFloat(value));
              }
            }}
            placeholder="0.00"
            inputMode="decimal"
            className="w-full px-4 py-2 border-2 border-orange-200 rounded-lg 
                       focus:border-orange-500 focus:outline-none focus:ring-2 
                       focus:ring-orange-200 bg-orange-50 text-2xl 
                       font-bold text-orange-700 transition-all"
          />
        </div>
      )}

      {/* 🐄 Animal Data Inputs */}
      <div
        className="bg-white rounded-2xl shadow-lg p-6 border border-orange-300
                   bg-gradient-to-br from-orange-50 to-white hover:shadow-lg transition-shadow flex flex-col justify-between"
      >
        <h2 className="text-xl font-bold text-orange-700 mb-5 pb-3 border-b-2 border-orange-200 flex items-center gap-2">
          <span className="w-1 h-6 bg-orange-600 rounded"></span>
          {t.milkProductionLabel}
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-sm">
              {`${t.totalAnimalLabel} ${animalLabel}`}
            </label>
            <input
              type="number"
              value={animal.totalAnimals || ""}
              onChange={(e) => handleChange("totalAnimals", e.target.value)}
              placeholder="0"
              className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg 
                         focus:border-orange-500 focus:outline-none focus:ring-2 
                         focus:ring-orange-100 transition-all font-semibold hover:border-orange-300"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-sm">
              {`${t.milkProducingLabel} ${animalLabel}`}
            </label>
            <input
              type="number"
              value={animal.milkProducingAnimals || ""}
              onChange={(e) => handleChange("milkProducingAnimals", e.target.value)}
              placeholder="0"
              className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg 
                         focus:border-orange-500 focus:outline-none focus:ring-2 
                         focus:ring-orange-100 transition-all font-semibold hover:border-orange-300"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-sm">
              {`${t.workingLabel} ${animalLabel}`}
            </label>
            <input
              type="number"
              value={animal.workingAnimals || ""}
              onChange={(e) => handleChange("workingAnimals", e.target.value)}
              placeholder="0"
              className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg 
                         focus:border-orange-500 focus:outline-none focus:ring-2 
                         focus:ring-orange-100 transition-all font-semibold hover:border-orange-300"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-sm">
              {t.totalMilkProductionLabel}
            </label>
            <input
              type="number"
              value={animal.totalMilkProduction || ""}
              onChange={(e) => handleChange("totalMilkProduction", e.target.value)}
              placeholder="0"
              className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg 
                         focus:border-orange-500 focus:outline-none focus:ring-2 
                         focus:ring-orange-100 transition-all font-semibold hover:border-orange-300"
            />
          </div>
        </div>
      </div>
    </div>

    {/* Right Column - Results */}
    <div className="space-y-4 flex flex-col justify-between">
      <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-md p-5 lg:p-8 border border-orange-300 hover:shadow-lg transition-shadow">
        <p className="text-gray-700 text-sm font-semibold mb-1">
          {productionHeaderLabel}  
        </p>
        <p className="text-3xl font-bold text-orange-700">
          {avgMilkPerAnimal} <span className="text-lg text-gray-500">{t.literLabel}</span>
        </p>
      </div>

      <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-md p-5 lg:p-8 border border-orange-300 hover:shadow-lg transition-shadow">
        <p className="text-gray-700 text-sm font-semibold mb-1">
          {totalAnimalFieldLabel}
        </p>
        <p className="text-3xl font-bold text-orange-700">
          {animal.totalAnimals > 0
            ? (animal.totalMilkProduction / animal.totalAnimals).toFixed(2)
            : "0.00"}{" "}
          <span className="text-lg text-gray-500">{t.literLabel}</span>
        </p>
      </div>

      <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-md p-5 lg:p-9 border border-orange-300 hover:shadow-lg transition-shadow">
        <div className="flex items-center gap-2 mb-1">
          <p className="text-gray-700 text-sm font-semibold">{t.incomeFromMilkLabel}</p>
        </div>
        <p className="text-3xl font-bold text-orange-700">₹{milkIncome}</p>
      </div>

      <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-md p-5 lg:p-9 border border-orange-300 hover:shadow-lg transition-shadow">
        <div className="flex items-center gap-2 mb-1">
          <p className="text-gray-700 text-sm font-semibold">
            {t.dungIncomeLabel2}{" "}
            <span className="text-sm">
              {`${t.rateLabel2} ${dungRate}₹/${t.perLabel} ${animalLabel}`}
            </span>
          </p>
        </div>
        <p className="text-3xl font-bold text-orange-700">₹{dungIncome}</p>
      </div>
    </div>
  </div>
  </div>
);
}
export default MilkProductionExpenses;