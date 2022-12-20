import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import CustomTextField from "../customFields/CustomTextField";
import useForm from "../customHooks/useForm";
import CustomRadioButton from "../customFields/CustomRadioButton";
import CustomSelectField from "../customFields/CustomSelectField";
import { errorsLisMh, errorsListEn } from "../constants/errorMessages";
import CustomDateField from "../customFields/CustomDateField";
import { appConstants } from "../constants/appConstants";

function FormArea({formArea, fields, notRequiredFields}) {
  const { t, i18n } = useTranslation();
  const [errorMessage, setErrorMessage] = useState(false);
  const [checked, setChecked] = useState(false);
  const errorList = {};
  const errorsArray = i18n.language == "mh" ? errorsLisMh : errorsListEn;

  // useEffect(() => {
  //   for (const field in fields) {
  //     for (const error in errorsArray) {
  //       if (error.includes("Length") && `${field}Length` === error) {
  //         errorList[error] = errorsArray[error];
  //       }
  //       if (error.includes("Pattern") && `${field}Pattern` === error) {
  //         errorList[error] = errorsArray[error];
  //       }
  //       if (error.includes("Match") && `${field}Match` === error) {
  //         errorList[error] = errorsArray[error];
  //       }
  //       if (error.includes("AgeDiff") && `${field}AgeDiff` === error) {
  //         errorList[error] = errorsArray[error];
  //       }
  //       if (error === field) {
  //         errorList[field] = errorsArray[error];
  //       }
  //     }
  //   }
  // }, [errorList, errorsArray]);


  const { handleChange, values, errors, hasError, errorsArea } = useForm(
    fields,
    notRequiredFields,
    errorsArray,
    formArea
  );
console.log("zzzz", errors)

  const handleSubmit = (e) => {
    if (hasError) {
      setErrorMessage(true);
    }
    if (!hasError && checked && Object.keys(errorsArea).length === 0) {
      setErrorMessage(false);
      alert("ggg");
    }
  };


  return (
    <Grid container spacing={2} sx={{ mt: 1 }}>
    {formArea.map(({field, name,lengthForDesktop,lengthForMobile,errorVal,optionValues, validations}, index) => {
        if (field ===  appConstants.CustomDateField) {
          return (
            <Grid item xs={lengthForMobile} md={lengthForDesktop}>
              <CustomDateField
                label={t(name)}
                name={name}
                id={name}
                key={index}
                value={values[name]}
                handleChange={(e) => {
                  handleChange(e, name);
                }}
                validations={validations}
                helperText={errors?.[errorVal]}
                hasError={hasError}
              />
            </Grid>
          );
        } else if (field === appConstants.CustomSelectField) {
          return (
            <Grid item xs={lengthForMobile} md={lengthForDesktop}>
              <CustomSelectField
                label={t(name)}
                name={name}
                value={values[name]}
                key={index}
                helperText={errors?.[errorVal]}
                valuesForSelectField={optionValues}
                handleChange={handleChange}
                validations={validations}
                hasError={hasError}
              />
            </Grid>
          );
        } else if (field === appConstants.CustomTextField) {
          return (
            <Grid item xs={lengthForMobile} md={lengthForDesktop}>
              <CustomTextField
                label={t(name)}
                name={name}
                id={name}
                key={index}
                value={values[name]}
                handleChange={handleChange}
                validations={validations}
                // helperText={errors?.[errorVal]}
                // hasError={hasError}
              />
            </Grid>
          );
        } else if (field === appConstants.CustomRadioButton) {
          return ( 
           <Grid item xs={lengthForMobile} md={lengthForDesktop}>
          <CustomRadioButton
            label={t(name)}
            name={name}
            id={name}
            key={index}
            value={values[name]}

            lablesForRadio={optionValues}
            handleChange={handleChange}
            validations={validations}
          />
           </Grid>
            );
        }
        else if (field === appConstants.SubmitButton) {
          return ( 
           <Grid item xs={lengthForMobile} md={lengthForDesktop}>
          <Button
          type="submit"
          fullWidth
          //disabled={isDisabled}
          onClick={handleSubmit}
          validations={validations}
          variant="contained"
          sx={{ mt: 2, mb: 2 }}
        >
          {t(name)}
        </Button>
           </Grid>
            );
        }
      }
    )}
  </Grid>

  )
}

export default FormArea