import { useState } from "react";
import { notification } from "antd";
import { IFormValues } from "../../components/ContactForm/types";

const initialValues: IFormValues = {
  name: "",
  email: "",
  message: "",
  challenges: [],
  otherChallenge: "",
};

export const useForm = (validate: { (values: IFormValues): Partial<IFormValues> }) => {
  const [formState, setFormState] = useState<{
    values: IFormValues;
    errors: Partial<IFormValues>;
  }>({
    values: { ...initialValues },
    errors: { ...initialValues },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = formState.values;
    const errors = validate(values);
    setFormState((prevState) => ({ ...prevState, errors }));
    return errors;
  };

  const handleChange = (
    name: string,
    value: string | string[]
  ) => {
    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value,
      },
      errors: {
        ...prevState.errors,
        [name]: "",
      },
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values: formState.values,
    errors: formState.errors,
  };
};
