import { SignIn } from "@clerk/nextjs";

const LoginPage = () => {
  return (
    <div>
      <SignIn afterSignInUrl={"/home"} afterSignUpUrl={"/account"} />
    </div>
  );
};

export default LoginPage;
