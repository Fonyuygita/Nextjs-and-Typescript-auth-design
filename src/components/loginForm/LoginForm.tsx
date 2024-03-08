
"use client"
import { useState } from 'react';
import Image from 'next/image';
import { FiLock, FiMail, FiUser } from 'react-icons/fi';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';



const LoginForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [image, setImage] = useState<File | null>(null);



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your registration logic here
   
 
  };

  return (
  
    <div className="flex items-center md:w-1/2   m-auto md:m-0 p-3 justify-center  bg-gradient-to-b from-[#2e3949] to-[#000]">
      <div className="flex flex-col justify-center items-center p-8 bg-white bg-opacity-20 rounded-lg backdrop-filter backdrop-blur-md shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-8">Login In to checkHealth</h2>
        <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
          <div className="relative">
            <FiUser className="absolute left-3 top-2 text-gray-900" />
            <input
              type="text"
              placeholder="Name"
              className="p-2 pl-10 border-0 rounded bg-red bg-opacity-10 focus:ring-2 focus:ring-red-500 focus:bg-opacity-20 focus:border-none outline-none w-[100%]"
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
       
          <button
            type="submit"
            className="flex items-center justify-center p-2 bg-[#020811] text-white rounded hover:bg-blue-600 w-2/3"
          >
            Login <BsArrowRight className="ml-2" />
          </button>
        </form>
        <h3>Or use social media</h3>
        <div className="flex mt-4">
          <div className="mr-4">
            <Link href="/login/facebook">
              
                <FaFacebook className="text-blue-700 text-2xl hover:text-blue-500" />
            </Link>
          </div>
          <div className="mr-4">
            <Link href="/login/google">
           
                <FaGoogle className="text-white text-2xl hover:text-red-500 text-green-500" />
             
            </Link>
          </div>
          <div>
       

          <Link href="/login/google">
              <FaGithub className="text-white text-2xl hover:text-gray-500" />.
              </Link>

           
          </div>
        </div>
        <div className="mt-4 text-white">
          No account yet?{' '}
          <a href="/register" className="underline">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};



 
export default LoginForm;