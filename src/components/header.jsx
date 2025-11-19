//original code 12-nov-25

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
import textlogo from "../assets/textlogo.png"
import { useTab } from "../context/TabContext";


const Header = () => {

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

  return (
    <>
      {/* <div className="mb-1"> */}
        {/* Header section with logo on left and text on right */}
        <div 
          className="flex justify-between items-center px-6 lg:py-4 py-3  bg-white
           shadow-md border border-gray-100"
          // className="flex justify-between items-center px-6 lg:py-6 py-3 mb-6 bg-white
          // lg:rounded-2xl lg:mt-1 lg:mx-3 shadow-md border border-gray-100
          
          > 
          {/* <div className="vetrinaText sm:w-[160px]">
            <img
              src={textlogo}
              width={270}
              height={120}
              alt="Vetrina Text Logo"
              className="object-contain"
            />
          </div> */}
          <div className="vetrinaText w-38  md:w-75">
            <img
              src={textlogo}
              alt="Vetrina Text Logo"
              className="object-contain w-full h-auto"
            />
          </div>


          <div className="vetLogo">
            <img
              src={vetrinalogo}
              width={150}
              height={120}
              alt="Vetrina Logo"
              className="object-contain drop-shadow-md"
            />
          </div>

        </div>
        {/* <div className="lg:mb-5 absolute right-4 top-18 lg:right-29
         lg:top-24 bg-gray-100 lg:rounded-xl rounded-sm lg:px-2 lg:py-2 px-1 py-2">
          <LanguageSelector />
        </div> */}
        {/* <div className="absolute lg:right-27 right-8 top-25 bg-gray-100 rounded-xl px-2 py-2">
          <LanguageSelector />
        </div> */}
        {/* <div className="lg:text-center text-center mt-5">
          <h1 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-1 ml-4 mt-15">
            {t.title}  
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            {t.subTitle}  
          </p>
        </div>
         */}
        {/*           
          <div className="flex justify-between items-center mb-4 pt-2">     
            <div className="vetrinaText">
              <img src={textlogo} width={350} height={200} alt="" />
            </div>
             <div className="vetLogo">
              <img src={vetrinalogo} width={170} height={170} alt="vetrina logo" />
            </div>
          </div> */}

        {/* Title section below */}
        
      {/* </div> */}

      {/* 🟠 Animal Selector + Milk Price Inline */}
{/*       
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center lg:gap-6 mb-2">
     
        <div className="w-full  lg:mb-0">
          <AnimalSelector />
        </div>
      </div> */}
    </>
  );
}

export default Header;


// modified code 
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
// import MilkProductionExpenses from "./MilkProductionExpenses";
// import textlogo from "../assets/textlogo.png"
// import { useTab } from "../context/TabContext";


// const Header = () => {

//   const location = useLocation();
//   const dispatch = useDispatch();
//   const { t } = useTranslate();
//   const { activeTab } = useTab();


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
//     <>
//     <div className="mb-1">
//   {/* ✅ Header section */}
//   <div
//     className="flex justify-between items-center 
//                bg-white border border-gray-100 shadow-md
//                rounded-none md:rounded-2xl
//                px-3 py-2 md:px-6 md:py-6 mb-4"
//   >
//     {/* Left Logo */}
//     <div className="vetrinaText w-28 md:w-44">
//       <img
//         src={textlogo}
//         alt="Vetrina Text Logo"
//         className="object-contain w-full h-auto"
//       />
//     </div>

//     {/* Right Logo*/}
//     <div className="vetLogo w-24 md:w-36">
//       <img
//         src={vetrinalogo}
//         alt="Vetrina Logo"
//         className="object-contain w-full h-auto drop-shadow-md"
//       />
//     </div>
//   </div>

//   {/* ✅ Language Selector - adjust for mobile */}
//   <div className="absolute right-4 top-3 md:top-6">
//     <LanguageSelector />
//   </div>

//   {/* ✅ Title Section */}
//   <div className="text-center md:text-center mb-3">
//     <h1 className="text-xl md:text-3xl font-bold text-orange-700 mb-1">
//       {t.title}
//     </h1>
//     <p className="text-sm md:text-base text-gray-600">
//       {t.subTitle}
//     </p>
//   </div>
// </div>

// {/* ✅ Animal Selector + Tabs area */}
// <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center lg:gap-6 p-4">
//   <div 
//   className=" bg-gray-200 border border-gray-100 shadow-md
//                rounded-none md:rounded-2xl"
  
//   >
//     <AnimalSelector />
//   </div>
// </div>

//     </>
//   );
// }

// export default Header;

