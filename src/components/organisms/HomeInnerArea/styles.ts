import styled from "styled-components";
import bg_big from "../../../assets/bg_big.jpg";
import { colors } from "../../../styles/mixins";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const BackgroundCrypto = styled.div`
  background: url(${bg_big}) no-repeat;
  width: 100%;
  height: 100%;
`;

// -------->  Header <-------
const HeaderFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const CryptoImgColumn = styled.img`
  width: 40px;
`;
const CryptoSymbol = styled.p``;

const CryptoPrice = styled.p`
  color: ${colors.primary};
  border-left: 3px solid ${colors.primary};
  margin-left: 20px;
  padding-left: 10px;
`;
const S = {
  Container,
  BackgroundCrypto,
  HeaderFlexContainer,
  GridContainer,
  CryptoImgColumn,
  Crypto,
  CryptoSymbol,
  CryptoPrice,
};

export default S;
