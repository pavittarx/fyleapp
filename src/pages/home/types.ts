export type Bank = {
  name: string;
  ifsc: string;
  address: string;
  branch: string;
}

export type Context = {
  banks: Array<Bank> | undefined;
  currentCity: string | undefined;
  searchQuery: string | undefined;
  url: string | undefined;

  setBanks: Function,
  setCurrentCity: Function;
  setSearchQuery: Function;
  setUrl: Function;
}