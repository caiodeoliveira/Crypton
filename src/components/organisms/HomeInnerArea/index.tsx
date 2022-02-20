import S from "./styles";
import { colors } from "../../../styles/mixins";
import api from "../../../services/api/index";
import { useEffect, useState } from "react";
import Text from "../../atoms/Text";
import Footer from "../../atoms/Footer";

const HomeInnerArea = () => {
  const [allCryptoData, setAllCryptoData] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(2);

  const totalPages: number = 5;
  useEffect(() => {
    api
      .get(
        "coins/markets?vs_currency=usd&order=market_cap_desc,volume_desc&per_page=20&price_change_percentage=24h,7d&sparkline=true"
      )
      .then((response) => {
        setAllCryptoData(response.data);
      });
  }, []);

  const handlePagination = async () => {
    await console.log(allCryptoData);
    await allCryptoData;
    await allCryptoData.shift();
    console.log(allCryptoData);
  };

  return (
    <>
      <S.BackgroundCrypto>
        <S.CryptoFlexContainer>
          <S.CryptoHeader>
            <Text type={"input_label"}>#</Text>
            <Text type={"input_label"}>Coin</Text>
            <Text type={"input_label"}>Symbol</Text>
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
                <Text type={"footer"}>{crypto.market_cap_rank}</Text>
              </S.CryptoRank>

              <S.CoinContainer>
                <S.CryptoImage
                  src={crypto.image}
                  alt={`${crypto.name} Image`}
                />
                <Text type={"input_label"}>{crypto.name}</Text>
              </S.CoinContainer>

              <Text type={"input_label"}>
                ( {crypto.symbol.toUpperCase()} )
              </Text>

              <S.CryptoPrice>
                <Text type={"footer"}>$ {crypto.current_price.toFixed(2)}</Text>
              </S.CryptoPrice>

              <S.CryptoDayStatus>
                <Text
                  type={"footer"}
                  color={
                    crypto.price_change_percentage_24h >= 0
                      ? colors.primary
                      : "#fe2222"
                  }
                >
                  % {crypto.price_change_percentage_24h.toFixed(1)}
                </Text>
              </S.CryptoDayStatus>

              <S.CryptoWeekStatus>
                <Text
                  type={"footer"}
                  color={
                    crypto.price_change_percentage_7d_in_currency >= 0
                      ? colors.primary
                      : "#fe2222"
                  }
                >
                  % {crypto.price_change_percentage_7d_in_currency.toFixed(2)}
                </Text>
              </S.CryptoWeekStatus>

              <S.CryptoMarketCap>
                <Text type={"footer"}>$ {crypto.market_cap}</Text>
              </S.CryptoMarketCap>

              <S.CryptoVolume>
                <Text type={"footer"}>$ {crypto.total_volume}</Text>
              </S.CryptoVolume>

              <S.CryptoSupply>
                <Text type={"footer"}>{crypto.circulating_supply}</Text>
              </S.CryptoSupply>
            </S.CryptoGridContent>
          ))}
        </S.CryptoFlexContainer>
      </S.BackgroundCrypto>
      <Footer
        onClick={handlePagination}
        currentPages={currentPage}
        totalPages={totalPages}
      />
    </>
  );
};

export default HomeInnerArea;
