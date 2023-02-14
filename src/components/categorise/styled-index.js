import styled from "styled-components";

export const WrapperCategorise = styled.div`
  background-color: #ffb525;
`;

export const Wrapper = styled.div`
  padding: 5% 0%;
  h2 {
    margin: 0;
    color: white;
    text-align: center;
    font-size: 50px;
    padding-bottom: 5%;
  }
`;

export const Card = styled.div`
  background-color: #ffffff;
  padding: 15px 15px;
  border-radius: 20px;
  box-shadow: 0px 0px 0px 5px #ffda92;
  margin-top: 10%;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 50%;
    }
    .buttons {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50%;
      button {
        background-image: linear-gradient(
          180deg,
          rgba(190, 142, 251, 255) 0%,
          rgba(141, 95, 201, 255) 50%
        );
        padding: 10px 20px;
        border: none;
        color: white;
        font-weight: bold;
        border-radius: 10px;
        margin-top: 5%;
        font-size: 15px;
      }
    }
  }
`;
