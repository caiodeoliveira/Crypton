import { colors } from "../../../styles/mixins";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const RecoverButton = withStyles({
  root: {
    borderRadius: 3,
    border: `2px ${colors.primary} solid`,
    color: "white",
    width: "210px",
    height: "40px",
    padding: "20px 0 15px 0",
    marginTop: "15px",
  },
})(Button);

const LoginButton = withStyles({
  root: {
    borderRadius: 3,
    border: `2px ${colors.primary} solid`,
    color: "white",
    backgroundColor: `${colors.dark}`,
    width: "210px",
    height: "40px",
    padding: "20px 0 15px 0",
    marginTop: "15px",
  },
})(Button);

const ScrollBtn = styled.button`
  min-width: 25px;
  font-size: 24px;
  color: white;
`;

const S = {
  RecoverButton,
  LoginButton,
  ScrollBtn,
};

export default S;
