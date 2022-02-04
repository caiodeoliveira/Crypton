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
      .get("/coins/markets?vs_currency=usd&description=true")
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
                <S.CryptoRank>
                  <Text type={"paragraph_text"}>{crypto.market_cap_rank}</Text>
                </S.CryptoRank>
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
