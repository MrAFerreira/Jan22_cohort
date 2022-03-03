import React, { useEffect, useLayoutEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function QueryExample() {
  const [searchParams, setSearchParams] = useSearchParams();

  const city = searchParams.get('city');
  const name = searchParams.get('name');

  useEffect(() => {
    console.log(city);
    console.log(name);
  }, []);
  return (
    <div>
      <h2>Query Example</h2>
      <p>{city}</p>
      <p>{name}</p>
    </div>
  );
}

export default QueryExample;
