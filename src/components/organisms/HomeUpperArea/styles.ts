import styled from "styled-components";
import { colors } from "../../../styles/mixins";

const TopContainer = styled.div`
  background-color: ${colors.dark};
  width: 100%;
  height: 24%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5px;
`;

const TrendingCoinsContainer = styled.div`
  background-color: ${colors.dark};
  border-top: 0.3px solid white;
  border-bottom: 0.3px solid white;
  border-radius: 0 5px 0 5px;
  display: flex;
  width: 100%;
  height: 24%;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  margin: 0 200px 0 0;
`;

const TrendingCoinsContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
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
