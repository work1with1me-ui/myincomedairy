// src/components/LogoutModal.jsx

// import React from 'react';
// import { X, AlertTriangle, LogOut } from 'lucide-react';

// export default function LogoutModal({ 
//   isOpen, 
//   onClose, 
//   onConfirm, 
//   username = "" 
// }) {
  
//   // If modal is not open, don't render anything
//   if (!isOpen) return null;

//   return (
//     <>
//       {/* Backdrop Overlay */}
//       <div 
//         className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-[60] animate-fadeIn"
//         onClick={onClose}
//       />

//       {/* Modal */}
//       <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
//         <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative animate-slideUp">
          
//           {/* Close Button */}
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
//           >
//             <X size={24} />
//           </button>

//           {/* Warning Icon */}
//           <div className="flex justify-center mb-4">
//             <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-red-100 
//                             rounded-full flex items-center justify-center shadow-lg">
//               <AlertTriangle size={40} className="text-red-500" />
//             </div>
//           </div>

//           {/* Title */}
//           <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">
//             Logout Confirmation
//           </h3>

//           {/* Description */}
//           <p className="text-gray-600 text-center mb-6 text-sm">
//             Are you sure you want to logout? You will need to login again to access your account.
//           </p>

//           {/* Action Buttons */}
//           <div className="flex gap-3">
//             {/* Cancel Button */}
//             <button
//               onClick={onClose}
//               className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 
//                          py-3 px-4 rounded-xl font-semibold 
//                          transition-all duration-300 border-2 border-gray-200 hover:border-gray-300"
//             >
//               Cancel
//             </button>

//             {/* Confirm Logout Button */}
//             <button
//               onClick={onConfirm}
//               className="flex-1 bg-gradient-to-r from-red-500 to-pink-600 
//                          hover:from-red-600 hover:to-pink-700 
//                          text-white py-3 px-4 rounded-xl font-semibold 
//                          flex items-center justify-center gap-2
//                          transition-all duration-300 transform hover:scale-105
//                          shadow-lg hover:shadow-xl"
//             >
//               <LogOut size={18} />
//               Logout
//             </button>
//           </div>

//           {/* Optional: User Info */}
//           {username && (
//             <div className="mt-4 pt-4 border-t border-gray-200">
//               <p className="text-xs text-gray-500 text-center">
//                 Logging out: <span className="font-semibold text-gray-700">{username}</span>
//               </p>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Animation Styles */}
//       <style>{`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }

//         @keyframes slideUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px) scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }

//         .animate-fadeIn {
//           animation: fadeIn 0.2s ease-out;
//         }

//         .animate-slideUp {
//           animation: slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
//         }
//       `}</style>
//     </>
//   );
// }

// src/components/LogoutModal.jsx

// src/components/LogoutModal.jsx

// src/components/LogoutModal.jsx
// src/components/LogoutModal.jsx

// import React, { useEffect } from 'react';
// import { createPortal } from 'react-dom';
// import { X, AlertTriangle, LogOut } from 'lucide-react';

// export default function LogoutModal({ 
//   isOpen, 
//   onClose, 
//   onConfirm, 
//   username = "" 
// }) {
  
//   // Disable body scroll when modal is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
    
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isOpen]);

//   // If modal is not open, don't render anything
//   if (!isOpen) return null;

//   // Modal content
//   const modalContent = (
//     <>
//       {/* Backdrop Overlay */}
//       <div 
//         className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md z-[99999] animate-fadeIn"
//         onClick={onClose}
//         style={{ isolation: 'isolate' }}
//       />

//       {/* Modal Container */}
//       <div 
//         className="fixed inset-0 z-[100000] flex items-center justify-center p-4"
//         style={{ isolation: 'isolate' }}
//       >
//         <div 
//           className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative animate-slideUp"
//           onClick={(e) => e.stopPropagation()}
//         >
          
//           {/* Close Button */}
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
//           >
//             <X size={24} />
//           </button>

//           {/* Warning Icon */}
//           <div className="flex justify-center mb-4">
//             <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-red-100 
//                             rounded-full flex items-center justify-center shadow-lg">
//               <AlertTriangle size={40} className="text-red-500" />
//             </div>
//           </div>

//           {/* Title */}
//           <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">
//             Logout Confirmation
//           </h3>

//           {/* Description */}
//           <p className="text-gray-600 text-center mb-6 text-sm">
//             Are you sure you want to logout? You will need to login again to access your account.
//           </p>

//           {/* Action Buttons */}
//           <div className="flex gap-3">
//             {/* Cancel Button */}
//             <button
//               onClick={onClose}
//               className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 
//                          py-3 px-4 rounded-xl font-semibold 
//                          transition-all duration-300 border-2 border-gray-200 hover:border-gray-300"
//             >
//               Cancel
//             </button>

//             {/* Confirm Logout Button */}
//             <button
//               onClick={onConfirm}
//               className="flex-1 bg-gradient-to-r from-red-500 to-pink-600 
//                          hover:from-red-600 hover:to-pink-700 
//                          text-white py-3 px-4 rounded-xl font-semibold 
//                          flex items-center justify-center gap-2
//                          transition-all duration-300 transform hover:scale-105
//                          shadow-lg hover:shadow-xl"
//             >
//               <LogOut size={18} />
//               Logout
//             </button>
//           </div>

//           {/* Optional: User Info */}
//           {username && (
//             <div className="mt-4 pt-4 border-t border-gray-200">
//               <p className="text-xs text-gray-500 text-center">
//                 Logging out: <span className="font-semibold text-gray-700">{username}</span>
//               </p>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Animation Styles */}
//       <style>{`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }

//         @keyframes slideUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px) scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }

//         .animate-fadeIn {
//           animation: fadeIn 0.2s ease-out;
//         }

//         .animate-slideUp {
//           animation: slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
//         }
//       `}</style>
//     </>
//   );

//   // Render modal using Portal to document.body
//   return createPortal(modalContent, document.body);
// }

// src/components/LogoutModal.jsx

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, AlertTriangle, LogOut } from 'lucide-react';
import { useTranslate } from '../i18n';

export default function LogoutModal({ 
  isOpen, 
  onClose, 
  onConfirm, 
  username = "" 
}) {
  
  
    const { t, lang } = useTranslate();
  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // If modal is not open, don't render anything
  if (!isOpen) return null;

  // Modal content
  const modalContent = (
    <>
      {/* Backdrop Overlay - Glass Effect */}
      <div 
      // inset-0 backdrop-blur-2xl
        className="fixed  z-[99999] animate-fadeIn"
        onClick={onClose}
        // style={{ 
        //   isolation: 'isolate',
        //   backgroundColor: 'rgba(255, 255, 255, 0.15)',
        //   backdropFilter: 'blur(25px) saturate(180%) brightness(1.05)',
        //   WebkitBackdropFilter: 'blur(25px) saturate(180%) brightness(1.05)'
        // }}
      />

      {/* Modal Container */}
      <div 
        className="fixed inset-0 z-[100000] flex items-center justify-center p-4"
        style={{ isolation: 'isolate' }}
      >
        <div 
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative animate-slideUp"
          onClick={(e) => e.stopPropagation()}
        >
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
          >
            <X size={24} />
          </button>

          {/* Warning Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-red-100 
                            rounded-full flex items-center justify-center shadow-lg">
              <AlertTriangle size={40} className="text-red-500" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">
            {t.logoutConfirmationLabel ||"Logout Confirmation"}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-center mb-6 text-sm">
            {t.warningMsgLabel || "Are you sure you want to logout? You will need to login again to access your account."}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-3">
            {/* Cancel Button */}
            <button
              onClick={onClose}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 
                         py-3 px-4 rounded-xl font-semibold 
                         transition-all duration-300 border-2 border-gray-200 hover:border-gray-300"
            >
              {t.cancelbtnLabel || "Cancel"}
            </button>

            {/* Confirm Logout Button */}
            <button
              onClick={onConfirm}
              className="flex-1 bg-gradient-to-r from-red-500 to-pink-600 
                         hover:from-red-600 hover:to-pink-700 
                         text-white py-3 px-4 rounded-xl font-semibold 
                         flex items-center justify-center gap-2
                         transition-all duration-300 transform hover:scale-105
                         shadow-lg hover:shadow-xl"
            >
              <LogOut size={18} />
              {t.logoutbtnLabel || "Logout"}
            </button>
          </div>

          {/* Optional: User Info */}
          {username && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                Logging out: <span className="font-semibold text-gray-700">{username}</span>
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </>
  );

  // Render modal using Portal to document.body
  return createPortal(modalContent, document.body);
}