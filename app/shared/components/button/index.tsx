"use client";
import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  isLoading?: boolean;
  background?: string;
}

const ButtonComponent = ({ text, onClick,background="bg-blue-500" }: ButtonProps) => {
  return (
    <button
      className={`${background} text-white font-bold py-1 px-4 rounded-lg`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
