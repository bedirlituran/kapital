import React, { useState } from 'react';

const Hero2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between p-3 bg-[#e8e8e5]">
        <div className='flex items-center justify-center gap-2'>
        <h1 className="text-3xl text-mavi2">Kapital </h1><span className='text-3xl'>Telecom</span>
        </div>
      
      <div className="flex md:hidden">
        <button onClick={toggleMenu} id="hamburger">
          <img
            className={`${isOpen ? 'hidden' : 'block'} toggle`}
            src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
            width="40"
            height="40"
            alt="menu"
          />
          <img
            className={`${isOpen ? 'block' : 'hidden'} toggle`}
            src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
            width="40"
            height="40"
            alt="close"
          />
        </button>
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } toggle w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 md:border-none`}
      >
        {['Home', 'Services', 'About us', 'Gallery', 'Visit Us'].map((item) => (
          <a
            key={item}
            href={`#${item.replace(/\s+/g, '').toLowerCase()}`}
            className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
          >
            {item}
          </a>
        ))}
      </div>
      <div className="toggle w-full text-end hidden md:flex md:w-auto px-2 py-2 md:rounded">
        <a href="tel:+123">
          <div className="flex justify-end">
            <div className="flex items-center h-10 w-30 rounded-md bg-[#c8a876] text-white font-medium p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              Call now
            </div>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Hero2;
