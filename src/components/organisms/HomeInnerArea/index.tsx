import S from "./styles";
import Footer from "../../atoms/Footer";
import { HomeInnerAreaProps } from "./types";

const HomeInnerArea = ({ children }: HomeInnerAreaProps) => {
  return (
    <>
      <S.Container>
        <S.CryptoListContainer></S.CryptoListContainer>
      </S.Container>
      <Footer />
    </>
  );
};

export default HomeInnerArea;
