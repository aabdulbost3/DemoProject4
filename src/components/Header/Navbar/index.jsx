import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Hamburger from "./hamburger";
import { Wrapper, WrapperNavbar } from "./styled-index";
function Navbar() {
  const { t, i18n } = useTranslation();
  const [modal, setModal] = useState(false);
  const HendelChange = (e) => {
    window.localStorage.setItem("i18nextLng", e.target.value);
    window.location.reload();
  };
  const ValueLng = () => {
    return window.localStorage.getItem("i18nextLng");
  };
  const HendelClick = () => {
    setModal(true);
  };
  return (
    <>
      <WrapperNavbar>
        <Wrapper>
          <h1>Logo</h1>
          <ul className="nav_ul">
            <li>
              <a href="#course">{t("Navbar.0")}</a>
            </li>
            <li>
              <a href="#spikers">{t("Navbar.1")}</a>
            </li>
            <li>
              <a href="#tariffs">{t("Navbar.2")}</a>
            </li>
            <li>
              <a href="#about">{t("Navbar.3")}</a>
            </li>
            <li>
              {ValueLng() == "uz" ? (
                <>
                  <select onChange={HendelChange}>
                    <option value="uz">UZ</option>
                    <option value="ru">RU</option>
                  </select>
                </>
              ) : ValueLng() == "ru" ? (
                <>
                  <select onChange={HendelChange}>
                    <option value="ru">RU</option>
                    <option value="uz">UZ</option>
                  </select>
                </>
              ) : (
                <select onChange={HendelChange}>
                  <option value="uz">UZ</option>
                  <option value="ru">RU</option>
                </select>
              )}
            </li>
            <li>
              <a href="#">{t("Navbar.4")}</a>
            </li>
          </ul>
          <button className="OpenIcon" onClick={HendelClick}>
            <ion-icon name="menu-outline"></ion-icon>
          </button>
        </Wrapper>
      </WrapperNavbar>
      <Hamburger
        modal={modal}
        HendelChange={HendelChange}
        ValueLng={ValueLng}
        set={setModal}
      />
    </>
  );
}

export default Navbar;
