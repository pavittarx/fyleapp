import React from "react";
import fyleAppLogo from "~/assets/images/fyleapp.png";

import Main from "./home.main";
import {
  HomeWrapper,
  HomeHeader,
  HomeFooter,
} from "./home.styles";

const Header = () => {
  return <HomeHeader>
    <img src={fyleAppLogo} alt="app logo" />  
  </HomeHeader>;
};

const Footer = () => {
  return <HomeFooter>Home Footer</HomeFooter>;
};

const Home: React.FC<{}> = () => {
  return (
    <HomeWrapper>
      <Header />
      <Main />
      <Footer />
    </HomeWrapper>
  );
};

export default Home;
