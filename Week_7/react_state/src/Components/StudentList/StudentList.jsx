import React from 'react';

function StudentList() {
  const students = ['Carlos', 'Francisco', 'Luciana', 'Asif', 'Guilherme'];
  return (
    <div>
      <h2>Student List</h2>
      {students.map((name, index) => {
        return <p key={index}> {name} </p>;
      })}
    </div>
  );
}

export default StudentList;
