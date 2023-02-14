import { useTranslation } from "react-i18next";
import { WrapperContainer } from "../../App-styled";
import { WrapperOnline, Wrapper } from "./styled-index";

function Online() {
    const {t , i18n} = useTranslation()
  return (
    <>
      <WrapperOnline>
        <WrapperContainer>
          <Wrapper>
            <h2>{t("Online.0")}</h2>
            <iframe
              width="70%"
              height="480"
              src="https://www.youtube.com/embed/HPai6oH4ANM"
              title="Выставка автомобилей 2023 года в Китае. Гуанчжоу. #авто #автомобиль #авто_выставка #электромобиль"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              style={{ borderRadius: "10px" }}
            ></iframe>
          </Wrapper>
        </WrapperContainer>
      </WrapperOnline>
    </>
  );
}

export default Online;
