import TextProps from "./types";
import S from "./styles";

const Text = ({ type, children }: TextProps) => {
  const selectType = () => {
    switch (type) {
      case "title":
        return <S.TitleText>{children}</S.TitleText>;
      case "subtitle":
        return <S.SubTitleText>{children}</S.SubTitleText>;
      case "input_label":
        return <S.InputLabelText>{children}</S.InputLabelText>;
      case "footer":
        return <S.FooterText>{children}</S.FooterText>;
      case "paragraph_text":
        return <S.ParagraphLabelText>{children}</S.ParagraphLabelText>;
    }
  };
  return selectType();
};

export default Text;
