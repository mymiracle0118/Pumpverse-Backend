import React, { useState, useEffect } from 'react';
import LeaderboardHeader from "../components/leaderboard/LeaderboardHeader";
import Value from "../components/leaderboard/Value";
import ReactPaginate from 'react-paginate';
import SearchForm from "../components/common/SearchForm";
import SelectForm from "../components/common/SelectForm";
import { BsBookmarkDashFill } from "react-icons/bs";
import { BiSolidMessageDetail } from "react-icons/bi";
import user1 from "../assets/images/leaderboard/user1.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const traderdata = [
  {
    userImage: user1,
    walletAddress: "5rR66ztesttesttesttest123XLG6",
    value: "$533.01",
    totalPoint: "90536",
    weekWinRate: "49%",
    profit: "$4037.07",
  },
  {
    userImage: user1,
    walletAddress: "5rR66ztesttesttesttest123XLG6",
    value: "$533.01",
    totalPoint: "90536",
    weekWinRate: "49%",
    profit: "$4037.07",
  },
  {
    userImage: user1,
    walletAddress: "5rR66ztesttesttesttest123XLG6",
    value: "$533.01",
    totalPoint: "90536",
    weekWinRate: "49%",
    profit: "$4037.07",
  },
  {
    userImage: user1,
    walletAddress: "5rR66ztesttesttesttest123XLG6",
    value: "$533.01",
    totalPoint: "90536",
    weekWinRate: "49%",
    profit: "$4037.07",
  },
  {
    userImage: user1,
    walletAddress: "5rR66ztesttesttesttest123XLG6",
    value: "$533.01",
    totalPoint: "90536",
    weekWinRate: "49%",
    profit: "$4037.07",
  },
  {
    userImage: user1,
    walletAddress: "5rR66ztesttesttesttest123XLG6",
    value: "$533.01",
    totalPoint: "90536",
    weekWinRate: "49%",
    profit: "$4037.07",
  },
  {
    userImage: user1,
    walletAddress: "5rR66ztesttesttesttest123XLG6",
    value: "$533.01",
    totalPoint: "90536",
    weekWinRate: "49%",
    profit: "$4037.07",
  },
  {
    userImage: user1,
    walletAddress: "5rR66ztesttesttesttest123XLG6",
    value: "$533.01",
    totalPoint: "90536",
    weekWinRate: "49%",
    profit: "$4037.07",
  },
  {
    userImage: user1,
    walletAddress: "5rR66ztesttesttesttest123XLG6",
    value: "$533.01",
    totalPoint: "90536",
    weekWinRate: "49%",
    profit: "$4037.07",
  },
  {
    userImage: user1,
    walletAddress: "5rR66ztesttesttesttest123XLG6",
    value: "$533.01",
    totalPoint: "90536",
    weekWinRate: "49%",
    profit: "$4037.07",
  },
  {
    userImage: user1,
    walletAddress: "5rR66ztesttesttesttest123XLG6",
    value: "$533.01",
    totalPoint: "90536",
    weekWinRate: "49%",
    profit: "$4037.07",
  },
  {
    userImage: user1,
    walletAddress: "5rR66ztesttesttesttest123XLG6",
    value: "$533.01",
    totalPoint: "90536",
    weekWinRate: "49%",
    profit: "$4037.07",
  },
  {
    userImage: user1,
    walletAddress: "5rR66ztesttesttesttest123XLG6",
    value: "$533.01",
    totalPoint: "90536",
    weekWinRate: "49%",
    profit: "$4037.07",
  },
  {
    userImage: user1,
    walletAddress: "5rR66ztesttesttesttest123XLG6",
    value: "$533.01",
    totalPoint: "90536",
    weekWinRate: "49%",
    profit: "$4037.07",
  },
];

const ITEMS_PER_PAGE = 10;
export default function Leaderboard({
  selectOptions3,
  selectedOption3,
  handleSelectChange,
  handleSearch,
}) {
  const [currentPage, setCurrentPage] = useState(0);
  const [displayValueLabel, setDisplayValueLabel] = useState("VALUE");
  const [displayProfitLabel, setDisplayProfitLabel] = useState("TOTAL POINTS");

  // Slice the traderdata array based on the current page and items per page
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentTraderData = traderdata.slice(startIndex, endIndex);

  // Handle page change
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const [displayValue, setDisplayValue] = useState("value");
  const [displayTotalPoint, setDisplayTotalPoint] = useState("totalPoint");

  const handleProfitDisplayChange = () => {
    setDisplayValue("weekWinRate");
    setDisplayTotalPoint("profit");
    setDisplayValueLabel("7-DAY WIN RATE");
    setDisplayProfitLabel("PROFIT");
  };

  // Handle display change for Value button
  const handleValueDisplayChange = () => {
    setDisplayValue("value");
    setDisplayTotalPoint("totalPoint");
    setDisplayValueLabel("VALUE");
    setDisplayProfitLabel("TOTAL POINTS");
  };

  

  return (
    <div className="pt-[30px] lg:pt-[75px] p-0 lg:p-[100px]">
      <LeaderboardHeader />
      <div className=" border border-[#00FF6C] rounded-[15px] p-[20px] mt-[39px]">
        <div className="text-white flex border-2 border-b-[#333333] border-transparent">
          <button onClick={handleValueDisplayChange} className="flex items-center justify-start w-[109px] pb-[15px] focus:border-b-white focus:border-2 border-transparent">
            <BsBookmarkDashFill />
            Value
          </button>
          <button onClick={handleProfitDisplayChange} className="flex items-center justify-center w-[109px] pb-[15px] focus:border-b-white focus:border-2 border-transparent">
            <BiSolidMessageDetail />
            P&L
          </button>
        </div>
        <div className="py-[28px] md:flex w-full xl:w-1/2 gap-[28px]">
          <SelectForm
            options={selectOptions3}
            value={selectedOption3}
            onChange={handleSelectChange}
            selectClassName=""
            wrapperClassName="lg:w-fit w-full mb-3 md:mb-0"
          />
          <SearchForm
            onSearch={handleSearch}
            placeholder="Search by user"
            containerClassName="lg:w-fit lg:m-0 m-auto" // Custom container class
            inputClassName="2xl:w-[220px]" // Custom input class
          />
        </div>
        <div className="text-white text-[10px] xs:text-[12px] md:text-[16px]">
          <div>
            <div className="border border-b-[#333333] border-transparent flex text-[#8D93B7] pb-[11px]">
              <p className="flex justify-center items-center w-[19%]">Ranking</p>
              <p className="flex justify-center items-center w-[33%]">USER</p>
              <p className="flex justify-center items-center w-[19%]">{displayValueLabel}</p>
              <p className="flex justify-center items-center w-[29%] md:w-[19%]">{displayProfitLabel}</p>
              <p className="flex justify-center items-center md:w-[10%]"></p>
            </div>
          </div>
          {currentTraderData.map((item, index) => (
            <div key={startIndex + index}>
              <Value traderdata={item} number={startIndex + index + 1} displayValue={item[displayValue]} displayTotalPoint={item[displayTotalPoint]}/>
            </div>
          ))}
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel={<FaChevronRight size={15}/>}
          onPageChange={handlePageClick}
          pageRangeDisplayed={10}
          pageCount={Math.ceil(traderdata.length / ITEMS_PER_PAGE)}
          previousLabel={<FaChevronLeft size={15}/>}
          containerClassName="pagination"
          className='text-[#8D93B7] flex justify-center items-center gap-3 mt-5'
          activeClassName='text-white'
          previousClassName='bg-[#333333] p-1 rounded-full'
          nextClassName='bg-[#333333] p-1 rounded-full'
        />
      </div>
    </div>
  );
}
