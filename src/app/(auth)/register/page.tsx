import RegisterForm from '@/components/registerForm/RegisterForm'
import Image from 'next/image'
import React from 'react'

interface Props {
    
}

const page = (props: Props) => {

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex flex-col md:flex-row md:shadow-lg">
          <div className="w-full h-[200px] md:w-1/2 md:h-full">
            <Image
              src="/Doctor1.png" 
              alt="Registration Image"
              layout="responsive"
              width={600}
              height={400}
            />
          </div>
          <RegisterForm/>

          <div/>
          </div>
          </div>
    )
}

export default page
