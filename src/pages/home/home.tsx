import React, { useState } from "react";

import Context from "./home.context";

import Header from "./home.header";
import Main from "./home.main";
import { HomeWrapper, HomeFooter } from "./home.styles";

const Footer = () => {
  return <HomeFooter> Home Footer </HomeFooter>;
};

const Home: React.FC<{}> = () => {
  // Initial Url to make requess at
  const endpoint = "https://fyleserve.herokuapp.com/api/branches";

  const [url, setUrl] = useState(endpoint);
  const [banks, setBanks] = useState([]);
  const [currentCity, setCurrentCity] = useState();
  const [searchQuery, setSearchQuery] = useState();

  const value = {
    url,
    banks,
    currentCity,
    searchQuery,
    setUrl,
    setBanks,
    setCurrentCity,
    setSearchQuery,
  };

  return (
    <HomeWrapper>
      <Context.Provider value={value}>
        <Header />
        <Main />
        <Footer />
      </Context.Provider>
    </HomeWrapper>
  );
};

export default Home;
