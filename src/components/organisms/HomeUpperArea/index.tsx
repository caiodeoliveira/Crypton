import S from "./styles";
import Text from "../../atoms/Text";
import { useEffect, useState } from "react";
import api from "../../../services/api";
import { GiCometSpark } from "react-icons/gi";

const HomeUpperArea = () => {
  const [trendingCoins, setTrendingCoins] = useState<any>([]);

  useEffect(() => {
    api
      .get("/search/trending")
      .then((response) => {
        setTrendingCoins(response.data.coins);
      })
      .catch((err) => {
        console.log("Ocorreu um erro na requisição !:" + err);
      });
  }, []);

  return (
    <>
      <S.TopContainer>
        <S.TrendingContainer>
          <S.TrendingLeftContainer>
            <Text type={"subtitle"}>{"Trending"}</Text>
            {<GiCometSpark size={80} color={"yellow"} />}
          </S.TrendingLeftContainer>

          <S.TrendingCoinsContainer>
            {trendingCoins &&
              trendingCoins.map((crypto: any) => (
                <S.TrendingCoinsContent>
                  <Text type={"paragraph_text"}>{crypto.item.score + 1}</Text>
                  <S.TrendingCoins
                    src={crypto.item.thumb}
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
                      {` BTC ${crypto.item.price_btc.toFixed(10)}`}
                    </Text>
                  </S.TrendingPrice>
                </S.TrendingCoinsContent>
              ))}
          </S.TrendingCoinsContainer>
          <S.TrendingRightContainer>
            <Text type={"subtitle"}>{"v 2.0.0"}</Text>
          </S.TrendingRightContainer>
        </S.TrendingContainer>
      </S.TopContainer>
    </>
  );
};

export default HomeUpperArea;
