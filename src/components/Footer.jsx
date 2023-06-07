import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white w-full py-6 mt-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <a href="/" className="block mb-4">
            <img style={{ width: 50, height: 50 }} src="https://summitsoft.com/wp-content/uploads/2020/05/Icon-graphic-ADVANTAGES.png" alt="logo" />
            </a>
            <p className="text-sm">&copy; {year}. All Rights Reserved.</p>
          </div>
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a href="/teams" className="text-white hover:text-light py-1">Teams</a>
              <a href="/drinks" className="text-white hover:text-light py-1">Drinks</a>
              <a href="/stores" className="text-white hover:text-light py-1">Stores</a>
              <a href="/business-challenges" className="text-white hover:text-light py-1">Business Challenges</a>
              <a href="/workshops" className="text-white hover:text-light py-1">Workshops</a>
              <a href="/contact" className="text-white hover:text-light py-1">Contact</a>
              <a href="/logout" className="text-white hover:text-light py-1">Logout</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
