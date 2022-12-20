import React from "react";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import FormLayout from "../layout/FormLayout";
import CenterItem from "../layout/CenterItem";
import FullHeight from "../layout/FullHeight";
import { appConstants } from "../constants/appConstants";
import {
  labelsForCaste,
  labelsForResident,
  lablesForBirthTime,
  lablesForBirthTimeThree,
  lablesForBirthTimeTwo,
  lablesForHandicapped,
  lablesForHeight,
} from "../constants/LabelsForFields";
import FormArea from "../layout/FormArea";

export default function SignupMain() {
  const initialValues = {
    [appConstants.birthDate]: "",
    [appConstants.birthTime]: "",
    [appConstants.birthTime2]: "",
    [appConstants.birthTime3]: "",
    [appConstants.height]: "",
    [appConstants.properVillage]: "",
    [appConstants.nickName]: "",
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

  const notRequiredFields = [
    appConstants.birthTime,
    appConstants.birthTime2,
    appConstants.birthTime3,
    appConstants.height,
    appConstants.nickName,
    appConstants.residentOf,
    appConstants.handicappedDetails,
  ];

  const formArea = [
    {
      field: appConstants.CustomDateField,
      lengthForDesktop: 12,
      lengthForMobile: 12,
      name: appConstants.birthDate,
      errorVal: appConstants.birthDate,
      validations: {},
      optionValues: "",
      
      // validations:{
      //   [appConstants.isRequired]:true,
      //   [appConstants.min]:3,
      //   [appConstants.max]:6,
      //   [appConstants.pattern]:"",
      //   [appConstants.match]:"",
      // },
    },
    {
      field: appConstants.CustomSelectField,
      lengthForDesktop: 4,
      lengthForMobile: 12,
      name: appConstants.birthTime,
      errorVal: appConstants.birthTime,
      validations: {},
      optionValues: lablesForBirthTime,
      
      // validations:{
      //   [appConstants.isRequired]:true,
      //   [appConstants.min]:3,
      //   [appConstants.max]:6,
      //   [appConstants.pattern]:"",
      //   [appConstants.match]:"",
      // },
    },
    {
      field: appConstants.CustomSelectField,
      lengthForDesktop: 4,
      lengthForMobile: 12,
      name: appConstants.birthTime2,
      errorVal: appConstants.birthTime2,
      optionValues: lablesForBirthTimeTwo,
      validations: {},
    },
    {
      field: appConstants.CustomSelectField,
      lengthForDesktop: 4,
      lengthForMobile: 12,
      name: appConstants.birthTime3,
      errorVal: appConstants.birthTime3,
      optionValues: lablesForBirthTimeThree,
      validations: {},
    },
    {
      field: appConstants.CustomSelectField,
      lengthForDesktop: 12,
      lengthForMobile: 12,
      name: appConstants.height,
      errorVal: appConstants.height,
      optionValues: lablesForHeight,
      validations: {},
    },
    {
      field: appConstants.CustomTextField,
      lengthForDesktop: 12,
      lengthForMobile: 12,
      name: appConstants.properVillage,
      errorVal: appConstants.properVillage,
      validations:{
        [appConstants.isRequired]:true,
        [appConstants.min]:3,
        [appConstants.max]:6,
        [appConstants.pattern]:"",
        [appConstants.match]:"",
      },
      optionValues: "",
    },
    {
      field: appConstants.CustomTextField,
      lengthForDesktop: 12,
      lengthForMobile: 12,
      name: appConstants.nickName,
      errorVal: appConstants.nickName,
      validations: {},
      optionValues: "",
    },
    {
      field: appConstants.CustomSelectField,
      lengthForDesktop: 12,
      lengthForMobile: 12,
      name: appConstants.resident,
      errorVal: appConstants.resident,
      validations: {},
      optionValues: labelsForResident,
    },
    {
      field: appConstants.CustomTextField,
      lengthForDesktop: 12,
      lengthForMobile: 12,
      name: appConstants.residentOf,
      errorVal: appConstants.residentOf,
      validations: {},
      optionValues: "",
    },
    {
      field: appConstants.CustomSelectField,
      lengthForDesktop: 12,
      lengthForMobile: 12,
      name: appConstants.caste,
      errorVal: appConstants.caste,
      validations: {},
      optionValues: labelsForCaste,
    },
    {
      field: appConstants.CustomTextField,
      lengthForDesktop: 12,
      lengthForMobile: 12,
      name: appConstants.gotra,
      errorVal: appConstants.gotra,
      validations: {},
      optionValues: "",
    },
    {
      field: appConstants.CustomTextField,
      lengthForDesktop: 12,
      lengthForMobile: 12,
      name: appConstants.relatives,
      errorVal: appConstants.relatives,
      validations: {},
      optionValues: "",
    },
    {
      field: appConstants.CustomSelectField,
      lengthForDesktop: 12,
      lengthForMobile: 12,
      name: appConstants.annualIncome,
      errorVal: appConstants.annualIncome,
      validations: {},
      optionValues: labelsForCaste,
    },
    {
      field: appConstants.CustomRadioButton,
      lengthForDesktop: 12,
      lengthForMobile: 12,
      name: appConstants.handicapped,
      errorVal: appConstants.handicapped,
      validations: {},
      optionValues: lablesForHandicapped,
    },
    {
      field: appConstants.SubmitButton,
      lengthForDesktop: 12,
      lengthForMobile: 12,
      name: appConstants.SubmitButton,
      errorVal: "",
      validations: {},
      optionValues: "",
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
            {/* {t("nameRegister")} */}"nameRegister"
          </Typography>
        </CenterItem>

        <FormArea
          formArea={formArea}
          fields={initialValues}
          notRequiredFields={notRequiredFields}
        />
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
