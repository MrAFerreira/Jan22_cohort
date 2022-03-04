import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>

      <NavLink to="/apartments/new">Add Apartment</NavLink>
    </nav>
  );
}

export default Navbar;
