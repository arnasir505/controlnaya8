import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand bg-body-tertiary'>
      <div className='container justify-content-between'>
        <Link to={'/'} className='navbar-brand fw-bold'>Quotes Library</Link>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/'>
              Quotes
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/add-quote'>
              Add New Quote
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
