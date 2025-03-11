import RegisterForm from "@/components/auth/RegisterForm";
import SocialLogins from "@/components/auth/SocialLogin";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Metadata = {
  title: "Register",
  description: "Banglabazaar Register",
};

export default function RegisterPage() {
  return (
    <div className="container relative min-h-screen flex-col items-center justify-center p-10">
      <div>
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[550px]">
          <div className="flex flex-col space-y-2">
            <h1 className="text-2xl font-semibold tracking-tight">Register</h1>
            <p className="text-sm text-muted-foreground">
              Sign up for early Sale access plus tailored new arrivals, trends
              and promotions. To opt out, click unsubscribe in our emails
            </p>
          </div>

          <RegisterForm />
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          {/*  Buttons */}
          <SocialLogins />

          <div className="text-center">
            <Link
              href="/login"
              className="inline-flex items-center text-sm text-primary hover:underline"
            >
              Already have an account? Log in here
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
