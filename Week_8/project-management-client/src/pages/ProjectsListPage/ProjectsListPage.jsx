import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddForm from '../../components/AddForm/AddForm';

function ProjectsListPage() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/projects`);
      setProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      <AddForm refreshProjects={fetchProjects} />
      {projects.map((project) => {
        return (
          <div key={project._id}>
            <Link to={`/projects/${project._id}`}>
              <h3>{project.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectsListPage;
