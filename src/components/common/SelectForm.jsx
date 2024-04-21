// SelectForm.js
import React from "react";

export default function SelectForm({ options, value, onChange, selectClassName, wrapperClassName }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className={`relative ${wrapperClassName}`}>
      <select
        value={value}
        onChange={handleChange}
        className={`appearance-none ${selectClassName} bg-[#333333] rounded-[10px] py-[10px] px-[22px] w-full lg:w-[150px] 2xl:w-[233px] border-0 outline-none text-[#919191]`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="">
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9l4 4 4-4" />
        </svg>
      </div>
    </div>
  );
}
