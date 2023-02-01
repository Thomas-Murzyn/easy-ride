import { SignUpFormContainer } from "./sign-up-form.styles";
import FormField from "../form-input/form-field.component";
import { useState } from "react";
import { createUserWithEmail } from "../../utils/firebase/firebase.utils";
import Button, { ButtonType } from "../button/button.component";

const defaultFormFields = {
  email: "",
  displayName: "",
  password: "",
  confirmPassword: "",
};

function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, displayName, password, confirmPassword } = formFields;

  const handleFormFields = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = await createUserWithEmail(email, password);
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
      <Button buttonStyle={ButtonType.ButtonSubmit}>Valider</Button>
    </SignUpFormContainer>
  );
}

export default SignUpForm;
