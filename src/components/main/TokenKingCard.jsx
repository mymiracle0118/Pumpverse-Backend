import React from "react";
import { Link } from "react-router-dom";

import ProgressBar from "@ramonak/react-progress-bar";
import token1 from "../../assets/images/common/token1.png";
import Success1 from "../../assets/images/common/progress1done.png";
import Success2 from "../../assets/images/common/progress2.png";

export default function TokenKingCard() {
  return (
    <div className="border-2 border-[#9945FF] bg-gradient-to-t from-[#9945FF] to-[#000000] rounded-[16px] px-2 2xl:px-4 py-1 2xl:py-2 flex gap-4 m-auto w-full md:w-[593px]">
      <img src={token1} className="" alt="" />
      <div>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-white text-[27px]">$LERF</h2>
          </div>
          <Link className="text-[#9945FF] text-[11px] 2xl:text-[12px]">
            by <u>uKnowMe</u>
          </Link>
        </div>
        <p className="text-white text-[15px] pt-[10px]">Merged with a vision to be a fun and engaging meme coin, brimming with exciting content to propel its journey forward.</p>
        <div className="relative pt-[35px] 2xl:pt-[35px]">
          <ProgressBar
            completed="90"
            height="16px"
            bgColor="linear-gradient(to right, #9945FF, #14F195)"
            className="border border-white rounded-[50px]"
            baseBgColor="transparent"
          />
          <img src={Success1} alt="" className="absolute top-0 right-[20%] w-[20px] 2xl:w-[25px]" />
          <img src={Success2} alt="" className="absolute top-1 right-0 w-[15px] 2xl:w-[20px]" />
        </div>
      </div>
    </div>
  );
}
