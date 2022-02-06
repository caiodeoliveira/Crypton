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
        "coins/markets?vs_currency=usd&order=market_cap_desc,volume_desc&per_page=20&price_change_percentage=24h,7d&sparkline=true"
      )
      .then((response) => {
        setAllCryptoData(response.data);
      });
  }, []);

  return (
    <>
      <S.BackgroundCrypto>
        <S.CryptoFlexContainer>
          <S.CryptoHeader>
            <Text type={"input_label"}>#</Text>
            <Text type={"input_label"}>Coin</Text>
            <Text type={"input_label"}>Price</Text>
            <Text type={"input_label"}>24h %</Text>
            <Text type={"input_label"}>7d %</Text>
            <Text type={"input_label"}>Market Cap</Text>
            <Text type={"input_label"}>Volume(24h)</Text>
            <Text type={"input_label"}>Circulating Supply</Text>
          </S.CryptoHeader>
          {allCryptoData.map((crypto: any) => (
            <S.CryptoGridContent>
              <S.CryptoRank>
                <Text type={"paragraph_text"}>{crypto.market_cap_rank}</Text>
              </S.CryptoRank>
              <S.CoinContainer>
                <S.CryptoImage
                  src={crypto.image}
                  alt={`${crypto.name} Image`}
                />
                <Text type={"paragraph_text"}>{crypto.name}</Text>
              </S.CoinContainer>

              <S.CryptoPrice>
                <Text type={"paragraph_text"}>${crypto.current_price}</Text>
              </S.CryptoPrice>

              <S.CryptoDayStatus>
                <Text type={"paragraph_text"}>
                  % {crypto.price_change_percentage_24h.toFixed(1)}
                </Text>
              </S.CryptoDayStatus>

              <S.CryptoWeekStatus>
                <Text type={"paragraph_text"}>
                  % {crypto.price_change_percentage_7d_in_currency}
                </Text>
              </S.CryptoWeekStatus>

              <S.CryptoMarketCap>
                <Text type={"paragraph_text"}>{crypto.market_cap}</Text>
              </S.CryptoMarketCap>

              <S.CryptoVolume>
                <Text type={"paragraph_text"}>{crypto.total_volume}</Text>
              </S.CryptoVolume>

              <S.CryptoSupply>
                <Text type={"paragraph_text"}>{crypto.circulating_supply}</Text>
              </S.CryptoSupply>
            </S.CryptoGridContent>
          ))}
        </S.CryptoFlexContainer>
      </S.BackgroundCrypto>
      <Footer />
    </>
  );
};

export default HomeInnerArea;
