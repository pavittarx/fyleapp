/* Contains all styles fro the pages/home */

import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  background: var(--bg);
`;

export const HomeHeader = styled.header`
  padding: 2rem 2rem 0rem;

  img {
    height: 40px;
  }
`;

export const HomeMain = {
  Wrapper: styled.main`
    flex-grow: 1;

    height: 2000px;
    overflow-x: hidden;
    overflow-y: scroll;

    display: flex;
    flex-direction: column;

    padding: 1rem 2rem;
  `,

  Menu: {
    Wrapper: styled.section`
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 1rem 0;

    `,
    SearchBar: styled.div`
      display: flex;
      align-items: center;

      padding: 0.5rem 1.5rem;
      background: #fff;
      border-radius: 100px;

      transition: 1s all ease-out;

      img{
        padding: 0 0.25rem;
      }

      &:focus-within{
        opacity: 0.85;
        border: 1px solid #777777cc;
      }
    `
  },

  BodyArea: styled.section`
    flex-grow: 1;

    display: flex;
    flex-wrap: wrap;

    justify-items: center;
  `,

  Pagination: styled.section``,

  BankCard: styled.div`
    margin: 10px;
    background: #ffffffa0;
    width: 20rem;
    border-radius: 20px;
    padding: 1rem 1.5rem;

    flex-grow: 1;
    opacity: 75%;
    box-shadow: 0 1px 10px -5px #ffffffcc;

    .heading{
      font-size: 20px;
      font-weight: 700;

    .para{
      font-family: 'sans-serif';
      font-size: 14px;
    }
  `    

};

export const HomeFooter = styled.footer``;
