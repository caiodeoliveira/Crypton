import styled from "styled-components";
import bg_medium from "../../../assets/bg_medium.jpg";

const BackgroundCrypto = styled.div`
  background: url(${bg_medium});
  background-size: cover;
`;

const CryptoFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 100px 0 0;
`;

const CryptoHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  margin: 10px 0 40px 0;
`;

const CryptoGridContent = styled.div`
  display: grid;
  width: 100%;
  max-height: 120px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  padding: 0 0 30px 0;
  margin-bottom: 30px;
`;

const CryptoRank = styled.p``;

const CoinContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 20px;
  width: 70%;
`;

const CryptoImage = styled.img`
  max-width: 65px;
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
