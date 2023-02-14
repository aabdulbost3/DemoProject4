import styled from "styled-components";

export const WrapperTeachers = styled.div`
  background-image: linear-gradient(
      180deg,
      rgba(81, 163, 254, 255) 0%,
      rgba(81, 163, 254, 0) 50%
    ),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, .9) 50%,
      rgba(81, 163, 254, 255) 100%
    ),
    url("https://thumb.tildacdn.com/tild6133-3862-4536-b666-323765353361/-/format/webp/m-monk-E813FON0wDQ-u.png");
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const Wrapper = styled.div`
  h2 {
    margin: 0;
    color: white;
    text-align: center;
    font-size: 40px;
    padding: 3% 0%;
  }
  /* width: 500px; */
  .card {
    font-size: 14px;
    width: 350px;
    height: 500px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    border-radius: 20px;
    box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075),
      0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075),
      0 0 16px hsl(0deg 0% 0% / 0.075);
      @media screen and (max-width: 440px){
      width: 2  50px !important;
    }
  }

  .card-container:nth-child(2) {
    margin-top:10%;
  }

  .card-container {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding-top: 20px;
    width: 50%;
    height: 100%;

    @media screen and (max-width: 1065px){
      width: 500px !important;
    }
    @media screen and (max-width: 520px){
      width: 100% !important;
    }

    img {
      width: 200px;
      transform: rotate(-10deg);
      @media screen and (max-width: 440px){
      width: 150px !important;
    }
    }
  }
  .cards {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 5% 0;
    @media screen and (max-width: 1000px){
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .splash {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 15%;
    clip-path: path(
      "M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z"
    );
  }
`;
