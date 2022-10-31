import React, { useState, useEffect } from 'react';

import { RiArrowUpSLine } from 'react-icons/ri';
import { animateScroll as scroll } from 'react-scroll';

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() =>
    window.addEventListener('scroll', () => {
      return window.scrollY > 200 ? setShow(true) : setShow(false);
    })
  );

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    show && (
      <buton
        onClick={() => scrollToTop()}
        className='btn btn-sm btn-primary flex items-center justify-center text-white font-medium w-14 h-14 fixed bottom-[13%] right-[6%] z-50 transition-all cursor-pointer'
      >
        <div className='text-3xl'>
          <RiArrowUpSLine />
        </div>
      </buton>
    )
  );
};

export default ScrollToTop;
