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
                <S.CryptoDayStatus>
                  <Text type={"paragraph_text"}>......</Text>
                  <S.CryptoWeekStatus>
                    <Text type={"paragraph_text"}>${crypto.market_cap}</Text>
                  </S.CryptoWeekStatus>
                </S.CryptoDayStatus>
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
