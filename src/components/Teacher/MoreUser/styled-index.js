import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 855px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    img{
        width: 325px;
    }
  }
  h2 {
    margin: 5% 0;
    font-size: 40px;
    @media screen and (max-width: 910px) {
      font-size: 30px;
    }
    color: white;
  }
  ul {
    padding: 0;

    li {
      color: white;
      button {
        display: flex;
        align-items: center;
        border: none;
        background-color: transparent;
        margin-top: 5%;
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
          font-size: 15px;
          @media screen and (max-width: 910px) {
            font-size: 13px;
          }
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
          @media screen and (max-width: 910px) {
            font-size: 15.5px;
          }
          font-size: 17.5px;
          border-start-start-radius: 10px;
          border-end-start-radius: 10px;
        }
      }
    }
  }
`;
