import React from "react";

interface PrimaryButtonProps {
  label: string;
  icon?: React.ReactNode;
  width?: string;
  fontSize?: string;

  onClick?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  label,
  icon,
  onClick,
  width,
  fontSize,
}) => {
  return (
    <button className={`btn-primary ${width} ${fontSize}`} onClick={onClick}>
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
};

export default PrimaryButton;
