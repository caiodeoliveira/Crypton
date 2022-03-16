import styled from "styled-components";
import { colors } from "../../../styles/mixins";

const TopBar = styled.div`
  display: flex;
  background-color: ${colors.dark};
  border-radius: 5px;
  width: 90%;
  height: 80%;
`;

const S = {
  TopBar,
};

export default S;
