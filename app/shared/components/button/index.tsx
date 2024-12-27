"use client";
import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  isLoading: boolean;
}

const ButtonComponent = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
