import { useState, useEffect } from 'react';
import axios from 'axios';

function ApartmentsPage() {
  const [apartments, setApartments] = useState([]);

  const fetchData = async () => {
    try {
      let response = await axios.get('https://ironbnb-m3.herokuapp.com/apartments');

      let apartmentsFromAPI = response.data;
      console.log(apartmentsFromAPI);
      setApartments(apartmentsFromAPI);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h3>List of apartments</h3>
      {apartments.map((apartment) => (
        <div className="card" key={apartment._id}>
          <img src={apartment.img} alt="apartment" />
          <h3>{apartment.title}</h3>
          <p>Price : {apartment.pricePerDay}</p>
        </div>
      ))}
    </div>
  );
}

export default ApartmentsPage;
