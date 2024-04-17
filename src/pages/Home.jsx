import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/layouts/header/Navbar";
export default function Home() {
  return (
    <section className="bg-[url('/src/assets/images/home/homebackground.png')] bg-cover h-screen text-white text-center">
      <Navbar />
      <div className="pt-16">
        <h1 className="text-[144px] font-bold">CRYPTO SPACE</h1>
        <h3 className="text-[32px] w-[610px] m-auto">
          is a distributed gaming environment for the generations; brought to
          the metaverse.{" "}
        </h3>
        <p className="text-xl w-[640px] m-auto mt-7">
          A multiplayer, game-arcade metaverse, where players socialize and
          compete in the most popular arcade games.{" "}
        </p>
        <Link className="px-24 py-4 bg-white text-black font-bold text-xl block w-fit m-auto mt-10">
          GET STARTED
        </Link>
      </div>
    </section>
  );
}
