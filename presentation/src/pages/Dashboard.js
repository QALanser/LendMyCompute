import React, { useState } from 'react';
import img from '../images/web.svg'; 
import img2 from '../images/app.svg';
import NavBar from '../components/Navbar/NavBar';

function HighlightToggle() {
  
  const [selected, setSelected] = useState('give');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSelection = (option) => {
    setSelected(option);
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

                            {/* hover:bg-gray-500 text-white*/}
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700  hover: rounded-lg shadow-2xl p-3 group">
                              <div className="flex justify-between mb-4">
        
                            <div className={`uppercase text-sm font-bold tracking-wide p-3 rounded-lg w-1/2 text-center cursor-pointer focus:outline-none focus:shadow-outline ${selected === 'give' ? 'bg-blue-900 text-white' : 'bg-gray-500 text-gray-100 '}`}
                             onClick={() => handleSelection('give')}
                                >
                                Give
                                </div>
                                <div>
                                    
                                </div>
                                <div className={`uppercase text-sm font-bold tracking-wide p-3 rounded-lg w-1/2 text-center cursor-pointer focus:outline-none focus:shadow-outline ${selected === 'take' ? 'bg-blue-900 text-white' : 'bg-gray-500 text-gray-100 '}`}
                             onClick={() => handleSelection('take')} style={{ marginLeft: '8px' }}
                                >
                                Take
                                </div>
                            </div>
                            {selected === 'give' ? (
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Mobile App Development</h2>
                                    <p className="text-md font-medium">
                                        We develop high-quality, custom cross-platform mobile applications that are robust and optimized for performance, scalability, and accessibility.
                                    </p>
                                </div>
                                ) : (
                                    <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                        <h2 className="font-semibold my-4 text-2xl text-center">Web Development</h2>
                                        <p className="text-md font-medium">
                                            We specialize in creating and optimizing high-quality, custom websites for businesses and organizations of all sizes. Building mobile-friendly and easy-to-use websites and applications for clients.
                                        </p>
                                    </div>
                                )}
                                
                            </div>

           
                        </div>
                    </div>
        </section>
    </div>
    </>
  );
}

export default HighlightToggle;
