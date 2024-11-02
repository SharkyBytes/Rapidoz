import React from "react";
import CategoryItem from "./CategoryItem";

const CategoryMenu = () => {
  const servicesList = [
    {
      title: "Social Media Listing",
      src: "/images/service1.png",
      description: "Boost your online presence with strategic social media listings.",
    },
    {
      title: "Improving Online Presence",
      src: "/images/service2.png",
      description: "Enhance your visibility with tailored online strategies.",
    },
    {
      title: "Website Development",
      src: "/images/service3.png",
      description: "Create responsive and engaging websites for your brand.",
    },
    {
      title: "Google Listing with Meta Keywords & Citations",
      src: "/images/service4.png",
      description: "Optimize your business with Google listings and keywords.",
    },
    // Add more services here as needed
  ];

  return (
    <div className="py-8 bg-blue-500">
      <div className="text-center">
        <h2 className="text-5xl font-bold mb-8">
          <span className="text-black">OUR</span> <span className="text-white">SERVICES</span>
        </h2>
      </div>

      <div className="max-w-screen-2xl mx-auto py-10 px-16 grid grid-cols-3 gap-8 max-md:grid-cols-2 max-[450px]:grid-cols-1">
        {servicesList.map((service, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-lg h-64 flex flex-col justify-between"
          >
            <img src={service.src} alt={service.title} className="h-24 object-contain mx-auto" />
            <h3 className="text-lg font-semibold text-black text-center mt-4">{service.title}</h3>
            <p className="text-gray-600 text-center mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
