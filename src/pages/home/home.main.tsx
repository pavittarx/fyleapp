import React, { useEffect, useState, useContext } from "react";

import { Bank } from "./types";

import Context from "./home.context";
import { HomeMain } from "./home.styles";

import { getDocuments, normalize } from "./home.scripts";

const BankCard = ({ details }: { details: Bank}) => {
  return (
    <HomeMain.BankCard>
      <div className="heading"> {normalize(details.name)} </div>
      <div>
        {details.branch}, {normalize(details.city)}, {normalize(details.state)}
      </div>
      <div className="para">
        {details.ifsc} <br /> <br/>
        {details.address}
      </div>
    </HomeMain.BankCard>
  );
};

const Main = () => {
  const { url, banks, setBanks } = useContext(Context);

  useEffect(() => {
    if(url)
      getDocuments(url).then((doc: any) => {
        setBanks(doc.res.branches);
      });
  }, []);

  return (
    <HomeMain.Wrapper>
      <HomeMain.BodyArea>
        { (banks && banks.length)? banks.map((bank, index) => (
            <BankCard key={"c-" + index} details={bank} />
          )) : null}
      </HomeMain.BodyArea>
    </HomeMain.Wrapper>
  );
};

export default Main;
