import React, { useState, useEffect, useContext } from "react";

import SearchIcon from "~/assets/icons/search.svg";
import fyleAppLogo from "~/assets/images/fyleapp.png";
import Dropdown from "~/shared/dropdown";
import Home from "./home";

import Context from "./home.context";
import { HomeHeader } from "./home.styles";

type SearchBar = {
  query: string | undefined;
  set: Function;
};

const SearchBar = ({ query, set }: SearchBar) => {
  const [searchText, setSearchText] = useState("");

  let typingTimer: number;

  const start = () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(finished, 1000);
  };

  const reset = () => {
    clearTimeout(typingTimer);
  };

  const finished = () => {
    set(searchText);
  };

  return (
    <HomeHeader.Menu.SearchBar>
      <img src={SearchIcon} alt="Search Icon" />
      <input
        type="text"
        value={searchText}
        placeholder="Search"
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        onKeyUp={start}
        onKeyDown={reset}
      />
    </HomeHeader.Menu.SearchBar>
  );
};

export default () => {
  const cityList = ["Delhi", "Mumbai", "Bangalore", "New Delhi", "Mysore"];

  const {
    currentCity,
    searchQuery,
    setCurrentCity,
    setSearchQuery,
  } = useContext(Context);

  return (
    <HomeHeader.Wrapper>
      <HomeHeader.Logo>
        <img src={fyleAppLogo} alt="app logo" />
      </HomeHeader.Logo>
      <HomeHeader.Menu.Wrapper>
        <Dropdown
          list={cityList}
          current={(currentCity ? currentCity : "City")!}
          set={setCurrentCity}
        />
        <SearchBar query={searchQuery} set={setSearchQuery} />
      </HomeHeader.Menu.Wrapper>
    </HomeHeader.Wrapper>
  );
};
