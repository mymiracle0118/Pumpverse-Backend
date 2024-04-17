import React from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <nav className="text-white flex justify-between items-center px-10 py-8">
      <div className="flex gap-x-6">
        <div className="relative">
          <button onClick={handleOpen} className="flex items-center gap-1">
            EN
            <FaChevronDown className="w-2 "/>
          </button>
          {open ? (
            <ul className="absolute list-none">
              <li className="menu-item">
                <button>RU</button>
              </li>
              <li className="menu-item">
                <button>CN</button>
              </li>
            </ul>
          ) : null}
        </div>
        <Link to="/signin">LOG IN</Link>
        <Link to="/signup">SIGN UP</Link>
      </div>
      <Link className="border border-white px-6 py-4">START EXPLORING</Link>
    </nav>
  );
}
