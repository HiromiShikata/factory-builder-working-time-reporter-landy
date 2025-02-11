import { IFormValues } from "../../components/ContactForm/types";

const validate = (values: IFormValues): Partial<IFormValues> => {
  const errors: Partial<IFormValues> = {};

  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Invalid email format";
  }

  if (!values.message) {
    errors.message = "Message is required";
  }

  if (!values.challenges || values.challenges.length === 0) {
    errors.challenges = ["Please select at least one challenge"];
  }

  return errors;
};

export default validate;
