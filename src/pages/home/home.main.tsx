import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchIcon from "~/assets/icons/search.svg";

import Dropdown from "~/shared/dropdown";
import { HomeMain } from "./home.styles";

import { getDocuments, normalize } from "./home.scripts";

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
    <HomeMain.Menu.SearchBar>
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
    </HomeMain.Menu.SearchBar>
  );
};

const BankCard = ({ details }: { details: { name: string; address: string, ifsc: string } }) => {
  return (
    <HomeMain.BankCard>
      <div className="heading"> {normalize(details.name)} </div>

      <div className="para">
        {details.ifsc} <br/>
        {details.address}
      </div>
    </HomeMain.BankCard>
  );
};

const Main = () => {

  const endpoint = "https://fyleserve.herokuapp.com/api/branches";
  const cityList = ["Delhi", "Mumbai", "Bangalore", "New Delhi", "Mysore"];

  const [url, setUrl] = useState(endpoint);
  const [currentCity, setCurrentCity] = useState();
  const [searchQuery, setSearchQuery] = useState();
  const [banks, setBanks] = useState([]);

  useEffect(() => {
    getDocuments(url).then((doc) => {
      console.log(doc);
      setBanks(doc.res.branches);
    });
  }, []);

  return (
    <HomeMain.Wrapper>
      <HomeMain.Menu.Wrapper>
        <Dropdown
          list={cityList}
          current={(currentCity ? currentCity : "City")!}
          set={setCurrentCity}
        />
        <SearchBar query={searchQuery} set={setSearchQuery} />
      </HomeMain.Menu.Wrapper>
      <HomeMain.BodyArea>
        {banks &&
          banks.length &&
          banks.map((bank, index) => (
            <BankCard key={"c-" + index} details={bank} />
          ))}
      </HomeMain.BodyArea>
      <HomeMain.Pagination>Pagination</HomeMain.Pagination>
    </HomeMain.Wrapper>
  );
};

export default Main;
