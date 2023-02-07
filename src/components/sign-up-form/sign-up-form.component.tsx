import { SignUpFormContainer } from "./sign-up-form.styles";
import FormField from "../form-input/form-field.component";
import { useState } from "react";
import { fetchUser } from "../../app/features/user/user.slice";

import { useAppDispatch } from "../../app/hooks/hooks";
import Button, { ButtonType } from "../button/button.component";

const defaultFormFields = {
  email: "",
  displayName: "",
  password: "",
  confirmPassword: "",
};

function SignUpForm() {
  const dispatch = useAppDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, displayName, password, confirmPassword } = formFields;

  const handleFormFields = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(fetchUser({ email, password, signIn: false, displayName }));
  };

  return (
    <SignUpFormContainer onSubmit={handleSubmit}>
      <h2>Créer un compte</h2>
      <FormField
        name="displayName"
        type="text"
        label="Name"
        required
        value={displayName}
        onChange={handleFormFields}
      />
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
      <FormField
        name="confirmPassword"
        type="password"
        label="Confirm password"
        required
        value={confirmPassword}
        onChange={handleFormFields}
      />
      <Button type="submit" buttonStyle={ButtonType.ButtonSubmit}>
        Valider
      </Button>
    </SignUpFormContainer>
  );
}

export default SignUpForm;
