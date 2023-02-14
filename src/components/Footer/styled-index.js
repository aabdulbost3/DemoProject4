import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px 0px;
  @media screen and (max-width: 680px) {
    display: flex;
    flex-wrap: wrap;
  }
  h2 {
    margin: 0;
    color: white;
  }
  ul {
    padding: 0;
  }
  .center {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 40%;
    @media screen and (max-width: 1000px) {
      width: 60%;
    }
    @media screen and (max-width: 680px) {
      width: 100%;
    }
    ul {
      li {
        margin-bottom: 10px;
        a {
          text-decoration: none;
          color: white;
        }
      }
    }
  }
  .Links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 7%;
    @media screen and (max-width: 1000px) {
      width: 10%;
    }
    @media screen and (max-width: 680px) {
      width: 25%;
    }
    li {
      a {
        text-decoration: none;
        color: white;
        ion-icon {
          font-size: 20px;
        }
      }
    }
  }
`;

export const WrapperFooter = styled.div`
  background-color: #111111;
`;
