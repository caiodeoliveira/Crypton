import styled from "styled-components";
import { colors, typography, fonts } from "../../../styles/mixins";
import background1 from "../../../assets/background1.jpg";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${background1});
  background-repeat: no-repeat;
  background-size: cover;
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
