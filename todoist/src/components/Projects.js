import { useState } from "react";
import { useProjectsValue, useSelectedProjectsValue } from "../context";
import { IndividualProject } from "./IndividualProject";

export const Projects = ({ activeValue = null }) => {
  const [active, setActive] = useState(activeValue);
  const { setSelectedProjects } = useSelectedProjectsValue();
  const { projects } = useProjectsValue();
  return (
    projects &&
    projects.map((project) => (
      <li
        key={project.projectId}
        data-testid={project.docId}
        className={
          active === project.projectId
            ? "active sidebar__project"
            : "sidebar__project"
        }
        onKeyDown={() => {
          setActive(project.projectId);
          setSelectedProjects(project.projectId);
        }}
        onClick={() => {
          setActive(project.projectId);
          setSelectedProjects(project.projectId);
        }}
      >
        <IndividualProject project={project} />
      </li>
    ))
  );
};
