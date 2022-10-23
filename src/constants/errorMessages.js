import {appConstants} from "./appConstants";

export const errorsLisMh = {
    [appConstants.email]:"इमेल आयडी आवश्यक आहे",
    [appConstants.emailPattern]:"ईमेल हा वैध ईमेल पत्ता असावा",

    [appConstants.firstname]:"पहिले नाव आवश्यक आहे",
    [appConstants.firstnameLength]:"कृपया योग्य माहिती नमूद करा",

    [appConstants.sirname]:"आडनाव आवश्यक आहे",
    [appConstants.sirnameLength]:"कृपया योग्य माहिती नमूद करा",

    [appConstants.mobileNumber]:"मोबाईल नंबर आवश्यक आहे",
    [appConstants.mobileNumberPattern]:"मोबाईल नंबर हा दहा अंकी आवश्यक आहे",

    [appConstants.password]:"पासवर्ड आवश्यक आहे",
    [appConstants.passwordLength]:"पासवर्ड हा कमीत कमी आठ अक्षरी असावा ",
    [appConstants.cpasswordMatch]:"पासवर्ड पुष्टीकरण जुळत नाही.",

    [appConstants.maritalStatus]:"वैवाहिक दर्जा आवश्यक आहे",

    [appConstants.birthDate]:"datee",
    [appConstants.birthDateAgeDiff]:"ssssssss",
  }

  export const errorsListEn = {
    [appConstants.email]:"Email id is required",
    [appConstants.emailPattern]:"इमेल आयडी आवश्यक आहे",
    [appConstants.firstname]:"First name is required",
    [appConstants.firstnameLength]:"पहिले नाव आवश्यक आहे",
    [appConstants.sirname]:"Sirnane is required",
    [appConstants.sirnameLength]:"आडनाव आवश्यक आहे",
    [appConstants.mobileNumber]:"Mobile Number is required",
    [appConstants.mobileNumberPattern]:"मोबाईल नंबर  6 anki आवश्यक आहे",
    [appConstants.password]:"Password is required",
    [appConstants.passwordLength]:"Password 6 chara",
    [appConstants.cpasswordMatch]:"The password confirmation does not match.",
    [appConstants.maritalStatus]:"Marital Status is required",
    
  }