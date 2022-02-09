import styled from "styled-components";
import { colors } from "../../../styles/mixins";

const TopBar = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.dark};
  border-top: 0.3px solid white;
  border-bottom: 0.3px solid white;
  border-radius: 5px;
  width: 90%;
  height: 80%;
`;

const S = {
  TopBar,
};

export default S;
