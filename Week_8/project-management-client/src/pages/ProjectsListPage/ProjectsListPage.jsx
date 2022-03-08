import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddForm from '../../components/AddForm/AddForm';
import { ThemeContext } from '../../context/theme.context';

function ProjectsListPage() {
  const [projects, setProjects] = useState([]);

  const { theme } = useContext(ThemeContext);

  const fetchProjects = async () => {
    try {
      const storedToken = localStorage.getItem('authToken');

      let response = await axios.get(`${process.env.REACT_APP_API_URL}/projects`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });
      setProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className={'ProjectsPage ' + theme}>
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
