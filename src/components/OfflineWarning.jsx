import React, { useState } from 'react';
import { WifiOff, RefreshCw } from 'lucide-react';

const OfflineWarning = () => {
  const [isRetrying, setIsRetrying] = useState(false);

  const handleRetry = () => {
    setIsRetrying(true);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-[9999] p-4">
      <div className="bg-white rounded-3xl  p-8 md:p-12 max-w-md w-full text-center animate-fade-in">
        
        {/* Icon Container */}
        <div className="bg-gradient-to-br from-red-500 to-pink-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
          <WifiOff className="text-white" size={40} />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          No Internet Connection
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-base mb-6 leading-relaxed">
          Oops! Looks like you've lost your internet connection. Please check your network and try again.
        </p>

        {/* Troubleshooting Box */}
        <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left">
          <p className="text-sm font-semibold text-gray-700 mb-2">
            Troubleshooting:
          </p>
          <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
            <li>Check your WiFi or mobile data</li>
            <li>Restart your router</li>
            <li>Check airplane mode is off</li>
            <li>Try moving closer to your router</li>
          </ul>
        </div>

        {/* Retry Button */}
        <button
          onClick={handleRetry}
          disabled={isRetrying}
          className={`
            w-full py-4 rounded-xl font-semibold text-white text-lg
            flex items-center justify-center gap-3 transition-all duration-300
            ${isRetrying 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 hover:shadow-lg transform hover:-translate-y-0.5'
            }
          `}
        >
          <RefreshCw 
            size={20} 
            className={isRetrying ? 'animate-spin' : ''} 
          />
          {isRetrying ? 'Retrying...' : 'Try Again'}
        </button>

        {/* Status Indicator */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-500">Offline</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default OfflineWarning;