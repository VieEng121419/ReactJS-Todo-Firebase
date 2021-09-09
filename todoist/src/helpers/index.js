import { collatedTasks } from "../constants";

export const collatedTasksExist = (selectedProject) => {
  const selectProject = collatedTasks.find(
    (task) => task.key === selectedProject
  );
  return selectProject;
};

export const getTitle = (projects, projectId) => {
  const title = projects.find((project) => project.projectId === projectId);
  return title;
};

export const getCollatedTitle = (projects, key) => {
  const collatedTitle = projects.find((project) => project.key === key);
  return collatedTitle;
};

export const generatePushId = (() => {
  const PUSH_CHARS =
    "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";

  const lastRandChars = [];

  return function () {
    let now = new Date().getTime();

    const timeStampChars = new Array(8);
    for (var i = 7; i >= 0; i--) {
      timeStampChars[i] = PUSH_CHARS.charAt(now % 64);
      now = Math.floor(now / 64);
    }

    let id = timeStampChars.join("");

    for (i = 0; i < 12; i++) {
      id += PUSH_CHARS.charAt(lastRandChars[i]);
    }

    return id;
  };
})();
