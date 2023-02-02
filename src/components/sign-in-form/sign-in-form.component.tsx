import { SignInFormContainer } from "./sign-in-form.styles";
import FormField from "../form-input/form-field.component";
import { useState } from "react";
import Button, { ButtonType } from "../button/button.component";
import {
  signInWithEmail,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = await signInWithEmail(email, password);
    if (user) {
      const userSnapshot = await createUserDocumentFromAuth(user, {});
    }
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
