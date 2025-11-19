
// original code 
// import React, { useMemo } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { updateFoodExpense } from "../redux/dairySlice";
// import { useLocation } from "react-router-dom";
// import { foodExpensesDefault } from "../data/expensesDefaults";
// import { useTranslate } from "../i18n";

// const FoodExpenses = () => {
//   const location = useLocation();
//   const { t, lang } = useTranslate();
//   const animalType = location.pathname.includes("buffalo") ? "buffalo" : "cow";
//   const dispatch = useDispatch();

//   const foodExpenses =
//     useSelector((state) => state.dairy[animalType]?.foodExpenses) || [];

//   const handleFoodChange = (index, field, value) => {
//     dispatch(
//       updateFoodExpense({
//         animalType,
//         index,
//         field,
//         value: value || 0,
//       })
//     );
//   };

//   const totalFoodExpenses = useMemo(
//     () =>
//       foodExpenses.reduce(
//         (sum, exp) => sum + (Number(exp.qty) || 0) * (Number(exp.rate) || 0),
//         0
//       ),
//     [foodExpenses]
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-4 sm:p-6 mb-0">
//       <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-green-300 p-5 sm:p-6">
//         <h2 className="text-2xl sm:text-3xl font-bold text-green-700 text-center mb-2">
//            {t.foodExpensesLabel}
//         </h2>
//         <p className="text-green-500 text-center text-sm sm:text-base mb-6">
//            {t.relatedFeedLabel}
//         </p>

//         {/* 💻 Desktop / Tablet View */}
//         <div className="hidden md:block overflow-x-auto">
//           <table className="min-w-full border-separate border-spacing-y-2">
//             <thead>
//               <tr className="text-green-600 bg-green-50">
//                 <th className="py-3 px-4 text-left font-semibold rounded-l-lg">
//                   {t.details}
//                 </th>
//                 <th className="py-3 px-4 text-center font-semibold">
//                   {t.quantityLabel}
//                 </th>
//                 <th className="py-3 px-4 text-center font-semibold">
//                    {t.rateLabel}
//                 </th>
//                 <th className="py-3 px-4 text-right font-semibold rounded-r-lg">
//                    {t.totalExpensesLabel}
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {foodExpensesDefault.map((exp, index) => {
//                   const currentExpense = foodExpenses[index] || exp;
//             const total =
//               (Number(currentExpense.qty) || 0) *
//               (Number(currentExpense.rate) || 0);
//             const translatedItem =
//               typeof exp.item === "object"
//                 ? exp.item[lang] || exp.item.en
//                 : exp.item;
//                 return (
//                   <tr
//                     key={index}
//                     className="bg-white hover:bg-green-50 rounded-lg shadow-sm transition"
//                   >
//                     <td className="py-3 px-4 text-gray-800 font-medium">
//                       {translatedItem}
//                     </td>
//                     <td className="py-3 px-4 text-center">
//                       <input
//                         type="text"
//                         value={ currentExpense.qty || ""} 
//                         onChange={(e) =>
//                           handleFoodChange(index, "qty", e.target.value)
//                         }
//                         className="w-44 sm:w-52 lg:w-64 px-4 py-2 border-2 border-green-200 rounded-lg 
//                                    text-center bg-green-50 text-green-700 font-semibold 
//                                    focus:outline-none focus:ring-2 focus:ring-green-500"
//                         placeholder="0"
//                       />
//                     </td>
//                     <td className="py-3 px-4 text-center">
//                       <input
//                         type="text"
//                         value={currentExpense.rate || ""}
//                         onChange={(e) =>
//                           handleFoodChange(index, "rate", e.target.value)
//                         }
//                         className="w-44 sm:w-52 lg:w-64 px-4 py-2 border-2 border-green-200 rounded-lg 
//                                    text-center bg-green-50 text-green-700 font-semibold 
//                                    focus:outline-none focus:ring-2 focus:ring-green-500"
//                         placeholder="0"
//                       />
//                     </td>
//                     <td className="py-3 px-4 text-right font-semibold text-gray-700">
//                       ₹{total.toFixed(2)}
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>

//         {/* 📱 Mobile View (Card layout same as VaidanExpenses) */}
//         <div className="space-y-6 md:hidden">
//           {foodExpensesDefault.map((exp, index) => {
//             const currentExpense = foodExpenses[index] || exp;
//             const total =
//               (Number(currentExpense.praman) || 0) *
//               (Number(currentExpense.rate) || 0);
//             const translatedItem =
//               typeof exp.item === "object"
//                 ? exp.item[lang] || exp.item.en
//                 : exp.item;
//             return (
//               <div
//                 key={index}
//                 className="bg-white border border-green-200 rounded-2xl shadow-sm p-5 transition hover:shadow-md"
//               >
//                 {/* Title */}
//                 <p className="font-bold text-gray-800 text-lg mb-3">
//                   {translatedItem}
//                 </p>

//                 {/* Quantity Section */}
//                 <div className="mb-4">
//                   <label className="block text-gray-600 text-sm mb-1">
//                     {t.quantityLabel}
//                   </label>
//                   <input
//                     type="text"
//                     value={currentExpense.qty || ""}
//                     onChange={(e) =>
//                       handleFoodChange(index, "qty", e.target.value)
//                     }
//                     className="w-full px-5 py-3 border-2 border-green-300 rounded-lg bg-green-50 
//                                focus:border-green-500 focus:ring-2 focus:ring-green-400 
//                                text-lg font-semibold text-green-700 text-center shadow-sm"
//                     placeholder="0"
//                   />
//                 </div>

//                 {/* Rate Section */}
//                 <div className="mb-2">
//                   <label className="block text-gray-600 text-sm mb-1">दर (₹)</label>
//                   <input
//                     type="text"
//                     value={currentExpense.rate || ""}
//                     onChange={(e) =>
//                       handleFoodChange(index, "rate", e.target.value)
//                     }
//                     className="w-full px-5 py-3 border-2 border-green-300 rounded-lg bg-green-50 
//                                focus:border-green-500 focus:ring-2 focus:ring-green-400 
//                                text-lg font-semibold text-green-700 text-center shadow-sm"
//                     placeholder="0"
//                   />
//                 </div>

//                 {/* Total Below Inputs */}
//                 <p className="text-right mt-2 text-green-700 font-bold text-lg">
//                   ₹{total.toFixed(2)}
//                 </p>
//               </div>
//             );
//           })}
//         </div>

//         {/* ✅ Total Section */}
//         <div className="mt-6 pt-4 border-t-2 border-green-200">
//           <p className="text-right text-xl sm:text-2xl font-bold text-gray-800">
//             {t.totalFoodExpenseLabel}:{" "}
//             <span className="text-green-600">
//               ₹{totalFoodExpenses.toFixed(2)}
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FoodExpenses;


import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFoodExpense } from "../redux/dairySlice";
import { useLocation } from "react-router-dom";
import { foodExpensesDefault } from "../data/expensesDefaults";
import { useTranslate } from "../i18n";

const FoodExpenses = () => {
  const location = useLocation();
  const { t, lang } = useTranslate();
  const animalType = location.pathname.includes("buffalo") ? "buffalo" : "cow";
  const dispatch = useDispatch();

  const foodExpenses =
    useSelector((state) => state.dairy[animalType]?.foodExpenses) || [];

  const handleFoodChange = (index, field, value) => {
    dispatch(
      updateFoodExpense({
        animalType,
        index,
        field,
        value: value || 0,
      })
    );
  };

  const totalFoodExpenses = useMemo(
    () =>
      foodExpenses.reduce(
        (sum, exp) => sum + (Number(exp.qty) || 0) * (Number(exp.rate) || 0),
        0
      ),
    [foodExpenses]
  );

  return (
    <div className="bg-white lg:p-4  lg:mb-0  mb-5">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border-primary-orange p-5 sm:p-6
     bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-md p-5 border
                          border-orange-300 hover:shadow-lg transition-shadow
      ">
        <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 text-center mb-2">
          {t.foodExpensesLabel}
        </h2>
        <p className="text-orange-600 text-center text-sm sm:text-base mb-6">
          {/* {`${t.relatedFeedLabel}`} */}
        </p>

        {/* 💻 Desktop / Tablet View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-2">
            <thead>
              <tr className="text-gray-700">
                <th className="py-3 px-4 text-left font-semibold rounded-l-lg">
                  {t.details}
                </th>
                <th className="py-3 px-4 text-center font-semibold">
                  {t.quantityLabel}
                </th>
                <th className="py-3 px-4 text-center font-semibold">
                  {t.rateLabel}
                </th>
                <th className="py-3 px-4 text-right font-semibold rounded-r-lg">
                  {t.totalExpensesLabel}
                </th>
              </tr>
            </thead>
            <tbody>
              {foodExpensesDefault.map((exp, index) => {
                const currentExpense = foodExpenses[index] || exp;
                const total =
                  (Number(currentExpense.qty) || 0) *
                  (Number(currentExpense.rate) || 0);
                const translatedItem =
                  typeof exp.item === "object"
                    ? exp.item[lang] || exp.item.en
                    : exp.item;
                return (
                  <tr
                    key={index}
                    className="bg-white hover:bg-orange-50 rounded-lg shadow-sm transition-all duration-200"
                  >
                    <td className="py-3 px-4 text-gray-700 font-semibold">
                      {translatedItem}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <input
                        type="number"
                        value={currentExpense.qty || ""}
                        onChange={(e) =>
                          handleFoodChange(index, "qty", e.target.value)
                        }
                        className="w-48 sm:w-56 lg:w-64 px-3 py-2 border-2 border-orange-200 rounded-lg 
                                   text-center bg-orange-50 text-black font-semibold 
                                   focus:outline-none focus:ring-2 focus:bg-white
                                   focus:ring-orange-500
                                   transition-all"
                        placeholder="0"
                      />
                    </td>
                    <td className="py-3 px-4 text-center">
                      <input
                        type="number"
                        value={currentExpense.rate || ""}
                        onChange={(e) =>
                          handleFoodChange(index, "rate", e.target.value)
                        }
                        className="w-48 sm:w-56 lg:w-64 px-3 py-2 border-2 border-orange-200 rounded-lg 
                                   text-center bg-orange-50 text-black font-semibold 
                                   focus:outline-none focus:ring-2 focus:bg-white
                                   focus:ring-orange-500
                                   transition-all"
                        placeholder="0"
                      />
                    </td>
                    <td className="py-3 px-4 text-right font-semibold text-gray-700">
                      ₹{total.toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* 📱 Mobile View */}
        <div className="space-y-6 md:hidden">
          {foodExpensesDefault.map((exp, index) => {
            const currentExpense = foodExpenses[index] || exp;
            const total =
              (Number(currentExpense.qty) || 0) *
              (Number(currentExpense.rate) || 0);
            const translatedItem =
              typeof exp.item === "object"
                ? exp.item[lang] || exp.item.en
                : exp.item;
            return (
              <div
                key={index}
                className="bg-white border-orange-200 rounded-2xl shadow-sm p-5 transition-all duration-200 hover:shadow-md hover:border-orange-300"
              >
                {/* Title */}
                <p className="font-bold text-gray-800 text-lg mb-3">
                  {translatedItem}
                </p>

                {/* Quantity Section */}
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm mb-1">
                    {t.quantityLabel}
                  </label>
                  <input
                    type="number"
                    value={currentExpense.qty || ""}
                    onChange={(e) =>
                      handleFoodChange(index, "qty", e.target.value)
                    }
                    className="w-full px-5 py-3 border-2 border-orange-300 rounded-lg bg-orange-50 
                             focus:border-orange-500 focus:ring-2 focus:ring-orange-300 
                             text-lg font-semibold text-orange-700 text-center shadow-sm
                             transition-all"
                    placeholder="0"
                  />
                </div>

                {/* Rate Section */}
                <div className="mb-2">
                  <label className="block text-gray-600 text-sm mb-1">
                    {t.rateLabel}
                  </label>
                  <input
                    type="number"
                    value={currentExpense.rate || ""}
                    onChange={(e) =>
                      handleFoodChange(index, "rate", e.target.value)
                    }
                    className="w-full px-5 py-3 border-2 border-orange-300 rounded-lg bg-orange-50 
                             focus:border-orange-500 focus:ring-2 focus:ring-orange-300 
                             text-lg font-semibold text-orange-700 text-center shadow-sm
                             transition-all"
                    placeholder="0"
                  />
                </div>

                {/* Total Below Inputs */}
                <p className="text-right mt-3 text-orange-700 font-bold text-lg">
                  ₹{total.toFixed(2)}
                </p>
              </div>
            );
          })}
        </div>

        {/* ✅ Total Section */}
        <div className="mt-6 pt-4 border-t-2 border-orange-200 bg-gradient-to-r from-orange-50 to-transparent rounded-lg p-4">
          <p className="text-right text-xl sm:text-2xl font-bold text-gray-800">
            {t.totalFoodExpenseLabel}:{" "}
            <span className="text-orange-600">
              ₹{totalFoodExpenses.toFixed(2)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodExpenses;







