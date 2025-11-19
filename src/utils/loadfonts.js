// // src/utils/loadFonts.js
// import pdfMake from "pdfmake/build/pdfmake";

// export async function loadFont(url, name) {
//   const res = await fetch(url);
//   const buffer = await res.arrayBuffer();

//   const base64 = btoa(
//     new Uint8Array(buffer).reduce((data, byte) => data + String.fromCharCode(byte), "")
//   );

//   pdfMake.vfs[name] = base64;
// }

// export async function loadAllFonts() {
//   await loadFont("/fonts/Roboto-Regular.ttf", "Roboto-Regular.ttf");
//   await loadFont("/fonts/NotoSansDevanagari-Regular.ttf", "NotoSansDevanagari-Regular.ttf");
//   await loadFont("/fonts/NotoSansTamil-Regular.ttf", "NotoSansTamil-Regular.ttf");
//   await loadFont("/fonts/NotoSansBengali-Regular.ttf", "NotoSansBengali-Regular.ttf");
//   await loadFont("/fonts/NotoSansKannada-Regular.ttf", "NotoSansKannada-Regular.ttf");
//   await loadFont("/fonts/NotoSansGujarati-Regular.ttf", "NotoSansGujarati-Regular.ttf");
//   await loadFont("/fonts/NotoSansGurmukhi-Regular.ttf", "NotoSansGurmukhi-Regular.ttf");
//   await loadFont("/fonts/NotoSansTelugu-Regular.ttf", "NotoSansTelugu-Regular.ttf");
//   await loadFont("/fonts/NotoSansMalayalam-Regular.ttf", "NotoSansMalayalam-Regular.ttf");

//   // Now define fonts
//   pdfMake.fonts = {
//     Roboto: {
//       normal: "Roboto-Regular.ttf",
//       bold: "Roboto-Regular.ttf"
//     },
//     NotoSansDevanagari: {
//       normal: "NotoSansDevanagari-Regular.ttf",
//       bold: "NotoSansDevanagari-Regular.ttf"
//     },
//     NotoSansTamil: {
//       normal: "NotoSansTamil-Regular.ttf",
//       bold: "NotoSansTamil-Regular.ttf"
//     },
//     NotoSansBengali: {
//       normal: "NotoSansBengali-Regular.ttf",
//       bold: "NotoSansBengali-Regular.ttf"
//     },
    
//     NotoSansKannada: {
//       normal: "NotoSansKannada-Regular.ttf",
//       bold: "NotoSansKannada-Regular.ttf"
//     },
//     NotoSansGujarati: {
//       normal: "NotoSansGujarati-Regular.ttf",
//       bold: "NotoSansGujarati-Regular.ttf"
//     },
//     NotoSansMalayalam: {
//       normal: "NotoSansMalayalam-Regular.ttf",
//       bold: "NotoSansMalayalam-Regular.ttf"
//     },
//     NotoSansTelugu: {
//       normal: "NotoSansTelugu-Regular.ttf",
//       bold: "NotoSansTelugu-Regular.ttf"
//     },
//     NotoSansGurmukhi: {
//       normal: "NotoSansGurmukhi-Regular.ttf",
//       bold: "NotoSansGurmukhi-Regular.ttf"
//     },
//   };
// }



// src/utils/loadFonts.js
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

// IMPORTANT FIX FOR VERCEL 🟢
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export async function loadFont(url, name) {
  const res = await fetch(url);
  const buffer = await res.arrayBuffer();

  const base64 = btoa(
    new Uint8Array(buffer).reduce((data, byte) => data + String.fromCharCode(byte), "")
  );

  pdfMake.vfs[name] = base64; // now vfs is defined 
}

export async function loadAllFonts() {
  await loadFont("/fonts/Roboto-Regular.ttf", "Roboto-Regular.ttf");
  await loadFont("/fonts/NotoSansDevanagari-Regular.ttf", "NotoSansDevanagari-Regular.ttf");
  await loadFont("/fonts/NotoSansTamil-Regular.ttf", "NotoSansTamil-Regular.ttf");
  await loadFont("/fonts/NotoSansBengali-Regular.ttf", "NotoSansBengali-Regular.ttf");
  await loadFont("/fonts/NotoSansKannada-Regular.ttf", "NotoSansKannada-Regular.ttf");
  await loadFont("/fonts/NotoSansGujarati-Regular.ttf", "NotoSansGujarati-Regular.ttf");
  await loadFont("/fonts/NotoSansGurmukhi-Regular.ttf", "NotoSansGurmukhi-Regular.ttf");
  await loadFont("/fonts/NotoSansTelugu-Regular.ttf", "NotoSansTelugu-Regular.ttf");
  await loadFont("/fonts/NotoSansMalayalam-Regular.ttf", "NotoSansMalayalam-Regular.ttf");

  pdfMake.fonts = {
    Roboto: {
      normal: "Roboto-Regular.ttf",
      bold: "Roboto-Regular.ttf"
    },
    NotoSansDevanagari: {
      normal: "NotoSansDevanagari-Regular.ttf",
      bold: "NotoSansDevanagari-Regular.ttf"
    },
    NotoSansTamil: {
      normal: "NotoSansTamil-Regular.ttf",
      bold: "NotoSansTamil-Regular.ttf"
    },
    NotoSansBengali: {
      normal: "NotoSansBengali-Regular.ttf",
      bold: "NotoSansBengali-Regular.ttf"
    },
    NotoSansKannada: {
      normal: "NotoSansKannada-Regular.ttf",
      bold: "NotoSansKannada-Regular.ttf"
    },
    NotoSansGujarati: {
      normal: "NotoSansGujarati-Regular.ttf",
      bold: "NotoSansGujarati-Regular.ttf"
    },
    NotoSansMalayalam: {
      normal: "NotoSansMalayalam-Regular.ttf",
      bold: "NotoSansMalayalam-Regular.ttf"
    },
    NotoSansTelugu: {
      normal: "NotoSansTelugu-Regular.ttf",
      bold: "NotoSansTelugu-Regular.ttf"
    },
    NotoSansGurmukhi: {
      normal: "NotoSansGurmukhi-Regular.ttf",
      bold: "NotoSansGurmukhi-Regular.ttf"
    },
  };
}
