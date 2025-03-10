"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useRegister from "@/hooks/auth-hooks/useRegister";
import { Loader2 } from "lucide-react";
import { Form } from "../ui/form";

export default function RegisterForm() {
  const {
    form,
    handleSubmit,
    onSubmit,
    focusedField,
    isPasswordMatching,
    errors,
    setFocusedField,
    isSubmitting,
    passwordFromInput,
  } = useRegister();

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="space-y-4"
      >
        <div className="space-y-2">
          <Label htmlFor="fullName">Full name</Label>
          <Input
            id="fullName"
            {...form.register("fullName")}
            type="text"
            required
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs">{errors.fullName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" {...form.register("email")} required />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password *</Label>
          <Input
            id="password"
            type="password"
            {...form.register("password")}
            required
          />
          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmedPassword">Confirm Password *</Label>
          <Input
            id="confirmedPassword"
            {...form.register("confirmedPassword")}
            type="password"
            required
          />
          {errors.confirmedPassword && (
            <p className="text-red-500 text-xs">
              {errors.confirmedPassword.message}
            </p>
          )}
        </div>
        {/* show status of password matching */}
        {passwordFromInput.length > 0 && isPasswordMatching ? (
          <p className="text-green-500 italic text-xs">Passwords match</p>
        ) : (
          passwordFromInput.length > 0 && (
            <p className="text-red-500 italic text-xs">
              Passwords do not match
            </p>
          )
        )}
        {errors?.root?.userExistsError?.type === "custom" ? (
          <p className="text-red-500 italic text-md">"User already exists"</p>
        ) : null}

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? (
            <div className="flex gap-2 justify-center items-center">
              <p>Registering...</p>
              <Loader2 className="animate-spin" />
            </div>
          ) : (
            <p className="dark:text-white">Register</p>
          )}
        </Button>
      </form>
    </Form>
  );
}
