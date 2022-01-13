import React from "react";
import S from "./styles";
import { BoxTypes } from "./types";

const Box = ({ children }: BoxTypes) => {
  return <S.Container>{children}</S.Container>;
};

export default Box;
