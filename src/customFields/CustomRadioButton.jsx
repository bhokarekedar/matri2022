import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useTranslation } from "react-i18next";

export default function CustomRadioButton({lablesForRadio, label, value, name, handleChangeRadioButton}) {
  const { t } = useTranslation();
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">{label}</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name={name}
        value={value}
        id={value}
        onChange={handleChangeRadioButton}
      >
        {/* <FormControlLabel value="Female" control={<Radio />} label="Female" />
        <FormControlLabel value="Male" control={<Radio />} label="Male" /> */}

         {lablesForRadio.map(item => {
           return (<FormControlLabel key={t(`${item}`)} value={item} control={<Radio />} label= {t(`${item}`)} />);
         })}
      </RadioGroup>
    </FormControl>
  );
}
