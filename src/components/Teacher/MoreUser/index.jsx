import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../../commons/button";
import { Wrapper } from "./styled-index";

function MoreUser() {
  const { t, i18n } = useTranslation();
  return (
    <Wrapper>
      <div className="texts">
        <h2>User User</h2>
        <ul>
          <li>
            <h3>{t("Teacher.0")}</h3>
            <p>{t("Teacher.1")}</p>
          </li>
          <li>
            <h3>{t("Teacher.0")}</h3>
            <p>{t("Teacher.1")}</p>
          </li>
          <li>
            <h3>{t("Teacher.0")}</h3>
            <p>{t("Teacher.1")}</p>
          </li>
          <li>
            <h3>{t("Teacher.0")}</h3>
            <p>{t("Teacher.1")}</p>
          </li>
          <li>
           <button>
           <ion-icon name="chevron-forward-outline"></ion-icon>
            <span>{t("Teacher.2")}</span>
           </button>
          </li>
        </ul>
      </div>
      <div className="img">
        <img
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="photo"
        />
      </div>
    </Wrapper>
  );
}

export default MoreUser;
