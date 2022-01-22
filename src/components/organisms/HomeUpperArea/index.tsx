import S from "./styles";
import Text from "../../atoms/Text";
import { useEffect, useState } from "react";
import api from "../../../services/api";
import HomeUpperAreaProps from "./types";
import { GiSpaceship } from "react-icons/gi";
import { RiSpaceShipLine } from "react-icons/ri";

const HomeUpperArea = ({}: HomeUpperAreaProps) => {
  const [trendingCoins, setTrendingCoins] = useState<any>([]);
  const [price, setPrice] = useState<any>([]);

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
          <Text type={"input_label"}>{"Trending"}</Text>
          {<RiSpaceShipLine size={30} color={"yellow"} />}
          <Text type={"input_label"}>{"2 . 0 . 0"}</Text>
          <S.TrendingCoinsContainer>
            {trendingCoins &&
              trendingCoins.map((crypto: any) => (
                <S.TrendingCoinsContent>
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
                      {` BTC ${crypto.item.price_btc.toFixed(20)}`}
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
