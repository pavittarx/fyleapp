/* Contains all styles fro the pages/home */

import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  background: var(--bg);
`;

export const HomeHeader = styled.header`
  padding: 2rem 2rem 1.5rem;

  img {
    height: 40px;
  }
`;

export const HomeMain = {
  Wrapper: styled.main`
    flex-grow: 1;

    height: 2000px;
    overflow-y: scroll;

    display: flex;
    flex-direction: column;

    padding: 1rem 2rem;
  `,

  Menu: styled.section`
  `,

  BodyArea: styled.section`
    flex-grow: 1;
  `,

  Pagination: styled.section``

};

export const HomeFooter = styled.footer``;
