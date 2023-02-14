import React from "react";
import { Col, Row } from "react-grid-system";
import { WrapperContainer } from "../../App-styled";
import { WrapperCategorise, Wrapper, Card } from "./styled-index";

function Categorise() {
  const data = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <WrapperCategorise>
        <WrapperContainer>
          <Wrapper>
            <h2>Sizni nima kutmoqda</h2>
            <Row style={{ margin: 0 }}>
              {data.map(() => (
                <Col lg={6} md={6}>
                  <Card>
                    <div className="header">
                      <img
                        src="https://thumb.tildacdn.com/tild3634-3830-4164-a232-653565333235/-/cover/358x358/center/center/-/format/webp/2_4.png"
                        alt="photo"
                      />
                      <div className="buttons">
                        <button>WWWWWWW</button>
                        <button>WWWWWWW</button>
                        <button>WWWWWWW</button>
                      </div>
                    </div>
                    <div className="footer">
                      <h3>Interaktiv onlayn platforma va shaxsiy akkaunt</h3>
                      <p>
                        Barcha darslar, shablonlar, qo'ng'iroqlar, savollarni
                        tahlil qilish va qo'shimcha materiallarga barcha
                        talabalar uchun ta’rifingizga qarab 3/5/6 oy mobaynida
                        kirish huquqiga ega bo'lgan alohida qulay onlayn
                        platformada bo'ladi.
                      </p>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Wrapper>
        </WrapperContainer>
      </WrapperCategorise>
    </>
  );
}

export default Categorise;
