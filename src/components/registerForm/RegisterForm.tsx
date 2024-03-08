
"use client"
import { useState } from 'react';
import Image from 'next/image';
import { FiLock, FiMail, FiUser } from 'react-icons/fi';
import { BsArrowRight } from 'react-icons/bs';


const RegisterForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Register form submitted!');
    console.log({
      name:name,
      email:email,
      password:password,
     
    })
    

    setName('');
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  };

  return (
  
    <div className="flex items-center md:w-1/2   m-auto md:m-0 p-3 justify-center  bg-gradient-to-b from-green-400 to-green-900">
      <div className="flex flex-col justify-center items-center p-8 bg-white bg-opacity-20 rounded-lg backdrop-filter backdrop-blur-md shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-8">Register</h2>

        {/* HERE WE ARE USING SERVER ACTIONS, AND OUR ACTION HERE IS  addUser which comes from the actions file */}
        <form onSubmit={handleSubmit} className="space-y-4 flex flex-col p-4">
          <div className="relative">
            <FiUser className="absolute left-3 top-2 text-gray-900" />
            <input
              type="text"
              placeholder="Name"
              className="p-2 pl-10 border-0 rounded bg-red bg-opacity-10 focus:ring-2 focus:ring-red-500 focus:bg-opacity-20 focus:border-none outline-none w-[100%]"
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative">
            <FiMail className="absolute left-3 top-2 text-gray-900" />
            <input
              type="email"
              placeholder="Email"
              className="p-2 pl-10 border-none rounded bg-red bg-opacity-10 focus:ring-2 focus:ring-blue-100 focus:bg-opacity-20 focus:border-none outline-none w-[100%]"
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative">
            <FiLock className="absolute left-3 top-2 text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              className="p-2 pl-10 border-0 rounded text-red bg-opacity-0 focus:ring-2 focus:ring-blue-500 focus:bg-opacity-20 focus:border-none outline-none w-[100%]"
              value={password}
              name='password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="relative">
            <FiLock className="absolute left-3 top-2 text-gray-500" />
            <input
              type="password"
              placeholder="Confirm Password"
              className="p-2 pl-10 border-0 rounded bg-red bg-opacity-10 focus:ring-2 focus:ring-blue-500 focus:bg-opacity-20 focus:border-none outline-none w-[100%]"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} 
            />
          </div>
        
          <button
            type="submit"
            className="flex items-center justify-center p-2 bg-[#020811] text-white rounded hover:bg-[#222] w-2/3"
          >
            Register <BsArrowRight className="ml-2" />
          </button>
        </form>
        <div className="mt-4 text-white">
          Already registered?{' '}
          <a href="/login" className="underline">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};



 
export default RegisterForm;