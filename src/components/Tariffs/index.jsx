import React from "react";
import { Col, Row } from "react-grid-system";
import { useTranslation } from "react-i18next";
import { WrapperContainer } from "../../App-styled";
import img from "../../assets/traffis/roket.png";
import Button from "../commons/button";
import { Wrapper, WrapperTariffs } from "./styled-index";

function Tariffs() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <WrapperTariffs id="tariffs">
        <WrapperContainer>
          <Wrapper>
            <h2 className="text">{t("Tariffs.0")}</h2>
            <div className="Cards">
              <Row style={{ margin: 0 }}>
                <Col lg={4} md={12} sm={12}>
                  <div className="card">
                    <img
                      src={img}
                      alt=""
                    />
                    <br />
                    <button className="card-text">Jo'shqin</button>
                    <p className="card-subtext"> (joylar soni — ∞)</p>

                    <ul>
                      <li>
                        <h3>Barch o'quv darslariga kirish</h3>
                        <p>Kurs kontentiga blablablabla</p>
                      </li>
                      <li>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Soluta, sapiente!
                        </p>
                      </li>
                      <li>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quam odit placeat cum recusandae iure
                          accusantium.
                        </p>
                      </li>
                      <li>
                        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                      </li>
                    </ul>
                    <div className="button">
                      <div className="btn">
                        <Button>Ishtirok Etish</Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={12} sm={12}>
                  <div className="card">
                    <img
                      src={img}
                      alt=""
                    />
                    <br />
                    <button className="card-text2">Jo'shqin</button>
                    <p className="card-subtext">(joylar soni — ∞)</p>

                    <ul>
                      <li>
                        <h3>Barch o'quv darslariga kirish</h3>
                        <p>Kurs kontentiga blablablabla</p>
                      </li>
                      <li>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Soluta, sapiente!
                        </p>
                      </li>
                      <li>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quam odit placeat cum recusandae iure
                          accusantium.
                        </p>
                      </li>
                      <li>
                        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                      </li>
                    </ul>
                    <div className="button">
                      <div className="btn">
                        <Button>Ishtirok Etish</Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={12} sm={12}>
                  <div className="card">
                    <img
                      src={img}
                      alt=""
                    />
                    <br />
                    <button className="card-text3">Jo'shqin</button>
                    <p className="card-subtext">(joylar soni — ∞)</p>

                    <ul>
                      <li>
                        <h3>Barch o'quv darslariga kirish</h3>
                        <p>Kurs kontentiga blablablabla</p>
                      </li>
                      <li>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Soluta, sapiente!
                        </p>
                      </li>
                      <li>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quam odit placeat cum recusandae iure
                          accusantium.
                        </p>
                      </li>
                      <li>
                        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                      </li>
                    </ul>
                    <div className="button">
                      <div className="btn">
                        <Button>Ishtirok Etish</Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Wrapper>
        </WrapperContainer>
      </WrapperTariffs>
    </>
  );
}

export default Tariffs;
