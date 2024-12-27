"use client";
import React from "react";

interface InputProps {
  name?: string;
  value: string;
  placeholder: string;
  type?: "text" | "password" | "email" | "number";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent = (data: InputProps) => {
  return (
    <input
      className="text-black w-full p-2 my-2 border border-blue-500 rounded-lg"
      {...data}
    />
  );
};

export default InputComponent;
