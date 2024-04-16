import React from 'react';

const Header = () => {
  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">CELL INNOVATION</h1>
        <nav>
          <button className="md:hidden block mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <ul className="hidden md:flex space-x-4">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#events" className="hover:underline">
                Events
              </a>
            </li>
            <li>
              <a href="#team" className="hover:underline">
                Our Team
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#fin" className="hover:underline">
                fin
              </a>
            </li>
          </ul>
          <div className="md:hidden absolute top-0 left-0 w-full h-full bg-black flex flex-col justify-center items-center">
            <ul className="text-center">
              <li>
                <a href="#home" className="block text-white hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#events" className="block text-white hover:underline">
                  Events
              </a>
              </li>
              <li>
                <a href="#team" className="block text-white hover:underline">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#about" className="block text-white hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="block text-white hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#fin" className="block text-white hover:underline">
                  fin
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;