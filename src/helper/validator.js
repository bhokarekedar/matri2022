import { appConstants } from "../constants/appConstants";
import { errorsLisMh, errorsListEn } from "../constants/errorMessages";
import { regex } from "../constants/regex";
import dayjs from "dayjs";
import { useEffect } from "react";

function validate(
   name,
  value,
  isRequired,
  comparePass,
  errorList,
  validations
) {
  let errors = {};
  if(value.length < validations.min){
    errors = {
      [name]: "errorList?.[name]",
    };
    return errors;
  }

  else{
    errors = {
      [name]: "",
    };
    return errors;
  }
  
}

export default validate;

// export default function Validate(
//   name,
//   value,
//   isRequired,
//   comparePass,
//   errorList,
//   validations
// ) {

//   useEffect(() => {
//    console.log("hhh")
//   }, [value])


  

//   // console.log("formAreaNew", validations);
//   // let errors = {};
//   // const lengthOfField = name === appConstants.password ? 8 : 5;
//   // const isDate = Date.parse(value);

//   // if (value.length < validations.min) {
//   //   errors = {
//   //     [name]: "errorList?.[name]",
//   //   };
//   //   //compare password
//   //   if (isDate && name === appConstants.birthDate) {
//   //     const date1 = dayjs(value);
//   //     const date2 = dayjs();
//   //     let years = date2.diff(date1, "years");
//   //     if (years < 21) {
//   //       debugger;
//   //       let match = `${name}AgeDiff`;
//   //       errors = {
//   //         [name]: errorList?.[match],
//   //       };
//   //       console.log("errors", errors)
//   //       return errors;
//   //     }
//   //   } else if (name == appConstants.cpassword && value !== comparePass) {
//   //     let match = `${name}Match`;
//   //     errors = {
//   //       [name]: errorList?.[match],
//   //     };
//   //     return errors;
//   //   }
//   //   //value is filled or not
//   //   else if (!isDate && !value?.trim()) {
//   //     errors = {
//   //       [name]: errorList?.[name],
//   //     };
//   //     console.log("errorsn", errors);
//   //     return errors;
//   //   }
//   //   //if value have some regex logic
//   //   else if (name == appConstants.email || name == appConstants.mobileNumber) {
//   //     const regexPattern =
//   //       name === appConstants.email
//   //         ? regex.regexForEmail
//   //         : name === appConstants.mobileNumber
//   //         ? regex.regexForMobileNumber
//   //         : regex.defaultRegex;

//   //     if (!regexPattern.test(value)) {
//   //       const pattern = `${name}Pattern`;
//   //       errors = {
//   //         [name]: errorList?.[pattern],
//   //       };

//   //       console.log("kkk", errors);
//   //       return errors;
//   //     } else {
//   //       errors = {
//   //         [name]: "",
//   //       };
//   //       console.log("kkk", errors);
//   //       return errors;
//   //     }
//   //   }

//   //   //value should have certain length
//   //   else if (!isDate && value?.trim()?.length < lengthOfField) {
//   //     let lengthVal = `${name}Length`;
//   //     errors = {
//   //       [name]: errorList?.[lengthVal],
//   //     };
//   //     return errors;
//   //   }

//   //   //if there is no error
//   //   else {
//   //     errors = {
//   //       [name]: "",
//   //     };
//   //     return errors;
//   //   }
//   // }
// }
