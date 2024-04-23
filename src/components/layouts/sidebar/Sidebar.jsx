import React, { useState, useEffect, useRef } from "react";

import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { IoRocketOutline } from "react-icons/io5";
import { GiTrophyCup } from "react-icons/gi";
import { SlPresent } from "react-icons/sl";
import { HiOutlineSquaresPlus } from "react-icons/hi2";
import Logo from "../../../assets/images/common/logo.png";
import { IoLogOutOutline } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiGitbook } from "react-icons/si";
import { IoIosClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

export default function Sidebar({ onToggle, onPageChange }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [toggle, setToggle] = useState(false);
  const sidebarRef = useRef(null);

  // Function to handle click outside of sidebar
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setToggle(false);
    }
  };

  const handleScroll = () => {
    setToggle(false);
  };

  // Add event listeners on mount to handle clicks and scrolls outside of sidebar
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleButtonClick = () => {
    setIsCollapsed((prevState) => !prevState);
    onToggle(); // Call the toggle function passed from the Main component
  };

  const handleClick = (page) => {
    setToggle(false);
    onPageChange(page); // Call onPageChange function with the page name
  };

  return (
    <>
      <div className="bg-[#272727] text-white relative hidden lg:flex flex-col justify-between items-center h-screen z-10">
        <button
          onClick={handleButtonClick}
          className={`absolute ${isCollapsed ? "right-0" : "right-2"} ${
            isCollapsed ? "bg-black" : "bg-[#272727]"
          } w-[68px] p-2 z-10 flex ${
            isCollapsed ? "justify-center" : "justify-end"
          }`}
        >
          {isCollapsed ? (
            <MdKeyboardDoubleArrowRight size={25} />
          ) : (
            <MdKeyboardDoubleArrowLeft size={25} />
          )}
        </button>
        <div
          className={`bg-[#272727] ${isCollapsed ? "w-[68px]" : "w-[270px]"} ${
            isCollapsed ? "xl:w-[68px]" : "xl:w-[303px]"
          } transition-all duration-500`}
        >
          <ul className="list-none">
            <li>
              <button
                className={`flex items-center gap-9 pl-12 pt-[50px] ${
                  isCollapsed ? "pl-[18px]" : "pl-12"
                } ${
                  isCollapsed ? "w-16" : "w-[274px]"
                } text-[25px] font-bold mb-[60px]`}
              >
                <img src={Logo} alt="" className="w-[29px]" />
                {!isCollapsed && "BOOSTER"}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClick("dashboard")}
                className={`flex gap-9 py-[13px] text-[16px] mb-6 ${
                  isCollapsed ? "pl-[18px]" : "pl-12"
                } ${
                  isCollapsed ? "w-16" : "w-[274px]"
                } focus:bg-black hover:bg-black rounded-r-[19px] border-transparent hover:border-t-[#9945FF] hover:border-r-[#9945FF] focus:border-t-[#9945FF] focus:border-r-[#9945FF] hover:drop-shadow-[1px_5px_#9945FF] focus:drop-shadow-[1px_5px_#9945FF] border`}
              >
                <IoRocketOutline size={26} />
                {!isCollapsed && "Dashboard"}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClick("leaderboard")}
                className={`flex gap-9 py-[13px] text-[16px] mb-6 ${
                  isCollapsed ? "pl-[18px]" : "pl-12"
                } ${
                  isCollapsed ? "w-16" : "w-[274px]"
                } focus:bg-black hover:bg-black rounded-r-[19px] border-transparent hover:border-t-[#9945FF] hover:border-r-[#9945FF] focus:border-t-[#9945FF] focus:border-r-[#9945FF] hover:drop-shadow-[1px_5px_#9945FF] focus:drop-shadow-[1px_5px_#9945FF] border`}
              >
                <GiTrophyCup size={26} />
                {!isCollapsed && "Leaderboard"}
              </button>
            </li>
            <li>
              <button
                className={`flex gap-9 py-[13px] text-[16px] mb-6 ${
                  isCollapsed ? "pl-[18px]" : "pl-12"
                } ${
                  isCollapsed ? "w-16" : "w-[274px]"
                } focus:bg-black hover:bg-black rounded-r-[19px] border-transparent hover:border-t-[#9945FF] hover:border-r-[#9945FF] focus:border-t-[#9945FF] focus:border-r-[#9945FF] hover:drop-shadow-[1px_5px_#9945FF] focus:drop-shadow-[1px_5px_#9945FF] border`}
              >
                <SlPresent size={26} />
                {!isCollapsed && "Referral program"}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClick("createtoken")}
                className={`flex gap-9 py-[13px] text-[16px] mb-6 ${
                  isCollapsed ? "pl-[18px]" : "pl-12"
                } ${
                  isCollapsed ? "w-16" : "w-[274px]"
                } focus:bg-black hover:bg-black rounded-r-[19px] border-transparent hover:border-t-[#9945FF] hover:border-r-[#9945FF] focus:border-t-[#9945FF] focus:border-r-[#9945FF] hover:drop-shadow-[1px_5px_#9945FF] focus:drop-shadow-[1px_5px_#9945FF] border`}
              >
                <HiOutlineSquaresPlus size={26} />
                {!isCollapsed && "Create token"}
              </button>
            </li>
          </ul>
        </div>
        <div className="mb-[29px] flex flex-col items-center">
          <button className="flex gap-9 py-[13px] text-[16px] rounded-r-[19px]">
            <IoLogOutOutline size={26} />
            {!isCollapsed && "Logout"}
          </button>
          {!isCollapsed && (
            <div className="flex justify-center gap-[25px] mt-[20px]">
              <Link>
                <FaTelegramPlane size={24} />
              </Link>
              <Link>
                <FaTwitter size={24} />
              </Link>
              <Link>
                <SiGitbook size={24} />
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="lg:hidden flex relaive h-11 bg-[#272727]">
        <button className="flex items-center gap-2 pl-4 text-[25px] font-bold text-white">
          <img src={Logo} alt="" className="w-[25px]" />
          BOOSTER
        </button>
        <div className="flex justify-start items-center absolute right-0 text-white border hover:border-l-black border-transparent">
          {toggle ? (
            <IoIosClose
              size={40}
              className="object-contain m-1 z-30"
              alt="close menu"
              onClick={(event) => {
                event.stopPropagation(); // Stop event propagation
                setToggle((previous) => !previous);
              }}
            />
          ) : (
            <IoMenu
              size={34}
              className="object-contain m-1 z-30"
              alt="open menu"
              onClick={(event) => {
                event.stopPropagation(); // Stop event propagation
                setToggle((previous) => !previous);
              }}
            />
          )}
        </div>
        <div
          ref={sidebarRef}
          className={`${
            toggle ? "flex" : "hidden"
          } p-2 bg-[#272727] absolute top-11 left-0 w-full h-[85px] z-30 text-white flex-col gap-1`}
        >
          <div className="w-full flex justify-center gap-2">
            <button
              onClick={() => handleClick("dashboard")}
              className="flex justify-center gap-4 text-[10px] xs:text-[16px] w-1/2 bg-black rounded-[6px] p-1 border border-transparent hover:border-[#9945FF]"
            >
              <IoRocketOutline size={20} />
              Dashboard
            </button>
            <button className="flex justify-center gap-4 text-[10px] xs:text-[16px] w-1/2 bg-black rounded-[6px] p-1 border border-transparent hover:border-[#9945FF]">
              <SlPresent size={20} />
              Referral program
            </button>
          </div>
          <div className="w-full flex justify-center gap-2">
            <button
              onClick={() => handleClick("leaderboard")}
              className="flex justify-center gap-4 text-[10px] xs:text-[16px] w-1/2 bg-black rounded-[6px] p-1 border border-transparent hover:border-[#9945FF]"
            >
              <GiTrophyCup size={20} />
              Leaderboard
            </button>
            <button
              onClick={() => handleClick("createtoken")}
              className="flex justify-center gap-4 text-[10px] xs:text-[16px] w-1/2 bg-black rounded-[6px] p-1 border border-transparent hover:border-[#9945FF]"
            >
              <HiOutlineSquaresPlus size={20} />
              Create token
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
