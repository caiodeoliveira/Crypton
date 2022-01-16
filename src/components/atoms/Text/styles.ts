import styled from "styled-components";
import { colors, typography, fonts } from "../../../styles/mixins";

const TitleText = styled.div`
  font-size: ${typography.title};
  font-weight: ${fonts.montserrat.bold};
  color: ${colors.body};
`;

const SubTitleText = styled.div`
  font-size: ${typography.subTitle};
  font-weight: ${fonts.montserrat.normal};
  color: ${colors.body};
  margin-top: 179px;

  @media only screen and (max-width: 640px) {
    font-size: 25px;
  }
`;
const InputLabelText = styled.div`
  font-size: ${typography.modal_subtitle};
  font-weight: ${fonts.montserrat.normal};
  color: ${colors.body};
`;

const FooterText = styled.div`
  font-size: ${typography.modal_subtitle};
  font-weight: ${fonts.montserrat.normal};
  color: ${colors.body};
`;

const KeepConnectLabel = styled.div`
  font-size: ${typography.modal_subtitle};
  font-weight: ${fonts.montserrat.normal};
  color: ${colors.body};
`;
const LoginProblemLabel = styled.div`
  font-size: ${typography.modal_subtitle};
  font-weight: ${fonts.montserrat.normal};
  color: ${colors.body};
`;

const ParagraphLabelText = styled.p`
  font-size: ${typography.accordion.item};
  font-weight: ${fonts.montserrat.normal};
  color: ${colors.body};
`;

const S = {
  TitleText,
  SubTitleText,
  InputLabelText,
  KeepConnectLabel,
  LoginProblemLabel,
  FooterText,
  ParagraphLabelText,
};

export default S;
