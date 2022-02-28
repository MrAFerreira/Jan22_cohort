import React from 'react';
import './StudentList.css';

function StudentList(props) {
  return (
    <div>
      <h2>Student List</h2>
      <div className="student-list">{props.children}</div>
    </div>
  );
}

export default StudentList;
