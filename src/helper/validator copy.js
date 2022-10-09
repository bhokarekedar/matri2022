import { errorsLisMh, errorsListEn } from "../constants/errorMessages";

export default function validateInfo(name, value, comparePass, langauge){
  let errors = {};
function emptyOrLessThanCertainLength(listOferrors, field, val, lengthOfField=3, isHasRegex=false, regex=""){



  if (!val) {
    errors = {
      [field]: listOferrors?.[field]
  };
  console.log("errors", errors);
    return errors;
  } else if (val?.trim()?.length < lengthOfField) {
    const lengthVal = `${field}Length`;
    errors = {
      [field]: listOferrors?.[lengthVal]
    };
    console.log("errors", errors);
    return errors;
  }
  else {
    errors.field = "";
    return errors;
  }
}
const errorList = langauge == "mh" ? errorsLisMh : errorsListEn;
  switch (name) {
    //validate email
    case "email":
      if(!/\S+@\S+\.\S+/.test(value)) {
        errors.email = errorList.validEmail;
        return errors;
    } else if(!value) {
      errors.email = errorList.email;
      return errors;
  } 
    else {
      errors.email = "";
      return errors;
    }
     //validate password
    case "password":
      return emptyOrLessThanCertainLength(errorList, "password", value, 6);
    //validate Confirm password
    case "cpassword":
      if (!value) {
      errors.cpassword = 'Password is required';
      return errors;
    } else if (value !== comparePass) {
      errors.cpassword = 'Password should be same';
      return errors;
    }
    else {
      errors.cpassword = "";
      return errors;
    }
     //validate firstname
    case "firstname":
      if (!value) {
      errors.firstname = 'firstname is required';
      return errors;
    } else if (value?.length < 3) {
      errors.firstname = 'firstname needs to be 6 characters or more';
      return errors;
    }
    else {
      errors.firstname = "";
      return errors;
    }
     //validate sirname

    case "sirname":
      if (!value) {
      errors.sirname = 'sirname is required';
      return errors;
    } else if (value?.length < 3) {
      errors.sirname = 'sirname needs to be 6 characters or more';
      return errors;
    }
    else {
      errors.sirname = "";
      return errors;
    }
  //validate maritalStatus
    case "maritalStatus":
    if (!value) {
      errors.maritalStatus = 'maritalStatus is required';
      return errors;
    } 
    else {
      errors.sirname = "";
      return errors;
    }
    default:
      break;
  }

}