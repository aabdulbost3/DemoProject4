import React from "react";
import { useTranslation } from "react-i18next";
import Img from "../../../assets/hero/planeta.png";
import Button from "../../commons/button";
import { Wrapper , Top} from "./styled-index";

function HomeHero() {
  const { t, i18n } = useTranslation();
  return (
    <>
    <Top></Top>
      <Wrapper>
        
        <div className="texts">
          <ul>
            <li>
              <h3>{t("Hero.0")}:</h3>
              <p>{t("Hero.3")}</p>
            </li>
            <li>
              <h3>{t("Hero.1")}:</h3>
              <p>{t("Hero.4")}</p>
            </li>
            <li>
              <h3>{t("Hero.2")}:</h3>
              <p>{t("Hero.5")}</p>
            </li>
          </ul>
          <h2>{t("Hero.6")}</h2>
          <p className="subtext">{t("Hero.7")}</p>
          <p>{t("Hero.8")}</p>
          <Button>{t("Hero.9")}</Button>
        </div>
        {/* <div className="Img">
          <img src={Img} alt="photo" />
        </div> */}
      </Wrapper>
    </>
  );
}

export default HomeHero;
