import styled from "styled-components";

export const WrapperTariffs = styled.div`
  background-color: #51a3fe;
`;

export const Wrapper = styled.div`
  padding: 5% 0%;
  .text {
    margin: 0;
    color: white;
    text-align: center;
    padding: 3% 0%;
    font-size: 40px;
  }
  img {
    width: 200px;
    border-radius: 50%;
  }
  .card {
    background-color: #a7cffd;
    padding: 5%;
    border-radius: 20px;
    margin-top: 5%;
    text-align: center;
    box-shadow: 0px 0px 0px 10px #62acfe;
    .card-text {
      background-image: linear-gradient(
        180deg,
        rgba(156, 237, 86, 255) 0%,
        rgba(85, 151, 26, 255) 100%
      );
      padding: 10px 20px;
      font-size: 25px;
      font-weight: bold;
      border: none;
      border-radius: 20px;
      margin: 5% 0% 3%;
      color: white;
    }
    .card-text2 {
      background-image: linear-gradient(
        180deg,
        rgba(190, 142, 251, 255) 0%,
        rgba(141, 95, 201, 255) 50%
      );
      padding: 10px 20px;
      font-size: 25px;
      font-weight: bold;
      border: none;
      border-radius: 20px;
      margin: 5% 0% 3%;
      color: white;
    }
    .card-text3 {
      background-image: linear-gradient(
        180deg,
        rgba(253, 179, 35, 255) 0%,
        rgba(218, 144, 1, 255) 50%
      );
      padding: 10px 20px;
      font-size: 25px;
      font-weight: bold;
      border: none;
      border-radius: 20px;
      margin: 5% 0% 3%;
      color: white;
    }
    .card-subtext {
      margin: 0 0 4%;
    }
    ul {
      text-align: start;
      padding: 0;
    }
    .button {
      .btn {
        margin: 0 auto;
        width: 258px;
      }
    }
  }
`;
