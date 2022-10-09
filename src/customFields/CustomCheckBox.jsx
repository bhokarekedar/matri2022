import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


export default function CustomCheckBox({checked, handleChangeForCheckBox}) {
    return (
        <Checkbox
        checked={checked}
        onChange={handleChangeForCheckBox}
        inputProps={{ 'aria-label': 'controlled' }}
      />  
    );
  }
  