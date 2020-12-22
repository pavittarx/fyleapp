import React from "react";

import {Bank, Context} from "./types";

const initialState: Context = {
  banks: [] ,
  currentCity: '',
  searchQuery: '',
  url: '',
  currentPage: 1,

  setBanks: () => { },
  setCurrentCity: () => { },
  setSearchQuery: () =>{ },
  setUrl: () => { },
  setCurrentPage: () => {}
}

export default React.createContext(initialState);