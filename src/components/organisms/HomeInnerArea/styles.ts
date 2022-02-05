import styled from "styled-components";
import bg_big from "../../../assets/bg_big.jpg";
import { colors } from "../../../styles/mixins";

const BackgroundCrypto = styled.div`
  background: url(${bg_big}) no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CryptoGridContainer = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
`;

const CryptoRank = styled.p``;

const CryptoImage = styled.img`
  width: 40px;
`;

const CryptoPrice = styled.p``;

const CryptoDayStatus = styled.p``;

const CryptoWeekStatus = styled.p``;

const CryptoMarketCap = styled.p``;

const S = {
  BackgroundCrypto,
  CryptoRank,
  CryptoImage,
  CryptoGridContainer,
  CryptoPrice,
  CryptoDayStatus,
  CryptoWeekStatus,
  CryptoMarketCap,
};

export default S;
