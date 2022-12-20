import React, {useState, useEffect} from "react";
import TextField from "@mui/material/TextField";
import { appConstants } from "../constants/appConstants";

function CustomTextField({
  value,
  name,
  label,
  id,
  handleChange,
  validations,
  helperText,
   hasError,
}) 
{
//   const [helperText, setHelperText] = useState("");
//   const [hasError, setHasError] = useState(false);
//   //let helperText = "";

//   useEffect(() => {
//     if(value === ""){
//       setHasError(false);
//       setHelperText("");
//     }
//  if(validations[appConstants.min] && value.length < validations[appConstants.min]){
//      setHasError(true);
//     setHelperText("lesss");
//   }else{
//     setHasError(false);
//     setHelperText("");
//   }
  
//   }, [value])
  
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
