'use-client'
import SingInForms from "./SignInForm";
import { SignInWrapper } from "../../components";
import { Suspense } from "react";

export default function SignIn() {
  return (
    <SignInWrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <SingInForms />
      </Suspense>
    </SignInWrapper>
  );
}
