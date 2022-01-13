import S from "./styles";
import Footer from "../../atoms/Footer";
import { HomeInnerAreaProps } from "./types";

const HomeInnerArea = ({ children }: HomeInnerAreaProps) => {
  return (
    <>
      <S.Container>
        <Footer />
      </S.Container>
    </>
  );
};

export default HomeInnerArea;
