import React from "react";
import { WrapperContainer } from "../../App-styled";
import HomeHero from "./Hero";
import Navbar from "./Navbar";
import { Wrapper } from "./styled-index";

function Header() {
  return (
    <Wrapper>
      <Navbar />
      <WrapperContainer>
        <HomeHero />
      </WrapperContainer>
    </Wrapper>
  );
}

export default Header;
