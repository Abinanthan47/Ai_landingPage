import { FaPlay } from 'react-icons/fa';
import VideoImg from '../assets/videoimg1.jpg';

const VideoSection = () => {
    return (
        <div>
            <div>
                <div className='flex flex-col lg:flex-row items-center justify-between p-10 lg:p-20 text-white'>
                    <p className='mb-0 lg:mb-0 lg:w-1/2 max-sm:hidden'>
                        Discover our AI tools-from natural language processing to computer
                        vision image generation that revolutionize your work!
                    </p>
                    <h3 className='text-4xl md:text-5xl lg:text-6xl uppercase lg:w-1/2 text-right'>
                        WHY CHOOSE AIGENZ
                    </h3>
                </div>
                <div className='relative mx-4 lg:mx-20 my-2'>
                    <img src={VideoImg} alt="" className='w-full h-60 md:h-80 lg:h-96 object-center object-cover rounded-3xl' />
                    <button className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-white bg-[rgba(86,85,85,0.42)] flex p-5 rounded-full backdrop-blur-lg text-center items-center border-2 border-[#7be0d8]'>
                        <FaPlay />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default VideoSection;
