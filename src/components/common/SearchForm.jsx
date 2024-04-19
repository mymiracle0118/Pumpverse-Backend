import React from "react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";


export default function Searchform() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="relative w-fit">
      <input
        type="text"
        placeholder="Search token"
        value={searchTerm}
        onChange={handleChange}
        className="text-white focus:caret-white rounded-[10px] bg-[#333333] py-[10px] px-[22px] w-full md:w-[520px] border-0 outline-0"
      />
      <CiSearch className="text-white absolute right-4 inset-y-2 items-center flex" size="25"/>
    </div>
  );
}
