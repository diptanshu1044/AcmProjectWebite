import Button from '@mui/material/Button'
import { green } from '@mui/material/colors';

const successLight = green[500];

const Navbar = () => {
  return (
    <div className="z-10 text-[1rem] w-full h-[3.375rem] sm:w-full md:w-full lg:w-full 2xl:w-full bg-[#262626] sticky top-0 flex justify-between items-center">
      <a href="https://themeforest.net/item/blogar-blog-magazine-react-next-js-template/39392232"
        className="flex h-5 mx-3 text-white hover:cursor-pointer" >
        envato<span className=" text-[#49AC53]">market</span>
      </a>
      <div className=" mx-3 hover:cursor-pointer">
        <Button 
          variant='contained' 
          style={{backgroundColor: successLight}}>Buy Now</Button>
      </div>

    </div>
  )
}

export default Navbar;