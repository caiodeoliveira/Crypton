import S from "./styles";
import HomeInnerArea from "../../organisms/HomeInnerArea";
import HomeUpperArea from "../../organisms/HomeUpperArea";

const Home = () => {
  return (
    <>
      <S.Container>
        <HomeUpperArea />
        <HomeInnerArea />
      </S.Container>
    </>
  );
};

export default Home;
