import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import img from '../images/web.svg'; 
import img2 from '../images/app.svg';

const TDashboard = () => {
  const [selected, setSelected] = useState('give');
  const billingDetails = { total: '$200', dueDate: '2024-09-10', status: 'Pending' };
  const smallDivs = [
    { id: 1, text: 'Task 1', countdown: '10:00' },
    { id: 2, text: 'Task 2', countdown: '08:45' },
    { id: 3, text: 'Task 3', countdown: '05:30' },
    // Add more as needed
  ];

  const handleSelection = (type) => {
    setSelected(type);
  };

  return (
    <>
    <div>
        <NavBar />
    </div>

    <div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
        <section data-aos="zoom-in-down">

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
                            
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Web Development</h2>
                                    <p className="text-md font-medium">
                                        We specialize in creating and optimizing high-quality, custom websites for businesses and organizations of all sizes. Building mobile-friendly and easy-to-use websites and applications for clients.
                                    </p>
                                </div>
                            </div>

                          {/* <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group w-1/2">
                            <div className="m-2 text-justify text-sm">
                              <div className="h-48 bg-gray-200 rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out">
                                <p className="font-semibold my-4 text-center">Pie Chart Placeholder</p>
                              </div>
                              <h2 className="font-semibold my-4 text-2xl text-center">Billing Details</h2>
                              <p className="text-md font-medium">Total: {billingDetails.total}</p>
                              <p className="text-md font-medium">Due Date: {billingDetails.dueDate}</p>
                              <p className="text-md font-medium">Status: {billingDetails.status}</p>
                            </div>
                          </div> */}

                        </div>
                    </div>
        </section>
    </div>
    </>
  );
  // return (
  //   <>
  //     <div>
  //       <NavBar />
  //     </div>

  //     <div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
  //       <section data-aos="zoom-in-down">
  //         <div className="px-12" data-aos="fade-down" data-aos-delay="600">
  //           <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
  //             {/* Div A - Top Right Section */}
  //             <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group w-1/2">
  //               <div className="m-2 text-justify text-sm">
  //                 <div className="h-48 bg-gray-200 rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out">
  //                   <p className="font-semibold my-4 text-center">Pie Chart Placeholder</p>
  //                 </div>
  //                 <h2 className="font-semibold my-4 text-2xl text-center">Billing Details</h2>
  //                 <p className="text-md font-medium">Total: {billingDetails.total}</p>
  //                 <p className="text-md font-medium">Due Date: {billingDetails.dueDate}</p>
  //                 <p className="text-md font-medium">Status: {billingDetails.status}</p>
  //               </div>
  //             </div>

  //             {/* Div B - Bottom Right Section */}
  //             <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group w-1/2">
  //               <div className="flex overflow-x-auto space-x-4 py-2">
  //                 {smallDivs.map((item) => (
  //                   <div key={item.id} className="bg-gray-300 p-2 rounded-lg w-48">
  //                     <p className="font-medium text-center">{item.text}</p>
  //                     <p className="text-center">{item.countdown}</p>
  //                     <button className="bg-blue-500 text-white rounded px-2 py-1 mt-2 w-full">Action</button>
  //                   </div>
  //                 ))}
  //               </div>
  //             </div>

  //             {/* Div C - Left Section */}
  //             <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group w-full sm:w-1/2">
  //               <h2 className="font-semibold text-2xl text-center">User Details Form</h2>
  //               <form className="space-y-4">
  //                 <input
  //                   type="text"
  //                   placeholder="Username"
  //                   className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
  //                 />
  //                 <input
  //                   type="password"
  //                   placeholder="Password"
  //                   className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
  //                 />
  //                 <button
  //                   type="submit"
  //                   className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
  //                 >
  //                   Submit
  //                 </button>
  //               </form>
  //             </div>
  //           </div>
  //         </div>
  //       </section>
  //     </div>
  //   </>
  // );
};

export default TDashboard;
