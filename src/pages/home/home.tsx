import React, { useEffect, useState } from "react";

import Preloader from "~/shared/preloader";

import HContext from "./home.context";
import Header from "./home.header";
import Main from "./home.main";
import Footer from "./home.footer";

import { Bank, Context } from "./types";

import { HomeWrapper, HomeFooter } from "./home.styles";

const { getDocuments } = require("./home.scripts");

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
  const [currentPage, setCurrentPage] = useState(1);

  const [loading, setLoading] = useState(false);

  /* Update request url if the current city changes */
  useEffect(() => {
    if (currentCity) {
      const x_url = new URL(url);
      x_url.searchParams.set('q', currentCity!);
      setUrl(x_url.toString());
      setSearchQuery(undefined);
      setCurrentPage(1);
    }
  }, [currentCity]);

  /* Update banks list when the url changes */
  useEffect(() => {
    setLoading(true);

    if (url)
      getDocuments(url)
        .then((doc: any) => {
          setBanksList(doc.res.branches);
          setLoading(false);
        })
        .catch((err) => {
          console.log(
            `An error occured while getting documents on url: ${url}`,
            err
          );
          setLoading(false);
          setUrl(endpoint);
        });
  }, [url]);

  useEffect(() => {
    if (banksList) setBanks(banksList);
  }, [banksList]);

  useEffect(() => {
    if (!searchQuery) setBanks(banksList);

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
    currentPage,
    searchQuery,
    setUrl,
    setBanks,
    setCurrentCity,
    setCurrentPage,
    setSearchQuery,
  };

  return (
    <HomeWrapper>
      <HContext.Provider value={value}>
        <Header />
        {!loading ? <Main /> : <Preloader />}
        <Footer endpoint={endpoint}/>
      </HContext.Provider>
    </HomeWrapper>
  );
};

export default Home;
