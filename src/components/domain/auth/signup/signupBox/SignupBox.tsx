import SignupForm from "./form/SignupForm";
import SignupTerms from "./terms/SignupTerms";
import useSignupForm from "./hooks/useSignupForm";
import SignupModal from "./modal/SignupModal";

import {
  SignupNicknameStep,
  SignupPlatformStep,
  SignupSuccessStep,
} from "./modal";

export default function SignupBox() {
  const {
    isOpenModal,
    step,
    getBaseStepProps,
    getNicknameStepProps,
    getPlatformStepProps,
    getSuccessStepProps,
  } = useSignupForm();
  return (
    <>
      <SignupForm {...getBaseStepProps()} />
      <SignupTerms />
      <SignupModal isMounted={isOpenModal} step={step}>
        {step === "nickname" && (
          <SignupNicknameStep {...getNicknameStepProps()} />
        )}
        {step === "platform" && (
          <SignupPlatformStep {...getPlatformStepProps()} />
        )}
        {step === "success" && <SignupSuccessStep {...getSuccessStepProps()} />}
      </SignupModal>
    </>
  );
}
