// import React from "react";

// const TotalFnlSummary = () => {
//   return (
//     <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl shadow-lg p-6 sm:p-8 mt-8 w-full max-w-5xl mx-auto  border-green-500">
//       <h2 className="text-2xl sm:text-3xl font-bold text-center text-green-700 mb-6 sm:mb-8">
//         एकूण आर्थिक सारांश 
//         <p className="text-xl font-medium">(Total Financial Summary Cow / Buffalo)</p>
//       </h2>

//       {/* ✅ Responsive Grid Adjusted for Tablet */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 text-center">
//         {/* एकूण उत्पन्न */}
//         <div className="bg-white border-green-500 p-4 sm:p-5 rounded-xl shadow-md hover:shadow-lg transition">
//           <h3 className="text-green-700 font-semibold text-base sm:text-lg mb-1">
//             एकूण उत्पन्न
//           </h3>
//           <p className="text-2xl font-bold text-gray-800">₹0.00</p>
//         </div>

//         {/* एकूण खर्च */}
//         <div className="bg-white  border-red-500 p-4 sm:p-5 rounded-xl shadow-md hover:shadow-lg transition">
//           <h3 className="text-red-600 font-semibold text-base sm:text-lg mb-1">
//             एकूण खर्च
//           </h3>
//           <p className="text-2xl font-bold text-gray-800">₹0.00</p>
//         </div>

//         {/* निव्वळ नफा */}
//         <div className="bg-white  border-emerald-600 p-4 sm:p-5 rounded-xl shadow-md hover:shadow-lg transition">
//           <h3 className="text-emerald-600 font-semibold text-base sm:text-lg mb-1">
//             निव्वळ नफा
//           </h3>
//           <p className="text-2xl font-bold text-gray-800">₹0.00</p>
//         </div>

//         {/* उत्पन्न प्रति लिटर */}
//         <div className="bg-white  border-blue-500 p-4 sm:p-5 rounded-xl shadow-md hover:shadow-lg transition">
//           <h3 className="text-blue-600 font-semibold text-base sm:text-lg mb-1">
//             उत्पन्न प्रति लिटर
//           </h3>
//           <p className="text-2xl font-bold text-gray-800">₹0.00</p>
//         </div>

//         {/* प्रति लिटर खर्च */}
//         <div className="bg-white  border-yellow-500 p-4 sm:p-5 rounded-xl shadow-md hover:shadow-lg transition">
//           <h3 className="text-yellow-600 font-semibold text-base sm:text-lg mb-1">
//             प्रति लिटर खर्च
//           </h3>
//           <p className="text-2xl font-bold text-gray-800">₹0.00</p>
//         </div>

//         {/* प्रति लिटर नफा */}
//         <div className="bg-white  border-teal-600 p-4 sm:p-5 rounded-xl shadow-md hover:shadow-lg transition sm:col-span-2 lg:col-span-1">
//           <h3 className="text-teal-700 font-semibold text-base sm:text-lg mb-1">
//             प्रति लिटर नफा
//           </h3>
//           <p className="text-2xl font-bold text-gray-800">₹0.00</p>
//         </div>
//       </div>

//       <p className="text-center text-gray-600 text-sm mt-6">
//         सर्व आकडेवारी दूध आणि शेण उत्पन्नावर आधारित आहे.
//       </p>
//     </div>
//   );
// };

// export default TotalFnlSummary;


// import React, { useMemo } from "react";
// import { useSelector } from "react-redux";

// const TotalFnlSummary = () => {
//   // 🟢 Get cow and buffalo data from Redux
//   const { cow = {}, buffalo = {} } = useSelector((state) => state.dairy);

//   // 🧮 Combine both animals’ data safely
//   const totalIncome = useMemo(() => {
//     const cowMilkIncome = Number(cow.totalMilkProduction || 0) * Number(cow.milkPrice || 0);
//     const buffaloMilkIncome = Number(buffalo.totalMilkProduction || 0) * Number(buffalo.milkPrice || 0);

//     const cowDung = Number(cow.totalAnimals || 0) * 16;
//     const buffaloDung = Number(buffalo.totalAnimals || 0) * 16;

//     return cowMilkIncome + buffaloMilkIncome + cowDung + buffaloDung;
//   }, [cow, buffalo]);

//   const totalExpenses = useMemo(() => {
//     const cowExp =
//       Number(cow.foodExpenses || 0) +
//       Number(cow.stableExpenses || 0) +
//       Number(cow.totalVaidanExpense || 0);

//     const buffaloExp =
//       Number(buffalo.foodExpenses || 0) +
//       Number(buffalo.stableExpenses || 0) +
//       Number(buffalo.totalVaidanExpense || 0);

//     return cowExp + buffaloExp;
//   }, [cow, buffalo]);

//   const netProfit = totalIncome - totalExpenses;

//   const totalMilkLiters =
//     Number(cow.totalMilkProduction || 0) + Number(buffalo.totalMilkProduction || 0);

//   const incomePerLiter = totalMilkLiters > 0 ? totalIncome / totalMilkLiters : 0;
//   const costPerLiter = totalMilkLiters > 0 ? totalExpenses / totalMilkLiters : 0;
//   const profitPerLiter = totalMilkLiters > 0 ? netProfit / totalMilkLiters : 0;

//   // 🧰 Helper to safely format values
//   const format = (val) => (isNaN(val) ? "0.00" : val.toFixed(2));

//   return (
//     <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl shadow-lg p-6 sm:p-8 mt-8 w-full max-w-5xl mx-auto border-green-500">
//       <h2 className="text-2xl sm:text-3xl font-bold text-center text-green-700 mb-6 sm:mb-8">
//         एकूण आर्थिक सारांश
//         <p className="text-xl font-medium">
//           (Total Financial Summary – Cow 🐄 + Buffalo 🐃)
//         </p>
//       </h2>

//       {/* ✅ Responsive Grid for Tablet / PC */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 text-center">
//         {/* Total Income */}
//         <div className="bg-white border border-green-500 p-4 sm:p-5 rounded-xl shadow-md">
//           <h3 className="text-green-700 font-semibold text-base sm:text-lg mb-1">
//             एकूण उत्पन्न
//           </h3>
//           <p className="text-2xl font-bold text-gray-800">₹{format(totalIncome)}</p>
//         </div>

//         {/* Total Expenses */}
//         <div className="bg-white border border-red-500 p-4 sm:p-5 rounded-xl shadow-md">
//           <h3 className="text-red-600 font-semibold text-base sm:text-lg mb-1">
//             एकूण खर्च
//           </h3>
//           <p className="text-2xl font-bold text-gray-800">₹{format(totalExpenses)}</p>
//         </div>

//         {/* Net Profit */}
//         <div className="bg-white border border-emerald-600 p-4 sm:p-5 rounded-xl shadow-md">
//           <h3 className="text-emerald-600 font-semibold text-base sm:text-lg mb-1">
//             निव्वळ नफा
//           </h3>
//           <p className="text-2xl font-bold text-gray-800">₹{format(netProfit)}</p>
//         </div>

//         {/* Income Per Liter */}
//         <div className="bg-white border border-blue-500 p-4 sm:p-5 rounded-xl shadow-md">
//           <h3 className="text-blue-600 font-semibold text-base sm:text-lg mb-1">
//             उत्पन्न प्रति लिटर
//           </h3>
//           <p className="text-2xl font-bold text-gray-800">₹{format(incomePerLiter)}</p>
//         </div>

//         {/* Cost Per Liter */}
//         <div className="bg-white border border-yellow-500 p-4 sm:p-5 rounded-xl shadow-md">
//           <h3 className="text-yellow-600 font-semibold text-base sm:text-lg mb-1">
//             प्रति लिटर खर्च
//           </h3>
//           <p className="text-2xl font-bold text-gray-800">₹{format(costPerLiter)}</p>
//         </div>

//         {/* Profit Per Liter */}
//         <div className="bg-white border border-teal-600 p-4 sm:p-5 rounded-xl shadow-md sm:col-span-2 lg:col-span-1">
//           <h3 className="text-teal-700 font-semibold text-base sm:text-lg mb-1">
//             प्रति लिटर नफा
//           </h3>
//           <p className="text-2xl font-bold text-gray-800">₹{format(profitPerLiter)}</p>
//         </div>
//       </div>

//       <p className="text-center text-gray-600 text-sm mt-6">
//         सर्व आकडेवारी दूध आणि शेण उत्पन्नावर आधारित आहे.
//       </p>
//     </div>
//   );
// };

// export default TotalFnlSummary;


// import React, { useMemo } from "react";
// import { useSelector } from "react-redux";
// import  { generateDairyReport } from "./GeneratePdf";

// const TotalFnlSummary = () => {
//   // 🟢 Get cow and buffalo data from Redux
//   const { cow = {}, buffalo = {} } = useSelector((state) => state.dairy);

//   // 🔹 Helper to calculate totals from arrays safely
//   const calcTotal = (arr, type = "food") => {
//     if (!Array.isArray(arr)) return 0;
//     if (type === "food")
//       return arr.reduce((sum, e) => sum + (e.qty || 0) * (e.rate || 0), 0);
//     if (type === "vaidan")
//       return arr.reduce((sum, e) => sum + (e.praman || 0) * (e.rate || 0), 0);
//     return arr.reduce((sum, e) => sum + (e.rate || 0), 0);
//   };

//   // 🧮 Combine both animals’ data safely
//   const totalIncome = useMemo(() => {
//     const cowMilkIncome =
//       Number(cow.totalMilkProduction || 0) * Number(cow.milkPrice || 0);
//     const buffaloMilkIncome =
//       Number(buffalo.totalMilkProduction || 0) *
//       Number(buffalo.milkPrice || 0);

//     const cowDung = Number(cow.totalAnimals || 0) * 16;
//     const buffaloDung = Number(buffalo.totalAnimals || 0) * 16;

//     return cowMilkIncome + buffaloMilkIncome + cowDung + buffaloDung;
//   }, [cow, buffalo]);

//   // ✅ Now calculate real total expenses
//   const totalExpenses = useMemo(() => {
//     const cowExp =
//       calcTotal(cow.foodExpenses, "food") +
//       calcTotal(cow.stableExpenses, "stable") +
//       calcTotal(cow.vaidanExpenses, "vaidan");

//     const buffaloExp =
//       calcTotal(buffalo.foodExpenses, "food") +
//       calcTotal(buffalo.stableExpenses, "stable") +
//       calcTotal(buffalo.vaidanExpenses, "vaidan");

//     return cowExp + buffaloExp;
//   }, [cow, buffalo]);

//   // 🔸 Derived values
//   const netProfit = totalIncome - totalExpenses;

//   const totalMilkLiters =
//     Number(cow.totalMilkProduction || 0) +
//     Number(buffalo.totalMilkProduction || 0);

//   const incomePerLiter =
//     totalMilkLiters > 0 ? totalIncome / totalMilkLiters : 0;
//   const costPerLiter =
//     totalMilkLiters > 0 ? totalExpenses / totalMilkLiters : 0;
//   const profitPerLiter =
//     totalMilkLiters > 0 ? netProfit / totalMilkLiters : 0;

//   // 🧰 Safe formatter
//   const format = (val) => (isNaN(val) ? "0.00" : val.toFixed(2));

//   return (
//     <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl shadow-lg p-6 sm:p-8 mt-8 w-full max-w-5xl mx-auto border-green-500">
//       <h2 className="text-2xl sm:text-3xl font-bold text-center text-green-700 mb-6 sm:mb-8">
//         एकूण आर्थिक सारांश
//         <p className="text-xl font-medium">
//           (Total Financial Summary /Cow + Buffalo)
//         </p>
//       </h2>

//       {/* ✅ Responsive Grid for Tablet / PC */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 text-center">

//         {/* Total Income */}
//         <div className="bg-white border border-green-500 p-4 sm:p-5 rounded-xl shadow-md">
//           <h3 className="text-green-700 font-semibold text-base sm:text-lg mb-1">
//             एकूण उत्पन्न
//           </h3>
//           <p className="text-2xl font-bold text-gray-800">₹{format(totalIncome)}</p>
//         </div>

//         {/* Total Expenses */}
//         <div className="bg-white border border-red-500 p-4 sm:p-5 rounded-xl shadow-md">
//           <h3 className="text-red-600 font-semibold text-base sm:text-lg mb-1">
//             एकूण खर्च
//           </h3>
//           <p className="text-2xl font-bold text-gray-800">₹{format(totalExpenses)}</p>
//         </div>

//         {/* Net Profit */}
//         <div className="bg-white border border-emerald-600 p-4 sm:p-5 rounded-xl shadow-md">
//           <h3 className="text-emerald-600 font-semibold text-base sm:text-lg mb-1">
//             निव्वळ नफा
//           </h3>
//           <p className="text-2xl font-bold text-gray-800">₹{format(netProfit)}</p>
//         </div>

//         {/* Income Per Liter */}
//         <div className="bg-white border border-blue-500 p-4 sm:p-5 rounded-xl shadow-md">
//           <h3 className="text-blue-600 font-semibold text-base sm:text-lg mb-1">
//             उत्पन्न प्रति लिटर
//           </h3>
//           <p className="text-2xl font-bold text-gray-800">₹{format(incomePerLiter)}</p>
//         </div>

//         {/* Cost Per Liter */}
//         <div className="bg-white border border-yellow-500 p-4 sm:p-5 rounded-xl shadow-md">
//           <h3 className="text-yellow-600 font-semibold text-base sm:text-lg mb-1">
//             प्रति लिटर खर्च
//           </h3>
//           <p className="text-2xl font-bold text-gray-800">₹{format(costPerLiter)}</p>
//         </div>

//         {/* Profit Per Liter */}
//         <div className="bg-white border border-teal-600 p-4 sm:p-5 rounded-xl shadow-md sm:col-span-2 lg:col-span-1">
//           <h3 className="text-teal-700 font-semibold text-base sm:text-lg mb-1">
//             प्रति लिटर नफा
//           </h3>
//           <p className="text-2xl font-bold text-gray-800">₹{format(profitPerLiter)}</p>
//         </div>
//       </div>

//       <p className="text-center text-gray-600 text-sm mt-6">
//         सर्व आकडेवारी दूध आणि शेण उत्पन्नावर आधारित आहे.
//       </p>

//     </div>
//   );
// };

// export default TotalFnlSummary;


// origianl code 

// import React, { useMemo } from "react";
// import { useSelector } from "react-redux";
// import { generateDairyReport } from "./GeneratePdf";
// import { Download } from "lucide-react";
// import { getSelectedLanguage } from "../utils/getSelectedLanguage";
// import { useTranslate } from "../i18n";


// const TotalFnlSummary = () => {
//   // 🟢 Get cow and buffalo data from Redux
//   const { cow = {}, buffalo = {} } = useSelector((state) => state.dairy);
//   const { t, lang } = useTranslate();

//   // 🔹 Helper to calculate totals from arrays safely
//   const calcTotal = (arr, type = "food", totalAnimals = 0) => {
//     if (!Array.isArray(arr)) return 0;

//     if (type === "food")
//       return arr.reduce((sum, e) => sum + (e.qty || 0) * (e.rate || 0), 0);

//     if (type === "vaidan")
//       return arr.reduce((sum, e) => sum + (e.praman || 0) * (e.rate || 0), 0);

//     if (type === "stable")
//       return arr.reduce(
//         (sum, e) => sum + (e.rate || 0) * (Number(totalAnimals) || 0),
//         0
//       );
//     return 0;
//   };


//   // 🧮 Combine both animals’ data safely
//   const totalIncome = useMemo(() => {
//     const cowMilkIncome =
//       Number(cow.totalMilkProduction || 0) * Number(cow.milkPrice || 0);
//     const buffaloMilkIncome =
//       Number(buffalo.totalMilkProduction || 0) *
//       Number(buffalo.milkPrice || 0);

//     const cowDung = Number(cow.totalAnimals || 0) * 16;
//     const buffaloDung = Number(buffalo.totalAnimals || 0) * 16;

//     return cowMilkIncome + buffaloMilkIncome + cowDung + buffaloDung;
//   }, [cow, buffalo]);

//   // ✅ Now calculate real total expenses
//   const totalExpenses = useMemo(() => {
//     const cowExp =
//       calcTotal(cow.foodExpenses, "food") +
//       calcTotal(cow.stableExpenses, "stable", cow.totalAnimals) +
//       calcTotal(cow.vaidanExpenses, "vaidan");

//     const buffaloExp =
//       calcTotal(buffalo.foodExpenses, "food") +
//       calcTotal(buffalo.stableExpenses, "stable", buffalo.totalAnimals) +
//       calcTotal(buffalo.vaidanExpenses, "vaidan");

//     return cowExp + buffaloExp;
//   }, [cow, buffalo]);

//   // 🔸 Derived values
//   const netProfit = totalIncome - totalExpenses;

//   const totalMilkLiters =
//     Number(cow.totalMilkProduction || 0) +
//     Number(buffalo.totalMilkProduction || 0);

//   const cowMilkIncome =
//     Number(cow.totalMilkProduction || 0) * Number(cow.milkPrice || 0);
//   const buffaloMilkIncome =
//     Number(buffalo.totalMilkProduction || 0) *
//     Number(buffalo.milkPrice || 0);

//   const totalMilkIncome = cowMilkIncome + buffaloMilkIncome;

//   const incomePerLiter =
//     totalMilkLiters > 0 ? totalMilkIncome / totalMilkLiters : 0;
//   const costPerLiter =
//     totalMilkLiters > 0 ? totalExpenses / totalMilkLiters : 0;
//   const profitPerLiter =
//     totalMilkLiters > 0 ? netProfit / totalMilkLiters : 0;

//   // 🧰 Safe formatter
//   const format = (val) => (isNaN(val) ? "0.00" : val.toFixed(2));

//   return (
//     <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl shadow-lg p-6 sm:p-8 mt-8 w-full max-w-5xl mx-auto border-green-500">
//       <h2 className="text-2xl sm:text-3xl font-bold text-center text-green-700 mb-6 sm:mb-8">
//         {t.combinedSummaryLabel}   {/* एकूण आर्थिक सारांश */}
//         {/* <p className="text-xl font-medium">
//           (Total Financial Summary /Cow + Buffalo)
//         </p> */}
//       </h2>

//       {/* ✅ Responsive Grid for Tablet / PC */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 text-center">

//         {/* Total Income */}
//         <div className="bg-white p-4 sm:p-5 rounded-xl shadow-md">
//           <h3 className="text-green-700 font-semibold text-base sm:text-lg mb-1">
//             {t.totalIncomeLabel}
//           </h3>
//           <p className="text-2xl font-bold text-gray-800">₹{format(totalIncome)}</p>
//         </div>

//         {/* Total Expenses */}
//         <div className="bg-white  p-4 sm:p-5 rounded-xl shadow-md">
//           <h3 className="text-red-600 font-semibold text-base sm:text-lg mb-1">
//             {t.totalExpensesLabel}
//           </h3>
//           <p className="text-2xl font-bold text-gray-800">₹{format(totalExpenses)}</p>
//         </div>

//         {/* Net Profit */}
//         <div className="bg-white   p-4 sm:p-5 rounded-xl shadow-md">
//           <h3 className="text-emerald-600 font-semibold text-base sm:text-lg mb-1">
//             {t.netProfitLabel}
//           </h3>
//           <p className="text-2xl font-bold text-gray-800">₹{format(netProfit)}</p>
//         </div>

//         {/* Income Per Liter */}
//         <div className="bg-white   p-4 sm:p-5 rounded-xl shadow-md">
//           <h3 className="text-blue-600 font-semibold text-base sm:text-lg mb-1">
//             {t.incomePerLiterLabel}
//           </h3>
//           <p className="text-2xl font-bold text-gray-800">₹{format(incomePerLiter)}</p>
//         </div>

//         {/* Cost Per Liter */}
//         <div className="bg-white  p-4 sm:p-5 rounded-xl shadow-md">
//           <h3 className="text-yellow-600 font-semibold text-base sm:text-lg mb-1">
//             {t.costPerLiterLabel}
//           </h3>
//           <p className="text-2xl font-bold text-gray-800">₹{format(costPerLiter)}</p>
//         </div>

//         {/* Profit Per Liter */}
//         <div className="bg-white p-4 sm:p-5 rounded-xl shadow-md sm:col-span-2 lg:col-span-1">
//           <h3 className="text-teal-700 font-semibold text-base sm:text-lg mb-1">
//             {t.profitPerLiterLabel}
//           </h3>
//           <p className="text-2xl font-bold text-gray-800">₹{format(profitPerLiter)}</p>
//         </div>
//       </div>

//       <p className="text-center text-gray-600 text-sm mt-6">
//         {t.desLabel}
//       </p>

//       {/*        
// <button
//   onClick={generateDairyReport}
//   className="mt-6 mx-auto flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 shadow"
// >
//   <Download size={18} />
//   Download Report (PDF)
// </button>
//    */}
//       {/*    
//       <button
//         onClick={() => {
//           const selectedLang = getSelectedLanguage();
//           generateDairyReport(selectedLang); // pass selected language dynamically
//         }}
//         className="mt-6 mx-auto flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 shadow"
//       >
//         <Download size={18} />
//         Download Report (PDF)
//       </button> */}

//       <button
//         onClick={() => generateDairyReport(lang)}
//         className="mt-6 mx-auto flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 shadow"
//       >
//         <Download size={18} />
//         Download Report (PDF)
//       </button>


//     </div>
//   );
// };

// export default TotalFnlSummary;

import React, { useMemo } from "react";
import { useSelector} from "react-redux";
import { generateDairyReport } from "./GeneratePdf";
import { Download } from "lucide-react";
import { getSelectedLanguage } from "../utils/getSelectedLanguage";
import { useTranslate } from "../i18n";
import { useLocation } from "react-router-dom";
import { generateReproReport } from "./ReproPdf.";


const TotalFnlSummary = () => {
  // 🟢 Get cow and buffalo data from Redux
  const { cow = {}, buffalo = {} } = useSelector((state) => state.dairy);
  const { t, lang } = useTranslate();
  
    
  // 🔹 Helper to calculate totals from arrays safely
  const calcTotal = (arr, type = "food", totalAnimals = 0) => {
    if (!Array.isArray(arr)) return 0;

    if (type === "food")
      return arr.reduce((sum, e) => sum + (e.qty || 0) * (e.rate || 0), 0);

    if (type === "vaidan")
      return arr.reduce((sum, e) => sum + (e.praman || 0) * (e.rate || 0), 0);

    if (type === "stable")
      return arr.reduce(
        (sum, e) => sum + (e.rate || 0) * (Number(totalAnimals) || 0),
        0
      );
    return 0;
  };


  // 🧮 Combine both animals' data safely
  const totalIncome = useMemo(() => {
    const cowMilkIncome =
      Number(cow.totalMilkProduction || 0) * Number(cow.milkPrice || 0);
    const buffaloMilkIncome =
      Number(buffalo.totalMilkProduction || 0) *
      Number(buffalo.milkPrice || 0);

    const cowDung = Number(cow.totalAnimals || 0) * 16;
    const buffaloDung = Number(buffalo.totalAnimals || 0) * 16;

    return cowMilkIncome + buffaloMilkIncome + cowDung + buffaloDung;
  }, [cow, buffalo]);

  // ✅ Now calculate real total expenses
  const totalExpenses = useMemo(() => {
    const cowExp =
      calcTotal(cow.foodExpenses, "food") +
      calcTotal(cow.stableExpenses, "stable", cow.totalAnimals) +
      calcTotal(cow.vaidanExpenses, "vaidan");

    const buffaloExp =
      calcTotal(buffalo.foodExpenses, "food") +
      calcTotal(buffalo.stableExpenses, "stable", buffalo.totalAnimals) +
      calcTotal(buffalo.vaidanExpenses, "vaidan");

    return cowExp + buffaloExp;
  }, [cow, buffalo]);

  // 🔸 Derived values
  const netProfit = totalIncome - totalExpenses;

  const totalMilkLiters =
    Number(cow.totalMilkProduction || 0) +
    Number(buffalo.totalMilkProduction || 0);
  

  const cowMilkIncome =
    Number(cow.totalMilkProduction || 0) * Number(cow.milkPrice || 0);
  const buffaloMilkIncome =
    Number(buffalo.totalMilkProduction || 0) *
    Number(buffalo.milkPrice || 0);

  const totalMilkIncome = cowMilkIncome + buffaloMilkIncome;

  const incomePerLiter =
    totalMilkLiters > 0 ? totalMilkIncome / totalMilkLiters : 0;
  const costPerLiter =
    totalMilkLiters > 0 ? totalExpenses / totalMilkLiters : 0;
  const profitPerLiter =
         incomePerLiter - costPerLiter;
   
  


  // Safe formatter
  const format = (val) => (isNaN(val) ? "0.00" : val.toFixed(2));

  return (
    <div className="bg-white lg:p-4  lg:mb-0  mb-5">
      <div 
      // className="
      // bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-lg       
      // p-6 sm:p-8 mt-8 w-full max-w-5xl mx-auto border border-orange-300 hover:shadow-xl transition-shadow
      className="
      bg-gradient-to-r from-orange-500 to-orange-700 text-white px-5 py-2 rounded-xl shadow-lg       
      p-6 sm:p-8  w-full max-w-5xl mx-auto border border-orange-300 hover:shadow-xl transition-shadow
      
      ">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6 sm:mb-8">
          {t.combinedSummaryLabel}
        </h2>

        {/* ✅ Responsive Grid for Tablet / PC */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 text-center">

          {/* Total Income */}
          <div className="bg-white/20  border-orange-200 p-4 sm:p-5 rounded-xl shadow-md hover:shadow-lg hover:border-orange-300 transition-all duration-200">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-1">
              {t.totalIncomeLabel}
            </h3>
            <p className="text-2xl font-bold text-white">₹{format(totalIncome)}</p>
          </div>

          {/* Total Expenses */}
          <div className="bg-white/20  border-orange-200 p-4 sm:p-5 rounded-xl shadow-md hover:shadow-lg hover:border-orange-300 transition-all duration-200">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-1">
              {t.totalExpensesLabel}
            </h3>
            <p className="text-2xl font-bold text-white">₹{format(totalExpenses)}</p>
          </div>

          {/* Net Profit */}
          <div className="bg-white/20 border-orange-200 p-4 sm:p-5 rounded-xl shadow-md hover:shadow-lg hover:border-orange-300 transition-all duration-200">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-1">
              {t.netProfitLabel}
            </h3>
            <p className="text-2xl font-bold text-white">₹{format(netProfit)}</p>
          </div>

          {/* Income Per Liter */}
          <div className="bg-white/20  border-orange-200 p-4 sm:p-5 rounded-xl shadow-md hover:shadow-lg hover:border-orange-300 transition-all duration-200">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-1">
              {t.incomePerLiterLabel}
            </h3>
            <p className="text-2xl font-bold text-white">₹{format(incomePerLiter)}</p>
          </div>

          {/* Cost Per Liter */}
          <div className="bg-white/20 border-orange-200 p-4 sm:p-5 rounded-xl shadow-md hover:shadow-lg hover:border-orange-300 transition-all duration-200">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-1">
              {t.costPerLiterLabel}
            </h3>
            <p className="text-2xl font-bold text-white">₹{format(costPerLiter)}</p>
          </div>

          {/* Profit Per Liter */}
          <div className="bg-white/20  border-orange-200 p-4 sm:p-5 rounded-xl shadow-md hover:shadow-lg hover:border-orange-300 transition-all duration-200 sm:col-span-2 lg:col-span-1">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-1">
              {t.profitPerLiterLabel}
            </h3>
            <p className="text-2xl font-bold text-white">₹{format(profitPerLiter)}</p>
          </div>
        </div>

        <p className="text-center text-white text-sm mt-6">
          {t.desLabel}
        </p>
 
        <button 
          onClick={() => generateDairyReport(lang)}
          className="mt-6 mx-auto flex items-center gap-2 
          bg-gradient-to-r from-green-600 to-green-800 text-white px-5 py-2 rounded-xl 
          shadow-lg hover:from-green-700 hover:to-green-900 transition-all duration-200"
          // className="mt-6 mx-auto flex items-center gap-2 
          // bg-gradient-to-r from-orange-600 to-orange-800 text-white px-5 py-2 rounded-xl 
          // shadow-lg hover:from-orange-700 hover:to-orange-900 transition-all duration-200"
        >
          <Download size={18} />
          {t.downloadReportLabel || "Download Report (PDF)"}
        </button>
       
      </div>
    </div>
  );
};

export default TotalFnlSummary;