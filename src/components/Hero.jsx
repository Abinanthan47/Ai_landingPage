import Heroimg from '../assets/Hero2.jpg'
const Hero = () => {
  return (
    <div className="p-20 ">
        <h1 className="text-[150px] text-[#ccc] leading-[120px] text-center mt-8 max-sm:text-4xl ">GENERATIVE AI</h1>
        <div className="relative">
            <img src={Heroimg} alt=""  className='w-[100%] h-[440px] rounded-3xl object-top-center shadow-[0_-20px_40px_rgba(0,0,0,1)] max-sm:h-[220px]  '/>
            <input type="text" placeholder="Type your Prompt.." className='w-[55%] absolute top-[30%] left-[50%] bg-[rgba(255,255,255,0.22)] translate-x-[-50%] rounded-2xl backdrop-blur-xl  border-[1px] border-slate-400 p-3 text-center text-white outline-none placeholder-white '  />
            <div className='flex  absolute items-center  gap-1 bottom-[-20px] left-[50%] translate-x-[-50%]  shadow-[0_4px_30px_rgba(0,0,0,1)] p-4 backdrop-blur-sm rounded-3xl  max-sm:hidden    '>
                <a href="#" className='text-black bg-primary p-3 w-[140px] text-center rounded-2xl transition-all duration-75 ease-in' > Get Started</a>
                <a href="#" className='text-white bg-[#231f1c] p-3 w-[140px] text-center rounded-2xl transition-all duration-75 ease-in' > Discover</a>
                <a href="#" className='text-white bg-[#231f1c] p-3 w-[140px] text-center rounded-2xl transition-all duration-75 ease-in'> API Docs</a>
                <a href="#" className='text-white bg-[#231f1c] p-3 w-[140px] text-center rounded-2xl transition-all duration-75 ease-in'> AiHUB</a>
                <a href="#" className='text-white bg-[#231f1c] p-3 w-[140px] text-center rounded-2xl transition-all duration-75 ease-in'> Security</a>
                <a href="#" className='text-white bg-[#231f1c] p-3 w-[140px] text-center rounded-2xl transition-all duration-75 ease-in'> About us</a>
            </div>
        </div>
    </div>
  )
}

export default Hero