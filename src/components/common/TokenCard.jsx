import React from "react";
import { Link } from "react-router-dom";

import ProgressBar from "@ramonak/react-progress-bar";
import Success1 from "../../assets/images/common/progress1.png";
import Success2 from "../../assets/images/common/progress2.png";

export default function TokenCard({ tokenCardValues }) {
  return (
    <div className="bg-[rgba(255,255,255,0.06)] rounded-[16px] px-2 2xl:px-4 py-1 2xl:py-2 flex gap-4 m-auto">
      <img src={tokenCardValues.tokenImg} className="" alt="" />
      <div>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-white text-[25px]">{tokenCardValues.tokenName}</h2>
          </div>
          <Link className="text-[#9945FF] text-[10px] 2xl:text-[12px]">
            by <u>uKnowMe</u>
          </Link>
        </div>
        <p className="text-white text-sm pt-[10px]">{tokenCardValues.tokenDescription}</p>
        <div className="relative pt-[25px] 2xl:pt-[35px]">
          <ProgressBar
            completed={tokenCardValues.progress}
            height="16px"
            bgColor="linear-gradient(to right, #9945FF, #14F195)"
            className="border border-white rounded-[50px]"
            baseBgColor="transparent"
          />
          <img src={Success1} alt="" className="absolute top-1 right-[20%] w-[15px] 2xl:w-[20px]" />
          <img src={Success2} alt="" className="absolute top-1 right-0 w-[15px] 2xl:w-[20px]" />
        </div>
      </div>
    </div>
  );
}
