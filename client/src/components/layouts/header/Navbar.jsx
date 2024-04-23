import React from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <nav className="text-white flex justify-between items-center px-4 md:px-10 py-3 md:py-8">
      <div className="flex gap-x-3 md:gap-x-6">
        <div className="relative">
          <button onClick={handleOpen} className="flex items-center gap-1 text-xs md:text-md">
            EN
            <FaChevronDown className="w-2 "/>
          </button>
          {open ? (
            <ul className="absolute list-none">
              <li className="menu-item">
                <button className="text-xs md:text-md">RU</button>
              </li>
              <li className="menu-item">
                <button className="text-xs md:text-md">CN</button>
              </li>
            </ul>
          ) : null}
        </div>
        <Link to="/signin" className="text-xs md:text-md">LOG IN</Link>
        <Link to="/signup" className="text-xs md:text-md">SIGN UP</Link>
      </div>
      <Link to="/main" className="border border-white px-3 md:px-6 py-2 md:py-4 text-xs md:text-md">START EXPLORING</Link>
    </nav>
  );
}
