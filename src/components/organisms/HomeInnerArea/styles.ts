import styled from "styled-components";
import bg_big from "../../../assets/bg_big.jpg";
import { colors } from "../../../styles/mixins";

const BackgroundCrypto = styled.div`
  background: url(${bg_big});
  background-size: cover;
`;

const CryptoFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const CryptoGridContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  margin-top: 100px;
`;

const CryptoHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

const CryptoRank = styled.p``;

const CoinContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const CryptoImage = styled.img`
  width: 60px;
`;

const CryptoPrice = styled.p``;

const CryptoDayStatus = styled.p``;

const CryptoWeekStatus = styled.p``;

const CryptoMarketCap = styled.p``;

const CryptoVolume = styled.p``;

const CryptoSupply = styled.p``;

const S = {
  BackgroundCrypto,
  CryptoFlexContainer,
  CryptoGridContent,
  CryptoHeader,
  CoinContainer,
  CryptoRank,
  CryptoImage,
  CryptoPrice,
  CryptoDayStatus,
  CryptoWeekStatus,
  CryptoMarketCap,
  CryptoVolume,
  CryptoSupply,
};

export default S;
