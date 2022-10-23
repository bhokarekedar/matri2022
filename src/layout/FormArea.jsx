import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import CustomTextField from "../customFields/CustomTextField";
import validate from "../helper/validator";
import useForm from "../customHooks/useForm";
import CustomRadioButton from "../customFields/CustomRadioButton";
import CustomSelectField from "../customFields/CustomSelectField";
import { errorsLisMh, errorsListEn } from "../constants/errorMessages";
import CustomDateField from "../customFields/CustomDateField";

function FormArea({formArea, fields, notRequiredFields}) {
  const { t, i18n } = useTranslation();
  const errorList = {};
  const errorsArray = i18n.language == "mh" ? errorsLisMh : errorsListEn;

  useEffect(() => {
    for (const field in fields) {
      for (const error in errorsArray) {
        if (error.includes("Length") && `${field}Length` === error) {
          errorList[error] = errorsArray[error];
        }
        if (error.includes("Pattern") && `${field}Pattern` === error) {
          errorList[error] = errorsArray[error];
        }
        if (error.includes("Match") && `${field}Match` === error) {
          errorList[error] = errorsArray[error];
        }
        if (error.includes("AgeDiff") && `${field}AgeDiff` === error) {
          errorList[error] = errorsArray[error];
        }
        if (error === field) {
          errorList[field] = errorsArray[error];
        }
      }
    }
  }, [errorList, errorsArray]);


  const { handleChange, values, errors, hasError, errorsArea } = useForm(
    validate,
    fields,
    notRequiredFields,
    errorList,
  );

  console.log("values", values)

  return (
    <Grid container spacing={2} sx={{ mt: 1 }}>
    {formArea.map(
      (
        {
          field,
          name,
          lengthForDesktop,
          lengthForMobile,
          value,
          errorVal,
          optionValues,
        }
      ) => {
        if (field === "CustomDateField") {
          return (
            <Grid item xs={lengthForMobile} md={lengthForDesktop}>
              <CustomDateField
                label={t(name)}
                name={name}
                id={name}
                value={value}
                handleChange={(e) => {
                  handleChange(e, name);
                }}
                helperText={errors?.[errorVal]}
                hasError={hasError}
              />
            </Grid>
          );
        } else if (field === "CustomSelectField") {
          return (
            <Grid item xs={lengthForMobile} md={lengthForDesktop}>
              <CustomSelectField
                label={t(name)}
                name={name}
                value={value}
                helperText={errors?.[errorVal]}
                valuesForSelectField={optionValues}
                handleChange={handleChange}
                hasError={hasError}
              />
            </Grid>
          );
        } else if (field === "CustomTextField") {
          return (
            <Grid item xs={lengthForMobile} md={lengthForDesktop}>
              <CustomTextField
                label={t(name)}
                name={name}
                id={name}
                value={value}
                handleChange={handleChange}
                helperText={errors?.[errorVal]}
                hasError={hasError}
              />
            </Grid>
          );
        } else if (field === "CustomRadioButton") {
          return ( 
           <Grid item xs={lengthForMobile} md={lengthForDesktop}>
          <CustomRadioButton
            label={t(name)}
            name={name}
            id={name}
            value={value}
            lablesForRadio={optionValues}
            handleChange={handleChange}
          />
           </Grid>
            );
        }
      }
    )}
  </Grid>

  )
}

export default FormArea