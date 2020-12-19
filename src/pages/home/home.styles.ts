import styled from "styled-components";

export const HomeWrapper = styled.div<{backgroundImage?: string}>`
  background: inherit;
  height: 100vh;

  overflow: hidden;

  background-image: ${(props) =>
    props.backgroundImage ? "url(" + props.backgroundImage + ")" : "none"};
  background-repeat: no-repeat;
  background-position: right bottom;
  /* background-size: contain; */
`;

export const HeaderStyles = styled.section`
  display: block;
  margin: 2rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 900px) {
    .logo img {
      height: 70px;
    }
  }

  @media only screen and (max-width: 500px) {
    .logo img {
      height: 70px;
    }
  }
`;

export const MainStyles = styled.section<{ backgroundImage: string }>`
  padding-left: 24px;
  padding-right: 20px;

  #header {
    font-size: 58px;
  }

  #main {
    .description {
      font-size: 28px;
      font-weight: 300;
      max-width: 500px;
    }

    .links {
      cursor: default;

      div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 16px;

        span {
          margin-left: 8px;
          font-size: 20px;
        }
      }
    }
  }
  

  /* @tablet*/
  @media (min-width: 768px) {
    #header {
      font-size: 72px;
    }

    #main .description {
      max-width: 1000px;
    }
  }

  /* web */
  @media (min-width: 900px) {
    #header {
      font-size: 84px;
    }
  }
`;
