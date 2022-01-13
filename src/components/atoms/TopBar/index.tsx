import S from "./styles";
import TopbarProps from "./types";

const TopBar = ({ children }: TopbarProps) => {
  return <S.TopBar>{children}</S.TopBar>;
};

export default TopBar;
