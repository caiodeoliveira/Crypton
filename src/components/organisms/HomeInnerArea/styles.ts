import styled from "styled-components";
import sp_background from "../../../assets/sp_background.jpg";
import { colors } from "../../../styles/mixins";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const TableCrypto = styled.table`
  border: 1px solid white;
  border-radius: 5px;
  width: 100%;
  height: 100%;
`;

const TableHeaderCrypto = styled.tr``;

const CryptoListContainer = styled.div`
  background: url(${sp_background}) no-repeat;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  margin-top: 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CryptoListContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${colors.body};
`;

const Crypto = styled.img`
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
  TableCrypto,
  TableHeaderCrypto,
  CryptoListContainer,
  CryptoListContent,
  Crypto,
  CryptoSymbol,
  CryptoPrice,
};

export default S;
