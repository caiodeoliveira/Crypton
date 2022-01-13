import S from "./styles";
import HomeInnerArea from "../../organisms/HomeInnerArea";
import HomeUpperArea from "../../organisms/HomeUpperArea";
import TopBar from "../../atoms/TopBar";

const Home = () => {
  return (
    <>
      <S.Container>
        <HomeUpperArea>
          <TopBar></TopBar>
        </HomeUpperArea>
        <HomeInnerArea>
          <p>text</p>
        </HomeInnerArea>
      </S.Container>
    </>
  );
};

export default Home;
