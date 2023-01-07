import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";
import CustomTextField from "../customFields/CustomTextField";
import validate from "../helper/validator";

import useForm from "../customHooks/useForm";
import FormLayout from "../layout/FormLayout";
import CenterItem from "../layout/CenterItem";
import FullHeight from "../layout/FullHeight";
import CustomRadioButton from "../customFields/CustomRadioButton";
import CustomSelectField from "../customFields/CustomSelectField";
import CustomCheckBox from "../customFields/CustomCheckBox";
import { appConstants } from "../constants/appConstants";
import { errorsLisMh, errorsListEn } from "../constants/errorMessages";
import FormArea from "../layout/FormArea";

function Copyright(props) {
  const { t } = useTranslation();
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {t("Copyright")}
      <Link color="inherit" href="">
        {t("bhoiMangalVivah")}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Signup() {
  const [isDisabled, setIsDisabled] = useState(true);
  const { t, i18n } = useTranslation();

  const lablesForRadio = ["Male", "Female"];
  const valuesForSelectField = ["unamrried", "widower", "widow", "divorced"];
  const errorList = {};
  const fields = {
    [appConstants.firstname]: "",
    [appConstants.fathersName]: "",
    [appConstants.sirname]: "",
    [appConstants.mobileNumber]: "",
    [appConstants.email]: "",
    [appConstants.password]: "",
    [appConstants.cpassword]: "",
    [appConstants.gender]: "Female",
    [appConstants.maritalStatus]: "",
  };
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
        if (error === field) {
          errorList[field] = errorsArray[error];
        }
      }
    }
  }, [errorList, errorsArray]);

  const notRequiredFields = [appConstants.fathersName];
  const [checked, setChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const { handleChangeForTextField, values, errors, hasError, errorsArea } =
    useForm(validate, fields, notRequiredFields, errorList);

  //console.log("values", values, errors);
  const handleChangeForCheckBox = (event) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    if (checked && Object.keys(errorsArea).length === 0) {
      setIsDisabled(false);
    }
    if (!checked) {
      setIsDisabled(true);
    }
  }, [checked, errorsArea]);

  const handleSubmit = (e) => {
    if (hasError) {
      setErrorMessage(true);
    }
    if (!hasError && checked && Object.keys(errorsArea).length === 0) {
      setErrorMessage(false);
      alert("ggg");
    }
  };

  const formArea = [
    {
      field: "CustomTextField",
      lengthForDesktop: 12,
      lengthForMobile: 12,
      name: appConstants.firstname,
      value: values.firstname,
      errorVal: "firstname",
      optionValues: "",
    },
    {
      field: "CustomTextField",
      lengthForDesktop: 12,
      lengthForMobile: 12,
      name: appConstants.fathersName,
      value: values.fathersName,
      errorVal: "fathersName",
      optionValues: "",
    },
    {
      field: "CustomTextField",
      lengthForDesktop: 12,
      lengthForMobile: 12,
      name: appConstants.sirname,
      value: values.sirname,
      errorVal: "sirname",
      optionValues: "",
    },
    {
      field: "CustomTextField",
      lengthForDesktop: 12,
      lengthForMobile: 12,
      name: appConstants.mobileNumber,
      value: values.mobileNumber,
      errorVal: "mobileNumber",
      optionValues: "",
    },
    {
      field: "CustomTextField",
      lengthForDesktop: 12,
      lengthForMobile: 12,
      name: appConstants.email,
      value: values.email,
      errorVal: "email",
      optionValues: "",
    },
    {
      field: "CustomTextField",
      lengthForDesktop: 12,
      lengthForMobile: 12,
      name: appConstants.password,
      value: values.password,
      errorVal: "password",
      optionValues: "",
    },
    {
      field: "CustomTextField",
      lengthForDesktop: 12,
      lengthForMobile: 12,
      name: appConstants.cpassword,
      value: values.cpassword,
      errorVal: "cpassword",
      optionValues: "",
    },
    {
      field: "CustomRadioButton",
      lengthForDesktop: 12,
      lengthForMobile: 12,
      name: appConstants.gender,
      value: values.gender,
      errorVal: "gender",
      optionValues: lablesForRadio,
    },
    {
      field: "CustomSelectField",
      lengthForDesktop: 12,
      lengthForMobile: 12,
      name: appConstants.maritalStatus,
      value: values.maritalStatus,
      errorVal: "maritalStatus",
      optionValues: valuesForSelectField,
    },

    
  ];


  return (
    <FullHeight>
      <FormLayout>
        <CenterItem>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
        </CenterItem>
        <CenterItem>
          <Typography component="h1" variant="h5">
            "{t("nameRegister")}"
          </Typography>
        </CenterItem>
        vhhvhvvhvhhvh
        {/* <FormArea data={formArea} /> */}
        {/* <Grid container spacing={2} sx={{ mt: 1 }}>

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
        </Grid> */}

        <Button
          type="submit"
          fullWidth
         // disabled={isDisabled}
          onClick={handleSubmit}
          variant="contained"
          sx={{ mt: 2, mb: 2 }}
        >
          {t("signup")}
        </Button>
      </FormLayout>
    </FullHeight>
  );
}
