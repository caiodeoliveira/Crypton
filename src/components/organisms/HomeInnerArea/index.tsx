import S from "./styles";
import Footer from "../../atoms/Footer";
import { HomeInnerAreaProps } from "./types";
import api from "../../../services/api/index";
import { useEffect, useState } from "react";
import Text from "../../atoms/Text";

const HomeInnerArea = ({ children }: HomeInnerAreaProps) => {
  const [allCoins, setAllCoins] = useState<any>([]);

  // useEffect(() => {
  //   api.get("/coins/list").then((response) => {
  //     setAllCoins(response.data);
  //     // console.log(response.data);
  //     const cash = allCoins.map((coins: any) => coins.symbol);
  //     console.log(cash);
  //   });
  // }, []);

  return (
    <>
      <S.Container>
        <S.CryptoListContainer>
          {allCoins &&
            allCoins.map((coins: any) => (
              <S.Crypto src={coins.symbol} alt={coins.symbol} />
            ))}
        </S.CryptoListContainer>
      </S.Container>
      <Footer />
    </>
  );
};

export default HomeInnerArea;
