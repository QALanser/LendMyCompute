import React from 'react';
import DoughnutChart from '../../charts/DoughnutChart';

import { tailwindConfig } from '../../utils/Utils';

function DashboardCard06() {

  const chartData = {
    labels: [],
    datasets: [
      {
        label: 'Amount',
        data: [
           30,70,
        ],
        backgroundColor: [
          tailwindConfig().theme.colors.violet[500],
          tailwindConfig().theme.colors.sky[500],
          tailwindConfig().theme.colors.violet[800],
        ],
        hoverBackgroundColor: [
          tailwindConfig().theme.colors.violet[600],
          tailwindConfig().theme.colors.sky[600],
          tailwindConfig().theme.colors.violet[900],
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="h-full p-2 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Billing</h2>
      </header>

      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <div className="pieChart">
        <DoughnutChart data={chartData} width={350} height={250} />
      </div>

      <div className="flex justify-center space-x-8">
        <div className="p-3 text-2xl font-bold text-gray-100">
          Balance: $70
        </div>
        <div className="p-3 text-2xl font-bold text-gray-100">
          Usage: 4Hr
        </div>
      </div>

      <div className="flex justify-center mt-8"> {/* Added mt-4 for spacing */}
        <button
          className="w-1/2 py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600">
          RECHARGE
        </button>
      </div>
    </div>


  );
}

export default DashboardCard06;
