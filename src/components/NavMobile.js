import React from 'react';

import { Link } from 'react-scroll';

// import data
import { nav } from '../data';

const menuHandler = () => {
  const menuClosed = document.getElementById('nav').className;
  const menuClose = menuClosed === '' ? '' : 'hidden';
  document.getElementById('nav').className = menuClose;
};

const NavMobile = ({ navMobile }) => {
  return (
    <nav
      className={`${
        navMobile ? 'min-h-screen' : 'min-h-0'
      } lg:hidden w-full bg-neutral-500 fixed top-0 left-0 right-0 -bottom-12 -z-10 overflow-hidden transition-all h-0`}
      id='nav'
    >
      <ul className='w-full h-full flex flex-col justify-center items-center gap-y-6'>
        {nav.map((item, idx) => {
          return (
            <li key={idx}>
              <Link
                onClick={menuHandler}
                to={item.name}
                activeClass='active'
                smooth='true'
                duration={1300}
                offset={-100}
                className='cursor-pointer text-white text-body-md'
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* buttons */}
      <div className='-mt-24 flex justify-center'>
        <button className='btn btn-lg text-white'>Log in</button>
        <button className='btn btn-lg btn-primary'>Sign up</button>
      </div>
    </nav>
  );
};

export default NavMobile;
