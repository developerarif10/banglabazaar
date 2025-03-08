"use client";
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
import { useState } from "react";

export default function LoginPage() {
  const [showResetPassword, setShowResetPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Add reset password logic here
  };

  return (
    <div className="container relative flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0 py-10">
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome back
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email to sign in to your account
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>

            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>

          <div className="flex items-center justify-between">
            <Dialog
              open={showResetPassword}
              onOpenChange={setShowResetPassword}
            >
              <DialogTrigger asChild>
                <Button variant="link" className="px-0">
                  Forgot password?
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Reset your password</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleResetPassword} className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Enter your email address and we will send you a link to
                    reset your password.
                  </p>
                  <div className="space-y-2">
                    <Label htmlFor="reset-email">Email</Label>
                    <Input
                      id="reset-email"
                      type="email"
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                  <div className="flex justify-between">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => setShowResetPassword(false)}
                    >
                      Cancel
                    </Button>
                    <Button type="submit">Reset Password</Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>

            <Link
              href="/register"
              className="text-sm text-primary hover:underline"
            >
              Don&apos;t have an account?
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:p-8 flex gap-2 flex-col">
        <h1 className="text-1xl md:text-2xl font-normal ">I'm new here</h1>
        <p>
          Sign up for early Sale access plus tailored new arrivals, trends and
          promotions. To opt out, click unsubscribe in our emails.
        </p>
        <Link className="underline" href="/register">
          <span className="flex">
            Register <ArrowUpRight />
          </span>
        </Link>
      </div>
    </div>
  );
}
