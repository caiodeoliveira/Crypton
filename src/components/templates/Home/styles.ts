import styled from "styled-components";
import { colors, typography, fonts } from "../../../styles/mixins";
import sp_background from "../../../assets/sp_background.jpg";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
  opacity: 0.9;
`;

const TitleText = styled.div`
  font-size: ${typography.subTitle};
  font-family: ${fonts.montserrat.normal};
  color: ${colors.body};
  margin-top: 179px;
`;

const S = {
  Container,
  TitleText,
};

export default S;
