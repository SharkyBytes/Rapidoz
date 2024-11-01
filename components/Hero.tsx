import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-[700px] w-full bg-white max-lg:h-[900px] max-md:h-[750px]">
      <div className="grid grid-cols-3 items-center justify-items-center px-8 gap-x-8 max-w-screen-2xl mx-auto h-full max-lg:grid-cols-1 max-lg:py-12 max-lg:gap-y-12">
        
        {/* Text Column */}
        <div className="flex flex-col gap-y-6 max-lg:order-last col-span-2">
          <h1 className="text-6xl text-gray-800 font-extrabold mb-4 max-xl:text-5xl max-md:text-4xl max-sm:text-3xl">
            Dream. Create. Inspire.
          </h1>
          <p className="text-lg text-gray-600 max-sm:text-sm leading-relaxed">
            Design your future today with our innovative products and services!
          </p>
          
          {/* Action Buttons */}
          <div className="flex gap-x-4 max-lg:flex-col max-lg:gap-y-4 mt-4">
            <button className="bg-blue-600 text-white font-semibold px-10 py-3 rounded-lg text-lg hover:bg-blue-700 shadow-md transition-all duration-200 transform hover:scale-105">
              BUY NOW
            </button>
            <button className="bg-gray-800 text-white font-semibold px-10 py-3 rounded-lg text-lg hover:bg-gray-900 shadow-md transition-all duration-200 transform hover:scale-105">
              LEARN MORE
            </button>
          </div>
        </div>
        
        {/* Image Column */}
        <Image
          src="/vector.png"
          width={550}
          height={550}
          alt="Product Image"
          className="max-md:w-[300px] max-md:h-[300px] max-sm:h-[250px] max-sm:w-[250px] w-auto h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
