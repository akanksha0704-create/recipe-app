import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div className='container-fluid nav-bg'>
      <div className='container'>
        <nav className='navbar navbar-expand-lg'>
          <Link to='/recipe-app/' className='playfair-display fs-1'>
            <img src='/recipe-app/images/logo.png' className='logo m-0 p-0' alt='' />{' '}
            <span className='brand-name'>Culina Share</span>
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            onClick={toggleNavbar}
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className={`collapse navbar-collapse ${navbarOpen ? 'show' : ''}`}
          >
            <ul className='navbar-nav ms-md-auto'>
              <li className='nav-item ms-3 me-3 fs-5 mt-auto roboto-black'>
                <Link to='/recipe-app/'>Home</Link>
              </li>
              <li className='nav-item ms-3 me-3 fs-5 mt-auto roboto-black'>
                <Link to='/recipe-app/contribute'>Contribute</Link>
              </li>
              <li className='nav-item ms-3 me-3 fs-5 mt-auto roboto-black'>
                <Link to='/recipe-app/favorites'>Favorites</Link>
              </li>
              <li className='nav-item ms-3 me-3 fs-5 mt-auto roboto-black'>
                <Link to='/recipe-app/about-us'>About us</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
