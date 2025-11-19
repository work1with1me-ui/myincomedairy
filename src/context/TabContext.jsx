import { createContext, useContext, useState } from "react";

// Create a new context
const TabContext = createContext();

// Custom hook to easily use the context
export const useTab = () => useContext(TabContext);

// Provider to wrap your app
export const TabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("milk");

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};
