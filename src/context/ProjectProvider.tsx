'use client';
import { PropsWithChildren, FC, useState, createContext } from 'react';
import { WORK_LIST, WorkType } from '@/const/works';

type ProjectContextValue = {
  selectedProject: WorkType;
  handleProjectSelect: (project: WorkType) => void;
};

export const ProjectContext = createContext<ProjectContextValue>({
  selectedProject: WORK_LIST[0],
  handleProjectSelect: () => {},
});

export const ProjectProvider: FC<PropsWithChildren> = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState<WorkType>(
    WORK_LIST[0]
  );

  const handleProjectSelect = (project: WorkType) => {
    setSelectedProject(project);
  };

  return (
    <ProjectContext.Provider value={{ selectedProject, handleProjectSelect }}>
      {children}
    </ProjectContext.Provider>
  );
};
