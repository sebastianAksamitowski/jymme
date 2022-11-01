import React, { useState, useEffect } from 'react';

import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri';

import { Link } from 'react-scroll';

import { header } from '../data';

import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  // scroll event
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    });
  });

  // destructure header data
  const { logo, btnLoginText, btnSignupText } = header;
  return (
    <header
      className={`${
        isActive ? 'bg-neutral-500 py-[16px]' : 'bg-transparent py-[20px]'
      } fixed max-w-[1440px] z-30 left-0 right-0 mx-auto flex justify-between items-center px-[20px] lg:px-[80px] transition-all duration-300`}
    >
      {/* logo */}
      <Link
        to='Home'
        className='cursor-pointer transition-all'
        smooth={true}
        duration={1300}
      >
        <img className='h-[30px]' src={logo} alt='' />
      </Link>
      {/* nav - initially hidden - show on desktop */}
      <Nav />
      {/* nav menu btn - hide on desktop */}
      <div
        onClick={() => setNavMobile(!navMobile)}
        className='lg:hidden absolute right-4'
      >
        {navMobile ? (
          <RiCloseFill className='text-primary-200 text-3xl cursor-pointer' />
        ) : (
          <RiMenu4Fill className='text-primary-200 text-3xl cursor-pointer' />
        )}
      </div>
      <NavMobile navMobile={navMobile} setNavMobile={setNavMobile} />
      {/* btns - initially hidden - show on desktop */}
      <div className='hidden lg:flex space-x-4'>
        <button className='btn btn-sm text-white hover:text-primary-200 transition'>
          {btnLoginText}
        </button>
        <button className='btn btn-sm btn-primary'>{btnSignupText}</button>
      </div>
    </header>
  );
};

export default Header;
