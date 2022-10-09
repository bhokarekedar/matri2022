import { useState, useEffect } from "react";

const useForm = (validate, fields, notRequiredFields, langauge) => {
  const [values, setValues] = useState(fields);
  const [isRequired, setIsRequired] = useState(true);
  const [errors, setErrors] = useState({});
  const [errorField, setErrorField] = useState("");
  const [hasError, setHasError] = useState(false);
  // const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChangeForTextField = async (e) => {
    const { name, value } = e.target;
    if(notRequiredFields?.includes(name)){
      setIsRequired(false);
    }
    setIsRequired(true);
    setErrorField(name);
    await setValues({
      ...values,
      [name]: value,
    });
    await setErrors(validate(name, value, isRequired, values.password, langauge));
  };


  useEffect(() => {
    // if (!hasError && isSubmitting) {
    //   callback();
    // }
    if (errors?.[errorField] !== "") {
      setHasError(true);
    }
    if (errors?.[errorField] === "") {
      setHasError(false);
    }
  }, [errors]);


  return { handleChangeForTextField, values, errors, hasError };
};

export default useForm;
