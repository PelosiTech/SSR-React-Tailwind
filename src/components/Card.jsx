import React from 'react';

const Card = ({header, subHeader, description }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
      <div className="flex flex-col bg-[#032191] rounded-lg shadow-lg p-6">
        <h2 className="text-xl text-white font-bold">{header}</h2>
        <h3 className="text-lg text-light mt-4">{subHeader}</h3>
        <p className="text-base text-white mt-2">{description}</p>
      </div>
    </div>
  );
}

export default Card;
