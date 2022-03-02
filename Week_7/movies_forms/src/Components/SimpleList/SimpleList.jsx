import React from 'react';

const numbersList = [<li>2</li>, <li>3</li>, <li>4</li>, <li>1</li>];

function SimpleList() {
  return (
    <div className="list">
      <h2>List</h2>
      {numbersList}
    </div>
  );
}

export default SimpleList;
