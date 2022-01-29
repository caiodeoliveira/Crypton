import styled from "styled-components";
import sp_background from "../../../assets/sp_background.jpg";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const CryptoListContainer = styled.div`
  background: url(${sp_background}) no-repeat;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  margin-top: 1px;
  display: flex;
  flex-direction: column;
`;

const CryptoListContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Crypto = styled.img`
  width: 40px;
`;
const CryptoSymbol = styled.p``;

const CryptoPrice = styled.p``;
const S = {
  Container,
  CryptoListContainer,
  CryptoListContent,
  Crypto,
  CryptoSymbol,
  CryptoPrice,
};

export default S;
