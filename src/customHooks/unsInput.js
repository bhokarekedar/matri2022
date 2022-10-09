import React, { useState } from "react";
import TextField from "@mui/material/TextField";

function useInput(props) {
  console.log("props", props)
  const [value, setValue] = useState("inpitvalue");

  return (
    <>
      <TextField
        margin="normal"
        //value={value}
        onChange={(e) => setValue(e.target.value)}
        required
        fullWidth
        //id={name}
        label={"hhh"}
        name={"name"}
      />
    </>
  );
}

export default useInput;
