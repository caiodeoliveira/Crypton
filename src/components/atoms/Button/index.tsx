import ButtonProps from "./type";
import S from "./styles";

const Button = ({ type, onClick, disabled, children }: ButtonProps) => {
  const selectType = () => {
    switch (type) {
      case "recover_button":
        return (
          <>
            <S.RecoverButton onClick={onClick} disabled={disabled}>
              {children}
            </S.RecoverButton>
            ;
          </>
        );
      case "submit":
        return (
          <>
            <S.LoginButton onClick={onClick}>{children}</S.LoginButton>;
          </>
        );
      case "scroll":
        return (
          <>
            <S.ScrollBtn onClick={onClick}>{children}</S.ScrollBtn>;
          </>
        );
    }
  };
  return selectType();
};

export default Button;
