import { SignInContainer } from "./sign-in.styles";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

function SignIn() {
  return (
    <SignInContainer>
      <SignInForm />
      <SignUpForm />
    </SignInContainer>
  );
}

export default SignIn;
