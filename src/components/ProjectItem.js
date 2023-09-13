import React from 'react';

function ProjectItem({ name, about, technologies }) {
  const technologySpan = technologies.map((e) => {
    return <span key={e}>{e}</span>;
  });
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{technologySpan}</div>
    </div>
  );
}

export default ProjectItem;
