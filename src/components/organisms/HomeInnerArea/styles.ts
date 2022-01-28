import styled from "styled-components";
import sp_background from "../../../assets/sp_background.jpg";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CryptoListContainer = styled.div`
  background: url(${sp_background});
  filter: brightness(50%);
  width: 100%;
  height: 100%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-top: 1px;
  overflow: auto;
`;

const CryptoListContent = styled.div``;

const Crypto = styled.img`
  width: 40px;
`;

const S = {
  Container,
  CryptoListContainer,
  CryptoListContent,
  Crypto,
};

export default S;
