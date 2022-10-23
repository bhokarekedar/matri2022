import { appConstants } from "../constants/appConstants";
import { errorsLisMh, errorsListEn } from "../constants/errorMessages";
import { regex } from "../constants/regex";

export default function validaters(values, langauge) {
  let errs = {};
  const errorList = langauge == "mh" ? errorsLisMh : errorsListEn;
  const lengthOfField = values?.passowrd ? 8 : 3;
let hasErr = true;
  for (const value in values) {
    console.log("hhh", `${value}: ${values[value]}`);

    // Trim and Required Fields
    if ([appConstants.firstname, appConstants.sirname].includes(value)) {
      if (values[value].trim().length < 5) {
        errs[value] = errorList?.[value];
        console.log("errs", errs)
      }
    }
  }
  return {errs, hasErr};

  // if (!values.username.trim()) {
  //   errors.username = 'Username required';
  // }

  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  // if (!values.email) {
  //   errors.email = 'Email required';
  // } else if (!/\S+@\S+\.\S+/.test(values.email)) {
  //   errors.email = 'Email address is invalid';
  // }
  // if (!values.password) {
  //   errors.password = 'Password is required';
  // } else if (values.password.length < 6) {
  //   errors.password = 'Password needs to be 6 characters or more';
  // }

  // if (!values.password2) {
  //   errors.password2 = 'Password is required';
  // } else if (values.password2 !== values.password) {
  //   errors.password2 = 'Passwords do not match';
  // }

  //return errors;
}

// export default function validateInfo(values) {
//     console.log("values", values)
//     let errors = {};

//     if (!values.username.trim()) {
//       errors.username = 'Username required';
//     }
//     else if (!/^[A-Za-z]+/.test(values.name.trim())) {
//       errors.name = 'Enter a valid name';
//     }

//     if (!values.email) {
//       errors.email = 'Email required';
//     } else if (!/\S+@\S+\.\S+/.test(values.email)) {
//       errors.email = 'Email address is invalid';
//     }
//     if (!values.password) {
//       errors.password = 'Password is required';
//     } else if (values.password.length < 6) {
//       errors.password = 'Password needs to be 6 characters or more';
//     }

//     if (!values.password2) {
//       errors.password2 = 'Password is required';
//     } else if (values.password2 !== values.password) {
//       errors.password2 = 'Passwords do not match';
//     }

//     return errors;
//   }
