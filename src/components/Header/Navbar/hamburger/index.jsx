import React from "react";
import { useTranslation } from "react-i18next";
import { Modals } from "./styled-index";

function Hamburger({ HendelChange, ValueLng, set, modal }) {
  const { t, i18n } = useTranslation();
  const HendelClose = () => {
    set(false);
  };
  return (
    <>
      <Modals modal={modal === false}>
        <ion-icon name="close-outline" onClick={HendelClose}></ion-icon>
        <ul className="ul_nav">
          <li>
            <a  onClick={HendelClose} href="#course">{t("Navbar.0")}</a>
          </li>
          <li>
            <a onClick={HendelClose} href="#spikers">{t("Navbar.1")}</a>
          </li>
          <li>
            <a onClick={HendelClose} href="#tariffs">{t("Navbar.2")}</a>
          </li>
          <li>
            <a onClick={HendelClose} href="#about">{t("Navbar.3")}</a>
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
      </Modals>
    </>
  );
}

export default Hamburger;
