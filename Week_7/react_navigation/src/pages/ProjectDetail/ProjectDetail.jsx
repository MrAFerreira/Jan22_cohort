import React from 'react';
import { Link, useParams } from 'react-router-dom';
import projectsData from '../../projects.json';

function ProjectDetail() {
  const { id } = useParams();
  //const {id} = req.params
  const foundProject = projectsData.find((oneProject) => {
    return oneProject._id === id;
  });

  return (
    <div>
      <h2>Project Details</h2>
      {!foundProject && <h1>No Project Found!</h1>}
      {foundProject && (
        <>
          <h3>Tech Stack: {foundProject.technologies}</h3>
          <p> {foundProject.description}</p>
        </>
      )}
      <Link to="/projects">Back</Link>
    </div>
  );
}

export default ProjectDetail;
