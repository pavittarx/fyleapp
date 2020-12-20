import React, { useState } from "react";

import Dropdown from "~/shared/dropdown";

import { HomeMain } from "./home.styles";

const Main = () => {
  const cityList = ["Delhi", "Mumbai", "Bangalore", "New Delhi", "Mysore"];
  const [currentCity, setCurrentCity] = useState();

  return (
    <HomeMain.Wrapper>
      <HomeMain.Menu>
        <Dropdown
          list={cityList}
          current={(currentCity ? currentCity : "City")!}
          set={setCurrentCity}
        />

        
      </HomeMain.Menu>
      <HomeMain.BodyArea>Cards Display</HomeMain.BodyArea>
      <HomeMain.Pagination>Pagination</HomeMain.Pagination>
    </HomeMain.Wrapper>
  );
};

export default Main;
