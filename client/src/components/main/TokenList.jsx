import React from "react";
import TokenKingCard from "./TokenKingCard";
import TokenCard from "../../components/common/TokenCard";
import SearchForm from "../../components/common/SearchForm";
import SelectForm from "../../components/common/SelectForm";

const TokenList = ({
  selectOptions1,
  selectOptions2,
  selectedOption1,
  selectedOption2,
  handleSearch,
  handleSelectChange,
  filteredTokens,
}) => {
  return (
    <div className="pt-[32px]">
      <div className="flex items-center justify-center bg-[#9945FF] rounded-[10px] w-[183px] text-white text-lg p-1 m-auto">
        Create token
      </div>
      <h1 className="text-white text-[40px] font-bold text-center py-[23px]">
        King of the hill
      </h1>
      <TokenKingCard />
      <div className="lg:flex justify-center gap-[23px] pb-[38px] pt-[49px]">
        <SearchForm
          onSearch={handleSearch}
          placeholder="Search token"
          containerClassName="lg:w-fit lg:m-0 m-auto"
          inputClassName="2xl:w-[520px]"
        />
        <div className="flex gap-[23px] justify-center items-center pt-4 lg:pt-0">
          <SelectForm
            options={selectOptions1}
            value={selectedOption1}
            onChange={handleSelectChange}
            selectClassName="" 
            wrapperClassName="w-full"
          />
          <SelectForm
            options={selectOptions2}
            value={selectedOption2}
            onChange={handleSelectChange}
            selectClassName="" 
            wrapperClassName="w-full"
          />
        </div>
      </div>
      <div className="lg:flex flex-wrap">
        {filteredTokens.map((item, i) => (
          <div
            key={i}
            className="w-fit lg:w-1/2 xl:w-1/3 md:px-[14px] xl:px-[19px] py-[5px] md:py-[10px] xl:py-[13px] m-auto"
          >
            <TokenCard tokenCardValues={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TokenList;
