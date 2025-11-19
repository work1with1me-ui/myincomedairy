

// // import { createSlice } from "@reduxjs/toolkit";

// // const initialState = {
// //   cow: {
// //     totalAnimals: 0,
// //     milkProducingAnimals: 0,
// //     totalMilkProduction: 0,
// //     milkPrice: 0,
// //     foodExpenses: 0,
// //     stableExpenses: 0,
// //     vaidanExpenses: 0,
// //   },
// //   buffalo: {
// //     totalAnimals: 0,
// //     milkProducingAnimals: 0,
// //     totalMilkProduction: 0,
// //     milkPrice: 0,
// //     foodExpenses: 0,
// //     stableExpenses: 0,
// //     vaidanExpenses: 0,
// //   },
// // };

// // const dairySlice = createSlice({
// //   name: "dairy",
// //   initialState,
// //   reducers: {
// //     updateField: (state, action) => {
// //       const { animalType, field, value } = action.payload;
// //       if (state[animalType]) {
// //         state[animalType][field] = Number(value);
// //       }
// //     },
// //     updateExpense: (state, action) => {
// //       const { animalType, category, total } = action.payload;
// //       if (state[animalType]) {
// //         state[animalType][category] = Number(total);
// //       }
// //     },
// //     resetData: (state) => {
// //       Object.keys(state).forEach((animal) => {
// //         Object.keys(state[animal]).forEach((key) => {
// //           state[animal][key] = 0;
// //         });
// //       });
// //     },
// //   },
// // });

// // export const { updateField, updateExpense, resetData } = dairySlice.actions;
// // export default dairySlice.reducer;



// // src/redux/dairySlice.js
// import { createSlice } from "@reduxjs/toolkit";
// import {
//   stableExpensesDefault,
//   foodExpensesDefault,
//   vaidanExpensesDefault,
// } from "../data/expensesDefaults";

// // 🟢 Redux Slice
// const dairySlice = createSlice({
//   name: "dairy",
//   initialState: {
//     stableExpenses: stableExpensesDefault,
//     foodExpenses: foodExpensesDefault,
//     vaidanExpenses: vaidanExpensesDefault,

//     // You can add more global fields later like:
//     totalAnimals: 0,
//     totalMilkProduction: 0,
//     milkPrice: 0,
//     animalType: "cow",
//   },

//   reducers: {
//     // 🧩 Generic Field Update (for DairyProduction.jsx)
//     updateField: (state, action) => {
//       const { field, value } = action.payload;
//       state[field] = value;
//     },

//     // 🟢 Stable Expenses
//     updateStableExpense: (state, action) => {
//       const { index, rate } = action.payload;
//       state.stableExpenses[index].rate = rate;
//     },

//     // 🟢 Food Expenses
//     updateFoodExpense: (state, action) => {
//       const { index, field, value } = action.payload;
//       state.foodExpenses[index][field] = value;
//     },

//     // 🟢 Vaidan Expenses
//     updateVaidanExpense: (state, action) => {
//       const { index, field, value } = action.payload;
//       state.vaidanExpenses[index][field] = value;
//     },
//   },
// });

// // ✅ Export actions
// export const {
//   updateField,
//   updateStableExpense,
//   updateFoodExpense,
//   updateVaidanExpense,
// } = dairySlice.actions;

// // ✅ Export reducer
// export default dairySlice.reducer;



import { createSlice } from "@reduxjs/toolkit";
import {
  stableExpensesDefault,
  foodExpensesDefault,
  vaidanExpensesDefault,
} from "../data/expensesDefaults";

// 🟢 Base structure for each animal
const animalInitialState = {
  totalAnimals: 0,
  milkProducingAnimals: 0,
  totalMilkProduction: 0,
  milkPrice: 0,
  foodExpenses: foodExpensesDefault,
  stableExpenses: stableExpensesDefault,
  vaidanExpenses: vaidanExpensesDefault,

  tagNumber: "",
  heatDate: "",
  bullInfo: "",
  inseminationDate: "",
  expectedDate: "",
  transitionDate: "",
  nextHeatRange: "",
};

const dairySlice = createSlice({
  name: "dairy",
  initialState: {
    cow: { ...animalInitialState },
    buffalo: { ...animalInitialState },
  },

  reducers: {
    //  Update numeric fields (for DairyProduction)
    updateField: (state, action) => {
      const { animalType, field, value } = action.payload;
      if (state[animalType]) {
        state[animalType][field] = value;
      }
    },

    //  Stable Expenses
    updateStableExpense: (state, action) => {
      const { animalType, index, rate } = action.payload;
      if (state[animalType]?.stableExpenses[index]) {
        state[animalType].stableExpenses[index].rate = rate;
      }
    },

    //  Food Expenses
    updateFoodExpense: (state, action) => {
      const { animalType, index, field, value } = action.payload;
      if (state[animalType]?.foodExpenses[index]) {
        state[animalType].foodExpenses[index][field] = value;
      }
    },

    //  Vairan Expenses
    updateVaidanExpense: (state, action) => {
      const { animalType, index, field, value } = action.payload;
      if (state[animalType]?.vaidanExpenses[index]) {
        state[animalType].vaidanExpenses[index][field] = value;
      }
    },


updateMultipleFields: (state, action) => {
  const { animalType, fields } = action.payload;
  if (!fields || typeof fields !== "object") return;
  if (state[animalType]) {
    Object.entries(fields).forEach(([key, value]) => {
      state[animalType][key] = value;
    });
  }
},



    // Reset all data
    resetData: (state) => {
      Object.keys(state).forEach((animal) => {
        state[animal] = { ...animalInitialState };
      });
    },


     resetAnimalData: (state, action) => {
      const { animalType } = action.payload;
      if (state[animalType]) {
        state[animalType] = { ...animalInitialState };
      }
    }
  },
});

export const {
  updateField,
  updateStableExpense,
  updateFoodExpense,
  updateVaidanExpense,
  updateMultipleFields,
  resetData,
} = dairySlice.actions;

export default dairySlice.reducer;



