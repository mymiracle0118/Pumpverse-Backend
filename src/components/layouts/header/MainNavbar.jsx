import React from "react";
import { Link } from "react-router-dom";
import { BsLightningChargeFill } from "react-icons/bs";
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { useConnection, useWallet } from "@solana/wallet-adapter-react"; // Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

export default function MainNavbar() {
  const { connection } = useConnection();
  console.log("connection >>", connection);
  const wallet = useWallet();
  return (
    <nav className="flex justify-between items-center">
      <Link to="/" className="flex font-bold text-4xl items-center text-white">
        <BsLightningChargeFill className="text-[#9945FF]" size={25} />
        BOOSTER
      </Link>
      <WalletMultiButton>
        {wallet.connected ? wallet.address : "CONNECT WALLET"}
      </WalletMultiButton>
      <>
        {wallet.connected && (
          <WalletDisconnectButton>disconnect wallet</WalletDisconnectButton>
        )}
      </>
      {/* <button className="px-[41px] py-[19px] bg-white text-black text-lg font-bold rounded-[10px]">
        CONNECT WALLET{" "}
      </button> */}
    </nav>
  );
}
