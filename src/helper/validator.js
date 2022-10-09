import { appConstants } from "../constants/appConstants";
import { errorsLisMh, errorsListEn } from "../constants/errorMessages";
import { regex } from "../constants/regex";

export default function validateInfo(
  name,
  value,
  isRequired,
  comparePass,
  langauge
) {
  let errors = {};
  const errorList = langauge == "mh" ? errorsLisMh : errorsListEn;
  const lengthOfField = name === appConstants.password ? 8 : 3;
  if (isRequired) {
    //value is filled or not
    if (!value?.trim()) {
      errors = {
        [name]: errorList?.[name],
      };
      return errors;
    }
    //if value have some regex logic
    else if (name == appConstants.email || name == appConstants.mobileNumber) {
      const regexPattern =
        name === appConstants.email
          ? regex.regexForEmail
          : name === appConstants.mobileNumber
          ? regex.regexForMobileNumber
          : regex.defaultRegex;
      if (!regexPattern.test(value)) {
        const pattern = `${name}Pattern`;
        errors = {
          [name]: errorList?.[pattern],
        };
        console.log(errors);
        return errors;
      }
    }

    //value should have certain length
    else if (value?.trim()?.length < lengthOfField) {
      const lengthVal = `${name}Length`;
      errors = {
        [name]: errorList?.[lengthVal],
      };
      return errors;
    }

    //compare password
    else if (value !== comparePass) {
      const match = `${name}Match`;
      errors = {
        [name]: errorList?.[match],
      };
      return errors;
    }

    //if there is no error
    else {
      errors = {
        [name]: "",
      };
      return errors;
    }
  }
}

//   switch (name) {
//     //validate email
//     case "email":
//       if(!/\S+@\S+\.\S+/.test(value)) {
//         errors.email = errorList.validEmail;
//         return errors;
//     } else if(!value) {
//       errors.email = errorList.email;
//       return errors;
//   }
//     else {
//       errors.email = "";
//       return errors;
//     }
//      //validate password
//     case "password":
//       return emptyOrLessThanCertainLength(errorList, "password", value, 6);
//     //validate Confirm password
//     case "cpassword":
//       if (!value) {
//       errors.cpassword = 'Password is required';
//       return errors;
//     } else if (value !== comparePass) {
//       errors.cpassword = 'Password should be same';
//       return errors;
//     }
//     else {
//       errors.cpassword = "";
//       return errors;
//     }
//      //validate firstname
//     case "firstname":
//       if (!value) {
//       errors.firstname = 'firstname is required';
//       return errors;
//     } else if (value?.length < 3) {
//       errors.firstname = 'firstname needs to be 6 characters or more';
//       return errors;
//     }
//     else {
//       errors.firstname = "";
//       return errors;
//     }
//      //validate sirname

//     case "sirname":
//       if (!value) {
//       errors.sirname = 'sirname is required';
//       return errors;
//     } else if (value?.length < 3) {
//       errors.sirname = 'sirname needs to be 6 characters or more';
//       return errors;
//     }
//     else {
//       errors.sirname = "";
//       return errors;
//     }
//   //validate maritalStatus
//     case "maritalStatus":
//     if (!value) {
//       errors.maritalStatus = 'maritalStatus is required';
//       return errors;
//     }
//     else {
//       errors.sirname = "";
//       return errors;
//     }
//     default:
//       break;
//   }

// }
