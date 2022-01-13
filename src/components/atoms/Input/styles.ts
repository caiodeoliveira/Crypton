import { colors, typography, fonts } from "../../../styles/mixins";

import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const InputTextField = withStyles({
  root: {
    background: `${colors.body}`,
    borderRadius: 3,
    border: `2px ${colors.primary} solid`,
    color: "white",
    width: "150px",
    height: "60px",
    padding: "0 0 0 14px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    margin: "30px 0 0 0 ",
    "& > *": {
      fontSize: `${typography.subTitle}`,
      width: "90%",
    },
  },
})(TextField);

const InputIcons = withStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
})(TextField);

const S = {
  InputTextField,
  InputIcons,
};

export default S;
