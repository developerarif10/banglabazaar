import SignIn from "@/components/auth/SignIn";

export default function SocialLogins() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <SignIn medium="google" />
      <SignIn medium="facebook" />
    </div>
  );
}
