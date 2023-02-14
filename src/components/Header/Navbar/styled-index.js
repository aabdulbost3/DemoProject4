import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0px 15px;
  position: relative;
  width: 100%;
  h1 {
    margin: 0;
    color: white;
  }
  .nav_ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 65%;
    @media screen and (max-width: 960px) {
      width: 70%;
    }
    @media screen and (max-width: 845px) {
      display: none;
    }
    li {
      a {
        text-decoration: none;
        color: white;
        font-weight: bold;
        font-size: 18px;
      }
    }
  }
  select {
    border: 1px solid #498dfa;
    padding: 5px 10px;
    border-radius: 10px;
    font-size: 13px;
    font-weight: bold;
  }
  .OpenIcon {
    display: none;
    border: none !important;
    background-color: transparent !important;
    color: white;
    font-size: 30px;
    font-weight: bold;
    @media screen and (max-width: 845px) {
      display: block;
    }
  }
`;

export const WrapperNavbar = styled.div`
position: fixed;
z-index: 1000;
background-color: rgba(0 , 0 , 0 ,0.5);
width: 100%;

`