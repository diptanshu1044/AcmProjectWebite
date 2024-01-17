import Button from '@mui/material/Button'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ChatIcon from '@mui/icons-material/Chat';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const InnerNavbar = () => {
  return (
    <div className=" h-[5rem] bg-black opacity-90 border-t border-black flex flex-auto text-white">
      <div className="lg:w-[40%] w-[50%] flex items-center">
        <img src="src/components/InnerNavbar/logo-white.png" alt="Blogar Logo" className=" m-3 h-[2.25rem]" />
      </div>
      <div className="hidden lg:w-[25%] lg:flex lg:justify-evenly">
        <ul className="flex flex-grow justify-center items-center  font-bold">
          <li className="flex-grow"><a href="">Template</a></li>
          <li className="flex-grow"><a href="">Feature</a></li>
          <li className="flex-grow"><a href="">Why Us</a></li>
        </ul>
      </div>
      <div className="lg:w-[35%] w-[50%]">
        <ul className="flex flex-grow w-full h-full justify-center items-center">
          <li className="flex-grow mx-1"><a href=""><HelpOutlineIcon /> Documentation</a></li>
          <li className="flex-grow mx-1"><a href=""><ChatIcon /> Support</a></li>
          <li className="flex-grow mx-1">
            {/* <Button
              variant='contained'
              style={{}}
            >Purchase <ArrowRightAltIcon />
            </Button> */}
            <button className='text-center bg-yellow-300 text-black py-2 px-5 text-sm rounded-full hover:bg-yellow-300 hover:text-black transform transition-transform hover:scale-105'>
              Purchase &nbsp;&nbsp;&nbsp;&nbsp; <ArrowRightAltIcon />
            </button>
          </li>
        </ul>
      </div>


    </div>
  )
}

export default InnerNavbar;