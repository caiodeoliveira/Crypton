import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CryptoListContainer = styled.div`
  width: 90%;
  height: 70%;
  background-color: black;
  border: 3px solid grey;
  border-radius: 5px;
`;

const S = {
  Container,
  CryptoListContainer,
};

export default S;
