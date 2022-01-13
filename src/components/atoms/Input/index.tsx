import InputProps from "./types";
import S from "./styles";

const Input = ({ type }: InputProps) => {
  const selectType = () => {
    switch (type) {
      case "text_field":
        return <S.InputTextField />;
      case "icons":
        return <S.InputIcons />;
    }
  };
  return selectType();
};

export default Input;
