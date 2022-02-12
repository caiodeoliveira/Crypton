import styled from "styled-components";
import { colors } from "../../../styles/mixins";
import sp_background from "../../../assets/sp_background.jpg";

const TopContainer = styled.div`
  background-color: ${colors.dark};
  width: 100%;
  height: 24%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-around;
`;

const TrendingContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TrendingLeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TrendingCoinsContainer = styled.div`
  background: url(${sp_background});
  background-repeat: no-repeat;
  border-top: 0.3px solid white;
  border-bottom: 0.3px solid white;
  border-radius: 5px 5px 5px 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24%;
  padding: 5px 100px;
  margin: 0 200px 30px 30px;
`;

const TrendingRightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 11%;
`;

const TrendingCoinsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 13px;
`;

const TrendingCoins = styled.img``;

const TrendingName = styled.p``;

const TrendingSymbol = styled.p``;

const TrendingPrice = styled.p``;

const S = {
  TopContainer,
  TrendingContainer,
  TrendingLeftContainer,
  TrendingRightContainer,
  TrendingCoinsContainer,
  TrendingCoinsContent,
  TrendingCoins,
  TrendingPrice,
  TrendingSymbol,
  TrendingName,
};

export default S;
