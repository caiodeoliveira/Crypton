import S from "./styles";
import Footer from "../../atoms/Footer";
import { HomeInnerAreaProps } from "./types";
import api from "../../../services/api/index";
import { useEffect, useState } from "react";

const HomeInnerArea = ({ children }: HomeInnerAreaProps) => {
  const [allCryptoData, setAllCryptoData] = useState<any>([]);

  useEffect(() => {
    api
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20"
      )
      .then((response) => {
        setAllCryptoData(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <>
      <S.Container>
        <S.BackgroundCrypto>
          {allCryptoData.map((crypto: any) => (
            <S.GridContainer>
              <S.CryptoImgColumn
                src={crypto.image}
                alt={`${crypto.name} image`}
              />
            </S.GridContainer>
          ))}
        </S.BackgroundCrypto>
      </S.Container>
      <Footer />
    </>
  );
};

export default HomeInnerArea;
