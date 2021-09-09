import React, { createContext, useContext, useState } from "react";

//Initiate Context
export const SelectedProjectsContext = createContext();
//Provide Context
export const SelectedProjectsProvider = ({ children }) => {
  const [selectedProjects, setSelectedProjects] = useState("INBOX");
  return (
    <SelectedProjectsContext.Provider
      value={{ selectedProjects, setSelectedProjects }}
    >
      {children}
    </SelectedProjectsContext.Provider>
  );
};
export const useSelectedProjectsValue = () =>
  useContext(SelectedProjectsContext);
