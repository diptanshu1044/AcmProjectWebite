
import { useState, useEffect, useCallback } from 'react';
import SouthIcon from '@mui/icons-material/South';

const HeroSection = () => {
  const [currentImg, setCurrentImg] = useState('img1.png');

  const timer = useCallback(() => {setTimeout(() => {
    setCurrentImg((prevImg) => (prevImg === 'img1.png' ? 'img2.png' : 'img1.png'));
  }, 5000)}, [])

  timer();

  useEffect(() => {
    
    timer();
    return () => clearTimeout(timer)
  }, [currentImg])

  return (
    <div className="relative h-[45rem] flex flex-col justify-center items-center bg-gradient-to-t from-black via-black to-[#333] overflow-visible">
      <h1 className="py-3 text-[4.5rem] text-white text-center font-bold">
        <span className="block">React Next JS Creative Blog</span>
        <span className="block">Magazine Template</span>
      </h1>
      <button className='text-center bg-cyan-500 text-white py-4 px-6 text-sm rounded-full hover:bg-yellow-300 hover:text-black transform transition-transform hover:scale-105 mb-32'>
        Explore Template Features <SouthIcon />
      </button>
      <div className='relative w-[63.75rem] h-[37.8175rem]'>
        <img
        src={`src/components/HeroSection/${currentImg}`}
        alt={currentImg}
        className='w-[63.75rem] h-[37.8175rem] absolute top-0 left-0 rounded-sm transition ease-in-out'
        />
      </div>
      
    </div>
  );
};

export default HeroSection;
