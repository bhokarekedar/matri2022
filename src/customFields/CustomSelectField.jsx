import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from "react-i18next";

function CustomSelectField({name, value, label, handleChange, valuesForSelectField, helperText, hasError}) {
  const { t } = useTranslation();
 return ( <FormControl sx={{ minWidth: "100%" }} >
    <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
    <Select
      labelId="demo-simple-select-helper-label"
      id="demo-simple-select-helper"
      value={value}
      label={label}
      name={name}
      onChange={handleChange}
    >{ valuesForSelectField.map(item => <MenuItem key={item} value={item}>{item}</MenuItem>) }
    </Select>
    {hasError && <FormHelperText>{helperText}</FormHelperText>} 
  </FormControl>
  )
}

export default CustomSelectField