import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


export default function CustomCheckBox({checked, handleChange}) {
    return (
        <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />  
    );
  }
  