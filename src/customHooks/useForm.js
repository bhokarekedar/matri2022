import { useState, useEffect } from "react";
import validate from "../helper/validator";

const useForm = (fields, notRequiredFields, errorList, formArea) => {
  const [values, setValues] = useState(fields);
  const [isRequired, setIsRequired] = useState(true);
  const [errorsList, setErrorsList] = useState({});
  const [currentError, setCurrentError] = useState("");
  const [hasError, setHasError] = useState(false);
  let errors = {};

  console.log("formAreaa", formArea);
  useEffect(() => {
    formArea.map((val) => {
      const validation = val.validations;

      if (validation.isRequired) {
        let req = [val.name];
        req = `${req}Required`
        errors = {
          ...errors,
          [req]: "required",
        };
        setErrorsList((errorsList) => ({
          ...errorsList,
          ...errors
        }));
      }
      if (validation.min) {
        let min = [val.name];
        min = `${min}Minimum`
        errors = {
          ...errors,
          [min]: "minimum",
        };
        setErrorsList((errorsList) => ({
          ...errorsList,
          ...errors
        }));
      }
      if (validation.max) {
        let max = [val.name];
        max = `${max}Maximum`
        errors = {
          ...errors,
          [max]: "max",
        };
        setErrorsList((errorsList) => ({
          ...errorsList,
          ...errors
        }));
      }
      if (validation.match) {
        let match = [val.name];
        match = `${match}Match`
        errors = {
          ...errors,
          [match]: " MAXIMUM",
        };
        setErrorsList((errorsList) => ({
          ...errorsList,
          ...errors
        }));
      }
      if (validation.pattern) {
        let pattern = [val.name];
        pattern = `${pattern}Pattern`
        errors = {
          ...errors,
          [pattern]: "pattern",
        };
        setErrorsList((errorsList) => ({
          ...errorsList,
          ...errors
        }));
      } else {
        errors = {
          ...errors,
          [val.name]: "",
        };
        setErrorsList((errorsList) => ({
          ...errorsList,
          ...errors
        }));
      }
    });
  }, [formArea]);

  setTimeout(() => {
    console.log("errorsList", errorsList);
  }, 2000);

  const handleChange = async (e, nameForDate = "") => {
    let name = "";
    let value = "";

    if (e.target === undefined) {
      name = nameForDate;
      value = e;
    } else {
      name = e.target.name;
      value = e.target.value;
    }

    if (notRequiredFields?.includes(name)) {
      setIsRequired(false);
    }
    setIsRequired(true);
    //setErrorField(name);

    await setValues({
      ...values,
      [name]: value,
    });

    let validations = formArea.filter((val) => val.name === name);
    if (validations) {
      validations = validations[0].validations;
    }
    const errs = await validate(
      name,
      value,
      isRequired,
      fields.password,
      errorList,
      validations
    );
    setCurrentError(errs);

    console.log("errorList", errors);
  };

  // useEffect(() => {
  //   if (errors?.[errorField] !== "") {
  //     setHasError(true);
  //   }
  //   if (!errors?.[errorField]) {
  //     delete errorsArea[errorField];
  //     delete errorsArea[`${errorField}Length`];
  //     delete errorsArea[`${errorField}Pattern`];
  //     delete errorsArea[`${errorField}Match`];
  //     delete errorsArea[`${errorField}AgeDiff`];
  //     setErrorsArea(errorsArea);
  //     setHasError(false);
  //   }
  // }, [errors, errorsArea]);

  return {
    handleChange,
    values,
    errors,
    hasError,
    // errorsArea
  };
};

export default useForm;
