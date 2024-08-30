import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import FilterButton from '../components/DropdownFilter';
import Datepicker from '../components/Datepicker';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard13 from '../partials/dashboard/DashboardCard13';
import Banner from '../partials/Banner';

import GPUUsage from '../partials/dashboard/gpusage';
import Billing from '../partials/dashboard/billing';
import RequestC from '../partials/dashboard/requestc';;
import Activity from '../partials/dashboard/DashboardCard12';

function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

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

            </div>

            {/* Cards */}
            
            <div className="grid grid-cols-3 grid-rows-2 gap-3">
                {/* <!-- a: Row 1, Column 1 --> */}
                <div className="bg-gray-400 hover:bg-gray-100 p-4 rounded-xl"><GPUUsage /></div>
                
                {/* <!-- b: Row 1, Column 2 --> */}
                <div className="bg-gray-400 hover:bg-gray-200 p-4 rounded-xl"><Billing /></div>
                
                {/* <!-- d: Row 1 and Row 2, Column 3 --> */}
                <div className="bg-gray-400 hover:bg-gray-200 p-4 col-span-1 row-span-2 rounded-xl"><RequestC /></div>
                
                {/* <!-- c: Row 2, Column 1 and Column 2 --> */}
                <div className="bg-gray-400 hover:bg-gray-200 p-4 col-span-2 rounded-xl"><Activity /></div>
              </div>

          </div>
        </main>

      </div>
    </div>
  );
}

export default Dashboard;