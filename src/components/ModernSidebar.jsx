// original code 
// import React, { useState } from 'react';
// import { Menu, X, User, Phone, MapPin, Home, LogOut, ChevronRight, ChevronDown, Box, BookOpen, Settings } from 'lucide-react';

// export function ModernSidebar({ sidebarOpen, setSidebarOpen, sidebarExpanded, setSidebarExpanded }) {
//   const [playgroundOpen, setPlaygroundOpen] = useState(true);

//   const userData = {
//     username: "Rajesh Kumar",
//     email: "rajesh@example.com",
//     phone: "9876543210",
//     village: "Shirdi",
//     taluka: "Rahata",
//     district: "Ahmednagar",
//     pincode: "423109"
//   };

//   const handleLogout = () => {
//     alert("Logout clicked!");
//   };

//   return (
//     <>
//      {/* SIDEBAR */}

    
//       <div className={`fixed  inset-y-0 left-0 transform ${
//         sidebarOpen ? 'translate-x-0' : '-translate-x-full'
//       } md:translate-x-0 transition-all duration-300 ease-in-out z-30 ${
//         sidebarExpanded ? 'w-64' : 'w-20'
//       } bg-black border-r border-gray-800 flex flex-col h-screen`}> 
//         {/* Top Section */}
//         <div className="p-4 border-b border-gray-800">
//           <div className="flex items-center justify-between mb-4">
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
//                 <Home size={20} className="text-white" />
//               </div>
//               {sidebarExpanded && (
//                 <div className="overflow-hidden">
//                   <h3 className="text-white font-semibold text-sm">Acme Inc</h3>
//                   <p className="text-gray-400 text-xs">Enterprise</p>
//                 </div>
//               )}
//             </div>
//             {sidebarExpanded && (
//               <>
//                 <button
//                   onClick={() => setSidebarExpanded(false)}
//                   className="hidden md:block text-gray-400 hover:text-white transition-colors"
//                 >
//                   <ChevronRight size={20} />
//                 </button>
//                 <button 
//                   onClick={() => setSidebarOpen(false)}
//                   className="md:hidden text-gray-400 hover:text-white transition-colors"
//                 >
//                   <X size={20} />
//                 </button>
//               </>
//             )}
//           </div>
          
//           {!sidebarExpanded && (
//             <button
//               onClick={() => setSidebarExpanded(true)}
//               className="hidden md:flex w-full justify-center text-gray-400 hover:text-white transition-colors"
//             >
//               <Menu size={20} />
//             </button>
//           )}
//         </div>

//         {/* Navigation */}
//         <div className="flex-1 overflow-y-auto px-3 py-4">
//           <div className="mb-4">
//             {sidebarExpanded && (
//               <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider px-3 mb-2">
//                 Platform
//               </p>
//             )}
            
//             {/* Playground - Expandable */}
//             <div className="mb-1">
//               <button
//                 onClick={() => setPlaygroundOpen(!playgroundOpen)}
//                 className="w-full flex items-center justify-between px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors group"
//               >
//                 <div className="flex items-center gap-3">
//                   <Box size={20} className="flex-shrink-0" />
//                   {sidebarExpanded && <span className="text-sm">Playground</span>}
//                 </div>
//                 {sidebarExpanded && (
//                   <ChevronDown size={16} className={`transition-transform ${playgroundOpen ? '' : '-rotate-90'}`} />
//                 )}
//               </button>
              
//               {sidebarExpanded && playgroundOpen && (
//                 <div className="ml-9 mt-1 space-y-1">
//                   <a href="#" className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
//                     History
//                   </a>
//                   <a href="#" className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
//                     Starred
//                   </a>
//                   <a href="#" className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
//                     Settings
//                   </a>
//                 </div>
//               )}
//             </div>

//             {/* Models */}
//             <button className="w-full flex items-center justify-between px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors group mb-1">
//               <div className="flex items-center gap-3">
//                 <Box size={20} className="flex-shrink-0" />
//                 {sidebarExpanded && <span className="text-sm">Models</span>}
//               </div>
//               {sidebarExpanded && (
//                 <ChevronRight size={16} className="text-gray-500 group-hover:text-gray-300" />
//               )}
//             </button>

//             {/* Documentation */}
//             <button className="w-full flex items-center justify-between px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors group mb-1">
//               <div className="flex items-center gap-3">
//                 <BookOpen size={20} className="flex-shrink-0" />
//                 {sidebarExpanded && <span className="text-sm">Documentation</span>}
//               </div>
//               {sidebarExpanded && (
//                 <ChevronRight size={16} className="text-gray-500 group-hover:text-gray-300" />
//               )}
//             </button>

//             {/* Settings */}
//             <button className="w-full flex items-center justify-between px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors group">
//               <div className="flex items-center gap-3">
//                 <Settings size={20} className="flex-shrink-0" />
//                 {sidebarExpanded && <span className="text-sm">Settings</span>}
//               </div>
//               {sidebarExpanded && (
//                 <ChevronRight size={16} className="text-gray-500 group-hover:text-gray-300" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Bottom - User Profile */}
//         <div className="border-t border-gray-800 p-4">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
//               <User size={20} className="text-white" />
//             </div>
//             {sidebarExpanded && (
//               <div className="flex-1 overflow-hidden">
//                 <p className="text-white text-sm font-medium truncate">{userData.username}</p>
//                 <p className="text-gray-400 text-xs truncate">{userData.email}</p>
//               </div>
//             )}
//             {sidebarExpanded && (
//               <button
//                 onClick={handleLogout}
//                 className="text-gray-400 hover:text-red-400 transition-colors"
//                 title="Logout"
//               >
//                 <LogOut size={18} />
//               </button>
//             )}
//           </div>
          
//           {/* Address Details */}
//           {sidebarExpanded && (
//             <div className="mt-4 pt-4 border-t border-gray-800 space-y-2">
//               <div className="flex items-start gap-2">
//                 <MapPin size={14} className="text-gray-500 mt-0.5 flex-shrink-0" />
//                 <div>
//                   <p className="text-gray-400 text-xs">Location</p>
//                   <p className="text-gray-300 text-xs">{userData.village}, {userData.taluka}</p>
//                   <p className="text-gray-300 text-xs">{userData.district} - {userData.pincode}</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-2">
//                 <Phone size={14} className="text-gray-500 mt-0.5 flex-shrink-0" />
//                 <div>
//                   <p className="text-gray-400 text-xs">Phone</p>
//                   <p className="text-gray-300 text-xs">{userData.phone}</p>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Overlay for mobile */}
//       {sidebarOpen && (
//         <div 
//           className="fixed inset-0  bg-opacity-50 z-20 md:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}
//     </>
//   );
// }

// original code with address 
// import React, { useState } from 'react';
// import { Menu, X, User, Phone, MapPin, Home, LogOut, ChevronRight, ChevronDown, Box, BookOpen, Settings, Building2, Landmark, Mail,Map } from 'lucide-react';

// export function ModernSidebar({ sidebarOpen, setSidebarOpen, sidebarExpanded, setSidebarExpanded }) {
//   const [playgroundOpen, setPlaygroundOpen] = useState(true);

//   const userData = {
//     username: "Rajesh Kumar",
//     phone: "9876543210",
//     village: "Shirdi",
//     taluka: "Rahata",
//     district: "Ahmednagar",
//     pincode: "423109"
//   };

//   const handleLogout = () => {
//     alert("Logout clicked!");
//   };

//   return (
//     <>
//       {/* SIDEBAR */}
//       <div className={`fixed inset-y-0 left-0 transform ${
//         sidebarOpen ? 'translate-x-0' : '-translate-x-full'
//       } md:translate-x-0 transition-all duration-300 ease-in-out z-30 ${
//         sidebarExpanded ? 'w-64' : 'w-20'
//       } bg-gradient-to-b from-blue-600 to-indigo-700 text-white flex flex-col h-screen shadow-2xl`}> 
        
//         {/* Top Section */}
//         <div className="p-4 border-b border-white border-opacity-20">
//           <div className="flex items-center justify-between mb-4">
//             <div className="flex items-center gap-3 ml-[0.2rem]">
//               <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
//                 <Home size={20} className="text-blue-600" />
//               </div>
//               {sidebarExpanded && (
//                 <div className="overflow-hidden">
//                   <h3 className="text-white font-bold text-sm">Dairy Farm</h3>
//                   <p className="text-blue-100 text-xs">Management</p>
//                 </div>
//               )}
//             </div>
//             {sidebarExpanded && (
//               <>
//                 <button
//                   onClick={() => setSidebarExpanded(false)}
//                   className="hidden md:block text-blue-100 hover:text-white transition-colors"
//                 >
//                   <ChevronRight size={20} />
//                 </button>
//                 <button 
//                   onClick={() => setSidebarOpen(false)}
//                   className="md:hidden text-blue-100 hover:text-white transition-colors"
//                 >
//                   <X size={20} />
//                 </button>
//               </>
//             )}
//           </div>
          
//           {!sidebarExpanded && (
//             <button
//               onClick={() => setSidebarExpanded(true)}
//               className="hidden md:flex w-full justify-center text-blue-100 hover:text-white transition-colors"
//             >
//               <Menu size={20} />
//             </button>
//           )}
//         </div>

//          {/* Navigation  */}
        
      

//         {/* Bottom - User Profile Section */}
//         <div className="border-t border-white border-opacity-20 p-4">
//           {sidebarExpanded ? (
//             <>
//               {/* User Card */}
//               <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 mb-4">
//                 <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mx-auto mb-3 shadow-lg">
//                   <User size={32} className="text-blue-600" />
//                 </div>
//                 <h3 className="text-xl font-bold text-center mb-1 text-white">{userData.username}</h3>
//                 <p className="text-sm text-blue-100 text-center flex items-center justify-center gap-1">
//                   <Phone size={14} />
//                   {userData.phone}
//                 </p>
//               </div>

//               {/* Address Details */}
//               <div className="space-y-3 mb-4">
//                 <h4 className="text-xs font-semibold text-blue-200 uppercase tracking-wider">Address Details</h4>
                
//                 <div className="flex items-start gap-2">
//                   <Landmark size={16} className="text-blue-200 mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="text-xs text-blue-200">Village</p>
//                     <p className="font-medium text-white">{userData.village}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-2">
//                   <Building2 size={16} className="text-blue-200 mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="text-xs text-blue-200">Taluka</p>
//                     <p className="font-medium text-white">{userData.taluka}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-2">
//                   <Map size={16} className="text-blue-200 mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="text-xs text-blue-200">District</p>
//                     <p className="font-medium text-white">{userData.district}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-2">
//                   <Mail size={16} className="text-blue-200 mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="text-xs text-blue-200">PIN Code</p>
//                     <p className="font-medium text-white">{userData.pincode}</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Logout Button */}
//               <button
//                 onClick={handleLogout}
//                 className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg font-semibold"
//               >
//                 <LogOut size={18} />
//                 Logout
//               </button>
//             </>
//           ) : (
//             <div className="flex flex-col items-center gap-4">
//               <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
//                 <User size={20} className="text-blue-600" />
//               </div>
//               <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
//                 <Landmark size={20} className="text-blue-600" />    
//               </div>
//               <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
//                 <Building2 size={20} className="text-blue-600" />    
//               </div>
//               <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
//                 <Map size={20} className="text-blue-600" />    
//               </div>
//               <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
//                 <Mail size={20} className="text-blue-600" />    
//               </div>
//               <button
//                 onClick={handleLogout}
//                 className="text-red-400 hover:text-red-300 transition-colors"
//                 title="Logout"
//               >
//                 <LogOut size={18} />
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Overlay for mobile */}
//       {sidebarOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}
//     </>
//   );
// }



// // with orange majenfa design
// import React, { useState } from 'react';
// import { Menu, X, User, Phone, MapPin, Home, LogOut, ChevronRight, ChevronDown, Box, BookOpen, Settings, Building2, Landmark, Mail, Map, Pin } from 'lucide-react';
// import { useSidebar } from '../context/sidebarContext';

// export function ModernSidebar() {
//   const [playgroundOpen, setPlaygroundOpen] = useState(true);
//   const {
//     sidebarOpen,
//     setSidebarOpen,
//     sidebarExpanded,
//     setSidebarExpanded,
//   } = useSidebar();

//  const userData = JSON.parse(localStorage.getItem("userProfile")) || {
//   username: "",
//   phone: "",
//   village: "",
//   taluka: "",
//   district: "",
//   pincode: ""
// };


//    const handleLogout = () => {
//     if (window.confirm("Are you sure you want to logout?")) {
//       localStorage.removeItem("userId");
//       window.location.href = "/"; // Redirect to registration page
//     }
//   };

 

//   return (
//     <>
//       {/* SIDEBAR */}
//       <div className={`fixed inset-y-0 left-0 transform ${
//         sidebarOpen ? 'translate-x-0' : '-translate-x-full'
//       } md:translate-x-0 transition-all duration-300 ease-in-out z-30 ${
//         sidebarExpanded ? 'w-64' : 'w-20'
//       } bg-gradient-to-b from-orange-500 via-orange-600 to-pink-600 text-white flex flex-col h-screen shadow-2xl`}> 
        
//         {/* Top Section */}
//         <div className="p-4 border-b border-white border-opacity-30">
//           <div className="flex items-center justify-between mb-4">
//             <div className="flex items-center gap-3 ml-[0.2rem]">
//               <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
//                 <Home size={20} className="text-orange-600" />
//               </div>
//               {sidebarExpanded && (
//                 <div className="overflow-hidden">
//                   <h3 className="text-white font-bold text-sm">Dairy Farm</h3>
//                   <p className="text-orange-100 text-xs">Management</p>
//                 </div>
//               )}
//             </div>
//             {sidebarExpanded && (
//               <>
//                 <button
//                   onClick={() => setSidebarExpanded(false)}
//                   className="hidden md:block text-orange-100 hover:text-white transition-colors"
//                 >
//                   <ChevronRight size={20} />
//                 </button>
//                 <button 
//                   onClick={() => setSidebarOpen(false)}
//                   className="md:hidden text-orange-100 hover:text-white transition-colors"
//                 >
//                   <X size={20} />
//                 </button>
//               </>
//             )}
//           </div>
          
//           {!sidebarExpanded && (
//             <button
//               onClick={() => setSidebarExpanded(true)}
//               className="hidden md:flex w-full justify-center text-orange-100 hover:text-white transition-colors"
//             >
//               <Menu size={20} />
//             </button>
//           )}
//         </div>

//         {/* Navigation */}
//         {/* <div className="flex-1 overflow-y-auto"></div> */}

//         {/* Bottom - User Profile Section */}
//         <div className="border-t border-white border-opacity-30 p-4 overflow-y-auto no-scrollbar max-h-[calc(100vh-0px)]">
//           {sidebarExpanded ? (
//             <>
//               {/* User Card */}
//               <div className="bg-white bg-opacity-25 backdrop-blur-sm rounded-xl p-4 mb-4 shadow-lg">
//                 <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full mx-auto mb-3 shadow-lg">
//                   <User size={32} className="text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold text-center mb-1 text-black">{userData.username}</h3>
//                 <p className="text-sm text-black font-bold text-center flex items-center justify-center gap-1">
//                   <Phone size={14} />
//                   {userData.phone}
//                 </p>
//               </div>

//               {/* Address Details */}
//               <div className="space-y-3 mb-4">
//                 <h4 className="text-xs font-semibold text-orange-100 uppercase tracking-wider">Address Details</h4>
                
//                 <div className="flex items-start gap-2">
//                   <Landmark size={16} className="text-orange-200 mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="text-xs text-orange-100">Village</p>
//                     <p className="font-medium text-white">{userData.village}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-2">
//                   <Building2 size={16} className="text-orange-200 mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="text-xs text-orange-100">Taluka</p>
//                     <p className="font-medium text-white">{userData.taluka}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-2">
//                   <Map size={16} className="text-orange-200 mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="text-xs text-orange-100">District</p>
//                     <p className="font-medium text-white">{userData.district}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-2">
//                   <Pin size={16} className="text-orange-200 mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="text-xs text-orange-100">PIN Code</p>
//                     <p className="font-medium text-white">{userData.pincode}</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Logout Button */}
//               <button
//                 onClick={handleLogout}
//                 className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg font-semibold"
//               >
//                 <LogOut size={18} />
//                 Logout
//               </button>
//             </>
//           ) : (
//             <div className="flex flex-col items-center gap-4">
//               <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
//                 <User size={20} className="text-white" />
//               </div>
//               <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
//                 <Landmark size={20} className="text-white" />
//               </div>
//               <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
//                 <Building2 size={20} className="text-white" />
//               </div>
//               <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
//                 <Map size={20} className="text-white" />
//               </div>
//               <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
//                 <Pin size={20} className="text-white" />
//               </div>
//               <button
//                 onClick={handleLogout}
//                 className="text-white hover:text-red-100 transition-colors"
//                 title="Logout"
//               >
//                 <LogOut size={18} />
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Overlay for mobile */}
//       {sidebarOpen && (
//         <div 
//           className="fixed inset-0  bg-opacity-50 z-20 md:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}
//     </>
//   );
// }


// import React, { useState } from 'react';
// import { Menu, X, User, Phone, MapPin, Home, LogOut, ChevronRight, ChevronDown, Box, BookOpen, Settings, Building2, Landmark, Mail, Map, Pin } from 'lucide-react';
// import { useSidebar } from '../context/sidebarContext';

// export function ModernSidebar() {
//   const [playgroundOpen, setPlaygroundOpen] = useState(true);
//   const {
//     sidebarOpen,
//     setSidebarOpen,
//     sidebarExpanded,
//     setSidebarExpanded,
//   } = useSidebar();

//  const userData = JSON.parse(localStorage.getItem("userProfile")) || {
//   username: "",
//   phone: "",
//   village: "",
//   taluka: "",
//   district: "",
//   pincode: ""
// };


//    const handleLogout = () => {
//     if (window.confirm("Are you sure you want to logout?")) {
//       localStorage.removeItem("userId");
//       window.location.href = "/"; // Redirect to registration page
//     }
//   };

 

//   return (
//     <>
//       {/* SIDEBAR */}
//       <div className={`fixed inset-y-0 left-0 transform ${
//         sidebarOpen ? 'translate-x-0' : '-translate-x-full'
//       } md:translate-x-0 transition-all duration-300 ease-in-out z-30 ${
//         sidebarExpanded ? 'w-64' : 'w-20'
//       } bg-gradient-to-b from-orange-500 via-orange-600 to-pink-600 text-white flex flex-col h-screen shadow-2xl`}> 
        
//         {/* Top Section */}
//         <div className="p-4 border-b border-white border-opacity-30">
//           <div className="flex items-center justify-between mb-4">
//             <div className="flex items-center gap-3 ml-[0.2rem]">
//               <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
//                 <Home size={20} className="text-orange-600" />
//               </div>
//               {sidebarExpanded && (
//                 <div className="overflow-hidden">
//                   <h3 className="text-white font-bold text-sm">Dairy Farm</h3>
//                   <p className="text-orange-100 text-xs">Management</p>
//                 </div>
//               )}
//             </div>
//             {sidebarExpanded && (
//               <>
//                 <button
//                   onClick={() => setSidebarExpanded(false)}
//                   className="hidden md:block text-orange-100 hover:text-white transition-colors"
//                 >
//                   <ChevronRight size={20} />
//                 </button>
//                 <button 
//                   onClick={() => setSidebarOpen(false)}
//                   className="md:hidden text-orange-100 hover:text-white transition-colors"
//                 >
//                   <X size={20} />
//                 </button>
//               </>
//             )}
//           </div>
          
//           {!sidebarExpanded && (
//             <button
//               onClick={() => setSidebarExpanded(true)}
//               className="hidden md:flex w-full justify-center text-orange-100 hover:text-white transition-colors"
//             >
//               <Menu size={20} />
//             </button>
//           )}
//         </div>

//         {/* Navigation */}
//         {/* <div className="flex-1 overflow-y-auto"></div> */}

//         {/* Bottom - User Profile Section */}
//         <div className="border-t border-white border-opacity-30 p-4 overflow-y-auto no-scrollbar max-h-[calc(100vh-0px)]">
//           {sidebarExpanded ? (
//             <>
//               {/* User Card */}
//               <div className="bg-white bg-opacity-25 backdrop-blur-sm rounded-xl p-4 mb-4 shadow-lg">
//                 <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full mx-auto mb-3 shadow-lg">
//                   <User size={32} className="text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold text-center mb-1 text-black">{userData.username}</h3>
//                 <p className="text-sm text-black font-bold text-center flex items-center justify-center gap-1">
//                   <Phone size={14} />
//                   {userData.phone}
//                 </p>
//               </div>

//               {/* Address Details */}
//               <div className="space-y-3 mb-4">
//                 <h4 className="text-xs font-semibold text-orange-100 uppercase tracking-wider">Address Details</h4>
                
//                 <div className="flex items-start gap-2">
//                   <Landmark size={16} className="text-orange-200 mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="text-xs text-orange-100">Village</p>
//                     <p className="font-medium text-white">{userData.village}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-2">
//                   <Building2 size={16} className="text-orange-200 mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="text-xs text-orange-100">Taluka</p>
//                     <p className="font-medium text-white">{userData.taluka}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-2">
//                   <Map size={16} className="text-orange-200 mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="text-xs text-orange-100">District</p>
//                     <p className="font-medium text-white">{userData.district}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-2">
//                   <Pin size={16} className="text-orange-200 mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="text-xs text-orange-100">PIN Code</p>
//                     <p className="font-medium text-white">{userData.pincode}</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Logout Button */}
//               <button
//                 onClick={handleLogout}
//                 className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg font-semibold"
//               >
//                 <LogOut size={18} />
//                 Logout
//               </button>
//             </>
//           ) : (
//             <div className="flex flex-col items-center gap-4">
//               <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
//                 <User size={20} className="text-white" />
//               </div>
//               <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
//                 <Landmark size={20} className="text-white" />
//               </div>
//               <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
//                 <Building2 size={20} className="text-white" />
//               </div>
//               <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
//                 <Map size={20} className="text-white" />
//               </div>
//               <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
//                 <Pin size={20} className="text-white" />
//               </div>
//               <button
//                 onClick={handleLogout}
//                 className="text-white hover:text-red-100 transition-colors"
//                 title="Logout"
//               >
//                 <LogOut size={18} />
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Overlay for mobile */}
//       {sidebarOpen && (
//         <div 
//           className="fixed inset-0  bg-opacity-50 z-20 md:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}
//     </>
//   );
// }

// src/components/ModernSidebar.jsx

import React, { useEffect, useState } from 'react';
import { Menu, X, User, Phone, Home, LogOut, ChevronRight, Building2, Landmark, Map, Pin } from 'lucide-react';
import { useSidebar } from '../context/sidebarContext';
import LogoutModal from './LogoutModel';
import { useTranslate } from '../i18n';

export function ModernSidebar() {
  const [showLogoutModal, setShowLogoutModal] = useState(false);


  const { t, lang } = useTranslate();

  const {
    sidebarOpen,
    setSidebarOpen,
    sidebarExpanded,
    setSidebarExpanded,
  } = useSidebar();



  const userData = JSON.parse(localStorage.getItem("userProfile")) || {
    username: "",
    phone: "",
    village: "",
    taluka: "",
    district: "",
    pincode: ""
  };

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userProfile");
    setShowLogoutModal(false);
    window.location.href = "/";
  };
// useEffect(() => {
//   if (sidebarOpen) {
//     setTimeout(() => setShowOverlay(true), 10);
//   } else {
//     setShowOverlay(false);
//   }
// }, [sidebarOpen]);

  return (
    <>
    
    <div className={`fixed inset-y-0 left-0 transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 transition-all duration-300 ease-in-out z-30 ${
        sidebarExpanded ? 'w-64': 'w-20'
      } bg-gradient-to-b from-orange-500 via-orange-600 to-pink-600 text-white flex flex-col h-screen shadow-2xl`}> 

  {/* ... sidebar content ... */}
         {/* Top Section  */}
        <div className="p-4 border-b border-white border-opacity-30">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3 ml-[0.2rem]">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                <Home size={20} className="text-orange-600" />
              </div>
              {sidebarExpanded && (
                <div className="overflow-hidden">
                  <h3 className="text-white font-bold text-sm">Dairy Farm</h3>
                  <p className="text-orange-100 text-xs">Management</p>
                </div>
              )}
            </div>
            {sidebarExpanded && (
              <>
                <button
                  onClick={() => setSidebarExpanded(false)}
                  className="hidden lg:block text-orange-100 hover:text-white transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
                <button 
                  onClick={() => setSidebarOpen(false)}
                  className="lg:hidden text-orange-100 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </>
            )}
          </div>
          
          {!sidebarExpanded && (
            <button
              onClick={() => setSidebarExpanded(true)}
              className="hidden md:flex w-full justify-center text-orange-100 hover:text-white transition-colors"
            >
              <Menu size={20} />
            </button>
          )}
        </div>

        {/* Bottom - User Profile Section */}
        <div className="border-t border-white border-opacity-30 p-4 overflow-y-auto no-scrollbar max-h-[calc(100vh-0px)]">
          {sidebarExpanded ? (
            <>
              {/* User Card */}
              <div className="bg-white bg-opacity-25 backdrop-blur-sm rounded-xl p-4 mb-4 shadow-lg">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full mx-auto mb-3 shadow-lg">
                  <User size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-center mb-1 text-black">{userData.username}</h3>
                <p className="text-sm text-black font-bold text-center flex items-center justify-center gap-1">
                  <Phone size={14} />
                  {userData.phone}
                </p>
              </div>

              {/* Address Details */}
              <div className="space-y-3 mb-4">
                <h4 className="text-xs font-semibold text-orange-100 uppercase tracking-wider">{t.addressDetailLabel || "Address Details"}</h4>
                
                <div className="flex items-start gap-2">
                  <Landmark size={16} className="text-orange-200 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-orange-100">{t.villageLabel || "Village"}</p>
                    <p className="font-medium text-white">{userData.village}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Building2 size={16} className="text-orange-200 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-orange-100">{t.talukaLabel || "Taluka"}</p>
                    <p className="font-medium text-white">{userData.taluka}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Map size={16} className="text-orange-200 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-orange-100">{t.districtLabel  || "District"}</p>
                    <p className="font-medium text-white">{userData.district}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Pin size={16} className="text-orange-200 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-orange-100">{t.pinCodeLabel || "PIN Code"}</p>
                    <p className="font-medium text-white">{userData.pincode}</p>
                  </div>
                </div>
              </div>

              {/* Logout Button */}
              <button
                onClick={() => setShowLogoutModal(true)}
                className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg font-semibold transform hover:scale-105 duration-300"
              >
                <LogOut size={18} />
                {t.logoutbtnLabel || "Logout"}
              </button>
            </>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                <User size={20} className="text-white" />
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                <Landmark size={20} className="text-white" />
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                <Building2 size={20} className="text-white" />
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                <Map size={20} className="text-white" />
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                <Pin size={20} className="text-white" />
              </div>
              <button
                onClick={() => setShowLogoutModal(true)}
                className="text-white hover:text-red-100 transition-colors"
                title="Logout"
              >
                <LogOut size={18} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Overlay for mobile */}
       {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}  



  

      {/* ✅ Logout Modal Component */}
      <LogoutModal 
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
        username={userData.username}
      />

      {/* Hide scrollbar styles */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  
);
}

