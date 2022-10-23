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
import CustomDateField from "../customFields/CustomDateField";



export default function SignupMain() {
  const [isDisabled, setIsDisabled] = useState(true);
  const { t, i18n } = useTranslation();
  const lablesForBirthTime = [
    t("emorning"),
    t("morning"),
    t("afternoon"),
    t("evening"),
    t("night"),
  ];
  const lablesForBirthTimeTwo = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];
  const lablesForBirthTimeThree = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "00",
  ];
  const valuesForHeight = [
    "4′00″",
    "4′01″",
    "4′02″",
    "4′03″",
    "4′04″",
    "4′05″",
    "4′06″",
    "4′07",
    "4′08″",
    "4′09″",
    "4′10″",
    "4′11″",
    "5′00″",
    "5′01″",
    "5′02″",
    "5′03″",
    "5′04″",
    "5′05″",
    "5′06″",
    "5′07″",
    "5′08″",
    "5′09″",
    "5′10″",
    "5′11″",
    "6′01″",
    "6′01″",
    "6′02″",
    "6′03″",
    "6′04″",
    "6′05″",
    "6′06″",
    "6′07″",
    "6′08″",
    "6′09″",
    "6′10″",
    "6′11″",
    "7′00″",
  ];
  const valuesForResident = [
    t("pune"),
    t("raigad"),
    t("aurangabad"),
    t("bid"),
    t("bhandara"),
    t("buldhana"),
    t("chandrapur"),
    t("dhule"),
    t("gadchiroli"),
    t("gondiya"),
    t("hingoli"),
    t("jalhgao"),
    t("jalna"),
    t("kolhapur"),
    t("latur"),
    t("ahmadnagar"),
    t("nagpur"),
    t("nanded"),
    t("akola"),
    t("amravati"),
    t("nandurbar"),
    t("nashik"),
    t("usmanabad"),
    t("parbhani"),
    t("ratnagiri"),
    t("sangali"),
    t("xxx"),
    t("sindhudurg"),
    t("solapur"),
    t("thane"),
    t("vardha"),
    t("vashim"),
    t("yawatmalh"),
    t("palghar"),
    t("anya"),
  ];
const valuesForCaste = [
  "राज भोई",
  "झींगा भोई",
  "परदेशी भोई",
  "कहार भोई",
  "गोड़िया कहार भोई",
  "धुरिया कहार भोई",
  "माझी कहार भोई", 
  "किरत भोई",
  "मच्छुआ भोई",
  "माझी भोई",
  "जलिया भोई",
  "केवट भोई",
  "ढिवर भोई",
  "धीवर भोई",
  "धीमर भोई",
  "पालेवर भोई",
  "नावाडी भोई",
  "मच्छेद्र भोई",
  "मल्हार भोई",
  "माल्हावा भोई",
  "बोई(भुजारी)",
  "गाढव भोई",
  "खाडी भोई",
  "खारे भोई",
  "ढेवरा भोई"
]
  const errorList = {};
  const fields = {
    [appConstants.birthDate]: "",
    [appConstants.birthTime]: "",
    [appConstants.birthTime2]: "",
    [appConstants.birthTime3]: "",
    [appConstants.height]: "",
    [appConstants.properVillage]: "",
    [appConstants.nickName]: "",
    [appConstants.birthDate]: "",
    [appConstants.resident]: "",
    [appConstants.residentOf]: "",
    [appConstants.caste]: "",
    [appConstants.gotra]: "",
    [appConstants.relatives]: "",
    [appConstants.annualIncome]: "",
    [appConstants.dad]: "",
    [appConstants.mother]: "",
    [appConstants.handicapped]: "",
    [appConstants.handicappedDetails]: "",
    [appConstants.education]: "",
    [appConstants.educDetails]: "",
    [appConstants.business]: "",
    [appConstants.businessDet]: "",
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
        if (error.includes("AgeDiff") && `${field}AgeDiff` === error) {
          errorList[error] = errorsArray[error];
        }
        if (error === field) {
          errorList[field] = errorsArray[error];
        }
      }
    }
  }, [errorList, errorsArray]);

  const notRequiredFields = [
    appConstants.birthTime,
    appConstants.birthTime2,
    appConstants.birthTime3,
    appConstants.height,
    appConstants.nickName,
    appConstants.residentOf,
    appConstants.handicappedDetails,
  ];
  const [checked, setChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const dateFields = [appConstants.birthDate]
  
  const { handleChangeForTextField, values, errors, hasError, errorsArea } =
    useForm(validate, fields, notRequiredFields, errorList, dateFields);
console.log("nnn", "values", values, "errors", errors, "hasError", hasError, "errorsArea",  errorsArea )

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
  field:"CustomDateField",
  length:"12",
  name:appConstants.properVillage,
  values:"",
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
            {t("nameRegister")}
          </Typography>
        </CenterItem>

        <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={12} md={12}>
        <CustomDateField
        label={t(appConstants.birthDate)}
        name={appConstants.birthDate}
        id={appConstants.birthDate}
        value={values.birthDate}
        handleChangeTextField={(e)=>{ handleChangeForTextField(e, appConstants.birthDate) }}
        helperText={errors?.birthDate}
        hasError={hasError}
        />
           </Grid>
          <Grid item xs={12} md={4}>
          <CustomSelectField
              name={appConstants.birthTime}
              label={t(appConstants.birthTime)}
              value={values.birthTime}
              helperText={errors?.birthTime}
              valuesForSelectField={lablesForBirthTime}
              handleChangeSelectField={handleChangeForTextField}
              hasError={hasError}
            />
          </Grid>
          <Grid item xs={12} md={4}>
          <CustomSelectField
              name={appConstants.birthTime2}
              label={t(appConstants.birthTime2)}
              value={values.birthTime2}
              helperText={errors?.birthTime2}
              valuesForSelectField={lablesForBirthTimeTwo}
              handleChangeSelectField={handleChangeForTextField}
              hasError={hasError}
            />
          </Grid>
          <Grid item xs={12} md={4}>
          <CustomSelectField
              name={appConstants.birthTime3}
              label={t(appConstants.birthTime3)}
              value={values.birthTime3}
              helperText={errors?.birthTime3}
              valuesForSelectField={lablesForBirthTimeThree}
              handleChangeSelectField={handleChangeForTextField}
              hasError={hasError}
            />
          </Grid>
          
          <Grid item xs={12} md={12}>
          <CustomSelectField
              name={appConstants.height}
              label={t(appConstants.height)}
              value={values.height}
              helperText={errors?.height}
              valuesForSelectField={valuesForHeight}
              handleChangeSelectField={handleChangeForTextField}
              hasError={hasError}
            />
          </Grid>
          <Grid item xs={12} md={12}>
          <CustomTextField
              label={t(appConstants.properVillage)}
              name={appConstants.properVillage}
              id={appConstants.properVillage}
              value={values.properVillage}
              handleChangeTextField={handleChangeForTextField}
              helperText={errors?.properVillage}
              hasError={hasError}
            />
          </Grid>

          <Grid item xs={12} md={12}>
          <CustomTextField
              label={t(appConstants.nickName)}
              name={appConstants.nickName}
              id={appConstants.nickName}
              value={values.nickName}
              handleChangeTextField={handleChangeForTextField}
              helperText={errors?.nickName}
              hasError={hasError}
            />
          </Grid>

          <Grid item xs={12} md={12}>
          <CustomSelectField
              name={appConstants.resident}
              label={t(appConstants.resident)}
              value={values.resident}
              helperText={errors?.resident}
              valuesForSelectField={valuesForResident}
              handleChangeSelectField={handleChangeForTextField}
              hasError={hasError}
            />
          </Grid>
          <Grid item xs={12} md={12}>
          <CustomTextField
              label={t(appConstants.residentOf)}
              name={appConstants.residentOf}
              id={appConstants.residentOf}
              value={values.residentOf}
              handleChangeTextField={handleChangeForTextField}
              helperText={errors?.residentOf}
              hasError={hasError}
            />
          </Grid>
          <Grid item xs={12} md={12}>
          <CustomSelectField
              name={appConstants.caste}
              label={t(appConstants.caste)}
              value={values.caste}
              helperText={errors?.caste}
              valuesForSelectField={valuesForCaste}
              handleChangeSelectField={handleChangeForTextField}
              hasError={hasError}
            />
           </Grid>
           <Grid item xs={12} md={12}>
           <CustomTextField
              label={t(appConstants.gotra)}
              name={appConstants.gotra}
              id={appConstants.gotra}
              value={values.gotra}
              handleChangeTextField={handleChangeForTextField}
              helperText={errors?.gotra}
              hasError={hasError}
            />
           </Grid>
           <Grid item xs={12} md={12}>
           <CustomTextField
              label={t(appConstants.relatives)}
              name={appConstants.relatives}
              id={appConstants.relatives}
              value={values.relatives}
              handleChangeTextField={handleChangeForTextField}
              helperText={errors?.relatives}
              hasError={hasError}
            />
           </Grid>
           <Grid item xs={12} md={12}>
           <CustomSelectField
              name={appConstants.annualIncome}
              label={t(appConstants.annualIncome)}
              value={values.annualIncome}
              helperText={errors?.annualIncome}
              valuesForSelectField={valuesForCaste}
              handleChangeSelectField={handleChangeForTextField}
              hasError={hasError}
            />
           </Grid>
           <Grid item xs={12} md={6}>
           <CustomSelectField
              name={appConstants.dad}
              label={t(appConstants.dad)}
              value={values.dad}
              helperText={errors?.dad}
              valuesForSelectField={valuesForCaste}
              handleChangeSelectField={handleChangeForTextField}
              hasError={hasError}
            />
          </Grid>
          <Grid item xs={12} md={6}>
          <CustomSelectField
              name={appConstants.mother}
              label={t(appConstants.mother)}
              value={values.mother}
              helperText={errors?.mother}
              valuesForSelectField={valuesForCaste}
              handleChangeSelectField={handleChangeForTextField}
              hasError={hasError}
            />
          </Grid>
          <Grid item xs={12} md={6}>
          <CustomSelectField
              name={appConstants.mother}
              label={t(appConstants.mother)}
              value={values.mother}
              helperText={errors?.mother}
              valuesForSelectField={valuesForCaste}
              handleChangeSelectField={handleChangeForTextField}
              hasError={hasError}
            />
           </Grid>
           <Grid item xs={12} md={6}>
           <CustomSelectField
              name={appConstants.mother}
              label={t(appConstants.mother)}
              value={values.mother}
              helperText={errors?.mother}
              valuesForSelectField={valuesForCaste}
              handleChangeSelectField={handleChangeForTextField}
              hasError={hasError}
            />
           </Grid>
           <Grid item xs={12} md={6}>
          <CustomSelectField
              name={appConstants.mother}
              label={t(appConstants.mother)}
              value={values.mother}
              helperText={errors?.mother}
              valuesForSelectField={valuesForCaste}
              handleChangeSelectField={handleChangeForTextField}
              hasError={hasError}
            />
           </Grid>
           <Grid item xs={12} md={6}>
           <CustomSelectField
              name={appConstants.mother}
              label={t(appConstants.mother)}
              value={values.mother}
              helperText={errors?.mother}
              valuesForSelectField={valuesForCaste}
              handleChangeSelectField={handleChangeForTextField}
              hasError={hasError}
            />
           </Grid>
           <Grid item xs={12} md={12}>
           
           </Grid>
           <Grid item xs={12} md={12}>
            
           </Grid>
           
         

         
        </Grid>

        {/* <Button
          type="submit"
          fullWidth
          disabled={isDisabled}
          onClick={handleSubmit}
          variant="contained"
          sx={{ mt: 2, mb: 2 }}
        >
          {t("signup")}
        </Button> */}
      </FormLayout>
    </FullHeight>
  );
}
