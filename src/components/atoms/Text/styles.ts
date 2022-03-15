import styled from "styled-components";
import { colors, typography, fonts } from "../../../styles/mixins";

const SubTitleText = styled.div`
  font-size: ${typography.modal_title};
  font-weight: ${fonts.montserrat.normal};
  color: ${colors.body};

  @media only screen and (max-width: 640px) {
    font-size: 25px;
  }
`;
const InputLabelText = styled.div`
  font-size: ${typography.floating_component.counter};
  font-weight: bold;
  color: ${colors.body};
`;

const FooterText = styled.div`
  font-size: ${typography.modal_subtitle};
  font-weight: bold;
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
  SubTitleText,
  InputLabelText,
  KeepConnectLabel,
  LoginProblemLabel,
  FooterText,
  ParagraphLabelText,
};

export default S;
