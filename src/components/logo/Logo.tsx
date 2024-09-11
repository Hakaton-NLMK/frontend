import React from "react";

interface LogoProps {
  className?: string;
  height?: string | number;
}

const Logo: React.FC<LogoProps> = ({ className = "", height = "auto" }) => {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/logo.svg`}
      alt="Logo"
      className={className}
      style={{ height: height }}
    />
  );
};

export default Logo;
