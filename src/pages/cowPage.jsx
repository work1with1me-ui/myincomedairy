import React from "react";
import MilkProduction from "./MilkProduction";
import ExpensesSection from "./ExpensesSection";
import FinancialSummary from "./FinancialSummary";

const CowPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          गाईचे व्यवस्थापन (Cow Management)
        </h2>

        <MilkProduction animal="गाय" />
        <ExpensesSection animal="गाय" />
        <FinancialSummary animal="गाय" />
      </div>
    </div>
  );
};

export default CowPage;


