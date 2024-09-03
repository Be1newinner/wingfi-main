import SingInForms from "./SignInForm";

export default function SignIn() {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1806&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="flex flex-row w-full justify-center items-center">
        <SingInForms />
      </div>
    </div>
  );
}
