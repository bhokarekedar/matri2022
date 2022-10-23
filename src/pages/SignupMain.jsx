import React from "react";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import FormLayout from "../layout/FormLayout";
import CenterItem from "../layout/CenterItem";
import FullHeight from "../layout/FullHeight";
import { appConstants } from "../constants/appConstants";
import { labelsForCaste, labelsForResident, lablesForBirthTime, lablesForBirthTimeThree, lablesForBirthTimeTwo, lablesForHandicapped, lablesForHeight } from "../constants/LabelsForFields";
import FormArea from "../layout/FormArea";

export default function SignupMain() {
  const fields = {
    dbirthDate: null,
    dbirthTime: "",
    dbirthTime2: "",
    dbirthTime3: "",
    dheight: "",
    dproperVillage: "",
    dnickName: "",
    dbirthDate: "",
    dresident: "",
    dresidentOf: "",
    dcaste: "",
    dgotra: "",
    drelatives: "",
    dannualIncome: "",
    ddad: "",
    dmother: "",
    dhandicapped: "",
    dhandicappedDetails: "",
    deducation: "",
    deducDetails: "",
    dbusiness: "",
    dbusinessDet: "",
  };

  console.log("fields", fields);

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
      field: "CustomDateField",
      lengthForDesktop: 12,
      lengthForMobile: 12,
      name: appConstants.birthDate,
      value: fields.birthDate,
      errorVal: "birthDate",
      optionValues: "",
    },

    {
      field: "CustomSelectField",
      lengthForDesktop: 4,
      lengthForMobile: 12,
      name: appConstants.birthTime,
      value: fields.birthTime,
      errorVal: "birthTime",
      optionValues: lablesForBirthTime,
    },
    {
      field: "CustomSelectField",
      lengthForDesktop: 4,
      lengthForMobile: 12,
      name: appConstants.birthTime2,
      value: fields.birthTime2,
      errorVal: "birthTime2",
      optionValues: lablesForBirthTimeTwo,
    },
    {
      field: "CustomSelectField",
      lengthForDesktop: 4,
      lengthForMobile: 12,
      name: appConstants.birthTime3,
      value: fields.birthTime3,
      errorVal: "birthTime3",
      optionValues: lablesForBirthTimeThree,
    },
    {
      field: "CustomSelectField",
      lengthForDesktop: 12,
      lengthForMobile: 12,
      name: appConstants.height,
      value: fields.height,
      errorVal: "height",
      optionValues: lablesForHeight,
    },
    {
      field: "CustomTextField",
      lengthForDesktop: 12,
      lengthForMobile: 12,
      name: appConstants.properVillage,
      value: fields.properVillage,
      errorVal: "properVillage",
      optionValues: "",
    },
    {
      field: "CustomTextField",
      lengthForDesktop: 12,
      lengthForMobile: 12,
      name: appConstants.nickName,
      value: fields.nickName,
      errorVal: "nickName",
      optionValues: "",
    },
    {
      field: "CustomSelectField",
      lengthForDesktop: 12,
      lengthForMobile: 12,
      name: appConstants.resident,
      value: fields.resident,
      errorVal: "resident",
      optionValues: labelsForResident,
    },
    {
      field: "CustomTextField",
      lengthForDesktop: 12,
      lengthForMobile: 12,
      name: appConstants.residentOf,
      value: fields.residentOf,
      errorVal: "residentOf",
      optionValues: "",
    },
    {
      field: "CustomSelectField",
      lengthForDesktop: 12,
      lengthForMobile: 12,
      name: appConstants.caste,
      value: fields.caste,
      errorVal: "caste",
      optionValues: labelsForCaste,
    },
    {
      field: "CustomTextField",
      lengthForDesktop: 12,
      lengthForMobile: 12,
      name: appConstants.gotra,
      value: fields.gotra,
      errorVal: "gotra",
      optionValues: "",
    },
    {
      field: "CustomTextField",
      lengthForDesktop: 12,
      lengthForMobile: 12,
      name: appConstants.relatives,
      value: fields.relatives,
      errorVal: "relatives",
      optionValues: "",
    },
    {
      field: "CustomSelectField",
      lengthForDesktop: 12,
      lengthForMobile: 12,
      name: appConstants.annualIncome,
      value: fields.annualIncome,
      errorVal: "annualIncome",
      optionValues: labelsForCaste,
    },
    {
      field: "CustomRadioButton",
      lengthForDesktop: 12,
      lengthForMobile: 12,
      name: appConstants.handicapped,
      value: fields.handicapped,
      errorVal: "handicapped",
      optionValues: lablesForHandicapped,
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
          fields={fields}
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
