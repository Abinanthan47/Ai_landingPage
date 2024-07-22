import React from 'react';
import { GiRegeneration } from 'react-icons/gi';


const Services = () => {
  return (
    <div className=" text-white py-12 px-4" id="services">
      <div className=" p-[40px_80px_0] mx-auto">
        <div className=" mb-16  flex items-center justify-between text-white'> ">
          <h3 className="text-4xl sm:text-5xl lg:text-6xl uppercase ">OUR SERVICES</h3>
          <p className="mb-4 lg:mb-0 lg:w-1/2 text-right max-sm:hidden block ">
            Discover the range of AI-driven services we offer, from innovation to expertise and
             beyond the science of Learning & Network.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4  text-center">
          <div className="bg-[#171717] p-8 rounded-3xl hover:bg-primary hover:text-black transition-colors duration-300">
          <div className="flex items-center bg-gray-800 p-3 rounded-full text-center mb-7">
              <GiRegeneration className="bg-primary text-3xl p-1 text-black rounded-full" />
              <p className="text-white flex gap-2 ml-4">AI Generation</p>
            </div>
            <h5 className="text-3xl mb-3 uppercase">Innovation</h5>
            <p className='font-light'>
              We bring cutting-edge AI innovations 
            </p>
          </div>

          <div className="bg-primary p-8 rounded-3xl text-black transition-colors duration-300">
          <div className="flex items-center bg-gray-800 p-3 rounded-full text-center mb-7">
              <GiRegeneration className="bg-primary text-3xl p-1 text-black rounded-full" />
              <p className="text-white flex gap-2 ml-4">AI Expertise</p>
            </div>
            <h5 className="text-3xl mb-3 uppercase">Expertise</h5>
            <p className='font-normal'>
              Leverage our AI expertise decision-making 
            </p>
          </div>

          <div className="bg-[#171717] p-8 rounded-3xl hover:bg-primary hover:text-black transition-colors duration-300">
          <div className="flex items-center bg-gray-800 p-3 rounded-full text-center mb-7">
              <GiRegeneration className="bg-primary text-3xl p-1 text-black rounded-full" />
              <p className="text-white flex gap-2 ml-4">AI Learning</p>
            </div>
            <h5 className="text-3xl mb-3 uppercase">Learning</h5>
            <p className='font-light'>
              Engage with AI learning modules 
            </p>
          </div>

          <div className="bg-[#171717] p-8 rounded-3xl hover:bg-primary hover:text-black transition-colors duration-300">
          <div className="flex items-center bg-gray-800 p-3 rounded-full text-center mb-7">
              <GiRegeneration className="bg-primary text-3xl p-1 text-black rounded-full" />
              <p className="text-white flex gap-2 ml-4">AI Network</p>
            </div>
            <h5 className="text-3xl mb-3 uppercase">Network</h5>
            <p className='font-light'>
              Connect with a robust AI network 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
