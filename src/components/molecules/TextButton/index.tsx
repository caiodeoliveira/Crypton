import React from "react";
import TextButtonProps from "./type";
import Button from "../../atoms/Button";
import Text from "../../atoms/Text";

const TextButton = ({ type }: TextButtonProps) => {
  const selectType = () => {
    switch (type) {
      case "login":
        return <Text type="keep_connect_label">{"Enviar"}</Text>;
    }
  };
  return selectType();
};

export default TextButton;
