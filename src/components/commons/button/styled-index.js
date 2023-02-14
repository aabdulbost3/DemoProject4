import styled from "styled-components";

export const Btn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  width: 100%;
  span {
    background-image: linear-gradient(
      180deg,
      rgba(156, 237, 86, 255) 0%,
      rgba(85, 151, 26, 255) 100%
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
      rgba(156, 237, 86, 255) 0%,
      rgba(85, 151, 26, 255) 100%
    );
    padding: 10px 10px;
    color: white;
    font-size: 23px;
    border-start-start-radius: 10px;
    border-end-start-radius: 10px;
  }
`;
