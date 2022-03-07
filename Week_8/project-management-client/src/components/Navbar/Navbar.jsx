import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/"> Homepage</Link>
      <Link to="/projects"> Projects</Link>
    </nav>
  );
}

export default Navbar;
