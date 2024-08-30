import React, { useState } from 'react';
import axios from 'axios';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import img1 from '../images/Web-developer.svg';

const Login = () => {

    useDocTitle('Lend My Compute - Login');
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false); 

    const clearErrors = () => {
        setErrors([]);
    };

    const sendit = async (e) => {
        e.preventDefault(); 
        setLoading(true); 
        try {
            console.log('reached try catch');
            
            const response = await axios.post('http://localhost:5000/auth/api/login', {
                email,
                password,
            });
            // Handle success
            console.log(response.data);
            // Clear form and show success message or redirect
            setEmail('');
            setPassword('');
            setErrors([]);
            // Optionally show a success notification here
        } catch (error) {
            // Handle error
            console.error(error);
            const { response } = error;
            if (response && response.data && response.data.errors) {
                setErrors(response.data.errors);
            } else {
                setErrors([{ general: 'An unexpected error occurred' }]);
            }
        } finally {
            setLoading(false); // Reset loading state
        }
    };
    return (
        <>
            <div>
                <NavBar />
            </div>
            <div id='contact' className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24 ">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">

                <form onSubmit={sendit}>

                    <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                        <div className="flex">
                            <h1 className="font-bold text-center lg:text-left text-blue-900 text-4xl">Computing...</h1>
                        </div>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-1 mt-5">
                                <div>
                                    <input 
                                        name="email" 
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" 
                                        placeholder="Email*" 
                                        value={email}
                                        onChange={(e)=> setEmail(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && 
                                        <p className="text-red-500 text-sm">{errors.email}</p>
                                    }
                                </div>

                                <div>
                                    <input
                                        name="password" 
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="password" 
                                        placeholder="password*"
                                        value={password}
                                        onChange={(e)=> setPassword(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && 
                                        <p className="text-red-500 text-sm">{errors.password}</p>
                                    }
                                </div>
   
                        </div>

                        <div style={{ marginTop: '20px', textAlign: 'center' }}>
                        <p>Don't have an account?</p>
                        <a href="/signup" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>
                            Sign Up here
                        </a>
                        </div>

                        <div className="my-5 ">
                            <button type="submit" id="submitBtn" className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                                    focus:outline-none focus:shadow-outline">
                                Login
                            </button>
                        </div>
                </div>
                
                </form>
                        <div className="w-full  lg:-mt-96 lg:w-1/2 px-20 py-6 ml-auto  rounded-2xl">
                            <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img1} />
                        </div>
                </div>
            </div>
            <Footer />
        </>


    )
}

export default Login;