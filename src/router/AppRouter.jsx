import { BrowserRouter, Routes, Route } from "react-router-dom";

import Singin from "../pages/auth/Signin";
import Singup from "../pages/auth/Signup";
import Main from "../pages/main";
import Leaderboard from "../pages/Leaderboard";
import CreateToken from "../pages/CreateToken";

import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
// import { PhantomWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter } from '@solana/wallet-adapter-wallets';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { SolflareWalletAdapter } from '@solana/wallet-adapter-solflare';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { useMemo } from 'react';

export const AppRouter = () => {
  const network = WalletAdapterNetwork.Mainnet;
  const rpcHost = 'https://mango.rpcpool.com/946ef7337da3f5b8d3e4a34e7f88';
  const endpoint = useMemo(() => rpcHost, []);
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter({ network }),
      new SolflareWalletAdapter({ network })
    ],
    []
  );
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <WalletModalProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/signin" element={<Singin />} />
              <Route path="/signup" element={<Singup />} />
              <Route path="/" element={<Main />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/createtoken" element={<CreateToken />} />
            </Routes>
          </BrowserRouter>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
