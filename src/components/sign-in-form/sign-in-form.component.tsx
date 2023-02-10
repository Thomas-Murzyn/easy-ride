import { SignInFormContainer } from "./sign-in-form.styles";
import FormField from "../form-input/form-field.component";
import { useState } from "react";
import Button, { ButtonType } from "../button/button.component";
import { fetchUser } from "../../app/features/user/user.slice";

import { useAppDispatch } from "../../app/hooks/hooks";

const defaultFormFields = {
  email: "",
  password: "",
};

function SignInForm() {
  const dispatch = useAppDispatch();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  const handleFormFields = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(fetchUser({ email, password, signIn: true }));
    resetFormField();
  };

  return (
    <SignInFormContainer onSubmit={handleSubmit}>
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

      <Button buttonStyle={ButtonType.ButtonSubmit} type="submit">
        Se connecter
      </Button>
    </SignInFormContainer>
  );
}

export default SignInForm;
