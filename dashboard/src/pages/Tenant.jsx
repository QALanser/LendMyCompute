import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import GPUUsage from '../partials/dashboard/gpusage';
import Billing from '../partials/dashboard/billing';
import RequestC from '../partials/dashboard/requestc';;
import Activity from '../partials/dashboard/activityc';

function Dashboard() {

  // Step 1: State to hold the timer value in seconds
  const [timerValue, setTimerValue] = useState(0);

  
  // Function to handle Tenant click

  const navigate = useNavigate(); // Initialize useNavigate hook
  const handleTenantClick = () => {
    navigate('/lender'); // Navigate to the Tenant page
  };


  // Step 2: Handler function to set the timer value when RequestC submits
  const handleSetTimer = (time) => {
    // Convert hours to seconds and update the state
    
    setTimerValue(time * 3600);
  };

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto ">

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8 ">

              {/* Left: Title */}
              <div className="mb-4 sm:mb-0 ">
                <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Lend My Compute</h1>
              </div>

              <div className="flex items-center justify-center  p-4 space-x-8">
                <div
                  className="p-3 text-2xl font-bold text-gray-100  rounded-lg cursor-pointer"
                  onClick={() => {}}
                >
                  Tenant
                </div>
                <div
                  className="p-3 text-2xl font-bold text-gray-100  rounded-lg cursor-pointer"
                  onClick={handleTenantClick}
                >
                  Lender
                </div>

                <div>
              <button
                type="submit" 
                className="w-full text-2xl font-bold py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              >
                Logout
              </button>
            </div>
              </div>

            </div>

            {/* Cards */}
            
            <div className="grid grid-cols-3 grid-rows-2 gap-3">
                {/* <!-- a: Row 1, Column 1 --> */}
                <div className="bg-gray-400 shadow-no-shadow hover:shadow-hover-white transition-shadow duration-300 rounded-xl"><GPUUsage /></div>
                
                {/* <!-- b: Row 1, Column 2 --> */}
                <div className="bg-gray-400 shadow-no-shadow hover:shadow-hover-white transition-shadow duration-300 rounded-xl"><Billing /></div>
                
                {/* <!-- d: Row 1 and Row 2, Column 3 --> */}
                <div className="bg-gray-400 shadow-no-shadow hover:shadow-hover-white transition-shadow duration-300  col-span-1 row-span-2 rounded-xl"><RequestC onSetTimer={handleSetTimer} /></div>
                
                {/* <!-- c: Row 2, Column 1 and Column 2 --> */}
                <div className="bg-gray-400 shadow-no-shadow hover:shadow-hover-white transition-shadow duration-300  col-span-2 rounded-xl"><Activity timerValue={timerValue} /></div>
              </div>

          </div>
        </main>

      </div>
    </div>
  );
}

export default Dashboard;