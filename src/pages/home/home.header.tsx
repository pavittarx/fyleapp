import React, { useState, useEffect, useContext } from "react";

import SearchIcon from "~/assets/icons/search.svg";
import fyleAppLogo from "~/assets/images/fyleapp.png";
import Dropdown from "~/shared/dropdown";

import Context from "./home.context";
import { HomeHeader } from "./home.styles";

type SearchBar = {
  set: Function;
};

const SearchBar = ({ set }: SearchBar) => {
  const url = useContext(Context);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // Empty search if url changes
    if (searchText) setSearchText("");
  }, [url]);

  // used to store timer ID
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
  const cityList = ["Delhi", "Mumbai", "Bangalore", "Kolkata", "Mysore"];

  const { currentCity, setCurrentCity, setSearchQuery } = useContext(Context);

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
        <SearchBar set={setSearchQuery} />
      </HomeHeader.Menu.Wrapper>
    </HomeHeader.Wrapper>
  );
};
