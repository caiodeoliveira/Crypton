import S from "./styles";
import Text from "../../atoms/Text";
import { useEffect, useState } from "react";
import api from "../../../services/api";
import HomeUpperAreaProps from "./types";

const HomeUpperArea = ({}: HomeUpperAreaProps) => {
  const [trendingCoins, setTrendingCoins] = useState<any>([]);
  const [price, setPrice] = useState<any>([]);

  useEffect(() => {
    api
      .get("/search/trending")
      .then((response) => {
        console.log(response.data);
        setTrendingCoins(response.data.coins);
      })
      .catch((err) => {
        console.log("Ocorreu um erro na requisição !:" + err);
      });
  }, []);

  useEffect(() => {
    api
      .get("/simple/supported_vs_currencies")
      .then((response) => {
        console.log(response);
        setPrice(response.data);
      })
      .catch((err) => {
        console.log("Ocorreu um erro na requisição !:" + err);
      });
  }, []);

  return (
    <>
      <S.TopContainer>
        <Text type={"subtitle"}>{"2.0.0"}</Text>
        <S.TrendingContainer>
          <Text type={"title"}>{"Trending"}</Text>
          <S.TrendingCoinsContainer>
            {trendingCoins &&
              trendingCoins.map((crypto: any) => (
                <S.TrendingCoinsContent>
                  <S.TrendingCoins
                    src={crypto.item.small}
                    alt="trending cryptos"
                  />
                  <S.TrendingSymbol>
                    <Text
                      type={"paragraph_text"}
                    >{`(  ${crypto.item.symbol} )`}</Text>
                  </S.TrendingSymbol>
                  <S.TrendingName>
                    <Text type={"paragraph_text"}>{`${crypto.item.slug}`}</Text>
                  </S.TrendingName>
                  <S.TrendingPrice>
                    <Text type={"paragraph_text"}>
                      {` BTC ${crypto.item.price_btc.toFixed(17)}`}
                    </Text>
                  </S.TrendingPrice>
                </S.TrendingCoinsContent>
              ))}
          </S.TrendingCoinsContainer>
        </S.TrendingContainer>
      </S.TopContainer>
    </>
  );
};

export default HomeUpperArea;
