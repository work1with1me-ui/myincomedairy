import React from 'react';
import { Home } from 'lucide-react';

export default function WebsiteLoader() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-500 via-orange-600 to-pink-600 z-[100001] flex items-center justify-center">
      
      {/* Main Container */}
      <div className="text-center">
        
        {/* Logo with Animation */}
        <div className="mb-8 animate-bounce">
          <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
            <Home size={48} className="text-orange-600" />
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 animate-fadeIn">
          Dairy Farm
        </h1>
        <p className="text-orange-100 text-lg mb-8 animate-fadeIn animation-delay-200">
          Management System
        </p>

        {/* Spinner Loader */}
        <div className="flex justify-center mb-4">
          <div className="relative w-16 h-16">
            {/* Outer Ring */}
            <div className="absolute inset-0 border-4 border-white/30 rounded-full"></div>
            {/* Spinning Ring */}
            <div className="absolute inset-0 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>

        {/* Loading Text */}
        <p className="text-white text-sm animate-pulse">
          Loading your farm data...
        </p>

        {/* Dots Animation */}
        <div className="flex justify-center gap-2 mt-4">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-3xl"></div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .animate-spin {
          animation: spin 1s linear infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-bounce {
          animation: bounce 0.6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}