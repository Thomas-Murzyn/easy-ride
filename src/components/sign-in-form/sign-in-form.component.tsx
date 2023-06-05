import {
  SignInFormContainer,
  SignInTextFieldContained,
} from "./sign-in-form.styles";
import { useState } from "react";
import { CustomButton } from "../button/button.component";
import { fetchUser } from "../../app/features/user/user.slice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks/hooks";
import { TextField } from "@mui/material";

const defaultFormFields = {
  email: "",
  password: "",
};

function SignInForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
    navigate("/sell");
  };

  return (
    <SignInFormContainer onSubmit={handleSubmit}>
      <h2>Se connecter</h2>
      <SignInTextFieldContained>
        <TextField
          name="email"
          type="email"
          label="Email"
          required
          value={email}
          onChange={handleFormFields}
          variant="outlined"
          aria-label="Enter your Email"
        />
        <TextField
          name="password"
          type="password"
          label="Password"
          required
          value={password}
          onChange={handleFormFields}
          variant="outlined"
          aria-label="Enter your Password"
        />
      </SignInTextFieldContained>

      <CustomButton type="submit">Se connecter</CustomButton>
    </SignInFormContainer>
  );
}

export default SignInForm;
