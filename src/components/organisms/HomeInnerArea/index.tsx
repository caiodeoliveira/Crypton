import S from "./styles";
import Footer from "../../atoms/Footer";
import { HomeInnerAreaProps } from "./types";
import api from "../../../services/api/index";
import { useEffect, useState } from "react";

const HomeInnerArea = ({ children }: HomeInnerAreaProps) => {
  const [allCoins, setAllCoins] = useState<any>([]);

  useEffect(() => {
    api.get("/search?query=bitcoin").then((response) => {
      setAllCoins(response.data.coins);
      console.log(response.data);
      // const cash = allCoins.map((coins: any) => coins.symbol);
      // console.log(cash);
    });
  }, []);

  return (
    <>
      <S.Container>
        <S.CryptoListContainer>
          {allCoins.map((coins: any) => (
            <S.Crypto src={coins.thumb} alt={allCoins.id} />
          ))}
        </S.CryptoListContainer>
      </S.Container>
      <Footer />
    </>
  );
};

export default HomeInnerArea;
