import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainNavbar from "../components/layouts/header/MainNavbar";
import MainSidebar from "../components/layouts/sidebar/Sidebar";
import token1 from "../assets/images/common/token1.png";
import TokenCard from "../components/common/TokenCard";
import SearchForm from "../components/common/SearchForm";
import SelectForm from "../components/common/SelectForm";
import TokenKingCard from "../components/main/TokenKingCard";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const tokenCardValues = [
  {
    tokenImg: token1,
    tokenName: "DEBB",
    tokenDescription:
      "Merged with a vision to be a fun and engaging meme coin, brimming with exciting content...",
    progress: "20",
  },
  {
    tokenImg: token1,
    tokenName: "DEBB",
    tokenDescription:
      "Merged with a vision to be a fun and engaging meme coin, brimming with exciting content...",
    progress: "20",
  },

  {
    tokenImg: token1,
    tokenName: "DEBB",
    tokenDescription:
      "Merged with a vision to be a fun and engaging meme coin, brimming with exciting content...",
    progress: "20",
  },

  {
    tokenImg: token1,
    tokenName: "DEBB",
    tokenDescription:
      "Merged with a vision to be a fun and engaging meme coin, brimming with exciting content...",
    progress: "20",
  },

  {
    tokenImg: token1,
    tokenName: "DEBB",
    tokenDescription:
      "Merged with a vision to be a fun and engaging meme coin, brimming with exciting content...",
    progress: "20",
  },
];
export default function Main() {
  const [selectedOption1, setSelectedOption1] = useState("bumporder");
  const [selectedOption2, setSelectedOption2] = useState("desc");

  const selectOptions1 = [
    { value: "bumporder", label: "bump order" },
    { value: "lastreply", label: "last reply" },
    { value: "reply count", label: "reply count" },
    { value: "market cap", label: "market cap" },
    { value: "creation time", label: "creation time" },
  ];

  const selectOptions2 = [
    { value: "asc", label: "asc" },
    { value: "desc", label: "desc" },
  ];

  const handleSelectChange = (value) => {
    setSelectedOption1(value);
    setSelectedOption2(value);
  };

  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleButtonClick = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  return (
    <div className="flex">
      <MainSidebar />
      <div className="py-12 px-14 bg-black min-h-screen ">
        <MainNavbar />
        <div>
          <h1 className="text-[51px] text-white text-center pt-32 pb-12">
            King of the castle
          </h1>
          <TokenKingCard />
          <h1 className="text-[51px] text-white pt-[38px] pb-[49px]">
            Launches
          </h1>
          <div className="flex justify-center gap-[23px] pb-[38px]">
            <SearchForm />
            <SelectForm
              options={selectOptions1}
              value={selectedOption1}
              onChange={handleSelectChange}
            />
            <SelectForm
              options={selectOptions2}
              value={selectedOption2}
              onChange={handleSelectChange}
            />
            <Link className="flex items-center justify-center bg-[#9945FF] rounded-[10px] w-[204px] text-white text-lg">
              Create token
            </Link>
          </div>
          <div className="flex flex-wrap">
            {tokenCardValues.map((item, i) => (
              <div key={i} className="w-1/3 px-[19px] py-[13px]">
                <TokenCard tokenCardValues={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
