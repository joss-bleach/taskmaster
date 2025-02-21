import { FormWrapper } from "../components/form-wrapper";
import { SignInForm } from "../components/forms/sign-in-form";
import { SocialAuth } from "../components/social-auth";

export const SignInSection = () => {
  return (
    <div>
      <div className="w-full">
        <h1 className="text-3xl font-medium text-foreground">Welcome back.</h1>
      </div>
      <SocialAuth />
      <FormWrapper>
        <SignInForm />
      </FormWrapper>
    </div>
  );
};
