import S from "./styles";
import { colors } from "../../../styles/mixins";
import api from "../../../services/api/index";
import { useEffect, useState } from "react";
import Text from "../../atoms/Text";
import Footer from "../../atoms/Footer";

const HomeInnerArea = () => {
  const [allCryptoData, setAllCryptoData] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages] = useState<number>(100);

  const handlePagination = (event: any) => {
    event.preventDefault();
    setCurrentPage(Number(event.target.textContent));
  };
  useEffect(() => {
    api
      .get(
        `coins/markets?vs_currency=usd&order=market_cap_desc,volume_desc&per_page=10&page=${currentPage}&price_change_percentage=24h,7d`
      )
      .then((response) => {
        setAllCryptoData(response.data);
      });
  }, [currentPage]);

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
                <Text type={"footer"}>
                  $ {crypto.current_price.toLocaleString("en-US")}
                </Text>
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
                <Text type={"footer"}>
                  $ {crypto.market_cap.toLocaleString("en-US")}
                </Text>
              </S.CryptoMarketCap>

              <S.CryptoVolume>
                <Text type={"footer"}>
                  $ {crypto.total_volume.toLocaleString("en-US")}
                </Text>
              </S.CryptoVolume>

              <S.CryptoSupply>
                <Text type={"footer"}>
                  {crypto.circulating_supply.toLocaleString("en-US")}
                </Text>
              </S.CryptoSupply>
            </S.CryptoGridContent>
          ))}
        </S.CryptoFlexContainer>
      </S.BackgroundCrypto>
      <Footer
        onChange={handlePagination}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </>
  );
};

export default HomeInnerArea;
