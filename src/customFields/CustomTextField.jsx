import React from "react";
import TextField from "@mui/material/TextField";

function CustomTextField({value, name, label, id, handleChangeTextField, helperText, hasError}) {
  return (
    <>
      <TextField
        value={value}
        onChange={handleChangeTextField}
        required
        fullWidth
        id={id}
        label={label}
        name={name}
        error={helperText === undefined ? false : hasError}
        helperText={hasError ? helperText : ""}
      />
    </>
  );
}

export default CustomTextField;