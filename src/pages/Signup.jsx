import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
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

function Copyright(props) {
  const { t } = useTranslation();
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {t('Copyright')}
      <Link color="inherit" href="">
      {t('bhoiMangalVivah')}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Signup() {
  const [errorForCheckBox, setErrorForCheckBox] = useState(false);
  const { t, i18n } = useTranslation();

const lablesForRadio = ["Male", "Female"];
const valuesForSelectField = ["unamrried", "widower", "widow", "divorced"];
  const fields = {
[[appConstants.firstname]]: "",
[appConstants.fathersName]: "",
[appConstants.sirname]: "",
[appConstants.email]: "",
[appConstants.password]: "",
[appConstants.cpassword]: "",
[appConstants.gender]:"Female",
[appConstants.maritalStatus]:"",
  };

  const notRequiredFields=[appConstants.fathersName];
  
  const [checked, setChecked] = useState(false);

  const handleChangeForCheckBox = (event) => {
    setChecked(event.target.checked);
  };

  const {
    handleChangeForTextField,
    values,
    errors,
    hasError,
  } = useForm(validate, fields, notRequiredFields, i18n.language);

  const handleSubmit = (e) => {
    if(!checked){
      setErrorForCheckBox(true)
    }
    else{
      if(hasError){
        setErrorForCheckBox(true)
      }
      else{
        setErrorForCheckBox(false);
        e.preventDefault();
      }
      
      
    }
   
  }; 

  return (
    <FullHeight>
     
          <FormLayout>
            <CenterItem>
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
            </CenterItem >
            <CenterItem >
              <Typography component="h1" variant="h5">
              {t('nameRegister')}
              </Typography>
            </CenterItem>

            <Grid container spacing={2} sx={{mt:1}}>
  <Grid item xs={12} md={4}>
  <CustomTextField
              label={t(appConstants.firstname)}
              name={appConstants.firstname}
              id={appConstants.firstname}
              value={values.firstname}
              handleChangeTextField={handleChangeForTextField}
              helperText={errors?.firstname}
              hasError={hasError}
            />
  </Grid>
  <Grid item xs={12} md={4}>
  <CustomTextField
              label={t(appConstants.fathersName)}
              name={appConstants.fathersName}
              id={appConstants.fathersName}
              value={values.fathersName}
              handleChangeTextField={handleChangeForTextField}
              helperText={errors?.fathersName}
              hasError={hasError}
            />
  </Grid>
  <Grid item xs={12} md={4}>
  <CustomTextField
              label={t(appConstants.sirname)}
              name={appConstants.sirname}
              id={appConstants.sirname}
              value={values.sirname}
              handleChangeTextField={handleChangeForTextField}
              helperText={errors?.sirname}
              hasError={hasError}
            />
  </Grid>
  <Grid item xs={12} md={12}>
  <CustomTextField
              label={t(appConstants.mobileNumber)}
              name={appConstants.mobileNumber}
              id={appConstants.mobileNumber}
              value={values.mobileNumber}
              handleChangeTextField={handleChangeForTextField}
              helperText={errors?.mobileNumber}
              hasError={hasError}
             
            />
  </Grid>
  <Grid item xs={12} md={12}>
  <CustomTextField
              label={t(appConstants.email)}
              name={appConstants.email}
              id={appConstants.email}
              value={values.email}
              handleChangeTextField={handleChangeForTextField}
              helperText={errors?.email}
              hasError={hasError}
             
            />
  </Grid>
  <Grid item xs={12} md={12}>
  <CustomTextField
              label={t(appConstants.password)}
              name={appConstants.password}
              id={appConstants.password}
              value={values.password}
              handleChangeTextField={handleChangeForTextField}
              helperText={errors?.password}
              hasError={hasError}
             
            />
  </Grid>

  <Grid item xs={12} md={12}>
  <CustomTextField
              label={t(appConstants.cpassword)}
              name={appConstants.cpassword}
              id={appConstants.cpassword}
              value={values.cpassword}
              handleChangeTextField={handleChangeForTextField}
              helperText={errors?.cpassword}
              hasError={hasError}
             
            />
  </Grid>

  <Grid item xs={12} md={12}>
  <CustomRadioButton
  label={t(appConstants.gender)}
  name={appConstants.gender}
  value={values.gender}
  lablesForRadio={lablesForRadio}
  handleChangeRadioButton={handleChangeForTextField}
  />
  </Grid>
  <Grid item xs={12} md={12}>
<CustomSelectField
name={appConstants.maritalStatus}
label={t(appConstants.maritalStatus)}
value={values.maritalStatus}
valuesForSelectField={valuesForSelectField}
handleChangeSelectField={handleChangeForTextField}
helperText={errors?.maritalStatus}
hasError={hasError}
/>
  </Grid>
  <Grid item xs={12} md={12}>
  <Grid
  container
  direction="row"
  justifyContent="flex-start"
  alignItems="center"

  >
    <Grid item>
    <CustomCheckBox
  checked={checked}
  handleChangeForCheckBox={handleChangeForCheckBox}
  />
    </Grid>
    <Grid item>
    {t('rules')}
      </Grid>
  </Grid>
 
  </Grid>

  <Grid item  xs={12} md={12}>
    {
      hasError ? <div className="errorMessage">{t('fillAllTheFields')}</div> : // if 
      errorForCheckBox ? <div className="errorMessage">{t('ruleAgree')}</div> : //else if 
      null // else 
    }
  </Grid>
</Grid>
           
           
            <Button
              type="submit"
              fullWidth
              onClick={handleSubmit}
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
            >
              {t('signup')} 
            </Button>
        
          </FormLayout>

    </FullHeight>
  );
}
