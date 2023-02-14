import React from "react";
import { useTranslation } from "react-i18next";
import { WrapperContainer } from "../../App-styled";
import { Wrapper , WrapperFooter } from "./styled-index";

function Footer() {
    const {t , i18n} = useTranslation();
  return (
    <>
      <WrapperFooter>
        <WrapperContainer>
          <Wrapper>
            <h2>Logo</h2>
            <div className="center">
              <ul>
                <li>
                  <a href="#">{t("Footer.0")}</a>
                </li>
                <li>
                  <a href="#">{t("Footer.1")}</a>
                </li>
                <li>
                  <a href="#">{t("Footer.2")}</a>
                </li>
                <li>
                  <a href="#">{t("Footer.3")}</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">NTM “ENGHERO”</a>
                </li>
                <li>
                  <a href="#">ИНН: 309795570</a>
                </li>
              </ul>
            </div>
            <ul className="Links">
              <li>
                <a href="#">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#">
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </li>
            </ul>
          </Wrapper>
        </WrapperContainer>
      </WrapperFooter>
    </>
  );
}

export default Footer;
