import React from "react";

interface IProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: string[]
}

const SelectComponent = ({value, onChange, options}:IProps) => {
  return (
    <select
      className=" text-white rounded-lg p-1 bg-transparent border-b-2 border-white text-center"
      value={value}
      onChange={onChange}      
    >
      {options.map((option) => (
        <option key={option} className=" text-blue-950 w-full text-center" value={option}>
          {option}
        </option>
      ))}      
    </select>
  );
};

export default SelectComponent;
