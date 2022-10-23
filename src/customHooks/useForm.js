import { useState, useEffect } from "react";

const useForm = (
  validate,
  fields,
  notRequiredFields,
  errorList,
) => {
  const [values, setValues] = useState(fields);
  const [isRequired, setIsRequired] = useState(true);
  const [errors, setErrors] = useState({});
  const [errorField, setErrorField] = useState("");
  const [errorsArea, setErrorsArea] = useState(errorList);
  const [hasError, setHasError] = useState(false);


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
    console.log("ddd", e.target);

    if (notRequiredFields?.includes(name)) {
      setIsRequired(false);
    }
    setIsRequired(true);
    setErrorField(name);

    await setValues({
      ...fields,
      [name]: value,
    });
    const errs = await validate(
      name,
      value,
      isRequired,
      fields.password,
      errorList
    );
    setErrors(errs);

    console.log("errorList", errorsArea);
  };

  useEffect(() => {
    // if (!hasError && isSubmitting) {
    //   callback();
    // }

    if (errors?.[errorField] !== "") {
      setHasError(true);
    }
    if (!errors?.[errorField]) {
      delete errorsArea[errorField];
      delete errorsArea[`${errorField}Length`];
      delete errorsArea[`${errorField}Pattern`];
      delete errorsArea[`${errorField}Match`];
      delete errorsArea[`${errorField}AgeDiff`];
      setErrorsArea(errorsArea);
      setHasError(false);
    }
  }, [errors, errorsArea]);

  return { handleChange, values, errors, hasError, errorsArea };
};

export default useForm;
