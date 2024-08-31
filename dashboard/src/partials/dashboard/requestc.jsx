import React, { useState } from 'react';
import img1 from '../../images/Server-amico.svg';

function Form({ onSetTimer }) {

  const [time, setTime] = useState('');
  const [core, setCore] = useState('');
  const [memory, setMemory] = useState('');
  const [gpuRam, setGpuRam] = useState('');
  const [gpuCount, setGpuCount] = useState('');
  const [timerId, setTimerId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (!time || isNaN(time) || time <= 0) {
      alert("Please enter a valid number of hours");
      return;
    }

    onSetTimer(Number(time)); 

    // Reset all form inputs
    setTime('');
    setCore('');
    setMemory('');
    setGpuRam('');
    setGpuCount('');
  };

  return (
    <div className="h-full dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Request Resource</h2>
      </header> 

      <div className="h-full ">

        {/* Form*/}
        <div className="overflow-x-auto p-3">
          

          <form onSubmit={handleSubmit} className="h-full p-10 space-y-6 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50 p-4 rounded-xl shadow-md">
            <img src={img1} className="h-flex w-flex p-3" alt="Description" />
            {/* Number of Hours */}
            <div>
              <label htmlFor="time" className="block text-lg font-medium text-gray-700 dark:text-gray-300">
                Time
              </label>
              <input
                id="time"
                type="number"
                placeholder="Enter the number of hours"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300"
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
                value={core}
                onChange={(e) => setCore(e.target.value)}
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
                placeholder="Memory required (GB)"
                value={memory}
                onChange={(e) => setMemory(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300"
              />
            </div>

            {/* GPU Ram */}
            <div>
              <label htmlFor="gpu-ram" className="block text-lg font-medium text-gray-700 dark:text-gray-300">
                GPU Ram
              </label>
              <input
                id="gpu-ram"
                type="number"
                placeholder="GPU time required (hours)"
                value={gpuRam}
                onChange={(e) => setGpuRam(e.target.value)}
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
                value={gpuCount}
                onChange={(e) => setGpuCount(e.target.value)}
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
