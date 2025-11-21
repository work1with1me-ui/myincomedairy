// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import DairyProduction from "./components/DairyProduction";
// import StableExpenses from "./components/StableExpenses";
// import FoodExpenses from "./components/FoodExpenses";
// import VaidanExpenses from "./components/VaidanExpenses";
// import TotalFnlSummary from "./components/TotalFnlSummary";
// import FinancialSummary from "./components/FinancialSummary";
// import { TranslationProvider ,useTranslate} from "./i18n";

// export default function App() {
//   return (
//   <TranslationProvider>
//     <Router>
//       <div className="min-h-screen bg-green-50 pb-20">
//         <Routes>
//           {/* Default redirect to cow */}
//           <Route path="/" element={<Navigate to="/cow" replace />} />

//           {/* Cow page */}
//           <Route
//             path="/cow"
//             element={
//               <div className="space-y-8">
//                 <DairyProduction />
//                 <StableExpenses />
//                 <VaidanExpenses />
//                 <FoodExpenses />
//                 <FinancialSummary/>
//                 <TotalFnlSummary/>
//               </div>
//             }
//           />

//           {/* Buffalo page */}
//           <Route
//             path="/buffalo"
//             element={
//               <div className="space-y-8">
//                 <DairyProduction />
//                 <StableExpenses />
//                 <VaidanExpenses />
//                 <FoodExpenses />
//                 <FinancialSummary/>
//                 <TotalFnlSummary/>
//               </div>
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   </TranslationProvider>
//   );
// }



// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { TranslationProvider } from "./i18n";
// import AnimalSelectorWithTabs from "./components/AnimalSelectorWithTabs";
// import { Key } from "lucide-react";
// import { TabProvider } from "./context/TabContext";
// import SidebarLayout from "./components/layout";
// import { SidebarProvider } from "./components/ui/sidebar";
// import Login from "./pages/login";

// export default function App() {
//   return (
//     <TranslationProvider>
//        Login
//       <Router>

//         <TabProvider>
//         <Routes>
//            <Route path="/login" element={<Login />} />
//           <Route path="/" element={<Navigate to="/cow" replace />} />
//           <Route path="/cow" element={<AnimalSelectorWithTabs key="cow" />} />
//           <Route path="/buffalo" element={<AnimalSelectorWithTabs Key="buffalo" />} />
//         </Routes>
//         </TabProvider>
//       </Router>
//     </TranslationProvider>
//   );
// }


// 17-Nove-25 edited 
// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { TranslationProvider } from "./i18n";
// import AnimalSelectorWithTabs from "./components/AnimalSelectorWithTabs";
// import { TabProvider } from "./context/TabContext";
// import Login from "./pages/login";
// import { SidebarProvider } from "./context/sidebarContext";
// import WebsiteLoader from "./loader/loader";

// export default function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading - minimum 1 second
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1500); // 1.5 seconds

//     // Optional: Wait for all resources to load
//     window.addEventListener('load', () => {
//       setTimeout(() => setLoading(false), 500);
//     });

//     return () => clearTimeout(timer);
//   }, []);

//   // Show loader while loading
//   if (loading) {
//     return <WebsiteLoader />;
//   }
//   return (
//     <TranslationProvider>
//       <Router>
//         <SidebarProvider>
//           <TabProvider>
//             <Routes>

//               {/* DEFAULT ROUTE = LOGIN */}
//               <Route path="/" element={<Navigate to="/login" replace />} />

//               {/* LOGIN PAGE */}
//               <Route path="/login" element={<Login />} />

//               {/* DASHBOARD PAGES */}
//               <Route path="/cow" element={<AnimalSelectorWithTabs key="cow" />} />
//               <Route path="/buffalo" element={<AnimalSelectorWithTabs key="buffalo" />} />

//             </Routes>
//           </TabProvider>
//         </SidebarProvider>
//       </Router>
//     </TranslationProvider>
//   );
// // }

// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { TranslationProvider } from "./i18n";
// import AnimalSelectorWithTabs from "./components/AnimalSelectorWithTabs";
// import { TabProvider } from "./context/TabContext";
// import Login from "./pages/login";
// import { SidebarProvider } from "./context/sidebarContext";
// import WebsiteLoader from "./loader/loader";

// export default function App() {
//   const [loading, setLoading] = useState(true);
//   const [isReady, setIsReady] = useState(false);

//   useEffect(() => {
//     // Minimum loading time to prevent flash
//     const minLoadTime = setTimeout(() => {
//       setIsReady(true);
//     }, 800); // Minimum 800ms

//     // Wait for window to load all resources
//     const handleLoad = () => {
//       setIsReady(true);
//     };

//     // Check if already loaded
//     if (document.readyState === 'complete') {
//       setTimeout(() => setIsReady(true), 800);
//     } else {
//       window.addEventListener('load', handleLoad);
//     }

//     // Cleanup
//     return () => {
//       clearTimeout(minLoadTime);
//       window.removeEventListener('load', handleLoad);
//     };
//   }, []);

//   // Hide loader only when both conditions are met
//   useEffect(() => {
//     if (isReady) {
//       // Small delay for smooth transition
//       setTimeout(() => {
//         setLoading(false);
//       }, 200);
//     }
//   }, [isReady]);

//   // Show loader while loading
//   if (loading) {
//     return <WebsiteLoader />;
//   }

//   return (
//     <TranslationProvider>
//       <Router>
//         <SidebarProvider>
//           <TabProvider>
//             <Routes>

//               {/* DEFAULT ROUTE = LOGIN */}
//               <Route path="/" element={<Navigate to="/login" replace />} />

//               {/* LOGIN PAGE */}
//               <Route path="/login" element={<Login />} />

//               {/* DASHBOARD PAGES */}
//               <Route path="/cow" element={<AnimalSelectorWithTabs key="cow" />} />
//               <Route path="/buffalo" element={<AnimalSelectorWithTabs key="buffalo" />} />

//             </Routes>
//           </TabProvider>
//         </SidebarProvider>
//       </Router>
//     </TranslationProvider>
//   );
// }

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { TranslationProvider } from "./i18n";
import AnimalSelectorWithTabs from "./components/AnimalSelectorWithTabs";
import { TabProvider } from "./context/TabContext";
import Login from "./pages/login";
import WebsiteLoader from "./loader/loader";
import OfflineWarning from "./components/OfflineWarning";
import { SidebarProvider } from "./context/SidebarContext";
import PrivateRoute from "./routes/PrivateRoute";


export default function App() {
  const [loading, setLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Online/Offline Detection
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      console.log('✅ Internet connection restored');
    };
    
    const handleOffline = () => {
      setIsOnline(false);
      console.log('❌ Internet connection lost');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    // Minimum loading time to prevent flash
    const minLoadTime = setTimeout(() => {
      setIsReady(true);
    }, 800);

    // Wait for window to load all resources
    const handleLoad = () => {
      setIsReady(true);
    };

    // Check if already loaded
    if (document.readyState === 'complete') {
      setTimeout(() => setIsReady(true), 800);
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Cleanup
    return () => {
      clearTimeout(minLoadTime);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  // Hide loader only when both conditions are met
  useEffect(() => {
    if (isReady) {
      // Small delay for smooth transition
      setTimeout(() => {
        setLoading(false);
      }, 200);
    }
  }, [isReady]);

  // Show offline warning if no internet
  if (!isOnline) {
    return <OfflineWarning />;
  }

  // Show loader while loading
  if (loading) {
    return <WebsiteLoader />;
  }

  return (
    <TranslationProvider>
      <Router>
         <SidebarProvider>
          <TabProvider>
            <Routes>

              {/* DEFAULT ROUTE = LOGIN */}
              <Route path="/" element={<Navigate to="/login" replace />} />

              {/* LOGIN PAGE */}
              <Route path="/login" element={<Login />} />

              {/* DASHBOARD PAGES */}
              <Route path="/cow" element={
                <PrivateRoute>
                <AnimalSelectorWithTabs key="cow" />
                </PrivateRoute>
                } />
              <Route path="/buffalo" element={
                <PrivateRoute>
                <AnimalSelectorWithTabs key="buffalo"/>
                </PrivateRoute>
                } />

            </Routes>
          </TabProvider>
        </SidebarProvider>
      </Router>
    </TranslationProvider>
  );
}

