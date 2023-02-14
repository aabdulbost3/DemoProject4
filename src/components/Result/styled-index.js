import styled from "styled-components";

export const WrapperResult = styled.div`
  background-color: #bf8ffd;
`;

export const Wrapper = styled.div`
  padding: 5% 0%;
  h2 {
    margin: 0;
    color: white;
    font-size: 45px;
    font-weight: bold;
    width: 60%;

    @media screen and (max-width: 980px) {
      width: 100%;
    }
    @media screen and (max-width: 610px) {
      font-size: 30px;
    }
    @media screen and (max-width: 400px) {
      font-size: 20px;
    }
  }
  .Cards {
    .card {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #ffffff;
      margin-top: 5%;
      padding: 10px 20px;
      border-radius: 20px;
      img {
        width: 70px;
      }
      p {
        padding-left: 3%;
        font-size: 19px;
        line-height: 25px;

        span {
          font-weight: bold;
        }
      }
    }
  }
  .button {
    margin-top: 5%;
    .btn {
      margin: 0 auto;
      width: 255px;
    }
  }
`;
