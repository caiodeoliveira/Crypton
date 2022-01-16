import React from "react";
import S from "./styles";
import { IconsProps } from "./types";
import { AiOutlineFire } from "react-icons/ai";

const Icons = ({ children, type }: IconsProps) => {
  const selectType = () => {
    switch (type) {
      case "trending":
        return (
          <S.TrendingIconContainer>
            {children} {<AiOutlineFire size={23} />}
          </S.TrendingIconContainer>
        );
    }
  };
  return selectType();
};

export default Icons;
