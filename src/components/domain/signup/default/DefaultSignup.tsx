import SignupTerms from "../terms/SignupTerms";
import SocialSimpleBox from "@/components/common/social/SocialSimpleBox";
import SignupForm from "./form/SignupForm";

export default function DefaultSignup() {
  return (
    <>
      <SignupForm />
      <SignupTerms />
      <SocialSimpleBox label="간편 회원가입" />
    </>
  );
}
