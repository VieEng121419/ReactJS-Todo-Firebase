import React, { createContext, useContext } from "react";
import { useProjects } from "../hooks";

//Initiate Context
export const ProjectsContext = createContext();
//Provide Context
export const ProjectsProvider = ({ children }) => {
  const { projects, setProjects } = useProjects();
  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};
export const useProjectsValue = () => useContext(ProjectsContext);
