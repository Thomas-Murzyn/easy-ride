import {
  SignUpFormContainer,
  SignUpTextFieldContained,
} from "./sign-up-form.styles";

import { useState } from "react";
import { fetchUser } from "../../app/features/user/user.slice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks/hooks";
import { CustomButton } from "../button/button.component";
import { TextField } from "@mui/material";

const defaultFormFields = {
  email: "",
  displayName: "",
  password: "",
  confirmPassword: "",
};

function SignUpForm() {
  const dispatch = useAppDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const navigate = useNavigate();

  const { email, displayName, password, confirmPassword } = formFields;

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  const handleFormFields = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(fetchUser({ email, password, signIn: false, displayName }));
    resetFormField();
    navigate("/sell");
  };

  return (
    <SignUpFormContainer onSubmit={handleSubmit}>
      <h2>Créer un compte</h2>
      <SignUpTextFieldContained>
        <TextField
          name="displayName"
          type="text"
          label="Name"
          required
          value={displayName}
          onChange={handleFormFields}
        />
        <TextField
          name="email"
          type="email"
          label="Email"
          required
          value={email}
          onChange={handleFormFields}
        />
        <TextField
          name="password"
          type="password"
          label="Password"
          required
          value={password}
          onChange={handleFormFields}
        />
        <TextField
          name="confirmPassword"
          type="password"
          label="Confirm password"
          required
          value={confirmPassword}
          onChange={handleFormFields}
        />
      </SignUpTextFieldContained>
      <CustomButton type="submit">Valider</CustomButton>
    </SignUpFormContainer>
  );
}

export default SignUpForm;
