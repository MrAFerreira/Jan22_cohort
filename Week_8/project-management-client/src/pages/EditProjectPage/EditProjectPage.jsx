import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditProjectPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { projectId } = useParams();

  const navigate = useNavigate();

  const deleteProject = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/projects/${projectId}`)
      .then(() => navigate('/projects'));
  };

  const fetchProject = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/projects/${projectId}`);
      let { title, description } = response.data;
      setTitle(title);
      setDescription(description);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProject();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { title, description };

    axios
      .put(`${process.env.REACT_APP_API_URL}/projects/${projectId}`, body)
      .then((response) => {
        setTitle('');
        setDescription('');
        navigate(`/projects/${projectId}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Edit Project</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Edit Project</button>
      </form>
      <button onClick={deleteProject}> Delete Project</button>
    </div>
  );
}

export default EditProjectPage;
