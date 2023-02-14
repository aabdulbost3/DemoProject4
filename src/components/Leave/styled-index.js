import styled from "styled-components";

export const WrapperLeave = styled.div`
  background-color: #8dd54f;
`;

export const Wrapper = styled.div`
  padding: 5% 0;
  .button {
    .btn {
      width: 280px;
      @media screen and (max-width: 930px){
        margin: 0 auto;
      }
    }
  }
  h2 {
    margin: 0;
    font-size: 40px;
  }
  p {
    font-size: 19px;
    width: 80%;
  }
  .box {
    background-color: white;
    width: 80%;
    margin: 0 auto;
    padding: 3%;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 0px 0px 10px #c6eaa7;
    @media screen and (max-width: 930px) {
      display: flex;
      flex-direction: column-reverse;
      text-align: center;

      p {
        width: 100%;
      }
    }

    img {
      width: 300px;
    }
    button {
      display: flex;
      align-items: center;
      border: none;
      background-color: transparent;
      /* width: 100%; */
      span {
        background-image: linear-gradient(
          180deg,
          rgba(109, 161, 250, 255) 0%,
          rgba(66, 120, 211, 255) 100%
        );
        padding: 10px 20px;
        text-transform: uppercase;
        color: white;
        font-weight: bold;
        font-size: 20px;
        border-start-end-radius: 10px;
        border-end-end-radius: 10px;
      }
      ion-icon {
        background-image: linear-gradient(
          180deg,
          rgba(109, 161, 250, 255) 0%,
          rgba(66, 120, 211, 255) 100%
        );
        padding: 10px 10px;
        color: white;
        font-size: 23.5px;
        border-start-start-radius: 10px;
        border-end-start-radius: 10px;
      }
    }
  }
`;
