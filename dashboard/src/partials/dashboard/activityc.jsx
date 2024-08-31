import React, { useEffect, useState, useRef } from 'react';

const DashboardCard12 = ({ timerValue }) => {
  const [time, setTime] = useState(0);
  const [showTimer, setShowTimer] = useState(false);
  const intervalRef = useRef(null);
  const [formattedDateTime, setFormattedDateTime] = useState('');
  const [showGreenTab, setShowGreenTab] = useState(true);

  const handleConnectClick = () => {
    fetch('http://localhost:3001/open-terminal')
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
      })
      .catch(error => {
        console.error('Error opening terminal:', error);
      });
  };

  const handleDeleteClick = () => {
    fetch('http://localhost:3001/close-terminal')
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
        setShowGreenTab(false); // Hide the green tab after closing the terminal
      })
      .catch(error => {
        console.error('Error closing terminal:', error);
      });
  };

  // Update the timer value and visibility whenever timerValue changes
  useEffect(() => {
    if (timerValue > 0) {
      setTime(timerValue);
      setShowTimer(false); // Reset visibility before showing the timer
      setTimeout(() => {
        setShowTimer(true); // Show the timer div after 3 seconds
      }, 3000);
    }
    
    const now = new Date();
    setFormattedDateTime(now.toLocaleString()); 

  }, [timerValue]);

  // Function to start the countdown
  const startCountdown = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    if (showTimer && time > 0) {
      startCountdown();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [showTimer, time]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="h-full col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Activity
        </h2>
      </header>

      <div className="p-3">
        {showGreenTab && showTimer ? (
          <div className="border-2 border-blue-500 rounded-lg">
            <div className="bg-green-500 text-white py-2 px-4 rounded-t-md">
              Session Running
            </div>

            <div className="flex items-center justify-between p-4">
              <div className="text-blue-500 font-semibold">Created at {formattedDateTime}</div>

              <div className="text-xl font-mono">{formatTime(time)}</div>
            </div>
            <div className="flex items-center justify-between p-4">
              <div>
                <button
                  onClick={handleConnectClick}
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                >
                  Connect
                </button>
              </div>

              <div>
                <button
                  onClick={handleDeleteClick}
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:bg-red-500 dark:hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <header className="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50 rounded-sm font-semibold p-2">
              No Active Sessions
            </header>
            <ul className="my-1">
              {/* Example Items */}
              {/* Adjust or remove as necessary */}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardCard12;
