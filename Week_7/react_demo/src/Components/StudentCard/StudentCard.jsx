import React from 'react';

function StudentCard(props) {
  console.log(props);
  return (
    <div>
      <p>
        <b>Name:</b> {props.name}
      </p>
      <p>
        <b>Cohort:</b> {props.info.city} - {props.info.course}
      </p>
      <p>
        <b>Current Week:</b> {props.week}
      </p>
      <br />
    </div>
  );
}

export default StudentCard;
