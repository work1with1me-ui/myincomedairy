// import { jsPDF } from "jspdf";
// import autoTable from "jspdf-autotable";
// import store from "../redux/store";
// import NotoSansDevanagariRegular from "../assets/fonts/NotoSansDevanagari-Regular";

// export const generateDairyReport = async () => {
//   const doc = new jsPDF();
//   console.log(doc)
//   //  Marathi font setup
//   doc.addFileToVFS("NotoSansDevanagari-Regular.ttf", NotoSansDevanagariRegular);
//   doc.addFont("NotoSansDevanagari-Regular.ttf", "NotoSansDevanagari", "normal");
//   doc.setFont("NotoSansDevanagari");

//   const state = store.getState();
//   const animals = [
//     { label: "गाई", data: state.dairy?.cow || {} },
//     { label: "म्हैस", data: state.dairy?.buffalo || {} },
//   ];

//   // ✅ Common Marathi Font Fix for Head/Foot
//   const applyMarathiFont = (data) => {
//     if (["head", "foot"].includes(data.section)) {
//       data.cell.styles.font = "NotoSansDevanagari";
//       data.cell.styles.fontStyle = "normal";
//       data.cell.text = data.cell.text.map((t) => String(t));
//     }
//   };

//   // 🧮 Helper for totals
//   const calcTotal = (arr, type = "food", totalAnimals = 0) => {
//     if (!Array.isArray(arr)) return 0;
//     if (type === "food")
//       return arr.reduce((sum, e) => sum + (e.qty || 0) * (e.rate || 0), 0);
//     if (type === "vaidan")
//       return arr.reduce((sum, e) => sum + (e.praman || 0) * (e.rate || 0), 0);
//     if (type === "stable")
//     return arr.reduce(
//       (sum, e) => sum + (e.rate || 0) * (Number(totalAnimals) || 0),
//       0
//     );
//     return arr.reduce((sum, e) => sum + (e.rate || 0), 0);
//   };



//   //  Store total for combined summary
//   let combined = {
//     income: 0,
//     expenses: 0,
//     profit: 0,
//   };

//   // ✅ Generate report for each animal (Cow + Buffalo)
//   for (let i = 0; i < animals.length; i++) {
//     const { label, data } = animals[i];
//     if (i > 0) doc.addPage(); // Add page for next animal

//     // Calculations
//     const summary = {
//       totalStableExp: calcTotal(data.stableExpenses, "stable", data.totalAnimals),
//       totalVaidanExp: calcTotal(data.vaidanExpenses, "vaidan"),
//       totalFoodExp: calcTotal(data.foodExpenses, "food"),
//     };

//     const milkIncome =
//       Number(data.totalMilkProduction || 0) * Number(data.milkPrice || 0);
//     const dungIncome = Number(data.totalAnimals || 0) * 16;
//     const totalIncome = milkIncome + dungIncome;
//     const totalExpenses =
//       summary.totalStableExp +
//       summary.totalVaidanExp +
//       summary.totalFoodExp;
//     const netProfit = totalIncome - totalExpenses;

//     const costPerLiter =
//       data.totalMilkProduction > 0
//         ? totalExpenses / data.totalMilkProduction
//         : 0;
//     const profitPerLiter =
//       data.totalMilkProduction > 0
//         ? netProfit / data.totalMilkProduction
//         : 0;
//     const incomePerLiter =
//       data.totalMilkProduction > 0
//         ? totalIncome / data.totalMilkProduction
//         : 0;

//     // Add to combined totals
//     combined.income += totalIncome;
//     combined.expenses += totalExpenses;
//     combined.profit += netProfit;

//     let y = 20;
//     doc.setFontSize(18);
//     doc.setTextColor(27, 94, 32);
//     doc.text(`दूध उत्पादन आणि आर्थिक अहवाल (${label})`, 14, y);

//     doc.setFontSize(12);
//     doc.setTextColor(80);
//     doc.text(`दिनांक: ${new Date().toLocaleDateString("en-IN")}`, 14, y + 10);
//     y += 25;

//     // 🥛 Milk Info
//     doc.text("🐄 दूध उत्पादन माहिती", 14, y);
//     autoTable(doc, {
//       startY: y + 4,
//       head: [["विवरण", "मूल्य"]],
//       body: [
//         ["एकूण प्राणी", data.totalAnimals || 0],
//         ["दूध देणारे प्राणी", data.milkProducingAnimals || 0],
//         ["भाकड प्राणी", data.workingAnimals || 0],
//         ["एकूण दूध उत्पादन (लिटर)", data.totalMilkProduction || 0],
//         ["दूध दर (₹)", data.milkPrice || 0],
//         ["दूध उत्पन्न (₹)", milkIncome.toFixed(2)],
//         ["गोबर उत्पन्न (₹)", dungIncome.toFixed(2)],
//         ["एकूण उत्पन्न (₹)", totalIncome.toFixed(2)],
//       ],
//       styles: { font: "NotoSansDevanagari", halign: "center", fontSize: 11 },
//       headStyles: { fillColor: [76, 175, 80], textColor: 255 },
//       didParseCell: applyMarathiFont,
//     });

//     y = doc.lastAutoTable.finalY + 10;

//     // 🏠 Stable Expenses
//     doc.text("🏠 स्थिर खर्च", 14, y);
//     autoTable(doc, {
//       startY: y + 4,
//       head: [["विवरण", "दर (₹)", "एकूण (₹)"]],
//       body: (data.stableExpenses || []).map((e) => [
//         e.item,
//         e.rate,
//         (Number(e.rate) * Number(data.totalAnimals || 0)).toFixed(2),
//       ]),
//       foot: [["एकूण स्थिर खर्च", "", summary.totalStableExp.toFixed(2)]],
//       styles: { font: "NotoSansDevanagari", halign: "center", fontSize: 10 },
//       headStyles: { fillColor: [33, 150, 243], textColor: 255 },
//       footStyles: { fillColor:  [33, 150, 243], fontStyle: "bold" },
//       didParseCell: applyMarathiFont,
//     });

//     y = doc.lastAutoTable.finalY + 10;

//     // 💊 Medical Expenses
//     doc.text("💊 वैदान खर्च", 14, y);
//     autoTable(doc, {
//       startY: y + 4,
//       head: [["विवरण", "प्रमाण", "दर (₹)", "एकूण (₹)"]],
//       body: (data.vaidanExpenses || []).map((e) => [
//         e.item,
//         e.praman,
//         e.rate,
//         (Number(e.praman) * Number(e.rate) || 0).toFixed(2),
//       ]),
//       foot: [["एकूण वैदान खर्च", "", "", summary.totalVaidanExp.toFixed(2)]],
//       styles: { font: "NotoSansDevanagari", halign: "center", fontSize: 10 },
//       headStyles: { fillColor: [156, 39, 176], textColor: 255 },
//       footStyles: { fillColor: [156, 39, 176], fontStyle: "bold" },
//       didParseCell: applyMarathiFont,
//     });

//     y = doc.lastAutoTable.finalY + 10;

//     // 🌾 Food Expenses
//     doc.text("🍽️ खाद्य खर्च", 14, y);
//     autoTable(doc, {
//       startY: y + 4,
//       head: [["विवरण", "प्रमाण", "दर (₹)", "एकूण (₹)"]],
//       body: (data.foodExpenses || []).map((e) => [
//         e.item,
//         e.qty,
//         e.rate,
//         (Number(e.qty) * Number(e.rate) || 0).toFixed(2),
//       ]),
//       foot: [["एकूण खाद्य खर्च", "", "", summary.totalFoodExp.toFixed(2)]],
//       styles: { font: "NotoSansDevanagari", halign: "center", fontSize: 10 },
//       headStyles: { fillColor: [255, 152, 0], textColor: 255 },
//       footStyles: { fillColor: [255, 152, 0], fontStyle: "bold" },
//       didParseCell: applyMarathiFont,
//     });

//     // 📊 Individual Financial Summary
//     let summaryStartY = doc.lastAutoTable.finalY + 15;
//     doc.setFontSize(16);
//     doc.setTextColor(0, 150, 136);
//     doc.text(`📊 आर्थिक सारांश (${label})`, 14, summaryStartY);

//     autoTable(doc, {
//       startY: summaryStartY + 8,
//       head: [["विवरण", "मूल्य (₹)"]],
//       body: [
//         ["एकूण उत्पन्न", totalIncome.toFixed(2)],
//         ["एकूण खर्च", totalExpenses.toFixed(2)],
//         ["निव्वळ नफा / तोटा", netProfit.toFixed(2)],
//         // edited and working 
//         ["उत्पन्न प्रति लिटर", incomePerLiter.toFixed(2)],
//         ["प्रति लिटर खर्च", costPerLiter.toFixed(2)],
//         ["प्रति लिटर नफा", profitPerLiter.toFixed(2)],
//       ],
//       styles: { font: "NotoSansDevanagari", halign: "center", fontSize: 12 },
//       headStyles: { fillColor: [0, 150, 136], textColor: 255 },
//       didParseCell: applyMarathiFont,
//     });
//   }

//   //  Final Combined Summary


// const cow = animals[0].data;
// const buffalo = animals[1].data;

// const totalMilkLiters =
//   Number(cow.totalMilkProduction || 0) +
//   Number(buffalo.totalMilkProduction || 0);

// const avgIncomePerLiter =
//   totalMilkLiters > 0 ? combined.income / totalMilkLiters : 0;
// const avgCostPerLiter =
//   totalMilkLiters > 0 ? combined.expenses / totalMilkLiters : 0;
// const avgProfitPerLiter =
//   totalMilkLiters > 0 ? combined.profit / totalMilkLiters : 0;


//   const finalY = doc.lastAutoTable.finalY + 20;
//   doc.setFontSize(16);
//   doc.setTextColor(0, 150, 136);
//   doc.text("📊 एकत्रित आर्थिक सारांश (गाई + म्हैस)", 14, finalY);

//   autoTable(doc, {
//     startY: finalY + 8,
//     head: [["विवरण", "मूल्य (₹)"]],
//     body: [
//       ["एकूण उत्पन्न", combined.income.toFixed(2)],
//       ["एकूण खर्च", combined.expenses.toFixed(2)],
//       ["एकूण नफा", combined.profit.toFixed(2)],
//       ["उत्पन्न प्रति लिटर", avgIncomePerLiter.toFixed(2)],
//       ["प्रति लिटर खर्च", avgCostPerLiter.toFixed(2)],
//       ["प्रति लिटर नफा", avgProfitPerLiter.toFixed(2)],
//     ],
//     styles: {
//       font: "NotoSansDevanagari",
//       halign: "center",
//       fontSize: 12,
//     },
//     headStyles: { fillColor: [0, 150, 136], textColor: 255 },
//     alternateRowStyles: { fillColor: [224, 242, 241] },
//     didParseCell: applyMarathiFont,
//   });

//   //  Save
//   doc.save(`दूध_व्यवस्थापन_अहवाल_${new Date().toLocaleDateString("en-IN")}.pdf`);
// };


// import pdfMake from "pdfmake/build/pdfmake";
// import store from "../redux/store";
// import NotoSansDevanagariBase64 from "../assets/fonts/NotoSansDevanagari-Regular";

// // Register fonts
// pdfMake.vfs = pdfMake.vfs || {};
// pdfMake.vfs["NotoSansDevanagari-Regular.ttf"] = NotoSansDevanagariBase64;

// pdfMake.fonts = {
//   NotoSansDevanagari: {
//     normal: "NotoSansDevanagari-Regular.ttf",
//     bold: "NotoSansDevanagari-Regular.ttf",
//     italics: "NotoSansDevanagari-Regular.ttf",
//     bolditalics: "NotoSansDevanagari-Regular.ttf",
//   },
// };

// export const generateDairyReport = async () => {
//   const state = store.getState();
//   const animals = [
//     { label: "गाई", data: state.dairy?.cow || {} },
//     { label: "म्हैस", data: state.dairy?.buffalo || {} },
//   ];

//   // Helper for totals
//   const calcTotal = (arr, type = "food", totalAnimals = 0) => {
//     if (!Array.isArray(arr)) return 0;
//     if (type === "food")
//       return arr.reduce((sum, e) => sum + (e.qty || 0) * (e.rate || 0), 0);
//     if (type === "vaidan")
//       return arr.reduce((sum, e) => sum + (e.praman || 0) * (e.rate || 0), 0);
//     if (type === "stable")
//       return arr.reduce(
//         (sum, e) => sum + (e.rate || 0) * (Number(totalAnimals) || 0),
//         0
//       );
//     return arr.reduce((sum, e) => sum + (e.rate || 0), 0);
//   };

//   // Store total for combined summary
//   let combined = {
//     income: 0,
//     expenses: 0,
//     profit: 0,
//   };

//   const content = [];

//   // Generate report for each animal (Cow + Buffalo)
//   for (let i = 0; i < animals.length; i++) {
//     const { label, data } = animals[i];

//     // Calculations
//     const summary = {
//       totalStableExp: calcTotal(data.stableExpenses, "stable", data.totalAnimals),
//       totalVaidanExp: calcTotal(data.vaidanExpenses, "vaidan"),
//       totalFoodExp: calcTotal(data.foodExpenses, "food"),
//     };

//     const milkIncome =
//       Number(data.totalMilkProduction || 0) * Number(data.milkPrice || 0);
//     const dungIncome = Number(data.totalAnimals || 0) * 16;
//     const totalIncome = milkIncome + dungIncome;
//     const totalExpenses =
//       summary.totalStableExp + summary.totalVaidanExp + summary.totalFoodExp;
//     const netProfit = totalIncome - totalExpenses;

//     const costPerLiter =
//       data.totalMilkProduction > 0
//         ? totalExpenses / data.totalMilkProduction
//         : 0;
//     const profitPerLiter =
//       data.totalMilkProduction > 0 ? netProfit / data.totalMilkProduction : 0;
//     const incomePerLiter =
//       data.totalMilkProduction > 0 ? totalIncome / data.totalMilkProduction : 0;

//     // Add to combined totals
//     combined.income += totalIncome;
//     combined.expenses += totalExpenses;
//     combined.profit += netProfit;

//     // Add page break for second animal
//     if (i > 0) {
//       content.push({ text: "", pageBreak: "before" });
//     }

//     // Title
//     content.push({
//       text: `दूध उत्पादन आणि आर्थिक अहवाल (${label})`,
//       style: "header",
//       color: "#1B5E20",
//       margin: [0, 0, 0, 10],
//     });

//     // Date
//     content.push({
//       text: `दिनांक: ${new Date().toLocaleDateString("en-IN")}`,
//       fontSize: 12,
//       color: "#505050",
//       margin: [0, 0, 0, 15],
//     });

//     // Milk Production Info
//     content.push({
//       text: "🐄 दूध उत्पादन माहिती",
//       fontSize: 12,
//       bold: true,
//       margin: [0, 0, 0, 5],
//     });

//     content.push({
//       table: {
//         widths: ["*", "*"],
//         body: [
//           [
//             { text: "विवरण", style: "tableHeader", fillColor: "#4CAF50" },
//             { text: "मूल्य", style: "tableHeader", fillColor: "#4CAF50" },
//           ],
//           ["एकूण प्राणी", data.totalAnimals || 0],
//           ["दूध देणारे प्राणी", data.milkProducingAnimals || 0],
//           ["भाकड प्राणी", data.workingAnimals || 0],
//           ["एकूण दूध उत्पादन (लिटर)", data.totalMilkProduction || 0],
//           ["दूध दर (₹)", data.milkPrice || 0],
//           ["दूध उत्पन्न (₹)", milkIncome.toFixed(2)],
//           ["गोबर उत्पन्न (₹)", dungIncome.toFixed(2)],
//           ["एकूण उत्पन्न (₹)", totalIncome.toFixed(2)],
//         ],
//       },
//       style: "table",
//       margin: [0, 0, 0, 10],
//     });

//     // Stable Expenses
//     content.push({
//       text: "🏠 स्थिर खर्च",
//       fontSize: 12,
//       bold: true,
//       margin: [0, 10, 0, 5],
//     });

//     const stableBody = [
//       [
//         { text: "विवरण", style: "tableHeader", fillColor: "#2196F3" },
//         { text: "दर (₹)", style: "tableHeader", fillColor: "#2196F3" },
//         { text: "एकूण (₹)", style: "tableHeader", fillColor: "#2196F3" },
//       ],
//       ...(data.stableExpenses || []).map((e) => [
//         e.item,
//         e.rate,
//         (Number(e.rate) * Number(data.totalAnimals || 0)).toFixed(2),
//       ]),
//       [
//         { text: "एकूण स्थिर खर्च", bold: true, fillColor: "#2196F3", color: "white" },
//         { text: "", fillColor: "#2196F3" },
//         { text: summary.totalStableExp.toFixed(2), bold: true, fillColor: "#2196F3", color: "white" },
//       ],
//     ];

//     content.push({
//       table: {
//         widths: ["*", "*", "*"],
//         body: stableBody,
//       },
//       style: "table",
//       margin: [0, 0, 0, 10],
//     });

//     // Medical Expenses
//     content.push({
//       text: "💊 वैदान खर्च",
//       fontSize: 12,
//       bold: true,
//       margin: [0, 10, 0, 5],
//     });

//     const vaidanBody = [
//       [
//         { text: "विवरण", style: "tableHeader", fillColor: "#9C27B0" },
//         { text: "प्रमाण", style: "tableHeader", fillColor: "#9C27B0" },
//         { text: "दर (₹)", style: "tableHeader", fillColor: "#9C27B0" },
//         { text: "एकूण (₹)", style: "tableHeader", fillColor: "#9C27B0" },
//       ],
//       ...(data.vaidanExpenses || []).map((e) => [
//         e.item,
//         e.praman,
//         e.rate,
//         (Number(e.praman) * Number(e.rate) || 0).toFixed(2),
//       ]),
//       [
//         { text: "एकूण वैदान खर्च", bold: true, fillColor: "#9C27B0", color: "white" },
//         { text: "", fillColor: "#9C27B0" },
//         { text: "", fillColor: "#9C27B0" },
//         { text: summary.totalVaidanExp.toFixed(2), bold: true, fillColor: "#9C27B0", color: "white" },
//       ],
//     ];

//     content.push({
//       table: {
//         widths: ["*", "*", "*", "*"],
//         body: vaidanBody,
//       },
//       style: "table",
//       margin: [0, 0, 0, 10],
//     });

//     // Food Expenses
//     content.push({
//       text: "🍽️ खाद्य खर्च",
//       fontSize: 12,
//       bold: true,
//       margin: [0, 10, 0, 5],
//     });

//     const foodBody = [
//       [
//         { text: "विवरण", style: "tableHeader", fillColor: "#FF9800" },
//         { text: "प्रमाण", style: "tableHeader", fillColor: "#FF9800" },
//         { text: "दर (₹)", style: "tableHeader", fillColor: "#FF9800" },
//         { text: "एकूण (₹)", style: "tableHeader", fillColor: "#FF9800" },
//       ],
//       ...(data.foodExpenses || []).map((e) => [
//         e.item,
//         e.qty,
//         e.rate,
//         (Number(e.qty) * Number(e.rate) || 0).toFixed(2),
//       ]),
//       [
//         { text: "एकूण खाद्य खर्च", bold: true, fillColor: "#FF9800", color: "white" },
//         { text: "", fillColor: "#FF9800" },
//         { text: "", fillColor: "#FF9800" },
//         { text: summary.totalFoodExp.toFixed(2), bold: true, fillColor: "#FF9800", color: "white" },
//       ],
//     ];

//     content.push({
//       table: {
//         widths: ["*", "*", "*", "*"],
//         body: foodBody,
//       },
//       style: "table",
//       margin: [0, 0, 0, 10],
//     });

//     // Individual Financial Summary
//     content.push({
//       text: `📊 आर्थिक सारांश (${label})`,
//       fontSize: 14,
//       bold: true,
//       color: "#009688",
//       margin: [0, 15, 0, 8],
//     });

//     content.push({
//       table: {
//         widths: ["*", "*"],
//         body: [
//           [
//             { text: "विवरण", style: "tableHeader", fillColor: "#009688" },
//             { text: "मूल्य (₹)", style: "tableHeader", fillColor: "#009688" },
//           ],
//           ["एकूण उत्पन्न", totalIncome.toFixed(2)],
//           ["एकूण खर्च", totalExpenses.toFixed(2)],
//           ["निव्वळ नफा / तोटा", netProfit.toFixed(2)],
//           ["उत्पन्न प्रति लिटर", incomePerLiter.toFixed(2)],
//           ["प्रति लिटर खर्च", costPerLiter.toFixed(2)],
//           ["प्रति लिटर नफा", profitPerLiter.toFixed(2)],
//         ],
//       },
//       style: "table",
//       margin: [0, 0, 0, 10],
//     });
//   }

//   // Final Combined Summary
//   const cow = animals[0].data;
//   const buffalo = animals[1].data;

//   const totalMilkLiters =
//     Number(cow.totalMilkProduction || 0) +
//     Number(buffalo.totalMilkProduction || 0);

//   const avgIncomePerLiter =
//     totalMilkLiters > 0 ? combined.income / totalMilkLiters : 0;
//   const avgCostPerLiter =
//     totalMilkLiters > 0 ? combined.expenses / totalMilkLiters : 0;
//   const avgProfitPerLiter =
//     totalMilkLiters > 0 ? combined.profit / totalMilkLiters : 0;

//   content.push({
//     text: "📊 एकत्रित आर्थिक सारांश (गाई + म्हैस)",
//     fontSize: 14,
//     bold: true,
//     color: "#009688",
//     margin: [0, 20, 0, 8],
//   });

//   content.push({
//     table: {
//       widths: ["*", "*"],
//       body: [
//         [
//           { text: "विवरण", style: "tableHeader", fillColor: "#009688" },
//           { text: "मूल्य (₹)", style: "tableHeader", fillColor: "#009688" },
//         ],
//         ["एकूण उत्पन्न", combined.income.toFixed(2)],
//         ["एकूण खर्च", combined.expenses.toFixed(2)],
//         ["एकूण नफा", combined.profit.toFixed(2)],
//         ["उत्पन्न प्रति लिटर", avgIncomePerLiter.toFixed(2)],
//         ["प्रति लिटर खर्च", avgCostPerLiter.toFixed(2)],
//         ["प्रति लिटर नफा", avgProfitPerLiter.toFixed(2)],
//       ],
//     },
//     style: "table",
//   });

//   // Document definition
//   const docDefinition = {
//     content: content,
//     defaultStyle: {
//       font: "NotoSansDevanagari",
//     },
//     styles: {
//       header: {
//         fontSize: 18,
//         bold: true,
//       },
//       table: {
//         fontSize: 11,
//         alignment: "center",
//       },
//       tableHeader: {
//         bold: true,
//         fontSize: 11,
//         color: "white",
//         alignment: "center",
//       },
//     },
//     pageSize: "A4",
//     pageMargins: [40, 40, 40, 40],
//   };

//   // Generate and download PDF
//   pdfMake.createPdf(docDefinition).download(
//     `दूध_व्यवस्थापन_अहवाल_${new Date().toLocaleDateString("en-IN")}.pdf`
//   );
// };

// Original Code 
// import pdfMake from "pdfmake/build/pdfmake";
// import store from "../redux/store";
// import NotoSansDevanagariBase64 from "../assets/fonts/NotoSansDevanagari-Regular";
// import Roboto from "../assets/fonts/RobotoRegular";

// // Register fonts
// pdfMake.vfs = pdfMake.vfs || {};
// pdfMake.vfs["NotoSansDevanagari-Regular.ttf"] = NotoSansDevanagariBase64;
// pdfMake.vfs["Roboto-Regular.ttf"] = Roboto;

// pdfMake.fonts = {
//   NotoSansDevanagari: {
//     normal: "NotoSansDevanagari-Regular.ttf",
//     bold: "NotoSansDevanagari-Regular.ttf",
//     italics: "NotoSansDevanagari-Regular.ttf",
//     bolditalics: "NotoSansDevanagari-Regular.ttf",
//   },
//   Roboto: {
//     normal: "Roboto-Regular.ttf",
//     bold: "Roboto-Regular.ttf",
//     italics: "Roboto-Regular.ttf",
//     bolditalics: "Roboto-Regular.ttf"
//   },
// };

// // Language translations
// const translations = {
//   marathi: {
//     title: "दूध उत्पादन आणि आर्थिक अहवाल",
//     date: "दिनांक",
//     cow: "गाई",
//     buffalo: "म्हैस",
//     milkInfo: "🐄 दूध उत्पादन माहिती",
//     details: "विवरण",
//     value: "मूल्य",
//     totalAnimals: "एकूण प्राणी",
//     milkProducingAnimals: "दूध देणारे प्राणी",
//     workingAnimals: "भाकड प्राणी",
//     totalMilkProduction: "एकूण दूध उत्पादन (लिटर)",
//     milkRate: "दूध दर (₹)",
//     milkIncome: "दूध उत्पन्न (₹)",
//     dungIncome: "गोबर उत्पन्न (₹)",
//     totalIncome: "एकूण उत्पन्न (₹)",
//     stableExpenses: "स्थिर खर्च",
//     rate: "दर (₹)",
//     total: "एकूण (₹)",
//     totalStableExpense: "एकूण स्थिर खर्च",
//     medicalExpenses: "वैरण खर्च",
//     quantity: "प्रमाण",
//     totalMedicalExpense: "एकूण वैरण खर्च",
//     foodExpenses: "🍽️ खाद्य खर्च",
//     totalFoodExpense: "एकूण खाद्य खर्च",
//     financialSummary: "आर्थिक सारांश",
//     totalExpenses: "एकूण खर्च",
//     netProfit: "निव्वळ नफा / तोटा",
//     incomePerLiter: "उत्पन्न प्रति लिटर",
//     costPerLiter: "प्रति लिटर खर्च",
//     profitPerLiter: "प्रति लिटर नफा",
//     combinedSummary: "📊 एकत्रित आर्थिक सारांश (गाई + म्हैस)",
//     totalProfit: "एकूण नफा",
//     fileName: "दूध_व्यवस्थापन_अहवाल",
//   },
//   english: {
//     title: "Milk Production and Financial Report",
//     date: "Date",
//     cow: "Cow",
//     buffalo: "Buffalo",
//     milkInfo: "Milk Production Information",
//     details: "Details",
//     value: "Value",
//     totalAnimals: "Total Animals",
//     milkProducingAnimals: "Milk Producing Animals",
//     workingAnimals: "Working Animals",
//     totalMilkProduction: "Total Milk Production (Liters)",
//     milkRate: "Milk Rate (₹)",
//     milkIncome: "Milk Income (₹)",
//     dungIncome: "Dung Income (₹)",
//     totalIncome: "Total Income (₹)",
//     stableExpenses:  "Stable Expenses",
//     rate: "Rate (₹)",
//     total: "Total (₹)",
//     totalStableExpense: "Total Stable Expense",
//     medicalExpenses: "Fodder Expenses",
//     quantity: "Quantity",
//     totalMedicalExpense: "Total Fodder Expense",
//     foodExpenses: "🍽️ Food Expenses",
//     totalFoodExpense: "Total Food Expense",
//     financialSummary: "Financial Summary",
//     totalExpenses: "Total Expenses",
//     netProfit: "Net Profit / Loss",
//     incomePerLiter: "Income Per Liter",
//     costPerLiter: "Cost Per Liter",
//     profitPerLiter: "Profit Per Liter",
//     combinedSummary: "Combined Financial Summary (Cow + Buffalo)",
//     totalProfit: "Total Profit",
//     fileName: "Dairy_Management_Report",
//   },
//   hindi: {
//     title: "दूध उत्पादन और वित्तीय रिपोर्ट",
//     date: "दिनांक",
//     cow: "गाय",
//     buffalo: "भैंस",
//     milkInfo: "दूध उत्पादन जानकारी",
//     details: "विवरण",
//     value: "मूल्य",
//     totalAnimals: "कुल पशु",
//     milkProducingAnimals: "दूध देने वाले पशु",
//     workingAnimals: "काम करने वाले पशु",
//     totalMilkProduction: "कुल दूध उत्पादन (लीटर)",
//     milkRate: "दूध दर (₹)",
//     milkIncome: "दूध आय (₹)",
//     dungIncome: "गोबर आय (₹)",
//     totalIncome: "कुल आय (₹)",
//     stableExpenses: "स्थिर खर्च",
//     rate: "दर (₹)",
//     total: "कुल (₹)",
//     totalStableExpense: "कुल स्थिर खर्च",
//     medicalExpenses: "घास खर्च",
//     quantity: "मात्रा",
//     totalMedicalExpense: "कुल घास खर्च",
//     foodExpenses: "खाद्य खर्च",
//     totalFoodExpense: "कुल खाद्य खर्च",
//     financialSummary: "वित्तीय सारांश",
//     totalExpenses: "कुल खर्च",
//     netProfit: "शुद्ध लाभ / हानि",
//     incomePerLiter: "प्रति लीटर आय",
//     costPerLiter: "प्रति लीटर लागत",
//     profitPerLiter: "प्रति लीटर लाभ",
//     combinedSummary: "संयुक्त वित्तीय सारांश (गाय + भैंस)",
//     totalProfit: "कुल लाभ",
//     fileName: "डेयरी_प्रबंधन_रिपोर्ट",
//   },

// };

// export const generateDairyReport = async (language = "marathi") => {
//   const t = translations[language] || translations.marathi;
//   const font = language === "english" ? "Roboto" : "NotoSansDevanagari";


//   const state = store.getState();
//   const animals = [
//     { label: t.cow, data: state.dairy?.cow || {} },
//     { label: t.buffalo, data: state.dairy?.buffalo || {} },
//   ];

//   // Helper for totals
//   const calcTotal = (arr, type = "food", totalAnimals = 0) => {
//     if (!Array.isArray(arr)) return 0;
//     if (type === "food")
//       return arr.reduce((sum, e) => sum + (e.qty || 0) * (e.rate || 0), 0);
//     if (type === "vaidan")
//       return arr.reduce((sum, e) => sum + (e.praman || 0) * (e.rate || 0), 0);
//     if (type === "stable")
//       return arr.reduce(
//         (sum, e) => sum + (e.rate || 0) * (Number(totalAnimals) || 0),
//         0
//       );
//     return arr.reduce((sum, e) => sum + (e.rate || 0), 0);
//   };

//   // Store total for combined summary
//   let combined = {
//     income: 0,
//     expenses: 0,
//     profit: 0,
//   };

//   const content = [];

//   // Generate report for each animal (Cow + Buffalo)
//   for (let i = 0; i < animals.length; i++) {
//     const { label, data } = animals[i];

//     // Calculations
//     const summary = {
//       totalStableExp: calcTotal(data.stableExpenses, "stable", data.totalAnimals),
//       totalVaidanExp: calcTotal(data.vaidanExpenses, "vaidan"),
//       totalFoodExp: calcTotal(data.foodExpenses, "food"),
//     };

//     const milkIncome =
//       Number(data.totalMilkProduction || 0) * Number(data.milkPrice || 0);
//     const dungIncome = Number(data.totalAnimals || 0) * 16;
//     const totalIncome = milkIncome + dungIncome;
//     const totalExpenses =
//       summary.totalStableExp + summary.totalVaidanExp + summary.totalFoodExp;
//     const netProfit = totalIncome - totalExpenses;

//     const costPerLiter =
//       data.totalMilkProduction > 0
//         ? totalExpenses / data.totalMilkProduction
//         : 0;
//     const profitPerLiter =
//       data.totalMilkProduction > 0 ? netProfit / data.totalMilkProduction : 0;
//     const incomePerLiter =
//       data.totalMilkProduction > 0 ? totalIncome / data.totalMilkProduction : 0;

//     // Add to combined totals
//     combined.income += totalIncome;
//     combined.expenses += totalExpenses;
//     combined.profit += netProfit;

//     // Add page break for second animal
//     if (i > 0) {
//       content.push({ text: "", pageBreak: "before" });
//     }

//     // Title
//     content.push({
//       text: `${t.title} (${label})`,
//       style: "header",
//       color: "#1B5E20",
//       margin: [0, 0, 0, 10],
//     });

//     // Date
//     content.push({
//       text: `${t.date}: ${new Date().toLocaleDateString("en-IN")}`,
//       fontSize: 12,
//       color: "#505050",
//       margin: [0, 0, 0, 15],
//     });

//     // Milk Production Info
//     content.push({
//       text: t.milkInfo,
//       fontSize: 12,
//       bold: true,
//       margin: [0, 0, 0, 5],
//     });

//     content.push({
//       table: {
//         widths: ["*", "*"],
//         body: [
//           [
//             { text: t.details, style: "tableHeader", fillColor: "#4CAF50" },
//             { text: t.value, style: "tableHeader", fillColor: "#4CAF50" },
//           ],
//           [t.totalAnimals, data.totalAnimals || 0],
//           [t.milkProducingAnimals, data.milkProducingAnimals || 0],
//           [t.workingAnimals, data.workingAnimals || 0],
//           [t.totalMilkProduction, data.totalMilkProduction || 0],
//           [t.milkRate, data.milkPrice || 0],
//           [t.milkIncome, milkIncome.toFixed(2)],
//           [t.dungIncome, dungIncome.toFixed(2)],
//           [t.totalIncome, totalIncome.toFixed(2)],
//         ],
//       },
//       style: "table",
//       margin: [0, 0, 0, 10],
//     });

//     // Stable Expenses
//     content.push({
//       text: t.stableExpenses,
//       fontSize: 12,
//       bold: true,
//       margin: [0, 10, 0, 5],
//     });

//     const stableBody = [
//       [
//         { text: t.details, style: "tableHeader", fillColor: "#2196F3" },
//         { text: t.rate, style: "tableHeader", fillColor: "#2196F3" },
//         { text: t.total, style: "tableHeader", fillColor: "#2196F3" },
//       ],
//       ...(data.stableExpenses || []).map((e) => [
//         e.item,
//         e.rate,
//         (Number(e.rate) * Number(data.totalAnimals || 0)).toFixed(2),
//       ]),
//       [
//         { text: t.totalStableExpense, bold: true, fillColor: "#2196F3", color: "white" },
//         { text: "", fillColor: "#2196F3" },
//         { text: summary.totalStableExp.toFixed(2), bold: true, fillColor: "#2196F3", color: "white" },
//       ],
//     ];

//     content.push({
//       table: {
//         widths: ["*", "*", "*"],
//         body: stableBody,
//       },
//       style: "table",
//       margin: [0, 0, 0, 10],
//     });

//     // Medical Expenses
//     content.push({
//       text: t.medicalExpenses,
//       fontSize: 12,
//       bold: true,
//       margin: [0, 10, 0, 5],
//     });

//     const vaidanBody = [
//       [
//         { text: t.details, style: "tableHeader", fillColor: "#9C27B0" },
//         { text: t.quantity, style: "tableHeader", fillColor: "#9C27B0" },
//         { text: t.rate, style: "tableHeader", fillColor: "#9C27B0" },
//         { text: t.total, style: "tableHeader", fillColor: "#9C27B0" },
//       ],
//       ...(data.vaidanExpenses || []).map((e) => [
//         e.item,
//         e.praman,
//         e.rate,
//         (Number(e.praman) * Number(e.rate) || 0).toFixed(2),
//       ]),
//       [
//         { text: t.totalMedicalExpense, bold: true, fillColor: "#9C27B0", color: "white" },
//         { text: "", fillColor: "#9C27B0" },
//         { text: "", fillColor: "#9C27B0" },
//         { text: summary.totalVaidanExp.toFixed(2), bold: true, fillColor: "#9C27B0", color: "white" },
//       ],
//     ];

//     content.push({
//       table: {
//         widths: ["*", "*", "*", "*"],
//         body: vaidanBody,
//       },
//       style: "table",
//       margin: [0, 0, 0, 10],
//     });

//     // Food Expenses
//     content.push({
//       text: t.foodExpenses,
//       fontSize: 12,
//       bold: true,
//       margin: [0, 10, 0, 5],
//     });

//     const foodBody = [
//       [
//         { text: t.details, style: "tableHeader", fillColor: "#FF9800" },
//         { text: t.quantity, style: "tableHeader", fillColor: "#FF9800" },
//         { text: t.rate, style: "tableHeader", fillColor: "#FF9800" },
//         { text: t.total, style: "tableHeader", fillColor: "#FF9800" },
//       ],
//       ...(data.foodExpenses || []).map((e) => [
//         e.item,
//         e.qty,
//         e.rate,
//         (Number(e.qty) * Number(e.rate) || 0).toFixed(2),
//       ]),
//       [
//         { text: t.totalFoodExpense, bold: true, fillColor: "#FF9800", color: "white" },
//         { text: "", fillColor: "#FF9800" },
//         { text: "", fillColor: "#FF9800" },
//         { text: summary.totalFoodExp.toFixed(2), bold: true, fillColor: "#FF9800", color: "white" },
//       ],
//     ];

//     content.push({
//       table: {
//         widths: ["*", "*", "*", "*"],
//         body: foodBody,
//       },
//       style: "table",
//       margin: [0, 0, 0, 10],
//     });

//     // Individual Financial Summary
//     content.push({
//       text: `${t.financialSummary} (${label})`,
//       fontSize: 14,
//       bold: true,
//       color: "#009688",
//       margin: [0, 15, 0, 8],
//     });

//     content.push({
//       table: {
//         widths: ["*", "*"],
//         body: [
//           [
//             { text: t.details, style: "tableHeader", fillColor: "#009688" },
//             { text: t.value, style: "tableHeader", fillColor: "#009688" },
//           ],
//           [t.totalIncome, totalIncome.toFixed(2)],
//           [t.totalExpenses, totalExpenses.toFixed(2)],
//           [t.netProfit, netProfit.toFixed(2)],
//           [t.incomePerLiter, incomePerLiter.toFixed(2)],
//           [t.costPerLiter, costPerLiter.toFixed(2)],
//           [t.profitPerLiter, profitPerLiter.toFixed(2)],
//         ],
//       },
//       style: "table",
//       margin: [0, 0, 0, 10],
//     });
//   }

//   // Final Combined Summary
//   const cow = animals[0].data;
//   const buffalo = animals[1].data;

//   const totalMilkLiters =
//     Number(cow.totalMilkProduction || 0) +
//     Number(buffalo.totalMilkProduction || 0);

//   const avgIncomePerLiter =
//     totalMilkLiters > 0 ? combined.income / totalMilkLiters : 0;
//   const avgCostPerLiter =
//     totalMilkLiters > 0 ? combined.expenses / totalMilkLiters : 0;
//   const avgProfitPerLiter =
//     totalMilkLiters > 0 ? combined.profit / totalMilkLiters : 0;

//   content.push({
//     text: t.combinedSummary,
//     fontSize: 14,
//     bold: true,
//     color: "#009688",
//     margin: [0, 20, 0, 8],
//   });

//   content.push({
//     table: {
//       widths: ["*", "*"],
//       body: [
//         [
//           { text: t.details, style: "tableHeader", fillColor: "#009688" },
//           { text: t.value, style: "tableHeader", fillColor: "#009688" },
//         ],
//         [t.totalIncome, combined.income.toFixed(2)],
//         [t.totalExpenses, combined.expenses.toFixed(2)],
//         [t.totalProfit, combined.profit.toFixed(2)],
//         [t.incomePerLiter, avgIncomePerLiter.toFixed(2)],
//         [t.costPerLiter, avgCostPerLiter.toFixed(2)],
//         [t.profitPerLiter, avgProfitPerLiter.toFixed(2)],
//       ],
//     },
//     style: "table",
//   });

//   // Document definition
//   const docDefinition = {
//     content: content,
//     defaultStyle: {
//       font: font,
//     },
//     styles: {
//       header: {
//         fontSize: 18,
//         bold: true,
//       },
//       table: {
//         fontSize: 11,
//         alignment: "center",
//       },
//       tableHeader: {
//         bold: true,
//         fontSize: 11,
//         color: "white",
//         alignment: "center",
//       },
//     },
//     pageSize: "A4",
//     pageMargins: [40, 40, 40, 40],
//   };

//   // Generate and download PDF
//   pdfMake.createPdf(docDefinition).download(
//     `${t.fileName}_${new Date().toLocaleDateString("en-IN")}.pdf`
//   );
// };

// original code

// import pdfMake from "pdfmake/build/pdfmake";
// import store from "../redux/store";
// import NotoSansDevanagariBase64 from "../assets/fonts/NotoSansDevanagari-Regular";
// import Roboto from "../assets/fonts/RobotoRegular";
// import { stableExpensesDefault, foodExpensesDefault, vaidanExpensesDefault } from "../data/expensesDefaults";

// // Register fonts
// pdfMake.vfs = pdfMake.vfs || {};
// pdfMake.vfs["NotoSansDevanagari-Regular.ttf"] = NotoSansDevanagariBase64;
// pdfMake.vfs["Roboto-Regular.ttf"] = Roboto;

// pdfMake.fonts = {
//   NotoSansDevanagari: {
//     normal: "NotoSansDevanagari-Regular.ttf",
//     bold: "NotoSansDevanagari-Regular.ttf",
//     italics: "NotoSansDevanagari-Regular.ttf",
//     bolditalics: "NotoSansDevanagari-Regular.ttf",
//   },
//   Roboto: {
//     normal: "Roboto-Regular.ttf",
//     bold: "Roboto-Regular.ttf",
//     italics: "Roboto-Regular.ttf",
//     bolditalics: "Roboto-Regular.ttf"
//   },
// };

// // Helper function to get translated item name
// const getTranslatedItem = (item, lang) => {
//   if (typeof item === "object" && item !== null) {
//     return item[lang] || item.en || item.mr || "";
//   }
//   return item || "";
// };

// export const generateDairyReport = async (language = "mr") => {
//   // Import translation file dynamically
//   let translations;
//   try {
//     const langModule = await import(`../locales/${language}.json`);
//     translations = langModule.default;
//   } catch (err) {
//     console.warn(`Translation file not found for ${language}, falling back to English`);
//     const langModule = await import(`../locales/en.json`);
//     translations = langModule.default;
//   }

//   const t = translations;
//   const font = language === "en" ? "Roboto" : "NotoSansDevanagari";

//   const state = store.getState();
//   const animals = [
//     { label: t.cowLabel || t.cow, data: state.dairy?.cow || {} },
//     { label: t.buffaloLabel || t.buffalo, data: state.dairy?.buffalo || {} },
//   ];

//   // Helper for totals
//   const calcTotal = (arr, type = "food", totalAnimals = 0) => {
//     if (!Array.isArray(arr)) return 0;
//     if (type === "food")
//       return arr.reduce((sum, e) => sum + (e.qty || 0) * (e.rate || 0), 0);
//     if (type === "vaidan")
//       return arr.reduce((sum, e) => sum + (e.praman || 0) * (e.rate || 0), 0);
//     if (type === "stable")
//       return arr.reduce(
//         (sum, e) => sum + (e.rate || 0) * (Number(totalAnimals) || 0),
//         0
//       );
//     return arr.reduce((sum, e) => sum + (e.rate || 0), 0);
//   };

//   // Store total for combined summary
//   let combined = {
//     income: 0,
//     expenses: 0,
//     profit: 0,
//   };

//   const content = [];

//   // Generate report for each animal (Cow + Buffalo)
//   for (let i = 0; i < animals.length; i++) {
//     const { label, data } = animals[i];

//     // Calculations
//     const summary = {
//       totalStableExp: calcTotal(data.stableExpenses, "stable", data.totalAnimals),
//       totalVaidanExp: calcTotal(data.vaidanExpenses, "vaidan"),
//       totalFoodExp: calcTotal(data.foodExpenses, "food"),
//     };

//     const milkIncome =
//       Number(data.totalMilkProduction || 0) * Number(data.milkPrice || 0);
//     const dungIncome = Number(data.totalAnimals || 0) * 16;
//     const totalIncome = milkIncome + dungIncome;
//     const totalExpenses =
//       summary.totalStableExp + summary.totalVaidanExp + summary.totalFoodExp;
//     const netProfit = totalIncome - totalExpenses;

//     const costPerLiter =
//       data.totalMilkProduction > 0
//         ? totalExpenses / data.totalMilkProduction
//         : 0;
//     const profitPerLiter =
//       data.totalMilkProduction > 0 ? netProfit / data.totalMilkProduction : 0;
//     const incomePerLiter =
//       data.totalMilkProduction > 0 ? totalIncome / data.totalMilkProduction : 0;

//       // avg milk for producing animal 
//     const avgMilkingPerAnimal =
//     data.milkProducingAnimals > 0
//       ? (data.totalMilkProduction / data.milkProducingAnimals).toFixed(2)
//       : "0.00";
//     // avg milk per animal
//      const avgMilkPerAnimal = data.totalAnimals > 0
//            ? (data.totalMilkProduction / data.totalAnimals).toFixed(2)
//            : "0.00";


//     // Add to combined totals
//     combined.income += totalIncome;
//     combined.expenses += totalExpenses;
//     combined.profit += netProfit;

//     // Add page break for second animal
//     if (i > 0) {
//       content.push({ text: "", pageBreak: "before" });
//     }

//     // Title
//     content.push({
//       text: `${t.title} (${label})`,
//       style: "header",
//       color: "#1B5E20",
//       margin: [0, 0, 0, 10],
//     });

//     // Date
//     content.push({
//       text: `${t.date}: ${new Date().toLocaleDateString("en-IN")}`,
//       fontSize: 12,
//       color: "#505050",
//       margin: [0, 0, 0, 15],
//     });

//     // Milk Production Info
//     content.push({
//       text: t.milkInfo,
//       fontSize: 12,
//       bold: true,
//       margin: [0, 0, 0, 5],
//     });

//     content.push({
//       table: {
//         widths: ["*", "*"],
//         body: [
//           [
//             { text: t.details, style: "tableHeader", fillColor: "#4CAF50" },
//             { text: t.value, style: "tableHeader", fillColor: "#4CAF50" },
//           ],
//           [t.totalAnimalLabel2 || t.totalAnimalLabel, data.totalAnimals || 0],
//           [t.milkProducingLabel, data.milkProducingAnimals || 0],
//           [t.workingLabel, data.workingAnimals || 0],
//           [t.totalMilkProductionLabel, data.totalMilkProduction || 0],
//           [t.milkRateLabel, data.milkPrice || 0],
//           [t.avgMilkProducingLabel,avgMilkingPerAnimal || 0],
//           [t.totalAvgAnimalLabel, avgMilkPerAnimal || 0],
//           [t.milkIncomeLabel, milkIncome.toFixed(2)],
//           [t.dungIncomeLabel2 || t.dungIncomeLabel, dungIncome.toFixed(2)],
//           [t.totalIncomeLabel, totalIncome.toFixed(2)],
//         ],
//       },
//       style: "table",
//       margin: [0, 0, 0, 10],
//     });

//     // Stable Expenses 
//     content.push({
//       text: t.stableExpensesLabel,
//       fontSize: 12,
//       bold: true,
//       margin: [0, 10, 0, 5],
//     });

//     const stableBody = [
//       [
//         { text: t.details, style: "tableHeader", fillColor: "#2196F3" },
//         { text: t.rateLabel2 || t.rateLabel, style: "tableHeader", fillColor: "#2196F3" },
//         { text: t.totalLabel, style: "tableHeader", fillColor: "#2196F3" },
//       ],
//       ...(data.stableExpenses || []).map((e, idx) => {
//         const defaultItem = stableExpensesDefault[idx];
//         const translatedName = defaultItem ? getTranslatedItem(defaultItem.item, language) : e.item;
//         return [
//           translatedName,
//           e.rate,
//           (Number(e.rate) * Number(data.totalAnimals || 0)).toFixed(2),
//         ];
//       }),
//       [
//         { text: t.totalStableExpenseLabel, bold: true, fillColor: "#2196F3", color: "white" },
//         { text: "", fillColor: "#2196F3" },
//         { text: summary.totalStableExp.toFixed(2), bold: true, fillColor: "#2196F3", color: "white" },
//       ],
//     ];

//     content.push({
//       table: {
//         widths: ["*", "*", "*"],
//         body: stableBody,
//       },
//       style: "table",
//       margin: [0, 0, 0, 10],
//     });

//     // Vaidan/Fodder Expenses
//     content.push({
//       text: t.FodderExpensesLabel,
//       fontSize: 12,
//       bold: true,
//       margin: [0, 10, 0, 5],
//     });

//     const vaidanBody = [
//       [
//         { text: t.details, style: "tableHeader", fillColor: "#9C27B0" },
//         { text: t.quantityLabel, style: "tableHeader", fillColor: "#9C27B0" },
//         { text: t.rateLabel2 || t.rateLabel, style: "tableHeader", fillColor: "#9C27B0" },
//         { text: t.totalLabel, style: "tableHeader", fillColor: "#9C27B0" },
//       ],
//       ...(data.vaidanExpenses || []).map((e, idx) => {
//         const defaultItem = vaidanExpensesDefault[idx];
//         const translatedName = defaultItem ? getTranslatedItem(defaultItem.item, language) : e.item;
//         return [
//           translatedName,
//           e.praman,
//           e.rate,
//           (Number(e.praman) * Number(e.rate) || 0).toFixed(2),
//         ];
//       }),
//       [
//         { text: t.totalFodderExpenseLabel, bold: true, fillColor: "#9C27B0", color: "white" },
//         { text: "", fillColor: "#9C27B0" },
//         { text: "", fillColor: "#9C27B0" },
//         { text: summary.totalVaidanExp.toFixed(2), bold: true, fillColor: "#9C27B0", color: "white" },
//       ],
//     ];

//     content.push({
//       table: {
//         widths: ["*", "*", "*", "*"],
//         body: vaidanBody,
//       },
//       style: "table",
//       margin: [0, 0, 0, 10],
//     });

//     // Food Expenses
//     content.push({
//       text: t.foodExpensesLabel,
//       fontSize: 12,
//       bold: true,
//       margin: [0, 10, 0, 5],
//       pageBreak: "before"
//     });

//     const foodBody = [
//       [
//         { text: t.details, style: "tableHeader", fillColor: "#FF9800" },
//         { text: t.quantityLabel, style: "tableHeader", fillColor: "#FF9800" },
//         { text: t.rateLabel2 || t.rateLabel, style: "tableHeader", fillColor: "#FF9800" },
//         { text: t.totalLabel, style: "tableHeader", fillColor: "#FF9800" },
//       ],
//       ...(data.foodExpenses || []).map((e, idx) => {
//         const defaultItem = foodExpensesDefault[idx];
//         const translatedName = defaultItem ? getTranslatedItem(defaultItem.item, language) : e.item;
//         return [
//           translatedName,
//           e.qty,
//           e.rate,
//           (Number(e.qty) * Number(e.rate) || 0).toFixed(2),
//         ];
//       }),
//       [
//         { text: t.totalFoodExpenseLabel, bold: true, fillColor: "#FF9800", color: "white" },
//         { text: "", fillColor: "#FF9800" },
//         { text: "", fillColor: "#FF9800" },
//         { text: summary.totalFoodExp.toFixed(2), bold: true, fillColor: "#FF9800", color: "white" },
//       ],
//     ];

//     content.push({
//       table: {
//         widths: ["*", "*", "*", "*"],
//         body: foodBody,
//       },
//       style: "table",
//       margin: [0, 0, 0, 10],
//       // bageBreak : "before"
//     });

//     // Individual Financial Summary
//     content.push({
//       text: `${t.financialSummaryLabel} (${label})`,
//       fontSize: 14,
//       bold: true,
//       color: "#009688",
//       margin: [0, 15, 0, 8],
//     });

//     content.push({
//       table: {
//         widths: ["*", "*"],
//         body: [
//           [
//             { text: t.details, style: "tableHeader", fillColor: "#009688" },
//             { text: t.value, style: "tableHeader", fillColor: "#009688" },
//           ],
//           [t.totalIncomeLabel, totalIncome.toFixed(2)],
//           [t.totalExpensesLabel, totalExpenses.toFixed(2)],
//           [t.netProfitLabel, netProfit.toFixed(2)],
//           [t.incomePerLiterLabel, incomePerLiter.toFixed(2)],
//           [t.costPerLiterLabel, costPerLiter.toFixed(2)],
//           [t.profitPerLiterLabel, profitPerLiter.toFixed(2)],
//         ],
//       },
//       style: "table",
//       margin: [0, 0, 0, 10],
//     });
//   }

//   // Final Combined Summary
//   const cow = animals[0].data;
//   const buffalo = animals[1].data;

//   const totalMilkLiters =
//     Number(cow.totalMilkProduction || 0) +
//     Number(buffalo.totalMilkProduction || 0);

//   const avgIncomePerLiter =
//     totalMilkLiters > 0 ? combined.income / totalMilkLiters : 0;
//   const avgCostPerLiter =
//     totalMilkLiters > 0 ? combined.expenses / totalMilkLiters : 0;
//   const avgProfitPerLiter =
//     totalMilkLiters > 0 ? combined.profit / totalMilkLiters : 0;

//   content.push({
//     text: t.combinedSummaryLabel,
//     fontSize: 14,
//     bold: true,
//     color: "#009688",
//     margin: [0, 20, 0, 8],
//   });

//   content.push({
//     table: {
//       widths: ["*", "*"],
//       body: [
//         [
//           { text: t.details, style: "tableHeader", fillColor: "#009688" },
//           { text: t.value, style: "tableHeader", fillColor: "#009688" },
//         ],
//         [t.totalIncomeLabel, combined.income.toFixed(2)],
//         [t.totalExpensesLabel, combined.expenses.toFixed(2)],
//         [t.totalProfitLabel, combined.profit.toFixed(2)],
//         [t.incomePerLiterLabel, avgIncomePerLiter.toFixed(2)],
//         [t.costPerLiterLabel, avgCostPerLiter.toFixed(2)],
//         [t.profitPerLiterLabel, avgProfitPerLiter.toFixed(2)],
//       ],
//     },
//     style: "table",
//   });

//   // Document definition
//   const docDefinition = {
//     content: content,
//     defaultStyle: {
//       font: font,
//     },
//     styles: {
//       header: {
//         fontSize: 18,
//         bold: true,
//       },
//       table: {
//         fontSize: 11,
//         alignment: "center",
//       },
//       tableHeader: {
//         bold: true,
//         fontSize: 11,
//         color: "white",
//         alignment: "center",
//       },
//     },
//     pageSize: "A4",
//     pageMargins: [40, 40, 40, 40],
//   };

//   // Generate and download PDF
//   const fileName = t.fileNameLabel || "Dairy_Management_Report";
//   pdfMake.createPdf(docDefinition).download(
//     `${fileName}_${new Date().toLocaleDateString("en-IN")}.pdf`
//   );
// };


// 18-Nov edit
import pdfMake from "pdfmake/build/pdfmake";
import store from "../redux/store";
import NotoSansDevanagariBase64 from "../assets/fonts/NotoSansDevanagari-Regular";
import Roboto from "../assets/fonts/RobotoRegular";
import { stableExpensesDefault, foodExpensesDefault, vaidanExpensesDefault } from "../data/expensesDefaults";
import { data, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import vetrinaLogoBase64 from "../assets/fonts/VetrinaLogoBase";
import NotoSansBengaliBase64 from "../assets/fonts/NotoSansBengali";
import NotoSansTamilBase64 from "../assets/fonts/NotoSansTamil";
import textLogoBase64 from "../assets/fonts/TextLogoBase";
import NotoSansKannadaBase64 from "../assets/fonts/NotoSansKannada";
import NotoSansGurmukhiBase64 from "../assets/fonts/NotoSansGurmukhi";
import NotoSansTeluguBase64 from "../assets/fonts/NotoSansTelugu";
import NotoSansMalayalamBase64 from "../assets/fonts/NotoSansMalayalam";
import NotoSansGujaratiBase64 from "../assets/fonts/NotoSansGujarati";
import { loadAllFonts } from "@/utils/loadfonts";

// pdfMake.vfs = pdfMake.vfs || {};
// pdfMake.vfs["NotoSansDevanagari-Regular.ttf"] = NotoSansDevanagariBase64;
// pdfMake.vfs["Roboto-Regular.ttf"] = Roboto;
// pdfMake.vfs["NotoSansBengali-Regular.ttf"] = NotoSansBengaliBase64;
// pdfMake.vfs["NotoSansTamil-Regular.ttf"] = NotoSansTamilBase64;
// pdfMake.vfs["NotoSansKannada-Regular.ttf"] = NotoSansKannadaBase64;
// pdfMake.vfs["NotoSansGurmukhi-Regular.ttf"] = NotoSansGurmukhiBase64;
// pdfMake.vfs["NotoSansTelugu-Regular.ttf"] = NotoSansTeluguBase64; 
// pdfMake.vfs["NotoSansMalayalam-Regular.ttf"] = NotoSansMalayalamBase64;
// pdfMake.vfs["NotoSansGujarati-Regular.ttf"] = NotoSansGujaratiBase64;


// pdfMake.fonts = {
//   NotoSansDevanagari: {
//     normal: "NotoSansDevanagari-Regular.ttf",
//     bold: "NotoSansDevanagari-Regular.ttf",
//     italics: "NotoSansDevanagari-Regular.ttf",
//     bolditalics: "NotoSansDevanagari-Regular.ttf",
//   },
//   Roboto: {
//     normal: "Roboto-Regular.ttf",
//     bold: "Roboto-Regular.ttf",
//     italics: "Roboto-Regular.ttf",
//     bolditalics: "Roboto-Regular.ttf"
//   },

//   NotoSansBengali: {
//     normal: "NotoSansBengali-Regular.ttf",
//     bold: "NotoSansBengali-Regular.ttf",
//     italics: "NotoSansBengali-Regular.ttf",
//     bolditalics: "NotoSansBengali-Regular.ttf"
//   },
//   NotoSansTamil: {
//     normal: "NotoSansTamil-Regular.ttf",
//     bold: "NotoSansTamil-Regular.ttf",
//     italics: "NotoSansTamil-Regular.ttf",
//     bolditalics: "NotoSansTamil-Regular.ttf"
//   },
//    NotoSansKannada: {
//     normal: "NotoSansKannada-Regular.ttf",
//     bold: "NotoSansKannada-Regular.ttf",
//     italics: "NotoSansKannada-Regular.ttf",
//     bolditalics: "NotoSansKannada-Regular.ttf"
//   },
//   NotoSansGurmukhi: {
//     normal: "NotoSansGurmukhi-Regular.ttf",
//     bold: "NotoSansGurmukhi-Regular.ttf",
//     italics: "NotoSansGurmukhi-Regular.ttf",
//     bolditalics: "NotoSansGurmukhi-Regular.ttf"
//   },

//   NotoSansTelugu: {
//     normal: "NotoSansTelugu-Regular.ttf",
//     bold: "NotoSansTelugu-Regular.ttf",
//     italics: "NotoSansTelugu-Regular.ttf",
//     bolditalics: "NotoSansTelugu-Regular.ttf"
//   },


//   NotoSansMalayalam: {
//     normal: "NotoSansMalayalam-Regular.ttf",
//     bold: "NotoSansMalayalam-Regular.ttf",
//     italics: "NotoSansMalayalam-Regular.ttf",
//     bolditalics: "NotoSansMalayalam-Regular.ttf"
//   },
//   NotoSansGujarati: {
//     normal: "NotoSansGujarati-Regular.ttf",
//     bold: "NotoSansGujarati-Regular.ttf",
//     italics: "NotoSansGujarati-Regular.ttf",
//     bolditalics: "NotoSansGujarati-Regular.ttf"
//   },
// };


await loadAllFonts();

// Helper function to get translated item name
const getTranslatedItem = (item, lang) => {
  if (typeof item === "object" && item !== null) {
    return item[lang] || item.en || item.mr || "";
  }
  return item || "";
};

// Helper function to safely format value for PDF cells
const safeCell = (value, defaultValue = "0") => {
  const val = value !== undefined && value !== null && value !== "" ? value : defaultValue;
  return { text: String(val) };
};


export const generateDairyReport = async (language = "mr") => {
  // Import translation file dynamically

  // const location = useLocation();
  // const dispatch = useDispatch();

  // Check if it's a valid base64

  let translations;
  try {
    const langModule = await import(`../locales/${language}.json`);
    translations = langModule.default;
  } catch (err) {
    console.warn(`Translation file not found for ${language}, falling back to English`);
    const langModule = await import(`../locales/en.json`);
    translations = langModule.default;
  }

  const t = translations;
  // const font = language === "en" ? "Roboto" : "NotoSansDevanagari";
  const font =
    language === "en" ? "Roboto" :
      language === "hi" ? "NotoSansDevanagari" :
        language === "mr" ? "NotoSansDevanagari" :
          language === "bn" ? "NotoSansBengali" :
            language === "ta" ? "NotoSansTamil" :
              language === "te" ? "NotoSansTelugu" :
                language === "gu" ? "NotoSansGujarati" :
                  language === "kn" ? "NotoSansKannada" :
                    language === "ml" ? "NotoSansMalayalam" :
                      language === "pa" ? "NotoSansGurmukhi" :
                        language === "as" ? "NotoSansBengali" :
                          language === "kok" ? "NotoSansDevanagari" :
                            "Roboto";

  const animalType = location.pathname.includes("buffalo") ? "buffalo" : "cow";
  const animalLabel = animalType === "cow" ? t.cowLabel : t.buffaloLabel;


  const state = store.getState();
  const animals = [
    { type: "cow", label: t.cowLabel || t.cow || "Cow", data: state.dairy?.cow || {} },
    { type: "buffalo", label: t.buffaloLabel || t.buffalo || "Buffalo", data: state.dairy?.buffalo || {} },
  ];


  // Helper for totals
  const calcTotal = (arr, type = "food", totalAnimals = 0) => {
    if (!Array.isArray(arr)) return 0;
    if (type === "food")
      return arr.reduce((sum, e) => sum + (e.qty || 0) * (e.rate || 0), 0);
    if (type === "vaidan")
      return arr.reduce((sum, e) => sum + (e.praman || 0) * (e.rate || 0), 0);
    if (type === "stable")
      return arr.reduce(
        (sum, e) => sum + (e.rate || 0) * (Number(totalAnimals) || 0),
        0
      );
    return arr.reduce((sum, e) => sum + (e.rate || 0), 0);
  };

  // Store total for combined summary
  let combined = {
    income: 0,
    expenses: 0,
    profit: 0,
  };

  const content = [];




  // Generate report for each animal (Cow + Buffalo)
  for (let i = 0; i < animals.length; i++) {
    const { type, label, data } = animals[i];

    const isCow = type == "cow" // detect if current animal is cow

    const productionHeaderLabel = isCow
      ? t.avgMilkingCowLabel || "Average Milking Cow"
      : t.avgMilkingBuffaloLabel || "Average Milking Buffalo";

    const totalAnimalFieldLabel = isCow
      ? t.avgMilkCowLabel || "Average Milk per Cow"
      : t.avgMilkBuffaloLabel || "Average Milk per Buffalo";


    // Calculations
    const summary = {
      totalStableExp: calcTotal(data.stableExpenses, "stable", data.totalAnimals),
      totalVaidanExp: calcTotal(data.vaidanExpenses, "vaidan"),
      totalFoodExp: calcTotal(data.foodExpenses, "food"),
    };

    const milkIncome =
      Number(data.totalMilkProduction || 0) * Number(data.milkPrice || 0);

    const dungIncome = Number(data.totalAnimals || 0) * 16;
    const totalIncome = milkIncome + dungIncome;
    const totalExpenses =
      summary.totalStableExp + summary.totalVaidanExp + summary.totalFoodExp;
    const netProfit = totalIncome - totalExpenses;

    const incomePerLiter =
      // data.totalMilkProduction > 0 ? totalIncome / data.totalMilkProduction : 0;
      data.totalMilkProduction > 0 ? milkIncome / data.totalMilkProduction : 0;

    const costPerLiter =
      data.totalMilkProduction > 0
        ? totalExpenses / data.totalMilkProduction
        : 0;
    const profitPerLiter = incomePerLiter - costPerLiter;



    // avg milk for producing animal 
    const avgMilkingPerAnimal =
      data.milkProducingAnimals > 0
        ? (data.totalMilkProduction / data.milkProducingAnimals).toFixed(2)
        : "0.00";
    // avg milk per animal
    const avgMilkPerAnimal = data.totalAnimals > 0
      ? (data.totalMilkProduction / data.totalAnimals).toFixed(2)
      : "0.00";

    // Add to combined totals
    combined.income += totalIncome;
    combined.expenses += totalExpenses;
    combined.profit += netProfit;
    combined.totalMilkProduction =
      (combined.totalMilkProduction || 0) + Number(data.totalMilkProduction || 0);

    combined.totalMilkIncome = (combined.totalMilkIncome || 0) + milkIncome;

    // Add page break for second animal
    if (i > 0) {
      content.push({ text: "", pageBreak: "before" });
    }

    content.push({
      columns: [
        {
          image: textLogoBase64,
          width: 170,
          alignment: "left",
          margin: [0, 5, 0, 0]
        },
        {
          // Right side column with logo and date
          stack: [
            {
              image: vetrinaLogoBase64,
              width: 100,
              alignment: "right",
              margin: [0, 0, 0, 10] // Logo ke niche space
            },
          ],
          width: "auto"
        }
      ],
      columnGap: 260,
      margin: [0, 10, 0, 10]
    });




    // Title
    content.push({
      text: `${t.title || "Dairy Report"} (${label})`,
      style: "header",
      fontSize: 15,
      // bold: true,
      alignment: "center",
      color: "#1B5E20",
      margin: [0, 0, 0, 0],
    });



    content.push({
      columns: [
        {
          text: t.milkInfo || "Milk Production Information",
          fontSize: 12,
          // bold: true,
          alignment: "left",
          margin: [0, 0, 0, 0],
        }
        , {

          stack: [
            {
              text: `${t.dateLabel || "Date"}: ${new Date().toLocaleDateString("en-IN")}`,
              fontSize: 10,
              color: "#B0000",
              margin: [0, 0, 0, 0],
              alignment: "right"
            }
          ],
          width: "auto"
        }
      ],
      columnGap: 260,
      margin: [0, 0, 0, 10]
    });



    content.push({
      table: {
        widths: ["*", "*"],
        body: [
          [
            { text: t.details || "Details", style: "tableHeader", fillColor: "#4CAF50" },
            { text: t.value || "Value", style: "tableHeader", fillColor: "#4CAF50" },
          ],
          [
            { text: `${t.totalAnimalLabel} ${label}` || "Total Animals" },
            safeCell(data.totalAnimals, "0")
          ],
          [  // woriking 
            { text: `${t.milkProducingLabel} ${label}` || "Milk Producing" },
            safeCell(data.milkProducingAnimals, "0")
          ],
          [  // working 
            { text: `${t.workingLabel} ${label}` || "Working" },
            safeCell(data.workingAnimals, "0")
          ],
          [
            { text: t.totalMilkProductionLabel || "Total Milk Production" },
            safeCell(data.totalMilkProduction, "0")
          ],
          [
            { text: t.milkRateLabel || "Milk Rate" },
            safeCell(data.milkPrice, "0")
          ],
          [
            { text: productionHeaderLabel || "Avg Milk (Producing)" },
            safeCell(avgMilkingPerAnimal, "0.00")
          ],
          [
            { text: totalAnimalFieldLabel || "Avg Milk (All)" },
            safeCell(avgMilkPerAnimal, "0.00")
          ],
          [
            { text: t.milkIncomeLabel || "Milk Income" },
            safeCell(milkIncome.toFixed(2))
          ],
          [
            { text: t.dungIncomeLabel2 || t.dungIncomeLabel || "Dung Income" },
            safeCell(dungIncome.toFixed(2))
          ],
          [
            { text: t.totalIncomeLabel || "Total Income" },
            safeCell(totalIncome.toFixed(2))
          ],
        ],
      },
      style: "table",
      margin: [0, 0, 5, 10],
      alignment: "center"
    });

    // Stable Expenses 
    content.push({
      text: t.stableExpensesLabel || "Stable Expenses",
      fontSize: 12,
      // bold: true,
      margin: [0, 10, 0, 5],
    });

    const stableBody = [
      [
        { text: t.details || "Details", style: "tableHeader", fillColor: "#2196F3" },
        { text: t.rateLabel2 || t.rateLabel || "Rate", style: "tableHeader", fillColor: "#2196F3" },
        { text: t.totalLabel || "Total", style: "tableHeader", fillColor: "#2196F3" },
      ],
      ...(stableExpensesDefault || []).map((defaultItem, idx) => {
        const e = (data.stableExpenses || [])[idx] || {};
        const translatedName = getTranslatedItem(defaultItem.item, language);
        return [
          { text: translatedName || "" },
          safeCell(e.rate, "0"),
          safeCell((Number(e.rate || 0) * Number(data.totalAnimals || 0)).toFixed(2)),
        ];
      }),
      [
        { text: t.totalStableExpenseLabel || "Total Stable Expense", bold: true, fillColor: "#2196F3", color: "white" },
        { text: "", fillColor: "#2196F3" },
        { text: summary.totalStableExp.toFixed(2), bold: true, fillColor: "#2196F3", color: "white" },
      ],
    ];

    content.push({
      table: {
        widths: ["*", "*", "*"],
        body: stableBody,
      },
      style: "table",
      margin: [0, 0, 0, 10],
    });

    // Vaidan/Fodder Expenses
    content.push({
      text: t.FodderExpensesLabel || "Fodder Expenses",
      fontSize: 12,
      // bold: true,
      margin: [0, 10, 0, 5],
      pageBreak: "before"
    });

    const vaidanBody = [
      [
        { text: t.details || "Details", style: "tableHeader", fillColor: "#9C27B0" },
        { text: t.quantityLabel || "Quantity", style: "tableHeader", fillColor: "#9C27B0" },
        { text: t.rateLabel2 || t.rateLabel || "Rate", style: "tableHeader", fillColor: "#9C27B0" },
        { text: t.totalLabel || "Total", style: "tableHeader", fillColor: "#9C27B0" },
      ],
      ...(vaidanExpensesDefault || []).map((defaultItem, idx) => {
        const e = (data.vaidanExpenses || [])[idx] || {};
        const translatedName = getTranslatedItem(defaultItem.item, language);
        return [
          { text: translatedName || "" },
          safeCell(e.praman, "0"),
          safeCell(e.rate, "0"),
          safeCell((Number(e.praman || 0) * Number(e.rate || 0)).toFixed(2)),
        ];
      }),
      [
        { text: t.totalFodderExpenseLabel || "Total Fodder Expense", bold: true, fillColor: "#9C27B0", color: "white" },
        { text: "", fillColor: "#9C27B0" },
        { text: "", fillColor: "#9C27B0" },
        { text: summary.totalVaidanExp.toFixed(2), bold: true, fillColor: "#9C27B0", color: "white" },
      ],
    ];

    content.push({
      table: {
        widths: ["*", "*", "*", "*"],
        body: vaidanBody,
      },
      style: "table",
      margin: [0, 0, 0, 10],
    });

    // Food Expenses
    content.push({
      text: t.foodExpensesLabel || "Food Expenses",
      fontSize: 12,
      // bold: true,
      margin: [0, 10, 0, 5],
      // pageBreak: "before"
    });

    const foodBody = [
      [
        { text: t.details || "Details", style: "tableHeader", fillColor: "#FF9800" },
        { text: t.quantityLabel || "Quantity", style: "tableHeader", fillColor: "#FF9800" },
        { text: t.rateLabel2 || t.rateLabel || "Rate", style: "tableHeader", fillColor: "#FF9800" },
        { text: t.totalLabel || "Total", style: "tableHeader", fillColor: "#FF9800" },
      ],
      ...(foodExpensesDefault || []).map((defaultItem, idx) => {
        const e = (data.foodExpenses || [])[idx] || {};
        const translatedName = getTranslatedItem(defaultItem.item, language);
        return [
          { text: translatedName || "" },
          safeCell(e.qty, "0"),
          safeCell(e.rate, "0"),
          safeCell((Number(e.qty || 0) * Number(e.rate || 0)).toFixed(2)),
        ];
      }),
      [
        { text: t.totalFoodExpenseLabel || "Total Food Expense", bold: true, fillColor: "#FF9800", color: "white" },
        { text: "", fillColor: "#FF9800" },
        { text: "", fillColor: "#FF9800" },
        { text: summary.totalFoodExp.toFixed(2), bold: true, fillColor: "#FF9800", color: "white" },
      ],
    ];

    content.push({
      table: {
        widths: ["*", "*", "*", "*"],
        body: foodBody,
      },
      style: "table",
      margin: [0, 0, 0, 10],
    });

    // Individual Financial Summary
    content.push({
      text: `${t.financialSummaryLabel || "Financial Summary"} (${label})`,
      fontSize: 14,
      // bold: true,
      color: "#009688",
      margin: [0, 15, 0, 8],
    });

    content.push({
      table: {
        widths: ["*", "*"],
        body: [
          [
            { text: t.details || "Details", style: "tableHeader", fillColor: "#009688" },
            { text: t.value || "Value", style: "tableHeader", fillColor: "#009688" },
          ],
          [
            { text: t.totalIncomeLabel || "Total Income" },
            safeCell(totalIncome.toFixed(2))
          ],
          [
            { text: t.totalExpensesLabel || "Total Expenses" },
            safeCell(totalExpenses.toFixed(2))
          ],
          [
            { text: t.netProfitLabel || "Net Profit" },
            safeCell(netProfit.toFixed(2))
          ],
          [
            { text: t.incomePerLiterLabel || "Income Per Liter" },
            safeCell(incomePerLiter.toFixed(2))
          ],
          [
            { text: t.costPerLiterLabel || "Cost Per Liter" },
            safeCell(costPerLiter.toFixed(2))
          ],
          [
            { text: t.profitPerLiterLabel || "Profit Per Liter" },
            safeCell(profitPerLiter.toFixed(2))

          ],
        ],
      },
      style: "table",
      margin: [0, 0, 0, 10],
    });
  }

  // Final Combined Summary
  const cow = animals[0].data;
  const buffalo = animals[1].data;

  const totalMilkLiters =
    Number(cow.totalMilkProduction || 0) +
    Number(buffalo.totalMilkProduction || 0);

  const avgIncomePerLiter =
    totalMilkLiters > 0 ? combined.totalMilkIncome / totalMilkLiters : 0;
  const avgCostPerLiter =
    totalMilkLiters > 0 ? combined.expenses / totalMilkLiters : 0;

  // Combined Income per Liter
  const combinedIncomePerLiter =
    combined.totalMilkProduction > 0
      ? combined.totalMilkIncome / combined.totalMilkProduction
      : 0;

  // Combined Cost per Liter
  const combinedCostPerLiter =
    combined.totalMilkProduction > 0
      ? combined.expenses / combined.totalMilkProduction
      : 0;


  const avgProfitPerLiter =
    combinedIncomePerLiter - combinedCostPerLiter;


  content.push({
    text: t.combinedSummaryLabel || "Combined Summary",
    fontSize: 14,
    // bold: true,
    color: "#009688",
    margin: [0, 20, 0, 8],
    pageBreak: "before"
  });

  content.push({
    table: {
      widths: ["*", "*"],
      body: [
        [
          { text: t.details || "Details", style: "tableHeader", fillColor: "#009688" },
          { text: t.value || "Value", style: "tableHeader", fillColor: "#009688" },
        ],
        [
          { text: t.totalIncomeLabel || "Total Income" },
          safeCell(combined.income.toFixed(2))
        ],
        [
          { text: t.totalExpensesLabel || "Total Expenses" },
          safeCell(combined.expenses.toFixed(2))
        ],
        [
          { text: t.totalProfitLabel || "Total Profit" },
          safeCell(combined.profit.toFixed(2))
        ],
        [
          { text: t.incomePerLiterLabel || "Income Per Liter" },
          safeCell(avgIncomePerLiter.toFixed(2))
        ],
        [
          { text: t.costPerLiterLabel || "Cost Per Liter" },
          safeCell(avgCostPerLiter.toFixed(2))
        ],
        [
          { text: t.profitPerLiterLabel || "Profit Per Liter" },
          safeCell(avgProfitPerLiter.toFixed(2))
        ],
      ],
    },
    style: "table",
  });



  // Document definition
  const docDefinition = {
    content: content,


    // Footer - optional (हर page पर नीचे)
    footer: function (currentPage, pageCount) {
      return {
        text: `© ${new Date().getFullYear()} ${"Vetrina Healthcare Pvt.Ltd." || "Dairy Management System"}`,
        alignment: 'center',
        fontSize: 9,
        color: '#888',
        margin: [0, 10, 0, 0]
      };
    },

    defaultStyle: {
      font: font,
    },
    // features: {
    //   ligatures: false, // GPOS closing code
    // },
    styles: {
      header: {
        fontSize: 18,
        // bold: true,
      },
      table: {
        fontSize: 11,
        alignment: "center",
      },
      tableHeader: {
        // bold: true,
        fontSize: 11,
        color: "white",
        alignment: "center",
      },
    },
    pageSize: "A4",
    pageMargins: [40, 40, 40, 40],
  };


  // Generate and download PDF
  const fileName = t.fileNameLabel || "Dairy_Management_Report";
  pdfMake.createPdf(docDefinition).download(
    `${fileName}_${new Date().toLocaleDateString("en-IN")}.pdf`
  );
};

