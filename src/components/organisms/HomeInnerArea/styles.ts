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
  margin-top: 5px;
  width: 100%;
  height: 70%;
  background: url(${sp_background});
  filter: brightness(70%);
  border-radius: 5px;
`;

const Crypto = styled.img``;

const S = {
  Container,
  CryptoListContainer,
  Crypto,
};

export default S;
