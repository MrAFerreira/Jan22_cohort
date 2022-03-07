import React, { useState } from 'react';
import axios from 'axios';

function AddForm(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { title, description };

    axios
      .post(`${process.env.REACT_APP_API_URL}/projects`, body)
      .then((response) => {
        setTitle('');
        setDescription('');
        props.refreshProjects();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Add Project</h3>
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
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
}

export default AddForm;
