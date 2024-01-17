import TvIcon from '@mui/icons-material/Tv';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ThirdComponent = () => {
  return (
    <>
      <div className=" h-[70rem] w-full bg-gradient-to-t from-black from-50% via-black via-80% to-[#1d1d1d] ">
        <div className=" pt-28 pl-28">
          <span className=" text-[#00c6cf] text-base px-4 tracking-widest">Ready to use</span>
          <h2 className=" p-2 font-bold text-[5rem] text-white mb-10">
            Our Template Features
          </h2>
        </div>
        <div className="h-[31.875rem] grid grid-cols-3 gap-6 font-white text-xl">
          {/* First Row */}
          <div className=" p-4 flex items-center justify-start">
            <h4 className=' text-white text-[2rem] font-bold'>
              <span className=' text-[#ec4869] inline-block my-3'>Create Next</span><br />
              App
            </h4>

          </div>
          <div className=" p-4 flex items-center justify-start">
            <h4 className=' text-white text-[2rem] font-bold'>
              <span className=' text-[#f7cd46] inline-block my-3'>React</span><br />
              Hooks
            </h4>
          </div>
          <div className=" p-4 flex items-center justify-start">
            <h4 className=' text-white text-[2rem] font-bold'>
              <span className=' text-[#59c98d] inline-block my-3'>Fast</span><br />
              Performance
            </h4>
          </div>

          {/* Second Row */}
          <div className=" p-4 flex items-center justify-start">
            <h4 className=' text-white text-[2rem] font-bold'>
              <span className=' text-[#6f41f6] inline-block my-3'>Responsive</span><br />
              Layout
            </h4>
          </div>
          <div className=" p-4 flex items-center justify-start">
            <h4 className=' text-white text-[2rem] font-bold'>
              <span className=' text-[#357ff6] inline-block my-3'>Google</span><br />
              Font
            </h4>
          </div>
          <div className= "p-4 flex items-center justify-start">
            <h4 className=' text-white text-[2rem] font-bold'>
              <span className=' text-[#5ac9fa] inline-block my-3'>Resourceful</span><br />
              Page 25+
            </h4>
          </div>

          {/* Third Row */}
          <div className=" p-4 flex items-center justify-start">
            <h4 className=' text-white text-[2rem] font-bold'>
              <span className=' text-[#59c98d] inline-block my-3'>Font Awesome</span><br />
              5 Pro Icon
            </h4>
          </div>
          <div className=" p-4 flex items-center justify-start">
            <h4 className=' text-white text-[2rem] font-bold'>
              <span className=' text-[#f7cd46] inline-block my-3'>Dynamic</span><br />
              Contact Form
            </h4>
          </div>
          <div className=" p-4 flex items-center justify-start">
            <h4 className=' text-white text-[2rem] font-bold'>
              <span className=' text-[#ec4869] inline-block my-3'>Lifetime</span><br />
              Update
            </h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default ThirdComponent;