// import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// const AnimalSelector = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const isCow = location.pathname.includes("cow");
//   const isBuffalo = location.pathname.includes("buffalo");

//   return (
//     <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg  p-6 flex items-center justify-center mb-6">
//       <div className="inline-flex bg-gradient-to-r from-green-100 to-green-50 border-2 border-green-400 rounded-full overflow-hidden shadow-inner">
//         <button
//           onClick={() => navigate("/cow")}
//           className={`px-8 py-3 font-semibold text-base transition-all duration-300 flex items-center gap-2 ${
//             isCow
//               ? "bg-green-600 text-white scale-105 shadow-lg"
//               : "text-green-700 hover:bg-green-200"
//           } rounded-full`}
//         >
//           <span>गाई</span>
//         </button>

//         <button
//           onClick={() => navigate("/buffalo")}
//           className={`px-8 py-3 font-semibold text-base transition-all duration-300 flex items-center gap-2 ${
//             isBuffalo
//               ? "bg-green-600 text-white scale-105 shadow-lg"
//               : "text-green-700 hover:bg-green-200"
//           } rounded-full`}
//         >
//           <span>म्हैस</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AnimalSelector;


// original 
// import { useTranslate } from "../i18n";
// import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import LanguageSelector from "./LanguageSelector";

// const AnimalSelector = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { t, lang } = useTranslate();

//   const isCow = location.pathname.includes("cow");
//   const isBuffalo = location.pathname.includes("buffalo");

//   return (
//     <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-4 
//     lg:p-8 flex items-center  justify-between mb-3">
//       {/* original tailwaind "bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-4 
//     lg:p-8 flex items-center justify-center mb-3" */} 
//       {/* ↑ Added p-4 (mobile) and lg:p-6 (for PC/laptop) */}

//       <div className="inline-flex bg-gradient-to-r from-green-100 to-green-50 border-2 border-green-400 rounded-full overflow-hidden shadow-inner">
//         <button
//           onClick={() => navigate("/cow")}
//           className={`px-6 lg:px-8 py-2.5 lg:py-3 font-semibold text-base transition-all duration-300 flex items-center gap-2 ${
//             isCow
//               ? "bg-green-600 text-white scale-105 shadow-lg"
//               : "text-green-700 hover:bg-green-200"
//           } rounded-full`}
//         >
//           <span>{t.cowLabel2}</span>
//         </button>

//         <button
//           onClick={() => navigate("/buffalo")}
//           className={`px-6 lg:px-8 py-2.5 lg:py-3 font-semibold text-base transition-all duration-300 flex items-center gap-2 ${
//             isBuffalo
//               ? "bg-green-600 text-white scale-105 shadow-lg"
//               : "text-green-700 hover:bg-green-200"
//           } rounded-full`}
//         >
//           <span>{t.buffaloLabel}</span>
//         </button>

//       </div>

//       <LanguageSelector/>
//     </div>
//   );
// };

// export default AnimalSelector;


// import { useTranslate } from "../i18n";
// import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import LanguageSelector from "./LanguageSelector";

// const AnimalSelector = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { t } = useTranslate();

//   const isCow = location.pathname.includes("cow");
//   const isBuffalo = location.pathname.includes("buffalo");

//   return (
//     <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-5 lg:p-6 mb-3">
//       {/* Container with flex and proper spacing */}
//       <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

//         {/* Animal Toggle Buttons */}
//         <div className="inline-flex bg-gradient-to-r from-green-100 to-green-50 border-2 border-green-400 rounded-full overflow-hidden shadow-inner">
//           <button
//             onClick={() => navigate("/cow")}
//             className={`px-6 sm:px-8 py-2.5 sm:py-3 font-semibold text-sm sm:text-base transition-all duration-300 ${
//               isCow
//                 ? "bg-green-600 text-white shadow-lg"
//                 : "text-green-700 hover:bg-green-200"
//             } rounded-l-full`}
//           >
//             {t.cowLabel || "Cow"}
//           </button>

//           <button
//             onClick={() => navigate("/buffalo")}
//             className={`px-6 sm:px-8 py-2.5 sm:py-3 font-semibold text-sm sm:text-base transition-all duration-300 ${
//               isBuffalo
//                 ? "bg-green-600 text-white shadow-lg"
//                 : "text-green-700 hover:bg-green-200"
//             } rounded-r-full`}
//           >
//             {t.buffaloLabel || "Buffalo"}
//           </button>
//         </div>

//         {/* Language Selector */}
//         <div className="w-full sm:w-auto">
//           <LanguageSelector />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default AnimalSelector;



// 12-Nov-25 original code 1
// import { useTranslate } from "../i18n";
// import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import LanguageSelector from "./LanguageSelector";

// const AnimalSelector = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { t, lang } = useTranslate();

//   const isCow = location.pathname.includes("cow");
//   const isBuffalo = location.pathname.includes("buffalo");
  
//   return (
    
//   <div
//   className="flex items-center justify-between p-4 lg:p-3 mb-3
//              border-b border-orange-100"
//   // className="flex items-center justify-between p-4 lg:p-3 mb-3
//   //            border-b border-orange-100"
// >
//   {/* 🐄 Left side — cow/buffalo buttons */}
// {/*   
//   <div className="inline-flex bg-gradient-to-r from-orange-100 to-orange-50 
//                   border-2 border-orange-400 rounded-full overflow-hidden shadow-inner">
//     <button
//       onClick={() => navigate("/cow")}
//       className={`px-6 lg:px-8 py-2.5 lg:py-3 font-semibold text-base transition-all duration-300 flex items-center gap-2 ${
//         isCow
//           ? "bg-gradient-to-r from-orange-600 to-orange-700 text-white scale-105 shadow-lg"
//           : "text-orange-700 hover:bg-orange-200"
//       } rounded-full`}
//     >
//       <span>{t.cowLabel2}</span>
//     </button>

//     <button
//       onClick={() => navigate("/buffalo")}
//       className={`px-6 lg:px-8 py-2.5 lg:py-3 font-semibold text-base transition-all duration-300 flex items-center gap-2 ${
//         isBuffalo
//           ? "bg-gradient-to-r from-orange-600 to-orange-700 text-white scale-105 shadow-lg"
//           : "text-orange-700 hover:bg-orange-200"
//       } rounded-full`}
//     >
//       <span>{t.buffaloLabel}</span>
//     </button>
//   </div> */}

//   <div className="inline-flex  bg-gray-100 border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
//   <button
//     onClick={() => navigate("/cow")}
//     className={`px-15 py-3 flex items-center gap-2 text-base font-medium transition-all duration-300 rounded-2xl
//       ${
//         isCow
//           ? "bg-gray-200 text-gray-800 shadow-inner scale-105"
//           : "bg-white text-gray-700 hover:bg-gray-50"
//       }`}
//   >
//     🐄 <span>{t.cowLabel2}</span>
//   </button>

//   <button
//     onClick={() => navigate("/buffalo")}
//     className={`px-15 py-3 flex items-center gap-2 text-base font-medium transition-all duration-300 rounded-2xl
//       ${
//         isBuffalo
//           ? "bg-gray-200 text-gray-800 shadow-inner scale-105"
//           : "bg-white text-gray-700 hover:bg-gray-50"
//       }`}
//   >
//     🐃 <span>{t.buffaloLabel}</span>
//   </button>
// </div>


//   {/*  Right side — language selector */}
//   <LanguageSelector />
// </div>
//     // original code 
//     // <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-4 
//     // lg:p-8 flex items-center justify-between mb-3 border border-orange-100 ">

//     //   <div className="inline-flex bg-gradient-to-r from-orange-100 to-orange-50 border-2 border-orange-400 rounded-full overflow-hidden shadow-inner">
//     //     <button
//     //       onClick={() => navigate("/cow")}
//     //       className={`px-6 lg:px-8 py-2.5 lg:py-3 font-semibold text-base transition-all duration-300 flex items-center gap-2 ${isCow
//     //           ? "bg-gradient-to-r from-orange-600 to-orange-700 text-white scale-105 shadow-lg"
//     //           : "text-orange-700 hover:bg-orange-200"

//     //         } rounded-full`}
//     //     >
//     //       <span>{t.cowLabel2}</span>
//     //     </button>

//     //     <button
//     //       onClick={() => navigate("/buffalo")}
//     //       className={`px-6 lg:px-8 py-2.5 lg:py-3 font-semibold text-base transition-all duration-300 flex items-center gap-2 ${isBuffalo
//     //           ? "bg-gradient-to-r from-orange-600 to-orange-700 text-white scale-105 shadow-lg"
//     //           : "text-orange-700 hover:bg-orange-200"
//     //         } rounded-full`}
//     //     >
//     //       <span>{t.buffaloLabel}</span>
//     //     </button>
         
//     //   </div>
//     //   <LanguageSelector />

//     // </div>
    
//    /*
//     <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-4 
//     lg:p-8 flex items-center justify-between mb-3 border border-orange-100">
      
//       <div className="inline-flex bg-white border-2 border-gray-200 rounded-full overflow-hidden shadow-sm">
//         <button
//           onClick={() => navigate("/cow")}
//           className={`px-6 lg:px-8 py-2.5 lg:py-3 font-semibold text-base transition-all duration-300 flex items-center gap-2 ${
//             isCow
//               ? "bg-orange-400 text-white scale-105 shadow-md"
//               : "text-gray-700 hover:bg-gray-100"
//           } rounded-full`}
//         >
//           <span>{t.cowLabel2}</span>
//         </button>

//         <button
//           onClick={() => navigate("/buffalo")}
//           className={`px-6 lg:px-8 py-2.5 lg:py-3 font-semibold text-base transition-all duration-300 flex items-center gap-2 ${
//             isBuffalo
//               ? "bg-orange-400 text-white scale-105 shadow-md"
//               : "text-gray-700 hover:bg-gray-100"
//           } rounded-full`}
//         >
//           <span>{t.buffaloLabel}</span>
//         </button>

//       </div>
      
//       <LanguageSelector/>
//     </div>
//     */
//   );
// };

// export default AnimalSelector;



// 12-Nov-25 original code 2
import { useTranslate } from "../i18n";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
 
const AnimalSelector = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslate();

  const isCow = location.pathname.includes("cow");
  const isBuffalo = location.pathname.includes("buffalo");

  return (
// before edit 18-Nove-25
//     <div 
//     className=" bg-white/80 backdrop-blur-md rounded-2xl shadow-md border border-orange-300 sm:border-none 
//              flex items-center justify-center mb-2 lg:mb-0
//              sm:bg-transparent sm:backdrop-blur-0 sm:shadow-none sm:rounded-none lg:mx-0 lg:mt-0 mx-3 mt-4"
    
//     // className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg  
//     //        flex items-center justify-center"
//     >
//     <div
//       className="flex items-center justify-center relative p-4 lg:p-3 lg:mb-3 gap-5"  
//     >
//       {/* 🐄 Centered buttons */}
//       {/* <div className="inline-flex bg-gray-100 border border-gray-200 rounded-2xl overflow-hidden gap-2 shadow-sm"> */}
//   <button
//     onClick={() => navigate("/cow")}
//     className={`lg:px-30 px-17  py-3 flex items-center gap-2 text-base font-bold transition-all duration-300 rounded-2xl
//       ${
//         isCow
//           ? "bg-orange-600 text-white shadow-md scale-105"
//           : "bg-orange-100 text-orange-700 hover:bg-orange-200"
//       }`}
//   >
//      <span>{t.cowLabel2}</span>
//      </button>
//   {/*
//  ? "bg-orange-600 text-white shadow-lg scale-105"
//               : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`} */}
//   <button
//     onClick={() => navigate("/buffalo")}
//     className={`lg:px-30 px-17 py-3 flex items-center gap-2 text-base font-bold transition-all duration-300 rounded-2xl
//       ${
//         isBuffalo
//            ? "bg-orange-600 text-white shadow-md scale-105"
//           : "bg-orange-100 text-orange-700 hover:bg-orange-200"
//       }`}
//   >
//      <span>{t.buffaloLabel}</span>
//   </button>
// {/* </div> */}
// {/* 

//       {/*Language Selector — positioned at the right */}
//       {/* <div className="absolute right-4 bg-gray-100 rounded-xl px-2 py-2">
//         <LanguageSelector />
//       </div> */}
//     </div>
//   </div>


<div 
  className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md border border-orange-300 sm:border-none 
  flex items-center justify-center mb-2 lg:mb-0
  sm:bg-transparent sm:backdrop-blur-0 sm:shadow-none sm:rounded-none lg:mx-0 lg:mt-0 mx-3 mt-4"
>
  <div className="flex items-center justify-center relative p-4 lg:p-3 lg:mb-3 lg:ml:3 gap-6 w-full">

      <button
        onClick={() => navigate("/cow")}
        className={`py-3 md:px-30 text-center text-base font-bold transition-all duration-300 rounded-2xl
          flex-1 md:flex-none md:px-10
          ${isCow 
            ? "bg-orange-600 text-white shadow-md scale-105"
            : "bg-orange-100 text-orange-700 hover:bg-orange-200"
          }`}
      >
        {t.cowLabel2}
      </button>

      <button
        onClick={() => navigate("/buffalo")}
        className={`py-3 md:px-30 text-center text-base font-bold transition-all duration-300 rounded-2xl
          flex-1 md:flex-none md:px-10
          ${isBuffalo
            ? "bg-orange-600 text-white shadow-md scale-105"
            : "bg-orange-100 text-orange-700 hover:bg-orange-200"
          }`}
      >
        {t.buffaloLabel}
      </button>

  </div>
</div>


  );
};

export default AnimalSelector;

// import { useTranslate } from "../i18n";
// import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import LanguageSelector from "./LanguageSelector";

// const AnimalSelector = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { t } = useTranslate();

//   const isCow = location.pathname.includes("cow");
//   const isBuffalo = location.pathname.includes("buffalo");

//   return (
//     <div className="flex flex-col items-center justify-center p-3 sm:p-4 mb-4">
//       {/* 🐄 Responsive Buttons */}
//       <div className="inline-flex flex-wrap justify-center bg-gray-100 border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
//         <button
//           onClick={() => navigate("/cow")}
//           className={`px-6 sm:px-10 py-2.5 sm:py-3 flex items-center gap-2 
//             text-sm sm:text-base font-semibold transition-all duration-300 
//             ${
//               isCow
//                 ? "bg-orange-600 text-white shadow-md scale-105"
//                 : "bg-orange-100 text-orange-700 hover:bg-orange-200"
//             }`}
//         >
//           <span>{t.cowLabel2 || "गाई"}</span>
//         </button>

//         <button
//           onClick={() => navigate("/buffalo")}
//           className={`px-6 sm:px-10 py-2.5 sm:py-3 flex items-center gap-2 
//             text-sm sm:text-base font-semibold transition-all duration-300 
//             ${
//               isBuffalo
//                 ? "bg-orange-600 text-white shadow-md scale-105"
//                 : "bg-orange-100 text-orange-700 hover:bg-orange-200"
//             }`}
//         >
//           <span>{t.buffaloLabel || "म्हैस"}</span>
//         </button>
//       </div>

//       {/* 🌐 Language Selector (appears below buttons on mobile) */}
//       {/* <div className="mt-3 sm:mt-4">
//         <LanguageSelector />
//       </div> */}
//     </div>
//   );
// };

// export default AnimalSelector;





// like figma image 
// import { useTranslate } from "../i18n";
// import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import LanguageSelector from "./LanguageSelector";
 
// const AnimalSelector = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { t } = useTranslate();

//   const isCow = location.pathname.includes("cow");
//   const isBuffalo = location.pathname.includes("buffalo");

//   return (
//     <div className="flex items-center justify-center relative p-4 lg:p-6">
//       {/* Centered buttons */}
//       <div className="inline-flex bg-gray-100 rounded-full overflow-hidden shadow-sm w-full max-w-4xl">
//         <button
//           onClick={() => navigate("/cow")}
//           className={`flex-1 lg:px-16 px-8 py-4 flex items-center justify-center gap-3 text-lg font-semibold transition-all duration-300 rounded-full
//             ${
//               isCow
//                 ? "bg-white text-gray-800 shadow-md m-1"
//                 : "bg-transparent text-gray-600 hover:text-gray-800"
//             }`}
//         >
//           <span className="text-3xl">🐄</span>
//           <span>{t.cowLabel2}</span>
//         </button>

//         <button
//           onClick={() => navigate("/buffalo")}
//           className={`flex-1 lg:px-16 px-8 py-4 flex items-center justify-center gap-3 text-lg font-semibold transition-all duration-300 rounded-full
//             ${
//               isBuffalo
//                 ? "bg-white text-gray-800 shadow-md m-1"
//                 : "bg-transparent text-gray-600 hover:text-gray-800"
//             }`}
//         >
//           <span className="text-3xl">🐃</span>
//           <span>{t.buffaloLabel}</span>
//         </button>
//       </div>

//       {/* Language Selector — positioned at the right */}
//       {/* <div className="absolute right-4 bg-gray-100 rounded-xl px-2 py-2">
//         <LanguageSelector />
//       </div> */}
//     </div>
//   );
// };

// export default AnimalSelector;

// import { useTranslate } from "../i18n";
// import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import LanguageSelector from "./LanguageSelector";
 
// const AnimalSelector = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { t } = useTranslate();

//   const isCow = location.pathname.includes("cow");
//   const isBuffalo = location.pathname.includes("buffalo");
// return (
//   <div className="flex items-center justify-center relative p-4 lg:p-6">
//     {/* Centered buttons */}
//     <div className="flex gap-4 w-full max-w-3xl justify-center">
//       {/* Cow Button */}
//       <button
//         onClick={() => navigate("/cow")}
//         className={`flex-1 flex flex-col items-center justify-center rounded-2xl py-2 shadow-md border transition-all duration-300 
//           ${isCow ? "bg-gradient-to-b from-orange-400 to-orange-600 text-white scale-105 shadow-lg" : "bg-white hover:bg-orange-50 text-gray-800 border-gray-200"}`}
//       >
//         <div className={` rounded-full ${isCow ? "bg-white/20" : "bg-orange-100"}`}>
        
//         </div>
//         <span className="mt-3 text-xl font-semibold">{t.cowLabel2}</span>
//       </button>

//       {/* Buffalo Button */}
//       <button
//         onClick={() => navigate("/buffalo")}
//         className={`flex-1 flex flex-col items-center justify-center rounded-2xl py-2 shadow-md border transition-all duration-300 
//           ${isBuffalo ? "bg-gradient-to-b from-orange-400 to-orange-600 text-white scale-105 shadow-lg" : "bg-white hover:bg-orange-50 text-gray-800 border-gray-200"}`}
//       >
//         <div className={` rounded-full ${isBuffalo ? "bg-white/20" : "bg-orange-100"}`}>
         
//         </div>
//         <span className="mt-3 text-xl font-semibold">{t.buffaloLabel}</span>
//       </button>
//     </div>
//   </div>
// );

// };

// export default AnimalSelector;





{/* <div 
  className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md border border-orange-300 sm:border-none 
  flex items-center justify-center mb-2 lg:mb-0
  sm:bg-transparent sm:backdrop-blur-0 sm:shadow-none sm:rounded-none lg:mx-0 lg:mt-0 mx-3 mt-4"
>
  <div className="flex items-center justify-center relative p-4 lg:p-3 lg:mb-3 gap-3 w-full">

      <button
        onClick={() => navigate("/cow")}
        className={`flex-1 py-3 text-center text-base font-bold transition-all duration-300 rounded-2xl
          ${isCow 
            ? "bg-orange-600 text-white shadow-md scale-105"
            : "bg-orange-100 text-orange-700 hover:bg-orange-200"
          }`}
      >
        {t.cowLabel2}
      </button>

      <button
        onClick={() => navigate("/buffalo")}
        className={`flex-1 py-3 text-center text-base font-bold transition-all duration-300 rounded-2xl
          ${isBuffalo
            ? "bg-orange-600 text-white shadow-md scale-105"
            : "bg-orange-100 text-orange-700 hover:bg-orange-200"
          }`}
      >
        {t.buffaloLabel}
      </button>

  </div>
</div> */}
