import styled from "styled-components";
import { colors } from "../../../styles/mixins";

const Footer = styled.div`
  background-color: ${colors.primary};
  border: 2px solid ${colors.dark};
  border-radius: 3px;
  width: 100%;
  height: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 14.5px;
  position: fixed;
  bottom: 0;
`;

const S = {
  Footer,
};

export default S;
