import React from "react";
import img from "../../assets/bot/img.png";
import { WrapperContainer } from "../../App-styled";
import { Wrapper, WrapperLeave } from "./styled-index";

const Leave = () => {
  return (
    <>
      <WrapperLeave>
        <WrapperContainer>
          <Wrapper>
            <div className="box">
              <div className="texts">
                <h2>Xo’sh, yana qanday savollar qoldi?</h2>
                <p>
                  Englify maktabining telegram botiga savol yoʻllang, qoʻli
                  chaqqon menejerlarimiz barcha savollaringizga javob beradi
                </p>
                <div className="button">
                  <div className="btn">
                    <button>
                      <ion-icon name="chevron-forward-outline"></ion-icon>
                      <span>Savol Qoldirish</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="img">
                <img src={img} alt="photo" />
              </div>
            </div>
          </Wrapper>
        </WrapperContainer>
      </WrapperLeave>
    </>
  );
};

export default Leave;
