import React, { useState, useEffect } from "react";

import TokenList from "../components/main/TokenList";
import Leaderboard from "./Leaderboard";
import MainNavbar from "../components/layouts/header/MainNavbar";
import Sidebar from "../components/layouts/sidebar/Sidebar";
import token1 from "../assets/images/common/token1.png";
import token2 from "../assets/images/common/token2.png";
import token3 from "../assets/images/common/token3.png";
import token4 from "../assets/images/common/token4.png";
import token5 from "../assets/images/common/token5.png";
import token6 from "../assets/images/common/token6.png";
import token7 from "../assets/images/common/token7.png";
import token8 from "../assets/images/common/token8.png";
import token9 from "../assets/images/common/token9.png";
import token10 from "../assets/images/common/token10.png";
import token11 from "../assets/images/common/token11.png";
import token12 from "../assets/images/common/token12.png";

const tokenCardValues = [
  {
    tokenImg: token1,
    tokenName: "$LOWA...",
    tokenDescription:
      "Merged with a vision to be a fun and engaging meme coin...",
    progress: "40",
  },
  {
    tokenImg: token2,
    tokenName: "DEBB",
    tokenDescription:
      "Merged with a vision to be a fun and engaging meme coin...",
    progress: "25",
  },

  {
    tokenImg: token3,
    tokenName: "LADA$$",
    tokenDescription:
      "Merged with a vision to be a fun and engaging meme coin...",
    progress: "22",
  },

  {
    tokenImg: token4,
    tokenName: "SUSSY",
    tokenDescription:
      "Merged with a vision to be a fun and engaging meme coin...",
    progress: "25",
  },

  {
    tokenImg: token5,
    tokenName: "CATTY",
    tokenDescription:
      "Merged with a vision to be a fun and engaging meme coin...",
    progress: "28",
  },

  {
    tokenImg: token6,
    tokenName: "BRED",
    tokenDescription:
      "Merged with a vision to be a fun and engaging meme coin...",
    progress: "31",
  },

  {
    tokenImg: token7,
    tokenName: "FURY",
    tokenDescription:
      "Merged with a vision to be a fun and engaging meme coin...",
    progress: "19",
  },

  {
    tokenImg: token8,
    tokenName: "BOBBY",
    tokenDescription:
      "Merged with a vision to be a fun and engaging meme coin...",
    progress: "30",
  },

  {
    tokenImg: token9,
    tokenName: "BLUON",
    tokenDescription:
      "Merged with a vision to be a fun and engaging meme coin...",
    progress: "20",
  },

  {
    tokenImg: token10,
    tokenName: "QUACK",
    tokenDescription:
      "Merged with a vision to be a fun and engaging meme coin...",
    progress: "20",
  },

  {
    tokenImg: token11,
    tokenName: "PFCHU",
    tokenDescription:
      "Merged with a vision to be a fun and engaging meme coin...",
    progress: "20",
  },

  {
    tokenImg: token12,
    tokenName: "CHTRA",
    tokenDescription:
      "Merged with a vision to be a fun and engaging meme coin...",
    progress: "20",
  },
];
export default function Main() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [activePage, setActivePage] = useState("dashboard"); // State to track active page
  const [selectedOption1, setSelectedOption1] = useState("bumporder");
  const [selectedOption2, setSelectedOption2] = useState("desc");
  const [selectedOption3, setSelectedOption3] = useState("Yesterday");
  const [filteredTokens, setFilteredTokens] = useState(tokenCardValues);
  const [searchTerm, setSearchTerm] = useState(""); // Define searchTerm state

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

  const selectOptions3 = [
    { value: "Yesterday", label: "Yesterday" },
    { value: "Last Week", label: "Last Week" },
  ];

  useEffect(() => {
    filterTokens(searchTerm, selectedOption2); // Trigger filtering on searchTerm or selectedOption2 change
  }, [searchTerm, selectedOption2]);

  const handleSelectChange = (value) => {
    setSelectedOption1(value);
    setSelectedOption2(value);
    setSelectedOption3(value);
  };

  const handleSearch = (value) => {
    setSearchTerm(value); // Update searchTerm state when user types in the search input
  };

  const filterTokens = (searchTerm, sortingOption) => {
    let filtered = [...tokenCardValues];

    if (searchTerm) {
      // Apply search filter if searchTerm is defined
      filtered = filtered.filter((token) =>
        token.tokenName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortingOption === "asc") {
      // Apply ascending sorting if sortingOption is "asc"
      filtered.sort((a, b) => parseFloat(a.progress) - parseFloat(b.progress));
    } else if (sortingOption === "desc") {
      // Apply descending sorting if sortingOption is "desc"
      filtered.sort((a, b) => parseFloat(b.progress) - parseFloat(a.progress));
    }

    setFilteredTokens(filtered); // Update filteredTokens state
  };

  const handleToggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div className="relative">
      <div className="relative lg:fixed">
        <Sidebar
          onToggle={handleToggleSidebar}
          onPageChange={handlePageChange}
        />
      </div>
      <div
        className={`${isCollapsed ? "lg:ml-[68px]" : "lg:ml-[270px]"} ${
          isCollapsed ? "xl:ml-[68px]" : "xl:ml-[303px]"
        } py-3 md:py-6 pt-6 xl:py-12 px-4 md:px-8 xl:px-14 bg-black min-h-screen transition-all duration-500 z-20 relative`}
      >
        <MainNavbar />
        {activePage === "dashboard" && (
          <TokenList
            selectOptions1={selectOptions1}
            selectOptions2={selectOptions2}
            selectedOption1={selectedOption1}
            selectedOption2={selectedOption2}
            handleSearch={handleSearch}
            handleSelectChange={handleSelectChange}
            filteredTokens={filteredTokens}
          />
        )}
        {activePage === "leaderboard" && (
          <Leaderboard
            selectOptions3={selectOptions3}
            selectedOption3={selectedOption3}
            handleSelectChange={handleSelectChange}
          />
          // Render your leaderboard component here
        )}
      </div>
    </div>
  );
}
