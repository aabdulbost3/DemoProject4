import React from "react";
import { Btn } from "./styled-index";

function Button({ children }) {
  return (
    <Btn>
      <ion-icon name="chevron-forward-outline"></ion-icon>
      <span>{children}</span>
    </Btn>
  );
}

export default Button;
