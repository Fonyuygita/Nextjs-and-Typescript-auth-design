import LoginForm from '@/components/loginForm/LoginForm'


import Image from 'next/image'
import React from 'react'

interface Props {
    
}

const page = async(props: Props) => {

  
 
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex flex-col md:flex-row md:shadow-lg">
          <div className="w-full h-[200px] md:w-1/2 md:h-full">
            <Image
              src="/Doctor.png" // Replace with the path to your image
              alt="Registration Image"
              layout="responsive"
              width={600}
              height={400}
            />
          </div>
          <LoginForm/>

          <div/>
          </div>
          </div>
    )
}

export default page
