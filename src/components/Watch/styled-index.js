import styled from "styled-components";

export const WrapperWatch = styled.div`
  background-color: #ffb525;
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 755px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 5%;
  }
  p {
    margin: 0;
    font-size: 30px;
    font-weight: bold;
    color: white;
    @media screen and (max-width: 1000px){
      font-size: 20px !important;
    }
  }
  img {
    width: 50%;
  }
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
    font-size: 20px;
  }
`;
