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
      });
  }, []);

  return (
    <>
      <S.Container>
        <S.BackgroundCrypto>
          <S.GridContainer></S.GridContainer>
        </S.BackgroundCrypto>
      </S.Container>
      <Footer />
    </>
  );
};

export default HomeInnerArea;
