/* Contains all styles fro the pages/home */
import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  background: var(--bg);
`;

export const HomeHeader = {
  Wrapper: styled.header`
    padding: 2rem 2rem 0.5rem;
  `,

  Logo: styled.div`
    img {
      height: 40px;
    }
  `,

  Menu: {
    Wrapper: styled.section`
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 1rem 0;

      flex-wrap: wrap;

      @media screen and (max-width: 500px){
        align-items: flex-start;

        flex-direction: column;
      }

    `,
    SearchBar: styled.div`
      display: flex;
      align-items: center;

      padding: 0.5rem 1.5rem;
      margin-top: 1rem;
      background: var(--bg);
      color: var(--fg);
      border: 1px solid var(--button-border);
      border-radius: 100px;

      transition: 1s all ease-out;
      opacity: 0.75;

      img {
        padding: 0 0.25rem;
      }

      &:focus-within {
        opacity: 1;
        color: var(--fg);
        background: var(--white);
      }
    `,
  },
};

export const HomeMain = {
  Wrapper: styled.main`
    flex-grow: 1;

    overflow-x: hidden;
    overflow-y: scroll;

    display: flex;
    flex-direction: column;

    padding: 1rem 2rem;
    color: var(--fg);
  `,

  BodyArea: styled.section`
    flex-grow: 1;

    display: flex;
    flex-wrap: wrap;

    justify-items: center;
  `,

  BankCard: styled.div`
    margin: 10px;
    background: #ffffffa0;
    width: 20rem;
    max-height: 20rem;
    border-radius: 20px;
    padding: 2rem 1.5rem 1rem;

    flex-grow: 1;
    opacity: 0.95;
    box-shadow: 0 1px 10px -5px #222222cc;

    .heading{
      font-size: 20px;
      font-weight: 700;

    .para{
      font-family: 'sans-serif';
      font-size: 14px;
    }

    @media screen and (max-width: 500px){
      max-height: 15rem;
    }
  `,
};

export const HomeFooter = styled.footer``;
