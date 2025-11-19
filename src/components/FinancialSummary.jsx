// original code 
// import { useTranslate } from "../i18n";
// import React, { useMemo } from "react";
// import { useSelector } from "react-redux";
// import { useLocation } from "react-router-dom";
// import { foodExpensesDefault } from "../data/expensesDefaults";

// const FinancialSummary = () => {
//   const location = useLocation();
//   const { t, lang } = useTranslate();
//   const animalType = location.pathname.includes("buffalo") ? "buffalo" : "cow";

//   //  Get data from Redux store
//   const dairy = useSelector((state) => state.dairy[animalType]);

//   const {
//     totalMilkProduction = 0,
//     milkPrice = 0,
//     totalAnimals = 0,
//     foodExpenses = [],
//     stableExpenses = [],
//     vaidanExpenses = [],
//   } = dairy || {};

//   // Calculate totals from arrays
//   const totalFoodExpenses = useMemo(
//     () =>
//       foodExpenses.reduce(
//         (sum, exp) =>
//           sum + (Number(exp.qty || exp.praman || 0) * Number(exp.rate || 0)),
//         0
//       ),
//     [foodExpenses]
//   );

//   const totalStableExpenses = stableExpenses.reduce(
//   (sum, exp) => sum + (Number(exp.rate) || 0) * (Number(totalAnimals) || 0),
//   0
  
// );


//   const totalVaidanExpenses = useMemo(
//     () =>
//       vaidanExpenses.reduce(
//         (sum, v) =>
//           sum + (Number(v.praman || v.qty || 0) * Number(v.rate || 0)),
//         0
//       ),
//     [vaidanExpenses]
//   );

//   // Main Calculations
//   const milkIncome = Number(totalMilkProduction) * Number(milkPrice);
//    const dungIncome = Number(totalAnimals) * 16;
  
//   const totalIncome = milkIncome + dungIncome;

//   const totalExpenses =
//     totalFoodExpenses + totalStableExpenses + totalVaidanExpenses;
//   const netProfit = totalIncome - totalExpenses;

//   const costPerLiter =
//     totalMilkProduction > 0 ? totalExpenses / totalMilkProduction : 0;
//   const profitPerLiter =
//     totalMilkProduction > 0 ? netProfit / totalMilkProduction : 0;

//   const incomePerLiter = 
//     // milkPrice > 0 ?  totalIncome / milkPrice : 0;
//       totalMilkProduction > 0 ? milkIncome / totalMilkProduction : 0;

//   const format = (v) =>
//     isNaN(v) || !isFinite(v) ? "0.00" : Number(v).toFixed(2);

//   return (
//     <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl shadow-lg p-6 mt-8 w-full max-w-5xl mx-auto border-green-500">
//       <h2 className="text-2xl sm:text-3xl font-bold text-center text-green-700 mb-8">
//         {`${animalType}` === "cow" ? `${t.totalSummaryCowLabel}` : `${t.totalSummaryBuffaloLabel}`} 
//         {/* {animalType === "cow" ? "गाईंचा आर्थिक सारांश" : "म्हैशींचा आर्थिक सारांश"} */}

//         {/* <p className="text-xl font-medium">
//           ({animalType === "cow" ? "Cow" : "Buffalo"} Financial Summary)
//         </p> */}
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
//         {/* एकूण उत्पन्न */}
//         <div className="bg-white  border-green-500 p-5 rounded-xl shadow-md hover:shadow-lg transition">
//           <h3 className="text-green-600 font-semibold text-lg mb-1">
//             {t.totalIncomeLabel}
//           </h3>
//           <p className="text-2xl font-bold text-gray-800">
//             ₹{format(totalIncome)}
//           </p>
//         </div>

//         {/* एकूण खर्च */}
//         <div className="bg-white  border-green-500 p-5 rounded-xl shadow-md hover:shadow-lg transition">
//           <h3 className="text-green-600 font-semibold text-lg mb-1">
//             {t.totalExpensesLabel}
//           </h3>
//           <p className="text-2xl font-bold text-gray-800">
//             ₹{format(totalExpenses)}
//           </p>
//         </div>

//         {/* निव्वळ नफा */}
//         <div className="bg-white  border-green-500 p-5 rounded-xl shadow-md hover:shadow-lg transition">
//           <h3 className="text-green-600 font-semibold text-lg mb-1">
//              {t.netProfitLabel}
//           </h3>
//           <p className="text-2xl font-bold text-gray-800">
//             ₹{format(netProfit)}
//           </p>
//         </div>

//         {/* उत्पन्न प्रति लिटर */}
//         <div className="bg-white  border-green-500 p-5 rounded-xl shadow-md hover:shadow-lg transition">
//           <h3 className="text-green-600 font-semibold text-lg mb-1">
//             {t.incomePerLiterLabel}
//           </h3>
//           <p className="text-2xl font-bold text-gray-800">
//             ₹{format(incomePerLiter)}
//           </p>
//         </div>

//         {/* प्रति लिटर खर्च */}
//         <div className="bg-white  border-green-500 p-5 rounded-xl shadow-md hover:shadow-lg transition">
//           <h3 className="text-green-600 font-semibold text-lg mb-1">
//            {t.costPerLiterLabel}
//           </h3>
//           <p className="text-2xl font-bold text-gray-800">
//             ₹{format(costPerLiter)}
//           </p>
//         </div>

//         {/* प्रति लिटर नफा */}
//         <div className="bg-white  border-green-500 p-5 rounded-xl shadow-md hover:shadow-lg transition sm:col-span-2 lg:col-span-1">
//           <h3 className="text-green-600 font-semibold text-lg mb-1">
//             {t.profitPerLiterLabel}
//           </h3>
//           <p className="text-2xl font-bold text-gray-800">
//             ₹{format(profitPerLiter)}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FinancialSummary;


import { useTranslate } from "../i18n";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { foodExpensesDefault } from "../data/expensesDefaults";

const FinancialSummary = () => {
  const location = useLocation();
  const { t, lang } = useTranslate();
  const animalType = location.pathname.includes("buffalo") ? "buffalo" : "cow";

  //  Get data from Redux store
  const dairy = useSelector((state) => state.dairy[animalType]);

  const {
    totalMilkProduction = 0,
    milkPrice = 0,
    totalAnimals = 0,
    foodExpenses = [],
    stableExpenses = [],
    vaidanExpenses = [],
  } = dairy || {};

  // Calculate totals from arrays
  const totalFoodExpenses = useMemo(
    () =>
      foodExpenses.reduce(
        (sum, exp) =>
          sum + (Number(exp.qty || exp.praman || 0) * Number(exp.rate || 0)),
        0
      ),
    [foodExpenses]
  );

  const totalStableExpenses = stableExpenses.reduce(
  (sum, exp) => sum + (Number(exp.rate) || 0) * (Number(totalAnimals) || 0),
  0
  
);


  const totalVaidanExpenses = useMemo(
    () =>
      vaidanExpenses.reduce(
        (sum, v) =>
          sum + (Number(v.praman || v.qty || 0) * Number(v.rate || 0)),
        0
      ),
    [vaidanExpenses]
  );

  // Main Calculations
  const milkIncome = Number(totalMilkProduction) * Number(milkPrice);
   const dungIncome = Number(totalAnimals) * 16;
  
  const totalIncome = milkIncome + dungIncome;

  const totalExpenses =
    totalFoodExpenses + totalStableExpenses + totalVaidanExpenses;
  const netProfit = totalIncome - totalExpenses;

  const costPerLiter =
    totalMilkProduction > 0 ? totalExpenses / totalMilkProduction : 0;

  const incomePerLiter = 
    totalMilkProduction > 0 ? milkIncome / totalMilkProduction : 0;

  const profitPerLiter =
       incomePerLiter - costPerLiter;

  
  // 18-Nov-25 edit  
  // const profitPerLiter =
  //   totalMilkProduction > 0 ? netProfit / totalMilkProduction : 0;


  


  const format = (v) =>
    isNaN(v) || !isFinite(v) ? "0.00" : Number(v).toFixed(2);

  return (
    <div className="bg-white lg:p-4  lg:mb-0  mb-5">
      <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-lg p-6  w-full max-w-5xl mx-auto border border-orange-300 hover:shadow-xl transition-shadow">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-orange-700 mb-8">
          {`${animalType}` === "cow" ? `${t.totalSummaryCowLabel}` : `${t.totalSummaryBuffaloLabel}`}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {/* Total Income */}
          <div className="bg-white border-2 border-orange-200 p-5 rounded-xl shadow-md hover:shadow-lg hover:border-orange-300 transition-all duration-200">
            <h3 className="text-orange-600 font-semibold text-lg mb-1">
              {t.totalIncomeLabel}
            </h3>
            <p className="text-2xl font-bold text-gray-800">
              ₹{format(totalIncome)}
            </p>
          </div>

          {/* Total Expenses */}
          <div className="bg-white border-2 border-orange-200 p-5 rounded-xl shadow-md hover:shadow-lg hover:border-orange-300 transition-all duration-200">
            <h3 className="text-orange-600 font-semibold text-lg mb-1">
              {t.totalExpensesLabel}
            </h3>
            <p className="text-2xl font-bold text-gray-800">
              ₹{format(totalExpenses)}
            </p>
          </div>

          {/* Net Profit */}
          <div className="bg-white border-2 border-orange-200 p-5 rounded-xl shadow-md hover:shadow-lg hover:border-orange-300 transition-all duration-200">
            <h3 className="text-orange-600 font-semibold text-lg mb-1">
               {t.netProfitLabel}
            </h3>
            <p className="text-2xl font-bold text-gray-800">
              ₹{format(netProfit)}
            </p>
          </div>

          {/* Income Per Liter */}
          <div className="bg-white border-2 border-orange-200 p-5 rounded-xl shadow-md hover:shadow-lg hover:border-orange-300 transition-all duration-200">
            <h3 className="text-orange-600 font-semibold text-lg mb-1">
              {t.incomePerLiterLabel}
            </h3>
            <p className="text-2xl font-bold text-gray-800">
              ₹{format(incomePerLiter)}
            </p>
          </div>

          {/* Cost Per Liter */}
          <div className="bg-white border-2 border-orange-200 p-5 rounded-xl shadow-md hover:shadow-lg hover:border-orange-300 transition-all duration-200">
            <h3 className="text-orange-600 font-semibold text-lg mb-1">
             {t.costPerLiterLabel}
            </h3>
            <p className="text-2xl font-bold text-gray-800">
              ₹{format(costPerLiter)}
            </p>
          </div>

          {/* Profit Per Liter */}
          <div className="bg-white border-2 border-orange-200 p-5 rounded-xl shadow-md hover:shadow-lg hover:border-orange-300 transition-all duration-200 sm:col-span-2 lg:col-span-1">
            <h3 className="text-orange-600 font-semibold text-lg mb-1">
              {t.profitPerLiterLabel}
            </h3>
            <p className="text-2xl font-bold text-gray-800">
              ₹{format(profitPerLiter)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialSummary;