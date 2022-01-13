import styled from "styled-components";
import { colors } from "../../../styles/mixins";

const TopContainer = styled.div`
  background-color: ${colors.dark};
  width: 100%;
  height: 35%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-top: 50px;
`;

const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: inherit;
`;

const TrendingCoinsContainer = styled.div`
  background-color: ${colors.dark};
  border-top: 0.3px solid white;
  border-bottom: 0.3px solid white;
  border-radius: 5px;
  display: flex;
  width: 100%;
  height: 80%;
  margin: 20px 40px 0 0;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
`;

const TrendingCoinsContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

const TrendingCoins = styled.img``;

const TrendingName = styled.p``;

const TrendingSymbol = styled.p``;

const TrendingPrice = styled.p``;

const S = {
  TopContainer,
  TrendingContainer,
  TrendingCoinsContainer,
  TrendingCoinsContent,
  TrendingCoins,
  TrendingPrice,
  TrendingSymbol,
  TrendingName,
};

export default S;
