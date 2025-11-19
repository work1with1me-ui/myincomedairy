import React, { useState } from "react";
// import AnimalSelector from "./AnimalSelector";
import DairyProduction from "./DairyProduction";
import StableExpenses from "./StableExpenses";
import VaidanExpenses from "./VaidanExpenses";
import FoodExpenses from "./FoodExpenses";
import FinancialSummary from "./FinancialSummary";
import TotalFnlSummary from "./TotalFnlSummary";
import MilkProductionExpenses from "./MilkProductionExpenses";
import Header from "./header";
import Repomanagement from "./RepoManagement";
import { useTab } from "../context/TabContext";
// import Sidebar from "./Sidebar";
import TabContent from "./TabContent";

// export default function AnimalSelectorWithTabs() {
//   // const [activeTab, setActiveTab] = useState("milk");
//    const { activeTab, setActiveTab } = useTab();



// return (
//   <>
//     <div className="bg-white">

//       {/* HEADER */}
//       <Header />

//       {/* --- MAIN 2 COLUMN LAYOUT STARTS HERE --- */}
//       <div className="lg:flex lg:flex-row lg:items-start lg:gap-6">
//         <div className="hidden lg:block w-[260px] shrink-0 mt-10">
//           <div className="sticky ">
//             <Sidebar />
//           </div>
//         </div>

//         {/* LEFT SIDE (FULL CONTENT) */}
//         <div className="flex-1 min-w-0">

//           {/* TabContent (Your top cow/buffalo selector) */}
//           <TabContent />

//           {/* Toggle Buttons */}
//           <div 
//             className=" bg-white/80 backdrop-blur-md rounded-2xl shadow-sm 
//                         flex items-center justify-center border border-orange-300 sm:border-none
//                         sm:bg-transparent sm:backdrop-blur-0 
//                         sm:shadow-none sm:rounded-none lg:mx-0 lg:mt-0 lg:px-0 lg:py-0 lg:mr-5 px-3 py-6 mx-3">

//             <div className="flex justify-center gap-4">
//               <button
//                 onClick={() => setActiveTab("milk")}
//                 className={`px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 
//                 ${activeTab === "milk"
//                   ? "bg-orange-600 text-white shadow-lg scale-105"
//                   : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}
//               >
//                 दूध उत्पादन ताळमेळ
//               </button>

//               <button
//                 onClick={() => setActiveTab("repro")}
//                 className={`px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 
//                 ${activeTab === "repro"
//                   ? "bg-orange-600 text-white shadow-lg scale-105"
//                   : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}
//               >
//                 प्रजनन व्यवस्थापन
//               </button>
//             </div>
//           </div>

//           {/* MAIN CONTENT */}
//           <div className="mt-8 px-5">
//             {activeTab === "milk" ? (
//               <>
//                 <MilkProductionExpenses />
//                 <div className="mt-1 space-y-8">
//                   <StableExpenses />
//                   <VaidanExpenses />
//                   <FoodExpenses />
//                   <FinancialSummary />
//                   <TotalFnlSummary />
//                 </div>
//               </>
//             ) : (
//               <Repomanagement />
//             )}
//           </div>

//         </div> {/* LEFT CONTENT END */}


//         {/* RIGHT SIDEBAR (STICKY) */}

//       </div>
//       {/* --- MAIN 2 COLUMN LAYOUT ENDS HERE --- */}


//       {/* FOOTER */}
//       <footer className="bg-neutral-primary-soft max-w-5xl mx-auto text-center rounded-base shadow-xs m-1">
//         <span className="block text-sm sm:text-center text-gray-500">
//           © 2025 <a className="hover:underline">Vetrina Healthcare Pvt.Ltd.</a> All Rights Reserved.
//         </span>
//       </footer>

//     </div>
//   </>
// );
// }


// export default function AnimalSelectorWithTabs() {
//   const [activeTab, setActiveTab] = useState("milk");

//   return (
//     <div className="bg-gradient-to-br from-orange-50 to-white min-h-screen p-6">
//       {/*  Cow / Buffalo selector */}
//       {/* <AnimalSelector /> */}
//        <Header/>
//       {/* Two toggle buttons */}
//       <div className="flex justify-center gap-4 mt-6">
//         <button
//           onClick={() => setActiveTab("milk")}
//           className={`px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 
//           ${activeTab === "milk"
//               ? "bg-orange-600 text-white shadow-lg scale-105"
//               : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}
//         >
//           दूध उत्पादन ताळमेळ
//         </button>

//         <button
//           onClick={() => setActiveTab("repro")}
//           className={`px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 
//           ${activeTab === "repro"
//               ? "bg-orange-600 text-white shadow-lg scale-105"
//               : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}
//         >
//           प्रजनन व्यवस्थापन
//         </button>
//       </div>

//       <div className="mt-8">
//         {activeTab === "milk" ? <MilkProductionExpenses /> : <Repomanagement />}
//       </div>

//       <div className="mt-8 space-y-8">
//         <StableExpenses />
//         <VaidanExpenses />
//         <FoodExpenses />
//         <FinancialSummary />
//         <TotalFnlSummary />
//       </div>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import { Menu } from 'lucide-react'; // ⬅️ Add this import
// import { ModernSidebar } from "./ModernSidebar"; 
// import AnimalSelector from "./AnimalSelector";
// // import DairyProduction from "./DairyProduction";
// // ... baaki sab imports waisa hi rahenge

// export default function AnimalSelectorWithTabs() {
//   const { activeTab, setActiveTab } = useTab();

//   // // ⬅️ SIRF YE 2 LINES ADD KARO
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [sidebarExpanded, setSidebarExpanded] = useState(true);

//   return (
//     <>
//       <div className="flex h-screen bg-white"> {/* ⬅️ YE LINE CHANGE KARO (flex add kiya) */}

//         {/* ⬅️ SIDEBAR ADD KARO - YE NAYA SECTION */}
//         <ModernSidebar 
//           sidebarOpen={sidebarOpen}
//           setSidebarOpen={setSidebarOpen}
//           sidebarExpanded={sidebarExpanded}
//           setSidebarExpanded={setSidebarExpanded}
//         />

//         {/* ⬅️ MAIN CONTENT KO IS DIV MEIN WRAP KARO */}
//         <div className="flex-1 flex flex-col overflow-hidden">

//           {/* HEADER - Yahan SIRF hamburger menu add karo */}
//           <div className="flex items-center gap-4"> {/* ⬅️ Add wrapper div */}
//             <button
//               onClick={() => setSidebarOpen(true)}
//               className="md:hidden text-gray-600 hover:text-gray-800 ml-4"
//             >
//               <Menu size={24} />
//             </button>
//             <Header />
//           </div>

//           {/* ⬅️ BAAKI SARI CONTENT KO IS DIV MEIN WRAP KARO (overflow-auto add kiya) */}
//           <div className="flex-1 overflow-y-auto">

//             {/* --- MAIN 2 COLUMN LAYOUT STARTS HERE --- */}
//             <div className="lg:flex lg:flex-row lg:items-start lg:gap-6">
//               {/* <div className="hidden lg:block w-[260px] shrink-0 mt-10">
//                 <div className="sticky ">
//                  <Sidebar /> 
//                 </div>
//               </div> */}

//               {/* LEFT SIDE (FULL CONTENT) */}
//               <div className="flex-1 min-w-0">

//                 {/* TabContent (Your top cow/buffalo selector) */}
//                 <TabContent />

//                 {/* Toggle Buttons */}
//                 <div 
//                   className=" bg-white/80 backdrop-blur-md rounded-2xl shadow-sm 
//                               flex items-center justify-center border border-orange-300 sm:border-none
//                               sm:bg-transparent sm:backdrop-blur-0 
//                               sm:shadow-none sm:rounded-none lg:mx-0 lg:mt-0 lg:px-0 lg:py-0 lg:mr-5 px-3 py-6 mx-3">

//                   <div className="flex justify-center gap-4">
//                     <button
//                       onClick={() => setActiveTab("milk")}
//                       className={`px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 
//                       ${activeTab === "milk"
//                         ? "bg-orange-600 text-white shadow-lg scale-105"
//                         : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}
//                     >
//                       दूध उत्पादन ताळमेळ
//                     </button>

//                     <button
//                       onClick={() => setActiveTab("repro")}
//                       className={`px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 
//                       ${activeTab === "repro"
//                         ? "bg-orange-600 text-white shadow-lg scale-105"
//                         : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}
//                     >
//                       प्रजनन व्यवस्थापन
//                     </button>
//                   </div>
//                 </div>

//                 {/* MAIN CONTENT */}
//                 <div className="mt-8 px-5">
//                   {activeTab === "milk" ? (
//                     <>
//                       <MilkProductionExpenses />
//                       <div className="mt-1 space-y-8">
//                         <StableExpenses />
//                         <VaidanExpenses />
//                         <FoodExpenses />
//                         <FinancialSummary />
//                         <TotalFnlSummary />
//                       </div>
//                     </>
//                   ) : (
//                     <Repomanagement />
//                   )}
//                 </div>

//               </div> {/* LEFT CONTENT END */}

//               {/* RIGHT SIDEBAR (STICKY) */}

//             </div>
//             {/* --- MAIN 2 COLUMN LAYOUT ENDS HERE --- */}

//             {/* FOOTER */}
//             <footer className="bg-neutral-primary-soft max-w-5xl mx-auto text-center rounded-base shadow-xs m-1">
//               <span className="block text-sm sm:text-center text-gray-500">
//                 © 2025 <a className="hover:underline">Vetrina Healthcare Pvt.Ltd.</a> All Rights Reserved.
//               </span>
//             </footer>

//           </div> {/* ⬅️ OVERFLOW DIV END */}
//         </div> {/* ⬅️ MAIN CONTENT WRAPPER END */}
//       </div>
//     </>
//   );
// }


// original 
// import { Menu } from 'lucide-react'; // ⬅️ Add this import
// import { ModernSidebar } from "./ModernSidebar"; 
// import AnimalSelector from "./AnimalSelector";
// // import DairyProduction from "./DairyProduction";
// // ... baaki sab imports waisa hi rahenge

// export default function AnimalSelectorWithTabs() {
//   const { activeTab, setActiveTab } = useTab();

//   // // ⬅️ SIRF YE 2 LINES ADD KARO
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [sidebarExpanded, setSidebarExpanded] = useState(true);

//   return (
//     <>
//       <div className=" h-screen bg-white"> {/* ⬅️ YE LINE CHANGE KARO (flex add kiya) */}

//         {/* ⬅️ SIDEBAR ADD KARO - YE NAYA SECTION */}


//           <Header/>

//         {/* ⬅️ MAIN CONTENT KO IS DIV MEIN WRAP KARO */}
//         <div className="flex-1 flex flex-col overflow-hidden">



//           {/* ⬅️ BAAKI SARI CONTENT KO IS DIV MEIN WRAP KARO (overflow-auto add kiya) */}
//           <div className="flex-1 overflow-y-auto">

//             {/* --- MAIN 2 COLUMN LAYOUT STARTS HERE --- */}
//             <div className="lg:flex lg:flex-row lg:items-start lg:gap-6">
//               <div className="hidden lg:block w-[260px] shrink-0 mt-10">
//                 <div className="sticky ">
//                      <ModernSidebar 
//           sidebarOpen={sidebarOpen}
//           setSidebarOpen={setSidebarOpen}
//           sidebarExpanded={sidebarExpanded}
//           setSidebarExpanded={setSidebarExpanded}
//         />
//                 </div>

//           {/* HEADER - Yahan SIRF hamburger menu add karo */}
//               </div>
//           <div className="flex items-center gap-4"> 
//             <button
//               onClick={() => setSidebarOpen(true)}
//               className="md:hidden text-gray-600 hover:text-gray-800 ml-4"
//             >
//               <Menu size={24} />
//             </button>
//           </div>

//               {/* LEFT SIDE (FULL CONTENT) */}
//               <div className="flex-1 min-w-0">

//                 {/* TabContent (Your top cow/buffalo selector) */}
//                 <TabContent />

//                 {/* Toggle Buttons */}
//                 <div 
//                   className=" bg-white/80 backdrop-blur-md rounded-2xl shadow-sm 
//                               flex items-center justify-center border border-orange-300 sm:border-none
//                               sm:bg-transparent sm:backdrop-blur-0 
//                               sm:shadow-none sm:rounded-none lg:mx-0 lg:mt-0 lg:px-0 lg:py-0 lg:mr-5 px-3 py-6 mx-3">

//                   <div className="flex justify-center gap-4">
//                     <button
//                       onClick={() => setActiveTab("milk")}
//                       className={`px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 
//                       ${activeTab === "milk"
//                         ? "bg-orange-600 text-white shadow-lg scale-105"
//                         : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}
//                     >
//                       दूध उत्पादन ताळमेळ
//                     </button>

//                     <button
//                       onClick={() => setActiveTab("repro")}
//                       className={`px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 
//                       ${activeTab === "repro"
//                         ? "bg-orange-600 text-white shadow-lg scale-105"
//                         : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}
//                     >
//                       प्रजनन व्यवस्थापन
//                     </button>
//                   </div>
//                 </div>

//                 {/* MAIN CONTENT */}
//                 <div className="mt-8 px-5">
//                   {activeTab === "milk" ? (
//                     <>
//                       <MilkProductionExpenses />
//                       <div className="mt-1 space-y-8">
//                         <StableExpenses />
//                         <VaidanExpenses />
//                         <FoodExpenses />
//                         <FinancialSummary />
//                         <TotalFnlSummary />
//                       </div>
//                     </>
//                   ) : (
//                     <Repomanagement />
//                   )}
//                 </div>

//               </div> {/* LEFT CONTENT END */}

//               {/* RIGHT SIDEBAR (STICKY) */}

//             </div>
//             {/* --- MAIN 2 COLUMN LAYOUT ENDS HERE --- */}

//             {/* FOOTER */}
//             <footer className="bg-neutral-primary-soft max-w-5xl mx-auto text-center rounded-base shadow-xs m-1">
//               <span className="block text-sm sm:text-center text-gray-500">
//                 © 2025 <a className="hover:underline">Vetrina Healthcare Pvt.Ltd.</a> All Rights Reserved.
//               </span>
//             </footer>

//           </div> {/* ⬅️ OVERFLOW DIV END */}
//         </div> {/* ⬅️ MAIN CONTENT WRAPPER END */}
//       </div>
//     </>
//   );
// }


// proper sticky 
// import { Menu } from 'lucide-react';
// import { ModernSidebar } from "./ModernSidebar"; 
// import AnimalSelector from "./AnimalSelector";
// // ... baaki sab imports 

// export default function AnimalSelectorWithTabs() {
//   const { activeTab, setActiveTab } = useTab();

//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [sidebarExpanded, setSidebarExpanded] = useState(true);

//   return (
//     <>
//       <div className="bg-white">

//         {/* HEADER */}

//         {/*  HAMBURGER MENU - HEADER KE NICHE */}

//         {/* --- MAIN 2 COLUMN LAYOUT STARTS HERE --- */}
//         <div className="lg:flex lg:flex-row lg:items-start lg:gap-6">

//           {/* ⬅️ LEFT SIDEBAR - HEADER KE NICHE */}
//           <div className="hidden lg:block w-[260px] shrink-0 ">
//             <div className="sticky top-0 h-screen">
//               <ModernSidebar 
//                 sidebarOpen={sidebarOpen}
//                 setSidebarOpen={setSidebarOpen}
//                 sidebarExpanded={sidebarExpanded}
//                 setSidebarExpanded={setSidebarExpanded}
//               />
//             </div>
//           </div>

//           {/* ⬅️ MOBILE SIDEBAR (OVERLAY) */}
//           {sidebarOpen && (
//             <div className="lg:hidden">
//               <ModernSidebar 
//                 sidebarOpen={sidebarOpen}
//                 setSidebarOpen={setSidebarOpen}
//                 sidebarExpanded={sidebarExpanded}
//                 setSidebarExpanded={setSidebarExpanded}
//               />
//             </div>
//           )}

//           {/* LEFT SIDE (FULL CONTENT) */}
//           <div className="flex-1 min-w-0">

//             {/* TabContent (Your top cow/buffalo selector) */}
//         <Header/>
//         <button
//           onClick={() => {
//             setSidebarOpen(true);
//              setSidebarExpanded(true);
//           }}
//           className="md:hidden text-gray-600 hover:text-gray-800 p-4"
//         >
//           <Menu size={24} />
//         </button>


//             <TabContent />

//             {/* Toggle Buttons */}
//             <div 
//               className=" bg-white/80 backdrop-blur-md rounded-2xl shadow-sm 
//                           flex items-center justify-center border border-orange-300 sm:border-none
//                           sm:bg-transparent sm:backdrop-blur-0 
//                           sm:shadow-none sm:rounded-none lg:mx-0 lg:mt-0 lg:px-0 lg:py-0 lg:mr-5 px-3 py-6 mx-3">

//               <div className="flex justify-center gap-4">
//                 <button
//                   onClick={() => setActiveTab("milk")}
//                   className={`px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 
//                   ${activeTab === "milk"
//                     ? "bg-orange-600 text-white shadow-lg scale-105"
//                     : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}
//                 >
//                   दूध उत्पादन ताळमेळ
//                 </button>

//                 <button
//                   onClick={() => setActiveTab("repro")}
//                   className={`px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 
//                   ${activeTab === "repro"
//                     ? "bg-orange-600 text-white shadow-lg scale-105"
//                     : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}
//                 >
//                   प्रजनन व्यवस्थापन
//                 </button>
//               </div>
//             </div>

//             {/* MAIN CONTENT */}
//             <div className="mt-8 px-5">
//               {activeTab === "milk" ? (
//                 <>
//                   <MilkProductionExpenses />
//                   <div className="mt-1 space-y-8">
//                     <StableExpenses />
//                     <VaidanExpenses />
//                     <FoodExpenses />
//                     <FinancialSummary />
//                     <TotalFnlSummary />
//                   </div>
//                 </>
//               ) : (
//                 <Repomanagement />
//               )}
//             </div>

//           </div> {/* LEFT CONTENT END */}

//           {/* RIGHT SIDEBAR (STICKY) */}

//         </div>
//         {/* --- MAIN 2 COLUMN LAYOUT ENDS HERE --- */}

//         {/* FOOTER */}
//         <footer className="bg-neutral-primary-soft max-w-5xl mx-auto text-center rounded-base shadow-xs m-1">
//           <span className="block text-sm sm:text-center text-gray-500">
//             © 2025 <a className="hover:underline">Vetrina Healthcare Pvt.Ltd.</a> All Rights Reserved.
//           </span>
//         </footer>

//       </div>
//     </>
//   );
// }


// import React, { useState } from "react";

//remove side bar form animaltabs
import { Menu, Sidebar } from 'lucide-react';
import { ModernSidebar } from "./ModernSidebar";
import AnimalSelector from "./AnimalSelector";
import { useSidebar } from "../context/sidebarContext";
import { useTranslate } from "../i18n";

export default function AnimalSelectorWithTabs() {
  const { activeTab, setActiveTab } = useTab();
  const { t } = useTranslate();

  // const [sidebarOpen, setSidebarOpen] = useState(false);
  // const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const { sidebarOpen, setSidebarOpen, sidebarExpanded, setSidebarExpanded } = useSidebar();

  return (
    <>
      <div className="flex bg-white min-h-screen"> {/* ⬅️ flex add kiya */}

        {/* ⬅️ SIDEBAR - DESKTOP (ALWAYS RENDERED) */}
        <div className={`hidden lg:block transition-all duration-300 ${sidebarExpanded ? 'w-64' : 'w-20'
          }`}>
          <div className="sticky top-0 h-screen overflow-y-auto">
            <ModernSidebar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
              sidebarExpanded={sidebarExpanded}
              setSidebarExpanded={setSidebarExpanded}
            />
          </div>
        </div>

        {/* ⬅️ MOBILE SIDEBAR (OVERLAY) */}
        {sidebarOpen && (
          <div className="lg:hidden">
            <ModernSidebar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
              sidebarExpanded={true}
              setSidebarExpanded={setSidebarExpanded}
            />
          </div>
        )}

        {/* ⬅️ MAIN CONTENT - FLEX-1 SE REMAINING SPACE LEGA */}
        <div className="flex-1 min-w-0 flex flex-col">

          {/* HEADER */}
          <Header />

          {/* HAMBURGER MENU - MOBILE */}
          {/* <button
            onClick={() => {
              setSidebarOpen(true);
              setSidebarExpanded(true);
            }}
            className="lg:hidden text-gray-600 hover:text-gray-800 p-4"
          >
            <Menu size={24} />
          </button> */}

          <div className="p-4 lg:hidden">
            <button
              onClick={() => {
                setSidebarOpen(true);
                setSidebarExpanded(true);
              }}
              className="text-gray-600 hover:text-gray-800"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* SCROLLABLE CONTENT */}
          <div className="flex-1 overflow-y-auto">

            {/* TabContent */}
            <TabContent />

            {/* Toggle Buttons */}
            <div
              className=" bg-white/80 backdrop-blur-md rounded-2xl shadow-sm 
                          flex items-center justify-center border border-orange-300 sm:border-none
                          sm:bg-transparent sm:backdrop-blur-0 
                          sm:shadow-none sm:rounded-none lg:mx-0 lg:mt-0 lg:px-0 lg:py-0 lg:mr-5 px-3 py-6 mx-3">

              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setActiveTab("milk")}
                  className={`px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 
                  ${activeTab === "milk"
                      ? "bg-orange-600 text-white shadow-lg scale-105"
                      : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}
                >
                  {t.milkProSummaryLabel || "दूध उत्पादन ताळमेळ"}
                </button>

                <button
                  onClick={() => setActiveTab("repro")}
                  className={`px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 
                  ${activeTab === "repro"
                      ? "bg-orange-600 text-white shadow-lg scale-105"
                      : "bg-orange-100 text-orange-700 hover:bg-orange-200"}`}
                >
                  {t.breedingManagementLabel || "प्रजनन व्यवस्थापन"}
                </button>
              </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="mt-8 px-5">
              {activeTab === "milk" ? (
                <>
                  <MilkProductionExpenses />
                  <div className="mt-1 space-y-8">
                    <StableExpenses />
                    <VaidanExpenses />
                    <FoodExpenses />
                    <FinancialSummary />
                    <TotalFnlSummary />
                  </div>
                </>
              ) : (
                <Repomanagement />
              )}
            </div>

            {/* FOOTER */}
            <footer className="bg-neutral-primary-soft max-w-5xl mx-auto text-center rounded-base shadow-xs m-1 mt-8">
              <span className="block text-sm sm:text-center text-gray-500">
                © 2025 <a className="hover:underline">Vetrina Healthcare Pvt.Ltd.</a> All Rights Reserved.
              </span>
            </footer>

          </div>

        </div> {/* MAIN CONTENT END */}

      </div>
    </>
  );
}


