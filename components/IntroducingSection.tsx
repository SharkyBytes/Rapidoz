import Link from "next/link";
import React from "react";

const IntroducingSection = () => {
  return (
    <div className="py-20 pt-24 bg-gradient-to-l from-white to-blue-600">
      <div className="text-center flex flex-col gap-y-5 items-center">
        <h2 className="text-white text-8xl font-extrabold text-center mb-2 max-md:text-6xl max-[480px]:text-4xl">
          INTRODUCING <span className="text-black">RAPI</span><span className="text-blue-600">DOZ</span>
        </h2>
        <div>
          <p className="text-white text-center text-2xl font-semibold max-md:text-xl max-[480px]:text-base">
            Discover our Services.
          </p>
          <p className="text-white text-center text-2xl font-semibold max-md:text-xl max-[480px]:text-base">
           Hassle-free Solutions for your business.
          </p>
          <Link href="/shop"
            className="block bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold px-12 py-3 text-xl rounded-full shadow-lg w-96 mt-8 max-md:text-lg max-md:w-72 max-[480px]:w-60 mx-auto 
            transition duration-300 ease-in-out transform hover:scale-105 hover:from-blue-700 hover:to-blue-900 hover:shadow-xl">
              DISCOVER
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntroducingSection;
