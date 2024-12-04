import React from "react";

interface CardVariantOneProps {
  label: string;
  image: string;
  subLabel: string;

  onClick?: () => void;
  className?: string;
}

const CardVariantOne: React.FC<CardVariantOneProps> = ({
  label,
  image,
  subLabel,
  onClick,
  className,
}) => {
  return (
    <div
      className="cardVariantOne h-fit w-fit"
      style={{ background: "#F4F3F0" }}
    >
      <div className="grid items-center justify-start gap-2 text-start">
        <div>
          <h6 className="mb-2 h-auto w-28 font-bold">{label}</h6>
          <p>{subLabel}</p>
        </div>

        <button className="btn-textOnly w-fit text-mainGreen hover:text-mainGreenHover">
          Shop now
        </button>
      </div>
      <img src={image} width="150px"></img>
    </div>
  );
};

export default CardVariantOne;
