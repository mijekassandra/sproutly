import React from "react";

interface CardVariantFourProps {
  label: string;
  icon: React.ReactNode;
  definition: string;
  bgColor: string;
  iconColor: string;
}

const CardVariantFour: React.FC<CardVariantFourProps> = ({
  label,
  icon,
  definition,
  bgColor,
  iconColor,
}) => {
  return (
    <div className="cardVariantFour group h-fit w-52 gap-2 hover:bg-green-300">
      <div className="flex items-center gap-4">
        <div
          className={`flex justify-center rounded-md p-2 ${bgColor} transition-colors duration-300 group-hover:bg-white`}
        >
          <span className={`${iconColor} group-hover:text-green-500`}>
            {icon}
          </span>
        </div>

        <h6 className="font-semibold group-hover:text-white">{label}</h6>
      </div>

      <p className="text-start text-xs group-hover:text-white">{definition}</p>
    </div>
  );
};

export default CardVariantFour;
