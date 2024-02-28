import React from "react";

const Button = ({ title, className }) => {
  return (
    <button
      className={`px-3 py-2 rounded-full bg-secondary border border-secondary text-background hover:bg-background hover:text-primary duration-500 ease-in-out ${className}`}>
      {title}
    </button>
  );
};

export default Button;
