import TextProps from "./types";
import S from "./styles";

const Text = ({ type, children, color }: TextProps) => {
  const selectType = () => {
    switch (type) {
      case "subtitle":
        return <S.SubTitleText>{children}</S.SubTitleText>;
      case "input_label":
        return (
          <S.InputLabelText style={{ color: color }}>
            {children}
          </S.InputLabelText>
        );
      case "footer":
        return <S.FooterText style={{ color: color }}>{children}</S.FooterText>;
      case "paragraph_text":
        return (
          <S.ParagraphLabelText style={{ color: color }}>
            {children}
          </S.ParagraphLabelText>
        );
    }
  };
  return selectType();
};

export default Text;
