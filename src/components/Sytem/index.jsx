import React from "react";
import { useTranslation } from "react-i18next";
import { WrapperContainer } from "../../App-styled";
import { Wrapper, WrapperSystem } from "./styled-index";

function System() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <WrapperSystem>
        <WrapperContainer>
          <Wrapper>
            <h2>{t("System.0")}</h2>
            <iframe
              width="70%"
              height="430"
              src="https://www.youtube.com/embed/7Ultx3eUHCU"
              title="PSG vs Saudi All Stars 5-4 All Goals & Highlights - Ronaldo Debut 2023"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              style={{ borderRadius: "20px" }}
            ></iframe>
          </Wrapper>
        </WrapperContainer>
      </WrapperSystem>
    </>
  );
}

export default System;
