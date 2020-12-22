import React, { useState, useContext } from "react";

import BackIcon from "~/assets/icons/prev.svg";
import NextIcon from "~/assets/icons/next.svg";

import Context from "./home.context";
import { HomeFooter } from "./home.styles";

export default function ({ endpoint }: { endpoint: string }) {
  const { url, currentPage, setUrl, setCurrentPage } = useContext(Context);

  const LIMIT = 100;

  const back = () => {
    if (currentPage === 1) return;

    if (currentPage > 1) {
      const x_url = new URL(url!);
      const offset = (currentPage - 2) * LIMIT;

      x_url.searchParams.set("limit", LIMIT.toString());
      x_url.searchParams.set("offset", offset.toString());

      setUrl(x_url.toString());
      setCurrentPage(currentPage - 1);
    }
  };

  const next = () => {
    const x_url = new URL(url!);
    const offset = currentPage * LIMIT;

    x_url.searchParams.set("limit", LIMIT.toString());
    x_url.searchParams.set("offset", offset.toString());

    setUrl(x_url.toString());
    setCurrentPage(currentPage + 1);
  };

  return (
    <HomeFooter.Wrapper>
      Developed by{" "}
      <a href="https://github.com/pavittarx" target="_blank">
        {" "}
        @pavittarx{" "}
      </a>
      <HomeFooter.Pagination>
        <div>
          <span onClick={back}>
            <img src={BackIcon} alt="back_icon" />
          </span>
          <span> {currentPage} </span>
          <span onClick={next}>
            <img src={NextIcon} alt="forward" />
          </span>
        </div>
      </HomeFooter.Pagination>
    </HomeFooter.Wrapper>
  );
}
