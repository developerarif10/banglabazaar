import LoginForm from "@/components/auth/LoginForm";
import SocialLogins from "@/components/auth/SocialLogin";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { getDictionary } from "../distionaries";

export default async function LoginPage({ params: { lang } }) {
  const {
    login: {
      welcomeMessage,
      welcomeSubHeading,
      orLoginWith,
      noAccountMessage,
      registerNow,
      emailLabel,
      passwordLabel,
      rememberMe,
      forgotPassword,
      loggingIn,
      cancel,
      loginText2,
      ResetPassword,
      loginText1,
      email,
      register,
    },
  } = await getDictionary(lang);

  return (
    <div className="container relative flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0 py-10">
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              {welcomeMessage}
            </h1>
            <p className="text-sm text-muted-foreground">{welcomeSubHeading}</p>
          </div>

          <LoginForm />

          <div className="flex items-center justify-between">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="link" className="px-0">
                  {forgotPassword}?
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Reset your password</DialogTitle>
                </DialogHeader>
                <form className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Enter your email address and we will send you a link to
                    reset your password.
                  </p>
                  <div className="space-y-2">
                    <Label htmlFor="reset-email">{email}</Label>
                    <Input
                      id="reset-email"
                      type="email"
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                  <div className="flex justify-between">
                    <Button type="button" variant="ghost">
                      {cancel}
                    </Button>
                    <Button type="submit">{ResetPassword}</Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>

            <Link
              href="/register"
              className="text-sm text-primary hover:underline"
            >
              {noAccountMessage}
            </Link>
          </div>

          <SocialLogins />
        </div>
      </div>
      <div className="lg:p-8 flex gap-2 flex-col">
        <h1 className="text-1xl md:text-2xl font-normal ">{loginText1}</h1>
        <p>{loginText2}</p>
        <Link className="underline" href="/register">
          <span className="flex">
            {register} <ArrowUpRight />
          </span>
        </Link>
      </div>
    </div>
  );
}
