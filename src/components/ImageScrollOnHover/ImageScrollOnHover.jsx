import React from 'react';

const ImageScrollOnHover = ({img}) => {
  return (
    <div className="container mx-auto px-4 py-20 overflow-hidden">
      <div className="md:flex md:justify-center">
        <div className="md:w-1/2 lg:w-1/3 xl:w-1/4">
          <div className="content relative">
            <div className="screen">
              <img
                src={img}
                alt="Scrolling Image"
                className="w-full h-auto absolute bottom-0 transform transition-all duration-1000 ease-in-out hover:bottom-0 right-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageScrollOnHover;
