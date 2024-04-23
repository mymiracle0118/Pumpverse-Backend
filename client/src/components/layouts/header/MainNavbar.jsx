import React from "react";
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
    <nav className="flex justify-center lg:justify-between items-center">
      <div className="xs:flex gap-[10px] md:gap-[22px] text-[10px] ss:text-[12px] lg:text-[16px]">
        <div className="flex bg-[#FFE412] rounded-[15px] px-2 md:px-4 py-1 gap-[4px] md:gap-[9px] mb-2 xs:mb-0 justify-center w-[240px] xs:w-fit">
          <p>
            <u>e6lan</u>
          </p>
          <p>created</p>
          <p>
            <u>HP$UCKS</u>
          </p>
        </div>
        <div className="flex bg-[#00FF6C] rounded-[15px] px-2 md:px-4 py-1 gap-[4px] md:gap-[9px] w-[240px] xs:w-fit justify-center">
          <p>
            <u>e6lan</u>
          </p>
          <p>bought 0.86 SOL</p>
          <p>
            <u>SLOWANA</u>
          </p>
        </div>
      </div>
      <div className="hidden lg:block">
        <WalletMultiButton>
          {wallet.connected ? wallet.address : "CONNECT WALLET"}
        </WalletMultiButton>
        <>
          {wallet.connected && (
            <WalletDisconnectButton>disconnect wallet</WalletDisconnectButton>
          )}
        </>
      </div>
      {/* <button className="px-[41px] py-[19px] bg-white text-black text-lg font-bold rounded-[10px]">
        CONNECT WALLET{" "}
      </button> */}
    </nav>
  );
}
