import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/layouts/header/Navbar";
export default function Home() {
  return (
    <section className="bg-[url('/src/assets/images/home/homebackground.png')] bg-cover h-screen text-white text-center">
      <Navbar />
      <div className="pt-16 px-3">
        <h1 className="text-[35px] ss:text-[40px] sm:text-[50px] md:text-[80px] lg:text-[100px] 2xl:text-[144px] font-bold">CRYPTO SPACE</h1>
        <h3 className="text-[18px] md:text-[20px] lg:text-[25px] 2xl:text-[32px] m-auto mt-3 md:mt-0">
          is a distributed gaming environment for <br className="hidden ss:block"/> the generations; brought to
          the metaverse.{" "}
        </h3>
        <p className="text-sm md:text-md lg:text-xl m-auto mt-4 md:mt-7">
          A multiplayer, game-arcade metaverse, where players socialize and <br className="hidden sm:block"/>
          compete in the most popular arcade games.{" "}
        </p>
        <Link to="/main" className="px-12 sm:px-20 lg:px-24 py-2 sm:py-4 bg-white text-black font-bold text-md lg:text-xl block w-fit m-auto mt-10">
          GET STARTED
        </Link>
      </div>
    </section>
  );
}
