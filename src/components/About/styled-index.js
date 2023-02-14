import styled from "styled-components";

export const WrapperAbout = styled.div`
  background-color: #51a3fe;
`;

export const Wrapper = styled.div`
  padding: 5% 0;
  h2 {
    margin: 0;
    color: white;
    font-size: 35px;
    text-align: center;
    padding-bottom: 3%;
  }
`;

export const SliderItem = styled.div`
  width: 400px;
  height: 380px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 100px;
  img {
    width: 350px !important;
    height: 450px;
    margin: 0 auto;
    border-radius: 20px;

    @media screen and (max-width: 800px) {
      width: 300px !important;
    }
    
    @media screen and (max-width: 620px){
        width: 230px !important;
    }

    @media screen and (max-width: 395px) {
      width: 250px !important;
    }
  }
`;
