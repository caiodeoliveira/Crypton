import S from "./styles";
import Footer from "../../atoms/Footer";
import { HomeInnerAreaProps } from "./types";
import api from "../../../services/api/index";
import { useEffect, useState } from "react";
import HeaderCrypto from "../../molecules/HeaderCrypto";
import Text from "../../atoms/Text";

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
      <S.BackgroundCrypto>
        <S.Container>
          <HeaderCrypto />
          {allCryptoData.map((crypto: any) => (
            <>
              <S.CryptoGridContainer>
                <S.CryptoImage src={crypto.image} />
                <S.CryptoPrice>
                  <Text type={"paragraph_text"}>{crypto.current_price}</Text>
                </S.CryptoPrice>
                <S.CryptoDayStatys>
                  <Text type={"paragraph_text"}>
                    {crypto.market_cap_change_percentage_24h}%
                  </Text>
                </S.CryptoDayStatys>
              </S.CryptoGridContainer>
            </>
          ))}
        </S.Container>
      </S.BackgroundCrypto>
      <Footer />
    </>
  );
};

export default HomeInnerArea;
