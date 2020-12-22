import React from "react";

import {Bank, Context} from "./types";

const initialState: Context = {
  banks: [] ,
  currentCity: '',
  searchQuery: '',
  url: '',

  setBanks: () => { },
  setCurrentCity: () => { },
  setSearchQuery: () =>{ },
  setUrl: () => { }
}

export default React.createContext(initialState);