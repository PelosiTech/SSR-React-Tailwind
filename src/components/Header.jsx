import React from 'react';
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <header className="bg-primary text-white w-full py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <a href="/" className="block">
                <img style={{ width: 50, height: 50 }} src="https://summitsoft.com/wp-content/uploads/2020/05/Icon-graphic-ADVANTAGES.png" alt="logo" />
            </a>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><a href="/teams" className="text-white hover:text-light py-1">Teams</a></li>
              <li><a href="/drinks" className="text-white hover:text-light py-1">Drinks</a></li>
              <li><a href="/stores" className="text-white hover:text-light py-1">Stores</a></li>
              <li><a href="/business-challenges" className="text-white hover:text-light py-1">Business Challenges</a></li>
              <li><a href="/workshops" className="text-white hover:text-light py-1">Workshops</a></li>
              <li><a href="/contact" className="text-white hover:text-light py-1">Contact</a></li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <a href="/logout">
                <CgProfile size={42} alt="Profile" className="h-12 inline-block" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
