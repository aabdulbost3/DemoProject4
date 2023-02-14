import styled from "styled-components";
import BackImg from "../../../assets/hero/planeta.png";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 230px;
  width: 100%;
  color: white;
  background-image: url(${BackImg});
  background-repeat: no-repeat;
  background-position-x: right;
  @media screen and (max-width: 630px) {
    background-position-y: bottom;
    background-position-x: center;
  }
  .texts {
    width: 40%;
    @media screen and (max-width: 1000px) {
      width: 60%;
    }
    @media screen and (max-width: 805px) {
      width: 80%;
    }
    @media screen and (max-width: 630px) {
      width: 100%;
      text-align: center;
      p {
        font-size: 17px !important;
      }
    }
    h2 {
      font-size: 55px;
      padding: 0;
      margin: 0;
      margin-top: 15px;
    }
    .subtext {
      font-weight: 700;
      padding-top: 5px;
      line-height: 25px;
    }
    p {
      font-size: 19px;
    }
    ul {
      padding: 0;
      margin: 0;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      @media screen and (max-width: 630px) {
        text-align: center;
      }
      @media screen and (max-width: 365px) {
        p {
          font-size: 13px !important;
        }
      }
      li {
        margin: 0;
        padding: 0;
        h3 {
          font-size: 18px;
          margin: 0;
        }
        p {
          margin: 0;
        }
      }
      li:nth-child(1) {
        width: 40%;
      }
    }
  }
  /* img {
    width: 90%;
    } */
`;

export const Top = styled.div`
  height: 170px;
`;
