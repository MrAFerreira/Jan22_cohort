import React from 'react';

const heading = <h1>Hello Ironhacker</h1>;
const student = {
  firstName: 'José',
  lastName: 'Pereira',
};
const student2 = {
  firstName: 'vitor',
  lastName: 'dalbem',
};

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

const Gallery = () => {
  return (
    <div className="yellow" id={student.firstName}>
      {heading}
      <h3>
        <label htmlFor=""></label>
        Hello, {student.firstName.toUpperCase()} {student.lastName}
      </h3>
      <h3>
        Hello, {capitalize(student2.firstName)} {capitalize(student2.lastName)}
      </h3>
    </div>
  );
};

export default Gallery;
