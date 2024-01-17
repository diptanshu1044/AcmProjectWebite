import './SecondComponent.css';

const SecondComponent = () => {
  return (
    <>
      <div className="mt-[25rem] h-[13.125rem] flex flex-col pl-20">
        <span className="text-cyan-400 text-base px-4 tracking-widest	">
          Ready to use
        </span>
        <h2 className="px-4 leading-tight font-bold text-[5rem] max-w-[37.5rem] max-h-[11.75rem]">
          Showcase Layouts
        </h2>
      </div>
      <div className="my-20 max-h-[101rem] w-95 ml-10 md:flex">

        <div className="md:w-1/2 flex-grow flex flex-col">


          <div className="flex-grow ">
            <h1 className="px-8 font-normal text-xl mb-2 mt-2">01. Home Default Blog</h1>
            <div className=' mx-6 w-[37.5rem] h-[21.5rem] rounded-3xl my-6 relative overflow-hidden'>
              <img src="public/blog1.png" alt="Image 1" className="w-[37.5rem] object-cover rounded-3xl p-1 absolute  bottom-[-1120px] hover:bottom-0 hover:duration-[11s] hover:ease-in-out ease-in-out duration-[11s]" />
            </div>
          </div>


          <div className="flex-grow ">
            <h1 className="px-8 font-normal text-xl mb-2 mt-2">03. Home SEO Blog</h1>
            <div className=' mx-6 w-[37.5rem] h-[21.5rem] rounded-3xl my-6 relative overflow-hidden'>
              <img src="public/blog3.png" alt="Image 1" className="w-[37.5rem] object-cover rounded-3xl p-1 screen-image absolute  bottom-[-1120px] hover:bottom-0 hover:duration-[11s] hover:ease-in-out ease-in-out duration-[11s]" />
            </div>
          </div>


          <div className="flex-grow">
            <h1 className="px-8 font-normal text-xl mb-2 mt-2">Coming Soon</h1>
            <div className=' mx-6 w-[37.5rem] h-[22rem] rounded-3xl my-6 relative overflow-hidden'>
              <img src="public/comingSoon.png" alt="Image 1" className="w-[37.5rem] max-h-[21rem] object-cover rounded-3xl p-1" />
            </div>
          </div>

        </div>


        <div className="md:w-1/2  flex-grow flex flex-col pr-20">


          <div className="flex-grow ">
            <h1 className="px-8 font-normal text-xl mb-2 mt-2">02. Home Creative Blog</h1>
            <div className='mx-6 w-[37.5rem] h-[21.5rem] rounded-3xl my-6 relative overflow-hidden'>
              <img src="public/blog2.png" alt="Image 1" className="w-[37.5rem] object-cover rounded-3xl p-1 absolute  bottom-[-1120px] hover:bottom-0 hover:duration-[11s] hover:ease-in-out ease-in-out duration-[11s]" />
            </div>
          </div>

          <div className="flex-grow ">
            <h1 className="px-8 font-normal text-xl mb-2 mt-2">04. Home Tech Blog</h1>
            <div className=' mx-6 w-[37.5rem] h-[21.5rem] rounded-3xl my-6 relative overflow-hidden'>
              <img src="public/blog4.png" alt="Image 1" className="w-[37.5rem] object-cover rounded-3xl p-1 absolute  bottom-[-1120px] hover:bottom-0 hover:duration-[11s] hover:ease-in-out ease-in-out duration-[11s]" />
            </div>
          </div>


          <div className="flex-grow">
            <h1 className="px-8 font-normal text-xl mb-2 mt-2">05. Home Lifestyle Blog</h1>
            <div className=' mx-6 w-[37.5rem] h-[21.5rem] rounded-3xl my-6 relative overflow-hidden'>
              <img src="public/blog5.png" alt="Image 1" className="w-[37.5rem] object-cover rounded-3xl p-1 absolute  bottom-[-1120px] hover:bottom-0 hover:duration-[11s] hover:ease-in-out ease-in-out duration-[11s]" />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default SecondComponent;