import styled from "styled-components";
import { colors } from "../../../styles/mixins";

const Footer = styled.div`
  background-color: ${colors.primary};
  border: 2px solid ${colors.dark};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 3px;
  padding: 7px 14.5px;
  position: fixed;
  bottom: 0;
  overflow: hidden;
`;

const S = {
  Footer,
};

export default S;
