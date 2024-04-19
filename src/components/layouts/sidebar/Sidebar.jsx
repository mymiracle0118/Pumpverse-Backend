import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { IoRocketOutline } from "react-icons/io5";
import { GiTrophyCup } from "react-icons/gi";
import { SlPresent } from "react-icons/sl";
import { HiOutlineSquaresPlus } from "react-icons/hi2";
import Logo from "../../../assets/images/common/logo.png"

export default function MainSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleButtonClick = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  return (
    <div className="bg-[#272727] text-white">
      <button onClick={handleButtonClick}>
        {isCollapsed ? (
          <MdKeyboardDoubleArrowRight />
        ) : (
          <MdKeyboardDoubleArrowLeft />
        )}
      </button>
      <Sidebar
        collapsed={isCollapsed ? "true" : undefined}
        backgroundColor="#272727"
        collapsedWidth="68px"
        width="333px"
        rootStyles={{
          border: "unset",
        }}
      >
        <Menu>
          <ul>
            <li>
              <button className={`flex gap-9 pl-12 ${isCollapsed ? 'pl-[18px]' : 'pl-12'} ${isCollapsed ? 'w-16' : 'w-[304px]'} text-[20px] mb-[80px]`}>
                <img src={Logo} alt="" className="w-[29px]"/>
                {!isCollapsed && "Pie charts"}
              </button>
            </li>
            <li>
              <button className={`flex gap-9 py-[13px] text-[20px] mb-6 ${isCollapsed ? 'pl-[18px]' : 'pl-12'} ${isCollapsed ? 'w-16' : 'w-[304px]'} focus:bg-black hover:bg-black rounded-r-[19px] border-transparent  focus:border-t-[#9945FF] focus:border-r-[#9945FF] hover:drop-shadow-[1px_6px_#9945FF] border`}>
                <IoRocketOutline size={28} />
                {!isCollapsed && "Pie charts"}
              </button>
            </li>
            <li>
              <button className={`flex gap-9 py-[13px] text-[20px] mb-6 ${isCollapsed ? 'pl-[18px]' : 'pl-12'} ${isCollapsed ? 'w-16' : 'w-[304px]'} focus:bg-black hover:bg-black rounded-r-[19px] border-transparent  focus:border-t-[#9945FF] focus:border-r-[#9945FF] hover:drop-shadow-[1px_6px_#9945FF] border`}>
                <GiTrophyCup size={28} />
                {!isCollapsed && "Line charts"}
              </button>
            </li>
            <li>
              <button className={`flex gap-9 py-[13px] text-[20px] mb-6 ${isCollapsed ? 'pl-[18px]' : 'pl-12'} ${isCollapsed ? 'w-16' : 'w-[304px]'} focus:bg-black hover:bg-black rounded-r-[19px] border-transparent  focus:border-t-[#9945FF] focus:border-r-[#9945FF] hover:drop-shadow-[1px_6px_#9945FF] border`}>
                <SlPresent size={28} />
                {!isCollapsed && "Documentation"}
              </button>
            </li>
            <li>
              <button className={`flex gap-9 py-[13px] text-[20px] mb-6 ${isCollapsed ? 'pl-[18px]' : 'pl-12'} ${isCollapsed ? 'w-16' : 'w-[304px]'} focus:bg-black hover:bg-black rounded-r-[19px] border-transparent  focus:border-t-[#9945FF] focus:border-r-[#9945FF] hover:drop-shadow-[1px_6px_#9945FF] border`}>
                <HiOutlineSquaresPlus size={28} />
                {!isCollapsed && "Calendar"}
              </button>
            </li>
          </ul>
        </Menu>
      </Sidebar>
    </div>
  );
}
