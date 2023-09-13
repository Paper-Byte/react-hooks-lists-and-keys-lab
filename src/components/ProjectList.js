import React from 'react';
import ProjectItem from './ProjectItem';

function ProjectList({ projects }) {
  console.log(projects);
  const projectsList = projects.map((e) => {
    return <ProjectItem technologies={e.technologies} key={e.id} />;
  });
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectsList}</div>
    </div>
  );
}

export default ProjectList;
