import S from "./styles";
import Footer from "../../atoms/Footer";
import { HomeInnerAreaProps } from "./types";
import api from "../../../services/api/index";
import { useEffect, useState } from "react";

const HomeInnerArea = ({ children }: HomeInnerAreaProps) => {
  const [allCoins, setAllCoins] = useState<any>([]);

  useEffect(() => {
    api
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20"
      )
      .then((response) => {
        setAllCoins(response.data);
        console.log(response.data);
        // const cash = allCoins.map((coins: any) => coins.symbol);
        // console.log(cash);
      });
  }, []);

  return (
    <>
      <S.Container>
        <S.CryptoListContainer>
          <S.CryptoListContent>
            {allCoins.map((coins: any) => (
              <S.Crypto src={coins.image} alt={allCoins.id} />
            ))}
          </S.CryptoListContent>
        </S.CryptoListContainer>
      </S.Container>
      <Footer />
    </>
  );
};

export default HomeInnerArea;
