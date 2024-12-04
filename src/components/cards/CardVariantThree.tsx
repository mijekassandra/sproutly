import React from "react";
import Rating from "../feature/Rating";

interface CardVariantThreeProps {
  label: string;
  image: string;
  subLabel: string;
  rating?: string;
  price: number;

  onClick?: () => void;
  className?: string;
}

const CardVariantThree: React.FC<CardVariantThreeProps> = ({
  label,
  image,
  subLabel,
  rating,
  price,
}) => {
  return (
    <div className="cardVariantThree group relative h-fit overflow-visible rounded-lg bg-green-50 shadow-md hover:bg-green-100">
      {/* Image Container */}
      <div className="image-container absolute -top-24 left-1/2 -translate-x-1/2 transform">
        <img
          className="block transform transition-transform duration-300 group-hover:scale-110"
          src={image}
          style={{ width: "150px" }}
        />
      </div>

      <div className="w-full">
        {/* Card Content */}
        <div className="mt-20 grid gap-1 text-start">
          <p className="text-base italic text-gray-600">{subLabel}</p>
          <h6 className="font-semibold leading-tight">{label}</h6>
        </div>

        {/* Rating Component */}
        <div className="flex justify-start">
          <Rating maxRating={5} color="#6fc09a" />
        </div>

        {/* Price and Button */}
        <div className="mt-2 flex items-center justify-between">
          <p className="text-lg font-semibold text-gray-800">₱{price}</p>
          <div className="flex cursor-pointer rounded-md bg-mainGreen p-2 hover:bg-mainGreenHover">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              width="20px"
              viewBox="0 -960 960 960"
              fill="#FFFFFF"
            >
              <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardVariantThree;
