import styled from "styled-components";
import { colors } from "../../../styles/mixins";

const Footer = styled.footer`
  background-color: ${colors.primary};
  border: 2px solid ${colors.dark};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 3px;
  padding: 7px 14.5px;
  position: fixed;
  bottom: 0;
`;

const PaginationContainer = styled.div`
  position: absolute;
  right: 20px;
`;

const S = {
  Footer,
  PaginationContainer,
};

export default S;
