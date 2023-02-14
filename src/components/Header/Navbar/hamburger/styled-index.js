import styled from "styled-components";

export const Modals = styled.div`
  display: none;
  background-color: #498dfa;
  position: fixed !important;
  padding: 0 20px 0 0px;
  width: 80%;
  top: 0;
  bottom: 0;
  left: ${(props) => (props.modal ? "-800px" : "0px")};
  transition: 0.65s;
  overflow-y: scroll;
  border: 1px solid #498dfa;
  color: black;
  @media screen and (max-width: 900px) {
    display: block;
    z-index: 9999;
  }
  .ul_nav {
    padding: 0 0px 0 10px;
    li {
      margin-top: 25px;
      border-bottom: 1px solid white;
      padding-bottom: 5px;
      a {
        text-decoration: none;
        color: white;
        font-weight: bold;
        font-size: 18px;
      }
      select {
        border: 1px solid #498dfa;
        padding: 5px 10px;
        border-radius: 10px;
        font-size: 13px;
        font-weight: bold;
      }
    }
  }
  ion-icon {
    margin-left: 94%;
    padding: 13px 15px 10px 10px;
    color: white;
    font-size: 30px;
  }
`;
