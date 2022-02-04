import styled from "styled-components";
import bg_big from "../../../assets/bg_big.jpg";
import { colors } from "../../../styles/mixins";

const BackgroundCrypto = styled.div`
  background: url(${bg_big}) no-repeat;
  display: flex;
  flex-direction: column;
  align-items: space-evenly;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CryptoGridContainer = styled.div`
  width: 20%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 80px;
`;

const CryptoImage = styled.img`
  width: 40px;
`;

const CryptoPrice = styled.p``;

const CryptoDayStatus = styled.p``;

const CryptoWeekStatus = styled.p``;

const CryptoRank = styled.p``;

const S = {
  BackgroundCrypto,
  Container,
  CryptoImage,
  CryptoGridContainer,
  CryptoPrice,
  CryptoDayStatus,
  CryptoWeekStatus,
  CryptoRank,
};

export default S;
