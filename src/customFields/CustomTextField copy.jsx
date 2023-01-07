import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import { appConstants } from "../constants/appConstants";

function CustomTextField({
  value,
  name,
  label,
  id,
  handleChange,
  validations,
  //  helperText,
  //  hasError,
}) 
{
  // const [helperText, setHelperText] = useState("");
  // const [hasError, setHasError] = useState(false);
  let helperText = "";
  let hasError = true;
  
  if(validations[appConstants.isRequired]){
    setHasError(true);
    // setHelperText("gggg");
    helperText = "jjjj";
  }else{
    setHasError(false);
    helperText = "";
  }
  
  return (
    <>
      <TextField
        value={value}
        onChange={handleChange}
        required
        fullWidth
        id={id}
        label={label}
        name={name}
        error={helperText === "" ? false : hasError}
        helperText={hasError ? helperText : ""}
      />
    </>
  );
}

export default CustomTextField;
