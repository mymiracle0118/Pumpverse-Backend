import React, { useState } from "react";
import { Link } from "react-router-dom";
import tokenImage from "../assets/images/createtoken/tokenImage.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";

import { createMint } from '@solana/spl-token';
import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL } from '@solana/web3.js';

const CreateToken = () => {
  const [tokenName, settokenName] = useState("");
  const [symbol, setsymbol] = useState("");
  const [description, setdescription] = useState("");
  const [websiteURL, setWebsiteURL] = useState("");
  const [twitterURL, setTwitterURL] = useState("");
  const [telegramURL, setTelegramURL] = useState("");
  const [file, setFile] = useState(null);

  // Function to handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const handleCreateToken = (e) => {
    const payer = Keypair.generate();
    const mintAuthority = Keypair.generate();
    const freezeAuthority = Keypair.generate();

    const connection = new Connection(
      clusterApiUrl('devnet'),
      'confirmed'
    );

    const mint = createMint(
      connection,
      payer,
      mintAuthority.publicKey,
      freezeAuthority.publicKey,
      9 // We are using 9 to match the CLI decimal default exactly
    );

    console.log(mint);
    // console.log("New Token Address: " + mint.toBase58());
  }

  return (
    <>
      <div className="lg:flex justify-center gap-[100px] pt-[48px] text-white">
        <div className="w-full lg:w-1/2">
          <h2 className="text-[25px] pb-[28px]">Token information</h2>
          <form>
            <div className="flex flex-col gap-[10px] pb-[30px]">
              <label htmlFor="tokenName">Token name (ex. Boo$ter)</label>
              <input
                className="common-input"
                type="text"
                id="tokenName"
                value={tokenName}
                onChange={(e) => settokenName(e.target.value)}
                placeholder="Enter token name"
                maxlength={12}
              />
            </div>
            <div className="flex flex-col gap-[10px] pb-[30px]">
              <label htmlFor="symbol">Symbol (Max 10, ex. BSTR)</label>
              <input
                className="common-input"
                type="text"
                id="symbol"
                value={symbol}
                onChange={(e) => setsymbol(e.target.value)}
                placeholder="Enter token symbol"
              />
            </div>
            <div className="flex flex-col gap-[10px] pb-[30px]">
              <label htmlFor="description">Description (Optional)</label>
              <input
                className="common-input"
                type="text"
                id="description"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
                placeholder="Enter token description"
              />
            </div>
            <div className="flex flex-col gap-[10px] pb-[30px]">
              <label>Socials (Optional)</label>
              <input
                className="common-input"
                type="text"
                id="websiteURL"
                value={websiteURL}
                onChange={(e) => setWebsiteURL(e.target.value)}
                placeholder="Website URL"
              />
              <input
                className="common-input"
                type="text"
                id="twitterURL"
                value={twitterURL}
                onChange={(e) => setTwitterURL(e.target.value)}
                placeholder="Twitter (X) URL"
              />
              <input
                className="common-input"
                type="text"
                id="telegramURL"
                value={telegramURL}
                onChange={(e) => setTelegramURL(e.target.value)}
                placeholder="Telegram URL"
              />
            </div>
            <p className="pb-[10px]">
              Symbol image (Square size 128x128 or large)
            </p>
            <div className="flex flex-col gap-[10px]">
              <label
                htmlFor="symbolImage"
                className="h-[182px] rounded-[15px] border border-white border-dashed cursor-pointer relative"
              >
                <input
                  className="hidden"
                  type="file"
                  id="symbolImage"
                  onChange={handleFileChange}
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <CiImageOn size={70} className="m-auto" />
                  <u>Upload an Image</u>
                </div>
              </label>
            </div>
          </form>
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-[25px] pb-[28px]">Preview</h2>
          <div className="bg-[#333333] p-[8px] md:p-[14px] rounded-[20px] flex gap-[8px] md:gap-[18px] items-center">
            <div className="w-[98px] h-[98px] flex items-center">
              {file ? (
                <div>
                  <img
                    src={URL.createObjectURL(file)}
                    alt="Preview"
                    className="rounded-[20px] min-w-[80px]"
                  />
                </div>
              ) : (
                <img src={tokenImage} alt="Preview" />
              )}
            </div>
            <div className="w-full">
              <div className="flex justify-between">
                <h2 className="text-white text-[14px] sm:text-[20px]">
                  {tokenName}
                  {!tokenName && <label htmlFor="tokenName">TOKEN NAME</label>}
                </h2>
                <Link className="text-[#9945FF] text-[10px] 2xl:text-[12px]">
                  by <u>uKnowMe</u>
                </Link>
              </div>
              <p className="py-[14px] text-[12px] break-words">
                {description}
                {!description && (
                  <label htmlFor="description">
                    Merged with a vision to be a fun and engaging meme coin...
                  </label>
                )}
              </p>
              <div className="flex gap-[10px]">
                <Link to={twitterURL}>
                  <FaXTwitter
                    className="text-[#8D93B7] border-4 border-[#272727] p-[1px]"
                    size={24}
                  />
                </Link>
                <Link to={websiteURL}>
                  <FaGlobe
                    className="text-[#8D93B7] border-4 border-[#272727] p-[1px]"
                    size={24}
                  />
                </Link>
                <Link to={telegramURL}>
                  <FaTelegramPlane
                    className="text-[#8D93B7] border-4 border-[#272727] p-[1px]"
                    size={24}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-[25px] pt-[41px] pb-[28px]">
              Token information
            </h2>
            <div className="text-[14px] md:text-[20px] pb-[20px] flex">
              <p className="w-[150px]">Token name</p>
              {tokenName}
            </div>
            <div className="text-[14px] md:text-[20px] pb-[20px] md:flex break-words">
              <p className="w-[150px]">Symbol</p>{symbol}
            </div>
            <div className="text-[14px] md:text-[20px] pb-[20px] md:flex break-words">
              <p className="w-[150px]">Description</p> {description}
            </div>
            <div className="text-[14px] md:text-[20px] flex gap-[120px] md:gap-[164px]">
              <p>Socials</p>
              <div className="flex gap-[10px]">
                <Link to={twitterURL}>
                  <FaXTwitter
                    className="text-[#8D93B7] bg-[#333333] p-[2px]"
                    size={24}
                  />
                </Link>
                <Link to={websiteURL}>
                  <FaGlobe
                    className="text-[#8D93B7] bg-[#333333] p-[2px]"
                    size={24}
                  />
                </Link>
                <Link to={telegramURL}>
                  <FaTelegramPlane
                    className="text-[#8D93B7] bg-[#333333] p-[2px]"
                    size={24}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white flex flex-col items-center pt-[48px]">
        <button
          className="text-[20px] bg-[#9945FF] rounded-[15px] py-1 px-7 text-white flex justify-center"
          onClick={handleCreateToken}
        >
          Create token
        </button>
        <p className="text-[14px] pt-[15px]">Cost to deploy: 0.025 SOL</p>
      </div>
    </>
  );
};

export default CreateToken;
