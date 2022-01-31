import S from "./styles";
import Footer from "../../atoms/Footer";
import { HomeInnerAreaProps } from "./types";
import api from "../../../services/api/index";
import { useEffect, useState } from "react";

const HomeInnerArea = ({ children }: HomeInnerAreaProps) => {
  const [allCoins, setAllCoins] = useState<any>([]);

  useEffect(() => {
    api
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20"
      )
      .then((response) => {
        setAllCoins(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <>
      <S.Container>
        <S.TableCrypto>
          <S.TableHeaderCrypto>
            <S.CryptoListContainer>
              {allCoins.map((coins: any) => (
                <S.CryptoListContent>
                  <S.Crypto src={coins.image} alt={allCoins.id} />
                  <S.CryptoSymbol>( {coins.symbol} )</S.CryptoSymbol>
                  <S.CryptoPrice>
                    {coins.current_price.toFixed(2)} USD
                  </S.CryptoPrice>
                </S.CryptoListContent>
              ))}
            </S.CryptoListContainer>
          </S.TableHeaderCrypto>
        </S.TableCrypto>
      </S.Container>
      <Footer />
    </>
  );
};

export default HomeInnerArea;
