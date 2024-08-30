import React, { useState } from 'react';
import img from '../images/web.svg'; 
import img2 from '../images/app.svg';

function ContentToggle() {
  // State to keep track of the selected option
  const [selectedOption, setSelectedOption] = useState('give');

  // Function to handle option change
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Option Selection Div */}
      <div className="flex justify-center mb-4">
        <button
          className={`px-4 py-2 font-semibold rounded-l-lg ${
            selectedOption === 'give' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => handleOptionChange('give')}
        >
          Give
        </button>
        <button
          className={`px-4 py-2 font-semibold rounded-r-lg ${
            selectedOption === 'take' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => handleOptionChange('take')}
        >
          Take
        </button>
      </div>

      {/* Conditionally Rendered Divs */}
      {selectedOption === 'give' ? (
        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
          <div className="m-2 text-justify text-sm">
            <img
              alt="card img"
              className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
              src={img2}  // Ensure `img2` is properly imported or defined
            />
            <h2 className="font-semibold my-4 text-2xl text-center">Mobile App Development</h2>
            <p className="text-md font-medium">
              We develop high-quality, custom cross-platform mobile applications that are robust and optimized for performance, scalability, and accessibility.
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
          <div className="m-2 text-justify text-sm">
            <img
              alt="card img"
              className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
              src={img}  // Ensure `img` is properly imported or defined
            />
            <h2 className="font-semibold my-4 text-2xl text-center">Web Development</h2>
            <p className="text-md font-medium">
              We specialize in creating and optimizing high-quality, custom websites for businesses and organizations of all sizes. Building mobile-friendly and easy-to-use websites and applications for clients.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContentToggle;
