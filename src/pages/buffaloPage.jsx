import React from "react";
import MilkProduction from "./MilkProduction";
import ExpensesSection from "./ExpensesSection";
import FinancialSummary from "./FinancialSummary";

const BuffaloPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">
         म्हशीचे व्यवस्थापन (Buffalo Management)
        </h2>
                   
        <MilkProduction animal="म्हैस" />
        <ExpensesSection animal="म्हैस" />
        <FinancialSummary animal="म्हैस" />
      </div>
    </div>
  );
};

export default BuffaloPage;
