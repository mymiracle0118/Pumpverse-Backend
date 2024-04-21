import React from "react";
import { Link } from "react-router-dom";

import ProgressBar from "@ramonak/react-progress-bar";
import token1 from "../../assets/images/common/token1.png";
import { FaUserCircle } from "react-icons/fa";
import { BsFillLightningChargeFill } from "react-icons/bs";

export default function TokenKingCard() {
  return (
    <div className="border border-[#9945FF] rounded-[20px] p-3 ss:p-5 flex items-center gap-4 m-auto w-full md:w-[479px] relative">
      <img src={token1} className="w-[80px] xs:w-[90px] md:w-[114px] h-[80px] xs:h-[90px] md:h-[114px]" alt="" />
      <div className="w-full text-white flex flex-col justify-between">
        <h2 className="text-[20px] md:text-[25px]">$LOWANA</h2>
        <div className="flex justify-start items-center gap-[8px] pt-1 md:pt-0">
          <p className="text-[12px] xs:text-[15px] pr-2">Created by</p>
          <FaUserCircle size={23} />
          <Link className="text-[12px] xs:text-[14px]">
            <u>uKnowMe</u>
          </Link>
        </div>
        <div className="pt-3">
        <p className="text-white pb-1">Market cap: {((40 / 100) * 59).toFixed(2)} K</p>
          <ProgressBar
            completed="40"
            height="8px"
            bgColor="#9945FF"
            className="rounded-[50px]"
            baseBgColor="#333333"
            labelSize="0px"
          />
        </div>
      </div>
      <div className="absolute top-0 right-0 text-[#9945FF] p-2 md:p-4 border border-l-[#9945FF] border-b-[#9945FF] border-transparent rounded-bl-[20px]">
      <BsFillLightningChargeFill size={25}/>
      </div>
    </div>
  );
}
