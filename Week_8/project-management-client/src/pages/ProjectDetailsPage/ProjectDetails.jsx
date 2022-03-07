import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function ProjectDetails() {
  const [project, setProject] = useState(null);
  const { projectId } = useParams();

  const fetchProject = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/projects/${projectId}`);
      setProject(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProject();
  }, []);

  return (
    <div>
      {project && (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </>
      )}
      {project &&
        project.tasks.map((task) => (
          <li key={task._id}>
            <h3>{task.title}</h3>
            <h4>Description</h4>
            <p>{task.description}</p>
          </li>
        ))}

      {project && <Link to={`/projects/edit/${project._id}`}>Edit Project</Link>}
      <Link to="/projects"> Back to Project List</Link>
    </div>
  );
}

export default ProjectDetails;
