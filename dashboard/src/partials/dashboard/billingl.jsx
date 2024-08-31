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
           60,40
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
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Earnings</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <DoughnutChart data={chartData} width={300} height={200} />
      
  <div className="flex items-center justify-center bg-gray-800 p-2">
  <div className="flex space-x-8">
    <div className="p-3 text-2xl font-bold text-gray-100">
      Earned: $100
    </div>
    <div className="p-3 text-2xl font-bold text-gray-100">
Lent Time: 6hr
    </div>
  </div>
</div>

    </div>
  );
}

export default DashboardCard06;
