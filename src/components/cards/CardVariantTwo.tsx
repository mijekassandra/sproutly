import React from "react";

interface CardVariantTwoProps {
  label: string;
  icon: React.ReactNode;
  subLabel: string;
}

const CardVariantTwo: React.FC<CardVariantTwoProps> = ({
  label,
  icon,
  subLabel,
}) => {
  return (
    <div className="cardVariantTwo h-fit w-52">
      <div className="flex justify-center">{icon}</div>

      <h6 className="text-center font-semibold">{label}</h6>
      <p className="text-center">{subLabel}</p>
    </div>
  );
};

export default CardVariantTwo;
