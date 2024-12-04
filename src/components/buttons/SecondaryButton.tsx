import React from "react";

interface SecondaryButtonProps {
  label: string;
  icon?: React.ReactNode;
  width?: string;
  fontSize?: string;

  onClick?: () => void;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  label,
  icon,
  onClick,
  width,
  fontSize,
}) => {
  return (
    <button className={`btn-secondary ${width} ${fontSize}`} onClick={onClick}>
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
};

export default SecondaryButton;
