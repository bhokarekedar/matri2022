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

export default function Login() {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  function submitForm() {
    setIsSubmitted(true);
  }
  const fields = {
    email: "",
    password: "",
  };
  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    hasError,
    fieldHasError,
  } = useForm(submitForm, validate, fields);

  return (
    <FullHeight>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
       // sx={{ height: "90vh" }}
      >
        <Grid item>
          <FormLayout>
            <CenterItem>
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
            </CenterItem>
            <CenterItem>
              <Typography component="h1" variant="h5">
              {t('nameTitle')}
              
              </Typography>
            </CenterItem>

            <CustomTextField
              label={t('email')}
              name={"email"}
              id={"email"}
              value={values.email}
              handleChangeTextField={handleChange}
              helperText={errors?.email}
              hasError={hasError}
              fieldHasError={fieldHasError}
            />

            <CustomTextField
              label={t('password')}
              name={"password"}
              id={"password"}
              value={values.password}
              handleChangeTextField={handleChange}
              helperText={errors.password}
              hasError={hasError}
              fieldHasError={fieldHasError}
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={t('remember')} 
            />
            <Button
              type="submit"
              fullWidth
              onClick={handleSubmit}
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
            >
              {t('login')} 
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                {t('forgotPassword')}  
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                {t('DontHaveAccount')} 
                </Link>
              </Grid>
            </Grid>
          </FormLayout>
        </Grid>
        <Grid item>
          <Copyright sx={{ mt: 2, mb: 2 }} />
        </Grid>
      </Grid>
    </FullHeight>
  );
}
