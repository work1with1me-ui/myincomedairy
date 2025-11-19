import { createContext, useState, useContext } from "react";

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  return (
    <SidebarContext.Provider
      value={{ sidebarOpen, setSidebarOpen, sidebarExpanded, setSidebarExpanded }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);
