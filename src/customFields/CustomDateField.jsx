import React from "react";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";

function CustomDateField({
  value,
  label,
  id,
  handleChange,
  helperText,
  hasError,
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileDatePicker
        label={label}
        value={value}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField
            {...params}
            id={id}
            fullWidth
            error={helperText === undefined ? false : hasError}
            helperText={hasError ? helperText : ""}
          />
        )}
      />
    </LocalizationProvider>
  );
}

export default CustomDateField;
