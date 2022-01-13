import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

const CheckBoxInput = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "primary checkbox" }}
    />
  );
};

export default CheckBoxInput;
