import React from 'react';

import { Link } from 'react-scroll';
import { nav } from '../data';

const Nav = () => {
  return (
    <nav className='hidden lg:flex'>
      <ul className='flex text-white gap-x-8'>
        {nav.map((item, idx) => {
          return (
            <li className='cursor-pointer' key={idx}>
              <Link
                to={item.name}
                activeClass='active'
                smooth='true'
                duration={1300}
                offset={-100}
                className='hover:text-primary-200 transition'
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
