import styled from "styled-components";
import bg_medium from "../../../assets/bg_medium.jpg";

const BackgroundCrypto = styled.div`
  background: url(${bg_medium});
  background-size: cover;
`;

const CryptoFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CryptoHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  margin: 20px 0 40px 0;
`;

const CryptoGridContent = styled.div`
  display: grid;
  width: 100%;
  max-height: 120px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  padding: 0px 0 100px 0;
`;

const CryptoRank = styled.p``;

const CoinContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-left: 50px;
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
