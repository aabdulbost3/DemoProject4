import React from "react";
import { Col, Row } from "react-grid-system";
import { useTranslation } from "react-i18next";
import { WrapperContainer } from "../../App-styled";
import Button from "../commons/button";
import { Wrapper, WrapperResult } from "./styled-index";

function Result() {
  const data = [1, 2, 3, 4, 5, 6];
  const { t, i18n} = useTranslation()
  return (
    <>
      <WrapperResult>
        <WrapperContainer>
          <Wrapper>
            <h2>{t("Result.0")}</h2>
            <h2>
            {t("Result.1")}
            </h2>
            <div className="Cards">
              <Row style={{ margin: 0 }}>
                {data.map(() => (
                  <Col lg={6} md={12}>
                    <div className="card">
                      <img
                        src="https://thumb.tildacdn.com/tild6530-3332-4632-a661-636132613366/-/cover/120x120/center/center/-/format/webp/3_1.png"
                        alt="photo"
                      />
                      <p>
                      {t("Result.2")}
                      </p>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
            <div className="button">
              <div className="btn">
                <Button>{t("Result.3")}</Button>
              </div>
            </div>
          </Wrapper>
        </WrapperContainer>
      </WrapperResult>
    </>
  );
}

export default Result;
