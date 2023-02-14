import styled from "styled-components";
export const WrapperValues = styled.div`
  background-color: #ffb525;
`;

export const Wrapper = styled.div`
  padding: 5% 0%;
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffda92;
    padding: 20px;
    border-radius: 20px;
    color: white;
    @media screen and (max-width: 750px) {
      display: flex;
      flex-direction: column;
      padding: 20px 20px 30px;
    }
    li {
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      ion-icon {
        font-size: 70px;
      }
      @media screen and (max-width: 750px) {
        margin-top: 5%;
      }
      h3 {
        padding: 0;
        margin: 0;
        font-size: 35px;
      }
      p {
        margin: 0;
      }
      .text {
        margin-left: 10px;
      }
    }
  }
`;
