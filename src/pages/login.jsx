// import React, { useState, useEffect } from 'react';

// export default function PhoneOTPAuth() {
//   const [mode, setMode] = useState("signup"); // signup, login, verifyOtp
//   const [phone, setPhone] = useState("");
//   const [otp, setOtp] = useState("");

//   // Signup fields
//   const [username, setUsername] = useState("");
//   const [village, setVillage] = useState("");
//   const [district, setDistrict] = useState("");
//   const [taluka, setTaluka] = useState("");
//   const [pincode, setPincode] = useState("");

//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Simulate sending OTP
//   const sendOTP = async () => {
//     if (!phone || phone.length < 10) {
//       setMessage("Please enter a valid phone number");
//       return;
//     }

//     // For signup, validate all fields
//     if (mode === "signup") {
//       if (!username || !village || !district || !taluka || !pincode) {
//         setMessage("Please fill all fields");
//         return;
//       }
//       if (pincode.length !== 6) {
//         setMessage("Please enter a valid 6-digit PIN code");
//         return;
//       }
//     }

//     setLoading(true);
//     setMessage("Sending OTP...");

//     // Simulate API call
//     setTimeout(() => {
//       setMessage(`OTP sent to ${phone}`);
//       setMode("verifyOtp");
//       setLoading(false);
//     }, 1500);
//   };

//   // Simulate verifying OTP
//   const verifyOTP = async () => {
//     if (!otp || otp.length !== 6) {
//       setMessage("Please enter a valid 6-digit OTP");
//       return;
//     }

//     setLoading(true);
//     setMessage("Verifying OTP...");

//     // Simulate API call
//     setTimeout(() => {
//       setMessage("✅ Login Successful!");
//       setLoading(false);

//       // Here you would normally:
//       // 1. Save user data to your database (for signup)
//       // 2. Create session/token
//       // 3. Redirect to dashboard

//       setTimeout(() => {
//         alert(`Welcome ${username || 'User'}! Phone verified: ${phone}`);
//       }, 1000);
//     }, 1500);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
//       <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-2xl">

//         {/* HEADER */}
//         <div className="text-center mb-6">
//           <h2 className="text-3xl font-bold text-gray-800 mb-2">
//             {mode === "signup" && "Create Account"}
//             {mode === "login" && "Login"}
//             {mode === "verifyOtp" && "Verify OTP"}
//           </h2>
//           <p className="text-gray-600 text-sm">
//             {mode === "verifyOtp" 
//               ? `Enter the OTP sent to ${phone}` 
//               : "Enter your details to continue"}
//           </p>
//         </div>

//         {/* MESSAGE/ERROR */}
//         {message && (
//           <div className={`p-3 rounded-lg mb-4 text-center text-sm ${
//             message.includes("✅") 
//               ? "bg-green-100 text-green-700" 
//               : message.includes("valid") 
//               ? "bg-red-100 text-red-700"
//               : "bg-blue-100 text-blue-700"
//           }`}>
//             {message}
//           </div>
//         )}

//         {/* -------- SIGNUP FORM -------- */}
//         {mode === "signup" && (
//           <div className="space-y-3">

//             <input
//               type="text"
//               placeholder="Username"
//               className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <input
//               type="tel"
//               placeholder="Phone Number (10 digits)"
//               maxLength="10"
//               className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
//             />


//             <input
//               type="text"
//               placeholder="Village"
//               className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//               value={village}
//               onChange={(e) => setVillage(e.target.value)}
//             />

//             <input
//               type="text"
//               placeholder="Taluka"
//               className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//               value={taluka}
//               onChange={(e) => setTaluka(e.target.value)}
//             />

//             <input
//               type="text"
//               placeholder="District"
//               className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//               value={district}
//               onChange={(e) => setDistrict(e.target.value)}
//             />

//             <input
//               type="tel"
//               placeholder="PIN Code (6 digits)"
//               maxLength="6"
//               className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//               value={pincode}
//               onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
//             />

//             <button 
//               onClick={sendOTP} 
//               disabled={loading}
//               className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {loading ? "Sending..." : "Send OTP"}
//             </button>
//           </div>
//         )}

//         {/* -------- LOGIN FORM -------- */}
//         {mode === "login" && (
//           <div className="space-y-3">
//             <input
//               type="tel"
//               placeholder="Phone Number (10 digits)"
//               maxLength="10"
//               className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
//             />

//             <button 
//               onClick={sendOTP} 
//               disabled={loading}
//               className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {loading ? "Sending..." : "Send OTP"}
//             </button>
//           </div>
//         )}

//         {/* -------- VERIFY OTP SCREEN -------- */}
//         {mode === "verifyOtp" && (
//           <div className="space-y-3">
//             <input
//               type="tel"
//               placeholder="Enter 6-digit OTP"
//               maxLength="6"
//               className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-center text-2xl tracking-widest"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
//             />

//             <button 
//               onClick={verifyOTP} 
//               disabled={loading}
//               className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {loading ? "Verifying..." : "Verify OTP"}
//             </button>

//             <button 
//               onClick={sendOTP}
//               disabled={loading}
//               className="w-full text-blue-600 py-2 text-sm hover:underline"
//             >
//               Resend OTP
//             </button>
//           </div>
//         )}

//         {/* -------- FOOTER LINKS -------- */}
//         {mode !== "verifyOtp" && (
//           <div className="text-center mt-6 space-y-2">
//             {mode === "signup" ? (
//               <p className="text-sm text-gray-600">
//                 Already have an account?{" "}
//                 <span 
//                   className="text-blue-600 font-semibold cursor-pointer hover:underline" 
//                   onClick={() => {
//                     setMode("login");
//                     setMessage("");
//                   }}
//                 >
//                   Login
//                 </span>
//               </p>
//             ) : (
//               <p className="text-sm text-gray-600">
//                 Don't have an account?{" "}
//                 <span 
//                   className="text-green-600 font-semibold cursor-pointer hover:underline" 
//                   onClick={() => {
//                     setMode("signup");
//                     setMessage("");
//                   }}
//                 >
//                   Create Account
//                 </span>
//               </p>
//             )}
//           </div>
//         )}

//         {/* BACK BUTTON FOR VERIFY OTP */}
//         {mode === "verifyOtp" && (
//           <button
//             onClick={() => {
//               setMode(username ? "signup" : "login");
//               setOtp("");
//               setMessage("");
//             }}
//             className="w-full mt-4 text-gray-600 py-2 text-sm hover:text-gray-800"
//           >
//             ← Back to {username ? "Signup" : "Login"}
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }


// real version 1
// import React, { useState, useEffect } from 'react';

// // Firebase imports (ye aapko install karne honge)
// // npm install firebase

// import { initializeApp } from 'firebase/app';
// import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
// import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

// // ⚠️ IMPORTANT: Ye aapki Firebase config hai - Firebase Console se copy karein
// const firebaseConfig = {
//   apiKey: "AIzaSyAq-InW1eSWrv-2JCaB9uTqbk4V2cf-Xws",
//   authDomain: "dairy-365-4fd5f.firebaseapp.com",
//   projectId: "dairy-365-4fd5f",
//   storageBucket: "dairy-365-4fd5f.firebasestorage.app",
//   messagingSenderId: "144551812646",
//   appId: "1:144551812646:web:45e0fcf98cad5f72ddd0e7"
// };

// // Firebase initialize
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// export default function PhoneOTPAuth() {
//   const [mode, setMode] = useState("signup"); // signup, login, verifyOtp
//   const [phone, setPhone] = useState("");
//   const [otp, setOtp] = useState("");

//   // Signup fields
//   const [username, setUsername] = useState("");
//   const [village, setVillage] = useState("");
//   const [district, setDistrict] = useState("");
//   const [taluka, setTaluka] = useState("");
//   const [pincode, setPincode] = useState("");

//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [confirmationResult, setConfirmationResult] = useState(null);

//   // reCAPTCHA setup
//   useEffect(() => {
//     if (!window.recaptchaVerifier) {
//       window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
//         'size': 'invisible',
//         'callback': (response) => {
//           console.log("reCAPTCHA solved");
//         }
//       });
//     }
//   }, []);

//   // Send OTP using Firebase
//   const sendOTP = async () => {
//     if (!phone || phone.length !== 10) {
//       setMessage("Please enter a valid 10-digit phone number");
//       return;
//     }

//     // For signup, validate all fields
//     if (mode === "signup") {
//       if (!username || !village || !district || !taluka || !pincode) {
//         setMessage("Please fill all fields");
//         return;
//       }
//       if (pincode.length !== 6) {
//         setMessage("Please enter a valid 6-digit PIN code");
//         return;
//       }
//     }

//     setLoading(true);
//     setMessage("Sending OTP...");

//     try {
//       // +91 India ka country code
//       const phoneNumber = `+91${phone}`;
//       const appVerifier = window.recaptchaVerifier;

//       const confirmation = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
//       setConfirmationResult(confirmation);
//       setMessage(`OTP sent to ${phone}`);
//       setMode("verifyOtp");
//     } catch (error) {
//       console.error("Error sending OTP:", error);
//       setMessage(`Error: ${error.message}`);

//       // reCAPTCHA reset on error
//       if (window.recaptchaVerifier) {
//         window.recaptchaVerifier.clear();
//         window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
//           'size': 'invisible'
//         });
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Verify OTP using Firebase
//   const verifyOTP = async () => {
//     if (!otp || otp.length !== 6) {
//       setMessage("Please enter a valid 6-digit OTP");
//       return;
//     }

//     if (!confirmationResult) {
//       setMessage("Please request OTP first");
//       return;
//     }

//     setLoading(true);
//     setMessage("Verifying OTP...");

//     try {
//       const result = await confirmationResult.confirm(otp);
//       const user = result.user;

//       // Check if user exists in Firestore
//       const userDoc = await getDoc(doc(db, 'users', user.uid));

//       if (mode === "signup" || !userDoc.exists()) {
//         // Save user data to Firestore
//         await setDoc(doc(db, 'users', user.uid), {
//           username: username,
//           phone: phone,
//           village: village,
//           taluka: taluka,
//           district: district,
//           pincode: pincode,
//           createdAt: new Date().toISOString(),
//           uid: user.uid
//         });
//         setMessage("✅ Signup Successful!");
//       } else {
//         setMessage("✅ Login Successful!");
//       }

//       setTimeout(() => {
//         alert(`Welcome ${username || userDoc.data()?.username || 'User'}!\nPhone verified: ${phone}`);
//         // Yahan aap dashboard pe redirect kar sakte ho
//       }, 1000);

//     } catch (error) {
//       console.error("Error verifying OTP:", error);
//       setMessage(`Wrong OTP. Please try again.`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
//       <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-2xl">

//         {/* HEADER */}
//         <div className="text-center mb-6">
//           <h2 className="text-3xl font-bold text-gray-800 mb-2">
//             {mode === "signup" && "Create Account"}
//             {mode === "login" && "Login"}
//             {mode === "verifyOtp" && "Verify OTP"}
//           </h2>
//           <p className="text-gray-600 text-sm">
//             {mode === "verifyOtp" 
//               ? `Enter the OTP sent to ${phone}` 
//               : "Enter your details to continue"}
//           </p>
//         </div>

//         {/* MESSAGE/ERROR */}
//         {message && (
//           <div className={`p-3 rounded-lg mb-4 text-center text-sm ${
//             message.includes("✅") 
//               ? "bg-green-100 text-green-700" 
//               : message.includes("valid") || message.includes("Error") || message.includes("Wrong")
//               ? "bg-red-100 text-red-700"
//               : "bg-blue-100 text-blue-700"
//           }`}>
//             {message}
//           </div>
//         )}

//         {/* -------- SIGNUP FORM -------- */}
//         {mode === "signup" && (
//           <div className="space-y-3">

//             <input
//               type="text"
//               placeholder="Username"
//               className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <input
//               type="tel"
//               placeholder="Phone Number (10 digits)"
//               maxLength="10"
//               className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
//             />


//             <input
//               type="text"
//               placeholder="Village"
//               className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//               value={village}
//               onChange={(e) => setVillage(e.target.value)}
//             />

//             <input
//               type="text"
//               placeholder="Taluka"
//               className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//               value={taluka}
//               onChange={(e) => setTaluka(e.target.value)}
//             />

//             <input
//               type="text"
//               placeholder="District"
//               className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//               value={district}
//               onChange={(e) => setDistrict(e.target.value)}
//             />

//             <input
//               type="tel"
//               placeholder="PIN Code (6 digits)"
//               maxLength="6"
//               className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//               value={pincode}
//               onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
//             />

//             <button 
//               onClick={sendOTP} 
//               disabled={loading}
//               className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {loading ? "Sending..." : "Send OTP"}
//             </button>
//           </div>
//         )}

//         {/* -------- LOGIN FORM -------- */}
//         {mode === "login" && (
//           <div className="space-y-3">
//             <input
//               type="tel"
//               placeholder="Phone Number (10 digits)"
//               maxLength="10"
//               className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
//             />

//             <button 
//               onClick={sendOTP} 
//               disabled={loading}
//               className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {loading ? "Sending..." : "Send OTP"}
//             </button>
//           </div>
//         )}

//         {/* -------- VERIFY OTP SCREEN -------- */}
//         {mode === "verifyOtp" && (
//           <div className="space-y-3">
//             <input
//               type="tel"
//               placeholder="Enter 6-digit OTP"
//               maxLength="6"
//               className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-center text-2xl tracking-widest"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
//             />

//             <button 
//               onClick={verifyOTP} 
//               disabled={loading}
//               className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {loading ? "Verifying..." : "Verify OTP"}
//             </button>

//             <button 
//               onClick={sendOTP}
//               disabled={loading}
//               className="w-full text-blue-600 py-2 text-sm hover:underline"
//             >
//               Resend OTP
//             </button>
//           </div>
//         )}

//         {/* -------- FOOTER LINKS -------- */}
//         {mode !== "verifyOtp" && (
//           <div className="text-center mt-6 space-y-2">
//             {mode === "signup" ? (
//               <p className="text-sm text-gray-600">
//                 Already have an account?{" "}
//                 <span 
//                   className="text-blue-600 font-semibold cursor-pointer hover:underline" 
//                   onClick={() => {
//                     setMode("login");
//                     setMessage("");
//                   }}
//                 >
//                   Login
//                 </span>
//               </p>
//             ) : (
//               <p className="text-sm text-gray-600">
//                 Don't have an account?{" "}
//                 <span 
//                   className="text-green-600 font-semibold cursor-pointer hover:underline" 
//                   onClick={() => {
//                     setMode("signup");
//                     setMessage("");
//                   }}
//                 >
//                   Create Account
//                 </span>
//               </p>
//             )}
//           </div>
//         )}

//         {/* BACK BUTTON FOR VERIFY OTP */}
//         {mode === "verifyOtp" && (
//           <button
//             onClick={() => {
//               setMode(username ? "signup" : "login");
//               setOtp("");
//               setMessage("");
//             }}
//             className="w-full mt-4 text-gray-600 py-2 text-sm hover:text-gray-800"
//           >
//             ← Back to {username ? "Signup" : "Login"}
//           </button>
//         )}

//         {/* reCAPTCHA container (invisible) */}
//         <div id="recaptcha-container"></div>
//       </div>
//     </div>
//   );
// }




// original code 
// import React, { useState, useEffect } from 'react';

// // Firebase imports (ye aapko install karne honge)
// // npm install firebase

// import { initializeApp } from 'firebase/app';
// import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
// import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
// import { ReCAPTCHA } from 'react-google-recaptcha';

// //  IMPORTANT: Ye aapki Firebase config hai - Firebase Console se copy karein
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID
// };


// // Firebase initialize
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// export default function PhoneOTPAuth() {
//   const [mode, setMode] = useState("signup"); // signup, login, verifyOtp
//   const [phone, setPhone] = useState("");
//   const [otp, setOtp] = useState("");

//   // Signup fields
//   const [username, setUsername] = useState("");
//   const [village, setVillage] = useState("");
//   const [district, setDistrict] = useState("");
//   const [taluka, setTaluka] = useState("");
//   const [pincode, setPincode] = useState("");

//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [confirmationResult, setConfirmationResult] = useState(null);

//   // reCAPTCHA setup
//   useEffect(() => {
//     // Cleanup previous instance if exists
//     if (window.recaptchaVerifier) {
//       try {
//         window.recaptchaVerifier.clear();
//       } catch (e) {
//         console.log("Cleanup error:", e);
//       }
//       window.recaptchaVerifier = null;
//     }

//     // Create new reCAPTCHA instance
//     try {
//       window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
//         'size': 'invisible',
//         'callback': (response) => {
//           console.log("reCAPTCHA solved");
//         },
//         'expired-callback': () => {
//           console.log("reCAPTCHA expired");
//         }
//       });
//     } catch (error) {
//       console.error("reCAPTCHA setup error:", error);
//     }

//     // Cleanup on unmount
//     return () => {
//       if (window.recaptchaVerifier) {
//         try {
//           window.recaptchaVerifier.clear();
//           window.recaptchaVerifier = null;
//         } catch (e) {
//           console.log("Unmount cleanup error:", e);
//         }
//       }
//     };
//   }, []);

//   // Send OTP using Firebase
//   // const sendOTP = async () => {
//   //   //  const appVerifier = setupRecaptcha(auth);
//   //   if (!phone || phone.length !== 10) {
//   //     setMessage("Please enter a valid 10-digit phone number");
//   //     return;
//   //   }

//   //   // For signup, validate all fields
//   //   if (mode === "signup") {
//   //     if (!username || !village || !district || !taluka || !pincode) {
//   //       setMessage("Please fill all fields");
//   //       return;
//   //     }
//   //     if (pincode.length !== 6) {
//   //       setMessage("Please enter a valid 6-digit PIN code");
//   //       return;
//   //     }
//   //   }

//   //   setLoading(true);
//   //   setMessage("Sending OTP...");

//   //   try {
//   //     // +91 India ka country code
//   //     const phoneNumber = `+91${phone}`;
//   //     const appVerifier = window.recaptchaVerifier;

//   //     const confirmation = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
//   //     setConfirmationResult(confirmation);
//   //     setMessage(`OTP sent to ${phone}`);
//   //     setMode("verifyOtp");
//   //   } catch (error) {
//   //     console.error("Error sending OTP:", error);
//   //     setMessage(`Error: ${error.message}`);

//   //     // reCAPTCHA reset on error
//   //     // if (window.recaptchaVerifier) {
//   //     //   window.recaptchaVerifier.clear();
//   //     //   window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
//   //     //     'size': 'invisible'
//   //     //   });
//   //     // }
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };





//   const sendOTP = async () => {
//   if (!window.recaptchaVerifier) {
//     window.recaptchaVerifier = new RecaptchaVerifier(
//       auth,
//       'recaptcha-container',
//       { size: "invisible" }
//     );
//   }

// //   // original mode
//   const appVerifier = window.recaptchaVerifier;

//   try {
//     const phoneNumber = `+91${phone}`;
//     const confirmation = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
//     setConfirmationResult(confirmation);
//     setMode("verifyOtp");
//     setMessage("OTP Sent!");
//   } catch (error) {
//     console.log("OTP Error:", error);
//     setMessage(error.message);
//   }
// };


//   // Verify OTP using Firebase
//   const verifyOTP = async () => {
//     if (!otp || otp.length !== 6) {
//       setMessage("Please enter a valid 6-digit OTP");
//       return;
//     }

//     if (!confirmationResult) {
//       setMessage("Please request OTP first");
//       return;
//     }

//     setLoading(true);
//     setMessage("Verifying OTP...");

//     try {
//       const result = await confirmationResult.confirm(otp);
//       const user = result.user;

//       // Check if user exists in Firestore
//       const userDoc = await getDoc(doc(db, 'users', user.uid));

//       if (mode === "signup" || !userDoc.exists()) {
//         // Save user data to Firestore
//         await setDoc(doc(db, 'users', user.uid), {
//           username: username,
//           phone: phone,
//           village: village,
//           taluka: taluka,
//           district: district,
//           pincode: pincode,
//           createdAt: new Date().toISOString(),
//           uid: user.uid
//         });
//         setMessage("✅ Signup Successful!");
//       } else {
//         setMessage("✅ Login Successful!");
//       }

//       setTimeout(() => {
//         alert(`Welcome ${username || userDoc.data()?.username || 'User'}!\nPhone verified: ${phone}`);
//         // Yahan aap dashboard pe redirect kar sakte ho
//       }, 1000);

//     } catch (error) {
//       console.error("Error verifying OTP:", error);
//       setMessage(`Wrong OTP. Please try again.`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
//       <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-2xl">

//         {/* HEADER */}
//         <div className="text-center mb-6">
//           <h2 className="text-3xl font-bold text-gray-800 mb-2">
//             {mode === "signup" && "Create Account"}
//             {mode === "login" && "Login"}
//             {mode === "verifyOtp" && "Verify OTP"}
//           </h2>
//           <p className="text-gray-600 text-sm">
//             {mode === "verifyOtp" 
//               ? `Enter the OTP sent to ${phone}` 
//               : "Enter your details to continue"}
//           </p>
//         </div>

//         {/* MESSAGE/ERROR */}
//         {message && (
//           <div className={`p-3 rounded-lg mb-4 text-center text-sm ${
//             message.includes("✅") 
//               ? "bg-green-100 text-green-700" 
//               : message.includes("valid") || message.includes("Error") || message.includes("Wrong")
//               ? "bg-red-100 text-red-700"
//               : "bg-blue-100 text-blue-700"
//           }`}>
//             {message}
//           </div>
//         )}

//         {/* -------- SIGNUP FORM -------- */}
//         {mode === "signup" && (
//           <div className="space-y-3">

//             <input
//               type="text"
//               placeholder="Username"
//               className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <input
//               type="tel"
//               placeholder="Phone Number (10 digits)"
//               maxLength="10"
//               className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
//             />


//             <input
//               type="text"
//               placeholder="Village"
//               className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//               value={village}
//               onChange={(e) => setVillage(e.target.value)}
//             />

//             <input
//               type="text"
//               placeholder="Taluka"
//               className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//               value={taluka}
//               onChange={(e) => setTaluka(e.target.value)}
//             />

//             <input
//               type="text"
//               placeholder="District"
//               className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//               value={district}
//               onChange={(e) => setDistrict(e.target.value)}
//             />

//             <input
//               type="tel"
//               placeholder="PIN Code (6 digits)"
//               maxLength="6"
//               className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//               value={pincode}
//               onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
//             />

//             <button 
//               onClick={sendOTP} 
//               disabled={loading}
//               className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {loading ? "Sending..." : "Send OTP"}
//             </button>
//           </div>
//         )}

//         {/* -------- LOGIN FORM -------- */}
//         {mode === "login" && (
//           <div className="space-y-3">
//             <input
//               type="tel"
//               placeholder="Phone Number (10 digits)"
//               maxLength="10"
//               className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
//             />

//             <button 
//               onClick={sendOTP} 
//               disabled={loading}
//               className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {loading ? "Sending..." : "Send OTP"}
//             </button>
//           </div>
//         )}

//         {/* -------- VERIFY OTP SCREEN -------- */}
//         {mode === "verifyOtp" && (
//           <div className="space-y-3">
//             <input
//               type="tel"
//               placeholder="Enter 6-digit OTP"
//               maxLength="6"
//               className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-center text-2xl tracking-widest"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
//             />

//             <button 
//               onClick={verifyOTP} 
//               disabled={loading}
//               className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {loading ? "Verifying..." : "Verify OTP"}
//             </button>

//             <button 
//               onClick={sendOTP}
//               disabled={loading}
//               className="w-full text-blue-600 py-2 text-sm hover:underline"
//             >
//               Resend OTP
//             </button>
//           </div>
//         )}

//         {/* -------- FOOTER LINKS -------- */}
//         {mode !== "verifyOtp" && (
//           <div className="text-center mt-6 space-y-2">
//             {mode === "signup" ? (
//               <p className="text-sm text-gray-600">
//                 Already have an account?{" "}
//                 <span 
//                   className="text-blue-600 font-semibold cursor-pointer hover:underline" 
//                   onClick={() => {
//                     setMode("login");
//                     setMessage("");
//                   }}
//                 >
//                   Login
//                 </span>
//               </p>
//             ) : (
//               <p className="text-sm text-gray-600">
//                 Don't have an account?{" "}
//                 <span 
//                   className="text-green-600 font-semibold cursor-pointer hover:underline" 
//                   onClick={() => {
//                     setMode("signup");
//                     setMessage("");
//                   }}
//                 >
//                   Create Account
//                 </span>
//               </p>
//             )}
//           </div>
//         )}

//         {/* BACK BUTTON FOR VERIFY OTP */}
//         {mode === "verifyOtp" && (
//           <button
//             onClick={() => {
//               setMode(username ? "signup" : "login");
//               setOtp("");
//               setMessage("");
//             }}
//             className="w-full mt-4 text-gray-600 py-2 text-sm hover:text-gray-800"
//           >
//             ← Back to {username ? "Signup" : "Login"}
//           </button>
//         )}

//         {/* reCAPTCHA container (invisible) */}

//       </div>
//     </div>
//     <div id="recaptcha-container"></div>
//     </>
//   );
// }




// original with validation 100% working 

// import React, { useState, useEffect } from 'react';
// import { initializeApp } from 'firebase/app';
// import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
// import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
// import { Navigate, useNavigate } from 'react-router-dom';


// // // IMPORTANT: Ye aapki Firebase config hai - Firebase Console se copy karein
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID
// };

// // Firebase initialize
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// export default function PhoneOTPAuth() {
//   const [mode, setMode] = useState("signup"); // signup, login, verifyOtp
//   const [phone, setPhone] = useState("");
//   const [otp, setOtp] = useState("");

//   // Signup fields
//   const [username, setUsername] = useState("");
//   const [village, setVillage] = useState("");
//   const [district, setDistrict] = useState("");
//   const [taluka, setTaluka] = useState("");
//   const [pincode, setPincode] = useState("");

//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [confirmationResult, setConfirmationResult] = useState(null);

//   // reCAPTCHA setup - FIXED VERSION
//   // const setupRecaptcha = () => {
//   //   // Clear existing instance
//   //   if (window.recaptchaVerifier) {
//   //     try {
//   //       window.recaptchaVerifier.clear();
//   //     } catch (e) {
//   //       console.log("Cleanup error:", e);
//   //     }
//   //   }

//   //   // Create new invisible reCAPTCHA
//   //   window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
//   //     'size': 'invisible',
//   //     'callback': (response) => {
//   //       console.log("reCAPTCHA solved automatically");
//   //     },
//   //     'expired-callback': () => {
//   //       console.log("reCAPTCHA expired, please retry");
//   //       setMessage("Session expired. Please try again.");
//   //       setLoading(false);
//   //     }
//   //   });
//   // };

// let recaptchaInitialized = false  
// const setupRecaptcha = () => {
//    if (recaptchaInitialized) return;  
//    recaptchaInitialized = true
//   if (!window.recaptchaVerifier) {
//     window.recaptchaVerifier = new RecaptchaVerifier(
//       auth,
//       "recaptcha-container",
//       { size: "invisible" }
//     );
//   }
// };


//   // Cleanup on unmount
//   useEffect(() => {
//     return () => {
//       if (window.recaptchaVerifier) {
//         try {
//           window.recaptchaVerifier.clear();
//         } catch (e) {
//           console.log("Unmount cleanup error:", e);
//         }
//       }
//     };
//   }, []);

//   // Send OTP - FIXED VERSION
//   // const sendOTP = async () => {
//   //   if (!phone || phone.length !== 10) {
//   //     setMessage("Please enter a valid 10-digit phone number");
//   //     return;
//   //   }

//   //   // For signup, validate all fields
//   //   if (mode === "signup") {
//   //     if (!username || !village || !district || !taluka || !pincode) {
//   //       setMessage("Please fill all fields");
//   //       return;
//   //     }
//   //     if (pincode.length !== 6) {
//   //       setMessage("Please enter a valid 6-digit PIN code");
//   //       return;
//   //     }
//   //   }

//   //   setLoading(true);
//   //   setMessage("Sending OTP...");

//   //   try {
//   //     // Setup fresh reCAPTCHA before each request
//   //     setupRecaptcha();

//   //     const phoneNumber = `+91${phone}`;
//   //     const appVerifier = window.recaptchaVerifier;

//   //     const confirmation = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
//   //     setConfirmationResult(confirmation);
//   //     setMessage(`✅ OTP sent to ${phone}`);
//   //     setMode("verifyOtp");
//   //   } catch (error) {
//   //     console.error("Error sending OTP:", error);

//   //     // Better error messages
//   //     if (error.code === 'auth/invalid-phone-number') {
//   //       setMessage("Invalid phone number format");
//   //     } else if (error.code === 'auth/too-many-requests') {
//   //       setMessage("Too many attempts. Please try after some time.");
//   //     } else if (error.code === 'auth/quota-exceeded') {
//   //       setMessage("Daily SMS quota exceeded. Try again tomorrow.");
//   //     } else {
//   //       setMessage(`Error: ${error.message}`);
//   //     }

//   //     // Clear reCAPTCHA on error
//   //     if (window.recaptchaVerifier) {
//   //       try {
//   //         window.recaptchaVerifier.clear();
//   //         window.recaptchaVerifier = null;
//   //       } catch (e) {
//   //         console.log("Error clearing recaptcha:", e);
//   //       }
//   //     }
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };
// const sendOTP = async () => {
//   if (!phone || phone.length !== 10) {
//     setMessage("Please enter a valid 10-digit phone number");
//     return;
//   }

//   if (mode === "signup") {
//     if (!username || !village || !district || !taluka || !pincode) {
//       setMessage("Please fill all fields");
//       return;
//     }
//     if (pincode.length !== 6) {
//       setMessage("Please enter a valid 6-digit PIN code");
//       return;
//     }
//   }

//   setLoading(true);
//   setMessage("Sending OTP...");

//   try {
//     // Setup reCAPTCHA only ONCE
//     setupRecaptcha();

//     const phoneNumber = `+91${phone}`;
//     const appVerifier = window.recaptchaVerifier;

//     const confirmation = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
//     setConfirmationResult(confirmation);
//     setMessage(`✅ OTP sent to ${phone}`);
//     setMode("verifyOtp");
//   } catch (error) {
//     console.error("Error sending OTP:", error);

//     if (error.code === "auth/invalid-phone-number") {
//       setMessage("Invalid phone number format");
//     } else if (error.code === "auth/too-many-requests") {
//       setMessage("Too many attempts. Please try after some time.");
//     } else if (error.code === "auth/quota-exceeded") {
//       setMessage("Daily SMS quota exceeded. Try again tomorrow.");
//     } else {
//       setMessage(`Error: ${error.message}`);
//     }
//   } finally {
//     setLoading(false);
//   }
// };


//   // Verify 
// const navigate = useNavigate();

//   const verifyOTP = async () => {
//     if (!otp || otp.length !== 6) {
//       setMessage("Please enter a valid 6-digit OTP");
//       return;
//     }

//     if (!confirmationResult) {
//       setMessage("Please request OTP first");
//       return;
//     }

//     setLoading(true);
//     setMessage("Verifying OTP...");


//     try {
//       const result = await confirmationResult.confirm(otp);
//       const user = result.user;

//       // Check if user exists in Firestore
//       const userDoc = await getDoc(doc(db, 'users', user.uid));

//       if (mode === "signup" || !userDoc.exists()) {
//         // Save user data to Firestore
//         const createdAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
//         await setDoc(doc(db, 'users', user.uid), {
//           username: username,
//           phone: phone,
//           village: village,
//           taluka: taluka,
//           district: district,
//           pincode: pincode,
//           createdAt: createdAt,
//           uid: user.uid
//         });
//         setMessage("✅ Signup Successful!");
//       } else {
//         setMessage("✅ Login Successful!");
//       }

//        setTimeout(() => {
//       // Redirect after success
//       navigate("/cow");   // ✅ CORRECT
//     }, 800); 

//       setTimeout(() => {
//         alert(`Welcome ${username || userDoc.data()?.username || 'User'}!\nPhone verified: ${phone}`);
//         // Yahan aap dashboard pe redirect kar sakte ho
//       }, 1000);

//     } catch (error) {
//       console.error("Error verifying OTP:", error);
//       if (error.code === 'auth/invalid-verification-code') {
//         setMessage("Invalid OTP. Please check and try again.");
//       } else if (error.code === 'auth/code-expired') {
//         setMessage("OTP expired. Please request a new one.");
//       } else {
//         setMessage("Wrong OTP. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
//         <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-2xl">

//           {/* HEADER */}
//           <div className="text-center mb-6">
//             <h2 className="text-3xl font-bold text-gray-800 mb-2">
//               {mode === "signup" && "Create Account"}
//               {mode === "login" && "Login"}
//               {mode === "verifyOtp" && "Verify OTP"}
//             </h2>
//             <p className="text-gray-600 text-sm">
//               {mode === "verifyOtp" 
//                 ? `Enter the OTP sent to ${phone}` 
//                 : "Enter your details to continue"}
//             </p>
//           </div>

//           {/* MESSAGE/ERROR */}
//           {message && (
//             <div className={`p-3 rounded-lg mb-4 text-center text-sm ${
//               message.includes("✅") 
//                 ? "bg-green-100 text-green-700" 
//                 : message.includes("valid") || message.includes("Error") || message.includes("Wrong") || message.includes("Invalid") || message.includes("expired")
//                 ? "bg-red-100 text-red-700"
//                 : "bg-blue-100 text-blue-700"
//             }`}>
//               {message}
//             </div>
//           )}

//           {/* -------- SIGNUP FORM -------- */}
//           {mode === "signup" && (
//             <div className="space-y-3">
//               <input
//                 type="text"
//                 placeholder="Username"
//                 className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//               <input
//                 type="tel"
//                 placeholder="Phone Number (10 digits)"
//                 maxLength="10"
//                 className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
//               />
//               <input
//                 type="text"
//                 placeholder="Village"
//                 className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//                 value={village}
//                 onChange={(e) => setVillage(e.target.value)}
//               />
//               <input
//                 type="text"
//                 placeholder="Taluka"
//                 className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//                 value={taluka}
//                 onChange={(e) => setTaluka(e.target.value)}
//               />
//               <input
//                 type="text"
//                 placeholder="District"
//                 className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//                 value={district}
//                 onChange={(e) => setDistrict(e.target.value)}
//               />
//               <input
//                 type="tel"
//                 placeholder="PIN Code (6 digits)"
//                 maxLength="6"
//                 className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//                 value={pincode}
//                 onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
//               />

//               <button 
//                 onClick={sendOTP} 
//                 disabled={loading}
//                 className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {loading ? "Sending..." : "Send OTP"}
//               </button>
//             </div>
//           )}

//           {/* -------- LOGIN FORM -------- */}
//           {mode === "login" && (
//             <div className="space-y-3">
//               <input
//                 type="tel"
//                 placeholder="Phone Number (10 digits)"
//                 maxLength="10"
//                 className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
//               />

//               <button 
//                 onClick={sendOTP} 
//                 disabled={loading}
//                 className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {loading ? "Sending..." : "Send OTP"}
//               </button>
//             </div>
//           )}

//           {/* -------- VERIFY OTP SCREEN -------- */}
//           {mode === "verifyOtp" && (
//             <div className="space-y-3">
//               <input
//                 type="tel"
//                 placeholder="Enter 6-digit OTP"
//                 maxLength="6"
//                 className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-center text-2xl tracking-widest"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
//               />

//               <button 
//                 onClick={verifyOTP} 
//                 disabled={loading}
//                 className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {loading ? "Verifying..." : "Verify OTP"}
//               </button>

//               <button 
//                 onClick={sendOTP}
//                 disabled={loading}
//                 className="w-full text-blue-600 py-2 text-sm hover:underline disabled:opacity-50"
//               >
//                 Resend OTP
//               </button>
//             </div>
//           )}

//           {/* -------- FOOTER LINKS -------- */}
//           {mode !== "verifyOtp" && (
//             <div className="text-center mt-6 space-y-2">
//               {mode === "signup" ? (
//                 <p className="text-sm text-gray-600">
//                   Already have an account?{" "}
//                   <span 
//                     className="text-blue-600 font-semibold cursor-pointer hover:underline" 
//                     onClick={() => {
//                       setMode("login");
//                       setMessage("");
//                     }}
//                   >
//                     Login
//                   </span>
//                 </p>
//               ) : (
//                 <p className="text-sm text-gray-600">
//                   Don't have an account?{" "}
//                   <span 
//                     className="text-green-600 font-semibold cursor-pointer hover:underline" 
//                     onClick={() => {
//                       setMode("signup");
//                       setMessage("");
//                     }}
//                   >
//                     Create Account
//                   </span>
//                 </p>
//               )}
//             </div>
//           )}

//           {/* BACK BUTTON FOR VERIFY OTP */}
//           {mode === "verifyOtp" && (
//             <button
//               onClick={() => {
//                 setMode(username ? "signup" : "login");
//                 setOtp("");
//                 setMessage("");
//                 setConfirmationResult(null);
//               }}
//               className="w-full mt-4 text-gray-600 py-2 text-sm hover:text-gray-800"
//             >
//               ← Back to {username ? "Signup" : "Login"}
//             </button>
//           )}
//         </div>
//       </div>

//       {/* reCAPTCHA container (invisible) - IMPORTANT: Container outside main div */}
//       <div id="recaptcha-container"></div>
//     </>
//   );
// }



// validation 2 70% solve 
// import React, { useState, useEffect, useRef } from 'react';
// import { initializeApp } from 'firebase/app';
// import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
// import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

// // IMPORTANT: Ye aapki Firebase config hai - Firebase Console se copy karein
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID
// };

// // Firebase initialize
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// export default function PhoneOTPAuth() {
//   const [mode, setMode] = useState("signup");
//   const [phone, setPhone] = useState("");
//   const [otp, setOtp] = useState("");

//   // Signup fields
//   const [username, setUsername] = useState("");
//   const [village, setVillage] = useState("");
//   const [district, setDistrict] = useState("");
//   const [taluka, setTaluka] = useState("");
//   const [pincode, setPincode] = useState("");

//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [confirmationResult, setConfirmationResult] = useState(null);

//   // Use ref to track if recaptcha is initialized
//   const recaptchaInitialized = useRef(false);
//   const recaptchaWidgetId = useRef(null);

//   // Initialize reCAPTCHA only ONCE
//   useEffect(() => {
//     // Prevent multiple initializations
//     if (recaptchaInitialized.current) return;

//     const initRecaptcha = () => {
//       try {
//         // Clear any existing verifier
//         if (window.recaptchaVerifier) {
//           try {
//             window.recaptchaVerifier.clear();
//           } catch (e) {
//             console.log("Cleanup error:", e);
//           }
//           window.recaptchaVerifier = null;
//         }

//         // Create new invisible reCAPTCHA
//         window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
//           'size': 'invisible',
//           'callback': (response) => {
//             console.log("reCAPTCHA solved");
//           },
//           'expired-callback': () => {
//             console.log("reCAPTCHA expired");
//           }
//         });

//         recaptchaInitialized.current = true;
//         console.log("reCAPTCHA initialized successfully");
//       } catch (error) {
//         console.error("reCAPTCHA initialization error:", error);
//         recaptchaInitialized.current = false;
//       }
//     };

//     // Small delay to ensure DOM is ready
//     const timer = setTimeout(initRecaptcha, 100);

//     // Cleanup on unmount
//     return () => {
//       clearTimeout(timer);
//       if (window.recaptchaVerifier) {
//         try {
//           window.recaptchaVerifier.clear();
//           window.recaptchaVerifier = null;
//         } catch (e) {
//           console.log("Unmount cleanup error:", e);
//         }
//       }
//       recaptchaInitialized.current = false;
//     };
//   }, []); // Empty dependency - run only once

//   // Send OTP - NO recaptcha recreation here
//   const sendOTP = async () => {
//     if (!phone || phone.length !== 10) {
//       setMessage("Please enter a valid 10-digit phone number");
//       return;
//     }

//     // For signup, validate all fields
//     if (mode === "signup") {
//       if (!username || !village || !district || !taluka || !pincode) {
//         setMessage("Please fill all fields");
//         return;
//       }
//       if (pincode.length !== 6) {
//         setMessage("Please enter a valid 6-digit PIN code");
//         return;
//       }
//     }

//     setLoading(true);
//     setMessage("Sending OTP...");

//     try {
//       // Check if recaptcha is initialized
//       if (!window.recaptchaVerifier) {
//         throw new Error("reCAPTCHA not initialized. Please refresh the page.");
//       }

//       const phoneNumber = `+91${phone}`;
//       const appVerifier = window.recaptchaVerifier;

//       const confirmation = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
//       setConfirmationResult(confirmation);
//       setMessage(`✅ OTP sent to ${phone}`);
//       setMode("verifyOtp");
//     } catch (error) {
//       console.error("Error sending OTP:", error);

//       // Better error messages
//       if (error.code === 'auth/invalid-phone-number') {
//         setMessage("Invalid phone number format");
//       } else if (error.code === 'auth/too-many-requests') {
//         setMessage("Too many attempts. Please try after some time.");
//       } else if (error.code === 'auth/quota-exceeded') {
//         setMessage("Daily SMS quota exceeded. Try again tomorrow.");
//       } else if (error.message.includes('reCAPTCHA')) {
//         setMessage("reCAPTCHA error. Please refresh the page and try again.");
//       } else {
//         setMessage(`Error: ${error.message}`);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Verify OTP
//   const verifyOTP = async () => {
//     if (!otp || otp.length !== 6) {
//       setMessage("Please enter a valid 6-digit OTP");
//       return;
//     }

//     if (!confirmationResult) {
//       setMessage("Please request OTP first");
//       return;
//     }

//     setLoading(true);
//     setMessage("Verifying OTP...");

//     try {
//       const result = await confirmationResult.confirm(otp);
//       const user = result.user;

//       // Check if user exists in Firestore
//       const userDoc = await getDoc(doc(db, 'users', user.uid));

//       if (mode === "signup" || !userDoc.exists()) {
//         // Save user data to Firestore
//         await setDoc(doc(db, 'users', user.uid), {
//           username: username,
//           phone: phone,
//           village: village,
//           taluka: taluka,
//           district: district,
//           pincode: pincode,
//           createdAt: new Date().toISOString(),
//           uid: user.uid
//         });
//         setMessage("✅ Signup Successful!");
//       } else {
//         setMessage("✅ Login Successful!");
//       }

//       setTimeout(() => {
//         alert(`Welcome ${username || userDoc.data()?.username || 'User'}!\nPhone verified: ${phone}`);
//         // Yahan aap dashboard pe redirect kar sakte ho
//       }, 1000);

//     } catch (error) {
//       console.error("Error verifying OTP:", error);
//       if (error.code === 'auth/invalid-verification-code') {
//         setMessage("Invalid OTP. Please check and try again.");
//       } else if (error.code === 'auth/code-expired') {
//         setMessage("OTP expired. Please request a new one.");
//       } else {
//         setMessage("Wrong OTP. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative">
//       <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
//         <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-2xl">

//           {/* HEADER */}
//           <div className="text-center mb-6">
//             <h2 className="text-3xl font-bold text-gray-800 mb-2">
//               {mode === "signup" && "Create Account"}
//               {mode === "login" && "Login"}
//               {mode === "verifyOtp" && "Verify OTP"}
//             </h2>
//             <p className="text-gray-600 text-sm">
//               {mode === "verifyOtp" 
//                 ? `Enter the OTP sent to ${phone}` 
//                 : "Enter your details to continue"}
//             </p>
//           </div>

//           {/* MESSAGE/ERROR */}
//           {message && (
//             <div className={`p-3 rounded-lg mb-4 text-center text-sm ${
//               message.includes("✅") 
//                 ? "bg-green-100 text-green-700" 
//                 : message.includes("valid") || message.includes("Error") || message.includes("Wrong") || message.includes("Invalid") || message.includes("expired")
//                 ? "bg-red-100 text-red-700"
//                 : "bg-blue-100 text-blue-700"
//             }`}>
//               {message}
//             </div>
//           )}

//           {/* -------- SIGNUP FORM -------- */}
//           {mode === "signup" && (
//             <div className="space-y-3">
//               <input
//                 type="text"
//                 placeholder="Username"
//                 className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//               <input
//                 type="tel"
//                 placeholder="Phone Number (10 digits)"
//                 maxLength="10"
//                 className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
//               />
//               <input
//                 type="text"
//                 placeholder="Village"
//                 className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//                 value={village}
//                 onChange={(e) => setVillage(e.target.value)}
//               />
//               <input
//                 type="text"
//                 placeholder="Taluka"
//                 className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//                 value={taluka}
//                 onChange={(e) => setTaluka(e.target.value)}
//               />
//               <input
//                 type="text"
//                 placeholder="District"
//                 className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//                 value={district}
//                 onChange={(e) => setDistrict(e.target.value)}
//               />
//               <input
//                 type="tel"
//                 placeholder="PIN Code (6 digits)"
//                 maxLength="6"
//                 className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//                 value={pincode}
//                 onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
//               />

//               <button 
//                 onClick={sendOTP} 
//                 disabled={loading}
//                 className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {loading ? "Sending..." : "Send OTP"}
//               </button>
//             </div>
//           )}

//           {/* -------- LOGIN FORM -------- */}
//           {mode === "login" && (
//             <div className="space-y-3">
//               <input
//                 type="tel"
//                 placeholder="Phone Number (10 digits)"
//                 maxLength="10"
//                 className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
//               />

//               <button 
//                 onClick={sendOTP} 
//                 disabled={loading}
//                 className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {loading ? "Sending..." : "Send OTP"}
//               </button>
//             </div>
//           )}

//           {/* -------- VERIFY OTP SCREEN -------- */}
//           {mode === "verifyOtp" && (
//             <div className="space-y-3">
//               <input
//                 type="tel"
//                 placeholder="Enter 6-digit OTP"
//                 maxLength="6"
//                 className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-center text-2xl tracking-widest"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
//               />

//               <button 
//                 onClick={verifyOTP} 
//                 disabled={loading}
//                 className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {loading ? "Verifying..." : "Verify OTP"}
//               </button>

//               <button 
//                 onClick={() => {
//                   setMessage("Resending OTP...");
//                   sendOTP();
//                 }}
//                 disabled={loading}
//                 className="w-full text-blue-600 py-2 text-sm hover:underline disabled:opacity-50"
//               >
//                 Resend OTP
//               </button>
//             </div>
//           )}

//           {/* -------- FOOTER LINKS -------- */}
//           {mode !== "verifyOtp" && (
//             <div className="text-center mt-6 space-y-2">
//               {mode === "signup" ? (
//                 <p className="text-sm text-gray-600">
//                   Already have an account?{" "}
//                   <span 
//                     className="text-blue-600 font-semibold cursor-pointer hover:underline" 
//                     onClick={() => {
//                       setMode("login");
//                       setMessage("");
//                     }}
//                   >
//                     Login
//                   </span>
//                 </p>
//               ) : (
//                 <p className="text-sm text-gray-600">
//                   Don't have an account?{" "}
//                   <span 
//                     className="text-green-600 font-semibold cursor-pointer hover:underline" 
//                     onClick={() => {
//                       setMode("signup");
//                       setMessage("");
//                     }}
//                   >
//                     Create Account
//                   </span>
//                 </p>
//               )}
//             </div>
//           )}

//           {/* BACK BUTTON FOR VERIFY OTP */}
//           {mode === "verifyOtp" && (
//             <button
//               onClick={() => {
//                 setMode(username ? "signup" : "login");
//                 setOtp("");
//                 setMessage("");
//                 setConfirmationResult(null);
//               }}
//               className="w-full mt-4 text-gray-600 py-2 text-sm hover:text-gray-800"
//             >
//               ← Back to {username ? "Signup" : "Login"}
//             </button>
//           )}
//         </div>
//       </div>

//       {/* reCAPTCHA container - MUST be outside the form */}
//       <div id="recaptcha-container"></div>
//     </div>
//   );
// }





// import React, { useState, useEffect } from "react";
// import { initializeApp } from "firebase/app";
// import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";

// // Firebase Config
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export default function UserFormAuth() {
//   const navigate = useNavigate();

//   const [username, setUsername] = useState("");
//   const [village, setVillage] = useState("");
//   const [district, setDistrict] = useState("");
//   const [taluka, setTaluka] = useState("");
//   const [pincode, setPincode] = useState("");

//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   // 🔥 Check if user already registered (LocalStorage)
//   useEffect(() => {
//     const existingId = localStorage.getItem("userId");
//     if (existingId) {
//       navigate("/cow"); // direct home page
//     }
//   }, []);

//   // 🔥 Random ID generator
//   const generateUserId = () => {
//     return "user_" + Math.random().toString(36).substring(2, 10);
//   };

//   // 🔥 Save user data
//   const submitForm = async () => {
//     if (!username || !village || !district || !taluka || !pincode) {
//       setMessage("Please fill all fields");
//       return;
//     }
//     if (pincode.length !== 6) {
//       setMessage("Enter a valid 6-digit PIN code");
//       return;
//     }

//     setLoading(true);

//     try {
//       // 1️⃣ Create new userId
//       const userId = generateUserId();

//       // 2️⃣ Save in LOCALSTORAGE (auto-login)
//       localStorage.setItem("userId", userId);

//       // 3️⃣ Save data in Firestore
//       const timestamp = new Date().toLocaleString("en-IN", {
//         timeZone: "Asia/Kolkata",
//       });

//       await setDoc(doc(db, "users", userId), {
//         username,
//         village,
//         taluka,
//         district,
//         pincode,
//         createdAt: timestamp,
//         userId,
//       });

//       setMessage("✔ User Registered Successfully!");
//       setTimeout(() => navigate("/cow"), 1000);
//     } catch (error) {
//       console.error(error);
//       setMessage("Error saving data");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
//         <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-2xl">
//           <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
//             User Registration
//           </h2>

//           {message && (
//             <div
//               className={`p-3 mb-4 text-center rounded-lg ${
//                 message.includes("✔")
//                   ? "bg-green-100 text-green-700"
//                   : "bg-red-100 text-red-700"
//               }`}
//             >
//               {message}
//             </div>
//           )}

//           <div className="space-y-3">
//             <input
//               type="text"
//               placeholder="Username"
//               className="w-full p-3 border rounded-lg"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Village"
//               className="w-full p-3 border rounded-lg"
//               value={village}
//               onChange={(e) => setVillage(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Taluka"
//               className="w-full p-3 border rounded-lg"
//               value={taluka}
//               onChange={(e) => setTaluka(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="District"
//               className="w-full p-3 border rounded-lg"
//               value={district}
//               onChange={(e) => setDistrict(e.target.value)}
//             />
//             <input
//               type="tel"
//               placeholder="PIN Code (6 digits)"
//               maxLength="6"
//               className="w-full p-3 border rounded-lg"
//               value={pincode}
//               onChange={(e) => setPincode(e.target.value.replace(/\D/g, ""))}
//             />

//             <button
//               onClick={submitForm}
//               disabled={loading}
//               className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
//             >
//               {loading ? "Saving..." : "Submit"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


// not auth
// import React, { useState } from "react";
// import { initializeApp } from "firebase/app";
// import { getFirestore, doc, setDoc } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";

// // Firebase Config
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export default function UserFormAuth() {
//   const navigate = useNavigate();

//   const [username, setUsername] = useState("");
//   const [village, setVillage] = useState("");
//   const [district, setDistrict] = useState("");
//   const [taluka, setTaluka] = useState("");
//   const [pincode, setPincode] = useState("");
//   const [phone, setPhone] = useState(""); 

//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   // 🔥 Random ID generator
//   const generateUserId = () => {
//     return "user_" + Math.random().toString(36).substring(2, 10);
//   };

//   // 🔥 Save user data
//   const submitForm = async () => {
//     if (!username || !village || !district || !taluka || !pincode || !phone) {
//       setMessage("Please fill all fields");
//       return;
//     }

//     if (pincode.length !== 6) {
//       setMessage("Enter a valid 6-digit PIN code");
//       return;
//     }

//     if (phone.length !== 10) {
//       setMessage("Enter a valid 10-digit phone number");
//       return;
//     }

//     setLoading(true);

//     try {
//       // 1️⃣ Create userId
//       const userId = generateUserId();

//       // 2️⃣ Save in localStorage
//       localStorage.setItem("userId", userId);

//       // 3️⃣ Save to Firestore
//       const timestamp = new Date().toLocaleString("en-IN", {
//         timeZone: "Asia/Kolkata",
//       });

//       await setDoc(doc(db, "users", userId), {
//         username,
//         village,
//         taluka,
//         district,
//         pincode,
//         phone,
//         createdAt: timestamp,
//         userId,
//       });

//       setMessage("✔ User Registered Successfully!");
//       setTimeout(() => navigate("/cow"), 800);
//     } catch (error) {
//       console.error(error);
//       setMessage("Error saving data");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
//         <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-2xl">
//           <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
//             User Registration
//           </h2>

//           {message && (
//             <div
//               className={`p-3 mb-4 text-center rounded-lg ${
//                 message.includes("✔")
//                   ? "bg-green-100 text-green-700"
//                   : "bg-red-100 text-red-700"
//               }`}
//             >
//               {message}
//             </div>
//           )}

//           <div className="space-y-3">
//             <input
//               type="text"
//               placeholder="Username"
//               className="w-full p-3 border rounded-lg"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Village"
//               className="w-full p-3 border rounded-lg"
//               value={village}
//               onChange={(e) => setVillage(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Taluka"
//               className="w-full p-3 border rounded-lg"
//               value={taluka}
//               onChange={(e) => setTaluka(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="District"
//               className="w-full p-3 border rounded-lg"
//               value={district}
//               onChange={(e) => setDistrict(e.target.value)}
//             />

//             {/* 📱 PHONE INPUT */}
//             <input
//               type="tel"
//               placeholder="Phone Number (10 digits)"
//               maxLength="10"
//               className="w-full p-3 border rounded-lg"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
//             />

//             <input
//               type="tel"
//               placeholder="PIN Code (6 digits)"
//               maxLength="6"
//               className="w-full p-3 border rounded-lg"
//               value={pincode}
//               onChange={(e) => setPincode(e.target.value.replace(/\D/g, ""))}
//             />

//             <button
//               onClick={submitForm}
//               disabled={loading}
//               className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
//             >
//               {loading ? "Saving..." : "Submit"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


// 16-11-25 edit
// import React, { useState, useEffect } from "react";
// import { initializeApp } from "firebase/app";
// import { getFirestore, doc, setDoc } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";

// // Firebase Config
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export default function UserFormAuth() {
//   const navigate = useNavigate();

//   const [username, setUsername] = useState("");
//   const [village, setVillage] = useState("");
//   const [district, setDistrict] = useState("");
//   const [taluka, setTaluka] = useState("");
//   const [pincode, setPincode] = useState("");
//   const [phone, setPhone] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   // 🔥 Auto-Redirect if user already registered
//   useEffect(() => {
//     const savedId = localStorage.getItem("userId");

//     console.log("Checking stored userId:", savedId);

//     if (savedId) {
//       navigate("/cow");
//     }
//   }, [navigate]);

//   // 🔥 Random ID generator
//   const generateUserId = () => {
//     return "user_" + Math.random().toString(36).substring(2, 10);
//   };

//   // 🔥 Save user data
//   const submitForm = async () => {
//     if (!username || !village || !district || !taluka || !pincode || !phone) {
//       setMessage("Please fill all fields");
//       return;
//     }

//     if (pincode.length !== 6) {
//       setMessage("Enter a valid 6-digit PIN code");
//       return;
//     }

//     if (phone.length !== 10) {
//       setMessage("Enter a valid 10-digit phone number");
//       return;
//     }

//     setLoading(true);

//     try {
//       // 1️⃣ Create userId
//       const userId = generateUserId();

//       // 2️⃣ Save in localStorage
//       localStorage.setItem("userId", userId);

//       // 3️⃣ Save to Firestore
//       const timestamp = new Date().toLocaleString("en-IN", {
//         timeZone: "Asia/Kolkata",
//       });

//       await setDoc(doc(db, "users", userId), {
//         username,
//         village,
//         taluka,
//         district,
//         pincode,
//         phone,
//         createdAt: timestamp,
//         userId,
//       });

//       setMessage("✔ User Registered Successfully!");
//       setTimeout(() => navigate("/cow"), 700);

//     } catch (error) {
//       console.error(error);
//       setMessage("Error saving data");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
//         <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-2xl">
//           <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
//             User Registration
//           </h2>

//           {message && (
//             <div
//               className={`p-3 mb-4 text-center rounded-lg ${
//                 message.includes("✔")
//                   ? "bg-green-100 text-green-700"
//                   : "bg-red-100 text-red-700"
//               }`}
//             >
//               {message}
//             </div>
//           )}

//           <div className="space-y-3">
//             <input
//               type="text"
//               placeholder="Username"
//               className="w-full p-3 border rounded-lg"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Village"
//               className="w-full p-3 border rounded-lg"
//               value={village}
//               onChange={(e) => setVillage(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Taluka"
//               className="w-full p-3 border rounded-lg"
//               value={taluka}
//               onChange={(e) => setTaluka(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="District"
//               className="w-full p-3 border rounded-lg"
//               value={district}
//               onChange={(e) => setDistrict(e.target.value)}
//             />

//             {/* 📱 PHONE INPUT */}
//             <input
//               type="tel"
//               placeholder="Phone Number (10 digits)"
//               maxLength="10"
//               className="w-full p-3 border rounded-lg"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
//             />

//             <input
//               type="tel"
//               placeholder="PIN Code (6 digits)"
//               maxLength="6"
//               className="w-full p-3 border rounded-lg"
//               value={pincode}
//               onChange={(e) => setPincode(e.target.value.replace(/\D/g, ""))}
//             />

//             <button
//               onClick={submitForm}
//               disabled={loading}
//               className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
//             >
//               {loading ? "Saving..." : "Submit"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



// 17-Nove-25
// import React, { useState, useEffect } from "react";
// import { initializeApp } from "firebase/app";
// import { getFirestore, doc, setDoc } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";

// // Firebase Config
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export default function UserFormAuth() {
//   const navigate = useNavigate();

//   const [username, setUsername] = useState("");
//   const [village, setVillage] = useState("");
//   const [district, setDistrict] = useState("");
//   const [taluka, setTaluka] = useState("");
//   const [pincode, setPincode] = useState("");
//   const [phone, setPhone] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Redirect if already registered
//   useEffect(() => {
//     const id = localStorage.getItem("userId");
//     if (id) navigate("/cow");
//   }, []);

//   const generateUserId = () => {
//     return "user_" + Math.random().toString(36).substring(2, 10);
//   };

//   const submitForm = async () => {
//     if (!username || !village || !district || !taluka || !pincode || !phone) {
//       setMessage("Please fill all fields");
//       return;
//     }

//     if (pincode.length !== 6) return setMessage("Enter 6-digit PIN");
//     if (phone.length !== 10) return setMessage("Enter 10-digit phone number");

//     setLoading(true);

//     try {
//       const userId = generateUserId();

//       // Save only ID
//       localStorage.setItem("userId", userId);

//       // Save full profile also
//       localStorage.setItem("userProfile", JSON.stringify({
//         username, village, taluka, district, pincode, phone, userId
//       }));

//       const timestamp = new Date().toLocaleString("en-IN", {
//         timeZone: "Asia/Kolkata",
//       });

//       await setDoc(doc(db, "users", userId), {
//         username,
//         village,
//         taluka,
//         district,
//         pincode,
//         phone,
//         createdAt: timestamp,
//         userId,
//       });

//       setMessage("✔ User Registered Successfully!");
//       setTimeout(() => navigate("/cow"), 700);

//     } catch (err) {
//       console.log(err);
//       setMessage("Error saving data");
//     }
//     setLoading(false);
//   };


//   return (
//     <>
//       <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
//         <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-2xl">
//           <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
//             User Registration
//           </h2>

//           {message && (
//             <div
//               className={`p-3 mb-4 text-center rounded-lg ${
//                 message.includes("✔")
//                   ? "bg-green-100 text-green-700"
//                   : "bg-red-100 text-red-700"
//               }`}
//             >
//               {message}
//             </div>
//           )}

//           <div className="space-y-3">
//             <input type="text" placeholder="Username" className="w-full p-3 border rounded-lg"
//               value={username} onChange={(e) => setUsername(e.target.value)} />

//             <input type="text" placeholder="Village" className="w-full p-3 border rounded-lg"
//               value={village} onChange={(e) => setVillage(e.target.value)} />

//             <input type="text" placeholder="Taluka" className="w-full p-3 border rounded-lg"
//               value={taluka} onChange={(e) => setTaluka(e.target.value)} />

//             <input type="text" placeholder="District" className="w-full p-3 border rounded-lg"
//               value={district} onChange={(e) => setDistrict(e.target.value)} />

//             <input type="tel" placeholder="Phone Number (10 digits)" maxLength="10"
//               className="w-full p-3 border rounded-lg"
//               value={phone} onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))} />

//             <input type="tel" placeholder="PIN Code (6 digits)" maxLength="6"
//               className="w-full p-3 border rounded-lg"
//               value={pincode} onChange={(e) => setPincode(e.target.value.replace(/\D/g, ""))} />

//             <button onClick={submitForm} disabled={loading}
//               className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
//               {loading ? "Saving..." : "Submit"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

// Firebase Config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function UserFormAuth() {
  const navigate = useNavigate();

  // 🔥 NEW: Check authentication state
  const [isChecking, setIsChecking] = useState(true);

  const [username, setUsername] = useState("");
  const [village, setVillage] = useState("");
  const [district, setDistrict] = useState("");
  const [taluka, setTaluka] = useState("");
  const [pincode, setPincode] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔥 UPDATED: Check BEFORE rendering form
  useEffect(() => {
    const id = localStorage.getItem("userId");

    if (id) {
      // Already logged in - redirect immediately
      navigate("/cow", { replace: true });
    } else {
      // Not logged in - show form after small delay to prevent flash
      setTimeout(() => {
        setIsChecking(false);
      }, 100);
    }
  }, [navigate]);

  const generateUserId = () => {
    return "user_" + Math.random().toString(36).substring(2, 10);
  };

  const submitForm = async () => {
    if (!username || !village || !district || !taluka || !pincode || !phone) {
      setMessage("Please fill all fields");
      return;
    }

    if (pincode.length !== 6) return setMessage("Enter 6-digit PIN");
    if (phone.length !== 10) return setMessage("Enter 10-digit phone number");

    setLoading(true);

    try {
      const userId = generateUserId();

      // Save only ID
      localStorage.setItem("userId", userId);

      // Save full profile also
      localStorage.setItem("userProfile", JSON.stringify({
        username, village, taluka, district, pincode, phone, userId
      }));

      const timestamp = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      });

      await setDoc(doc(db, "users", userId), {
        username,
        village,
        taluka,
        district,
        pincode,
        phone,
        createdAt: timestamp,
        userId,
      });

      setMessage("✔ User Registered Successfully!");
      setTimeout(() => navigate("/cow", { replace: true }), 700);

    } catch (err) {
      console.log(err);
      setMessage("Error saving data");
    }
    setLoading(false);
  };

  // 🔥 NEW: Don't show anything while checking (App.jsx loader will handle)
  if (isChecking) {
    return null;
  }

  // 🔥 Show form only after checking
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-b  from-orange-500 via-orange-600 to-pink-600 p-4">
        <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-2xl">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            User Registration
          </h2>

          {message && (
            <div
              className={`p-3 mb-4 text-center rounded-lg ${message.includes("✔")
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
                }`}
            >
              {message}
            </div>
          )}

          <div className="space-y-3">
            <input type="text" placeholder="Username" className="w-full p-3 border rounded-lg"
              value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="tel" placeholder="Phone Number (10 digits)" maxLength="10"
              className="w-full p-3 border rounded-lg"
              value={phone} onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))} />

            <input type="text" placeholder="Village" className="w-full p-3 border rounded-lg"
              value={village} onChange={(e) => setVillage(e.target.value)} />

            <input type="text" placeholder="Taluka" className="w-full p-3 border rounded-lg"
              value={taluka} onChange={(e) => setTaluka(e.target.value)} />

            <input type="text" placeholder="District" className="w-full p-3 border rounded-lg"
              value={district} onChange={(e) => setDistrict(e.target.value)} />

            <input type="tel" placeholder="PIN Code (6 digits)" maxLength="6"
              className="w-full p-3 border rounded-lg"
              value={pincode} onChange={(e) => setPincode(e.target.value.replace(/\D/g, ""))} />

            <button onClick={submitForm} disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 transition-all">
              {loading ? "Saving..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
