import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddApartmentPage() {
  const [price, setPrice] = useState(1);
  const [title, setTitle] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { title, pricePerDay: price };

    axios
      .post('https://ironbnb-m3.herokuapp.com/apartments', body)
      .then((response) => {
        console.log(response);
        setTitle('');

        setPrice(1);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="AddApartmentPage">
      <h3>Add New Apartment</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor="price">Price</label>
        <input type="number" onChange={(e) => setPrice(e.target.value)} />
        <button type="submit">Add apartment</button>
      </form>
    </div>
  );
}

export default AddApartmentPage;
