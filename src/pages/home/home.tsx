import React, { useEffect, useState } from "react";

import HContext from "./home.context";
import Header from "./home.header";
import Main from "./home.main";

import { Bank, Context } from "./types";

import { HomeWrapper, HomeFooter } from "./home.styles";

const { getDocuments } = require("./home.scripts");

const Footer = () => {
  return <HomeFooter> Home Footer </HomeFooter>;
};

const Home: React.FC<{}> = () => {
  // Initial Url to make requess at
  const endpoint = "https://fyleserve.herokuapp.com/api/branches";

  // used to fetch & filter values
  const [banksList, setBanksList] = useState(
    async (): Promise<Bank[]> => {
      return (await getDocuments(url)).res.branches;
    }
  );

  const [url, setUrl] = useState(endpoint);
  const [banks, setBanks] = useState();
  const [currentCity, setCurrentCity] = useState();
  const [searchQuery, setSearchQuery] = useState();

  const [loading, setLoading] = useState(true);

  console.log(searchQuery, currentCity, url, banks);

  /* Update request url if the current city changes */
  useEffect(() => {
    if (currentCity) {
      setUrl(endpoint + "?q=" + currentCity);
    }
  }, [currentCity]);

  /* Update banks list when the url changes */
  useEffect(() => {
    if (url)
      getDocuments(url).then((doc: any) => {
        setBanksList(doc.res.branches);
      });
  }, [url]);

  useEffect(() => {
    if (banksList) setBanks(banksList);
  }, [banksList]);

  useEffect(() => {
    if(!searchQuery) setBanks(banksList);

    if (searchQuery && banksList) {
      const filteredBanks = banksList.filter((bank) => {
        let bulk = "";

        for (let i in bank) {
          bulk += bank[i];
        }

        return bulk.match(new RegExp(`${searchQuery}`, "gi"));
      });

      setBanks(filteredBanks);
    }
  }, [searchQuery]);

  const value: Context = {
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
      <HContext.Provider value={value}>
        <Header />
        <Main />
        <Footer />
      </HContext.Provider>
    </HomeWrapper>
  );
};

export default Home;
