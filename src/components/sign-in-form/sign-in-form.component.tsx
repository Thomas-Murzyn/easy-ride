import { SignInFormContainer } from "./sign-in-form.styles";
import FormField from "../form-input/form-field.component";
import { useState } from "react";

const defaultFormFields = {
  email: "",
  password: "",
};

function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleFormFields = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInFormContainer>
      <h2>Se connecter</h2>
      <FormField
        name="email"
        type="email"
        label="Email"
        required
        value={email}
        onChange={handleFormFields}
      />
      <FormField
        name="password"
        type="password"
        label="Password"
        required
        value={password}
        onChange={handleFormFields}
      />
    </SignInFormContainer>
  );
}

export default SignInForm;
