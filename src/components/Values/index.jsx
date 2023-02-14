import React from "react";
import { Wrapper, WrapperValues } from "./styled-index";
import { WrapperContainer } from "../../App-styled";

function Values() {
  return (
    <WrapperValues>
      <WrapperContainer>
        <Wrapper>
          <ul>
            <li>
              <div className="icon">
                <ion-icon name="logo-youtube"></ion-icon>
              </div>
              <div className="text">
                <h3>Talabalar</h3>
                <p>121212</p>
              </div>
            </li>
            <li>
              <div className="icon">
                <ion-icon name="logo-instagram"></ion-icon>
              </div>
              <div className="text">
                <h3>Natijalar</h3>
                <p>121212</p>
              </div>
            </li>
            <li>
              <div className="icon">
                <ion-icon name="logo-facebook"></ion-icon>
              </div>
              <div className="text">
                <h3>blablabla</h3>
                <p>121212</p>
              </div>
            </li>
          </ul>
        </Wrapper>
      </WrapperContainer>
    </WrapperValues>
  );
}

export default Values;
