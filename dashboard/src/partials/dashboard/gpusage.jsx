import React, { useState, useEffect } from 'react';
import Tooltip from '../../components/Tooltip';
import { chartAreaGradient } from '../../charts/ChartjsConfig';
import RealtimeChart from '../../charts/RealtimeChart';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DashboardCard05() {

  // IMPORTANT:
  // Code below is for demo purpose only, and it's not covered by support.
  // If you need to replace dummy data with real data,
  // refer to Chart.js documentation: https://www.chartjs.org/docs/latest

  // Fake real-time data
  const [counter, setCounter] = useState(0);
  const [increment, setIncrement] = useState(0);
  const [range, setRange] = useState(35);
  
  // Dummy data to be looped
  const data =[
    45.12, 47.75, 42.36, 40.29, 43.58, 41.22, 39.80, 44.27, 46.89, 48.02,
    42.90, 47.35, 49.21, 43.95, 48.57, 46.12, 49.78, 50.35, 51.92, 53.48,
    56.12, 54.67, 55.31, 52.04, 50.61, 49.47, 46.13, 50.72, 44.59, 43.27,
    41.83, 40.47, 39.12, 41.75, 38.62, 40.85, 42.33, 43.98, 45.87, 44.75,
    41.38, 48.67, 43.52, 47.24, 48.89, 49.21, 48.16, 49.73, 45.12, 46.81,
    39.88, 47.02, 48.15, 42.67, 45.98, 45.75, 44.23, 43.12, 41.50,
  ];

  const [slicedData, setSlicedData] = useState(data.slice(0, range));

  // Generate fake dates from now to back in time
  const generateDates = () => {
    const now = new Date();
    const dates = [];
    data.forEach((v, i) => {
      dates.push(new Date(now - 2000 - i * 2000));
    });
    return dates;
  };

  const [slicedLabels, setSlicedLabels] = useState(generateDates().slice(0, range).reverse());

  // Fake update every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1);
    }, 2000);
    return () => clearInterval(interval)
  }, [counter]);

  // Loop through data array and update
  useEffect(() => {
    setIncrement(increment + 1);
    if (increment + range < data.length) {
      setSlicedData(([x, ...slicedData]) => [...slicedData, data[increment + range]]);
    } else {
      setIncrement(0);
      setRange(0);
    }
    setSlicedLabels(([x, ...slicedLabels]) => [...slicedLabels, new Date()]);
    return () => setIncrement(0)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  const chartData = {
    labels: slicedLabels,
    datasets: [
      // Indigo line
      {
        data: slicedData,
        fill: true,
        backgroundColor: function(context) {
          const chart = context.chart;
          const {ctx, chartArea} = chart;
          return chartAreaGradient(ctx, chartArea, [
            { stop: 0, color: `rgba(${hexToRGB(tailwindConfig().theme.colors.violet[500])}, 0)` },
            { stop: 1, color: `rgba(${hexToRGB(tailwindConfig().theme.colors.violet[500])}, 0.2)` }
          ]);
        },       
        borderColor: tailwindConfig().theme.colors.violet[500],
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.violet[500],
        pointHoverBackgroundColor: tailwindConfig().theme.colors.violet[500],
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,          
        clip: 20,
        tension: 0.2,
      },
    ],
  };

  return (
    <div className="h-full flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60 flex items-center">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">RAM Usage</h2>
      
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <RealtimeChart data={chartData} width={595} height={248} />
    </div>
  );
}

export default DashboardCard05;
