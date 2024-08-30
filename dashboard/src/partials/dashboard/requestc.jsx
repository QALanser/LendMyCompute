import React, { useEffect, useState } from 'react';

import Image01 from '../../images/user-36-05.jpg';
import Image02 from '../../images/user-36-06.jpg';
import Image03 from '../../images/user-36-07.jpg';
import Image04 from '../../images/user-36-08.jpg';
import Image05 from '../../images/user-36-09.jpg';

import img1 from '../../images/Web-developer.svg';

function Form() {

  return (
    <div className="h-full dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Request Resource</h2>
      </header> 

      <div className="h-full ">

        {/* Form*/}
        <div className="overflow-x-auto p-3">

        <div className='bg-gray-100 rounded-xl mb-3'>
   
        <img src={img1} className="h-flex w-flex p-3" alt="Description" />
        
        </div>

            <form className="h-full p-10 space-y-6 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50 p-4 rounded-xl shadow-md">

            {/* Number of Hours */}
            <div>
              <label htmlFor="time" className="block text-lg font-medium text-gray-700 dark:text-gray-300">
                Time
              </label>
              <input
                id="time"
                type="number"
                placeholder="Enter the number of hours"
                className=" mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300"
              />
            </div>

            {/* Number of Cores */}
            <div>
              <label htmlFor="core" className="block text-lg font-medium text-gray-700 dark:text-gray-300">
                Cores
              </label>
              <input
                id="core"
                type="number"
                placeholder="Number of cores"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300"
              />
            </div>

            {/* Memory in GB */}
            <div>
              <label htmlFor="memory" className="block text-lg font-medium text-gray-700 dark:text-gray-300">
                Memory
              </label>
              <input
                id="memory"
                type="number"
                placeholder="Memory required (GB) "
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300"
              />
            </div>

            {/* GPU Ram */}
            <div>
              <label htmlFor="gpu-time" className="block text-lg font-medium text-gray-700 dark:text-gray-300">
                GPU Ram
              </label>
              <input
                id="gpu-ram"
                type="number"
                placeholder="GPU time required (hours)"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300"
              />
            </div>

            {/* GPU Count */}
            <div>
              <label htmlFor="gpu-count" className="block text-lg font-medium text-gray-700 dark:text-gray-300">
                GPU Count
              </label>
              <input
                id="gpu-count"
                type="number"
                placeholder="Number of GPUs"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              >
                LAUNCH
              </button>
            </div>
          </form>


        </div>

      </div>
    </div>
  );
}

export default Form;
