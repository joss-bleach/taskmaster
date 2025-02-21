import { FormWrapper } from "../components/form-wrapper";
import { SignUpForm } from "../components/forms/sign-up-form";
import { SocialAuth } from "../components/social-auth";

export const SignUpSection = () => {
  return (
    <div>
      <div className="w-full">
        <h1 className="text-3xl font-medium text-foreground">Get started.</h1>
      </div>
      <SocialAuth />
      <FormWrapper>
        <SignUpForm />
      </FormWrapper>
    </div>
  );
};
