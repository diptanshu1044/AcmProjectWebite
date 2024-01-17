const FifthComponent = () => {
  return (
    <div className="bg-[#F0F2F5] h-[90rem] ">
      <div className=" pt-20 pl-20">
        <span className=" text-[#00c6cf] text-base px-4 tracking-widest">Responsive Layout</span>
        <h2 className=" p-1 font-bold text-[5rem] text-black mb-10">
          Fully Responsive <br /> and Mobile Optimized
        </h2>
      </div>

      {/* <div className="flex flex-wrap">
        <img src="/src/components/FifthComponent/laptop.png" alt="laptop image" className="w-[45.75rem] " />
        <img src="/src/components/FifthComponent/ipad.png" alt="ipad image" className="w-[18rem]" />
        <img src="/src/components/FifthComponent/phone.png" alt="phone image" className="w" />
      </div> */}
      <div className="flex flex-wrap">
        <img src="/src/components/FifthComponent/laptop.png" alt="laptop image" className="w-70 flex-shrink-0 m-12" />
        <img src="/src/components/FifthComponent/ipad.png" alt="ipad image" className="w-30 flex-shrink-0 m-12" />
        <img src="/src/components/FifthComponent/phone.png" alt="phone image" className="w-[13rem] m-20" />
      </div>
    </div>
  )
}

export default FifthComponent;