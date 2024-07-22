import React from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.jpg';

const Showcase = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 py-4  mt-6">
      <h3 className="uppercase text-white text-2xl md:text-5xl lg:text-6xl text-center mb-10 ">Unleash the Potential of AI with AIgenZ</h3>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-10">
        <p className="lg:w-1/2 text-justify  text-white max-sm:hidden block">
          Discover how AIgenz can revolutionize your business with advanced AI solutions. Our innovative technologies are designed to enhance productivity, streamline processes, and drive growth. Explore our services and see how AIHub can help you stay ahead in the competitive landscape.
        </p>
        <p className=" lg:w-1/2 text-center p-1 font-extralight text-white lg:hidden block">
          Discover how AIgenz can revolutionize your business with advanced AI solutions. 
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <img src={img1} alt="AI Image 1" className="w-full h-52 object-cover rounded-2xl border-2 border-white" />
          <img src={img2} alt="AI Image 2" className="w-full h-52 object-cover rounded-2xl border-2 border-white" />
          <img src={img3} alt="AI Image 3" className="w-full h-52 object-cover rounded-2xl border-2 border-white" />
        </div>
      </div>
      <div className="flex gap-5 max-sm:flex-col items-center">
        <img src={img4} alt="AI Image 4" className="w-[256px] object-cover rounded-2xl border-2 border-white" />
        <img src={img7} alt="AI Image 5" className="w-[256px] object-cover rounded-2xl border-2 border-white" />
        <img src={img8} alt="AI Image 6" className="w-[256px]  object-cover rounded-2xl border-2 border-white" />
        <img src={img5} alt="AI Image 5" className="w-[256px] object-cover rounded-2xl border-2 border-white max-sm:hidden" />
        <img src={img6} alt="AI Image 6" className="w-[256px]  object-cover rounded-2xl border-2 border-white max-sm:hidden" />
        
      </div>
    </div>
  );
};

export default Showcase;
