// *********************
// Role of the component: Category Item that will display category icon, category name and link to the category
// Name of the component: CategoryItem.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <CategoryItem title={title} href={href} ><Image /></CategoryItem>
// Input parameters: CategoryItemProps interface
// Output: Category icon, category name and link to the category
// *********************

// CategoryItem.tsx
import React from "react";
import Image from "next/image";

type CategoryItemProps = {
  title: string;
  src: string;
  description: string;
};

const CategoryItem: React.FC<CategoryItemProps> = ({ title, src, description }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
      <Image src={src} width={60} height={60} alt={title} className="mb-4 rounded-full" />
      <h3 className="text-2xl font-semibold text-black mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default CategoryItem;

