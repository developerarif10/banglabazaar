"use client";

import useLogin from "@/hooks/auth-hooks/useLogin";
import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function LoginForm() {
  const { onSubmit, form, handleSubmit, isSubmitting, errors } = useLogin();

  const errorTypeIsLogin = errors?.root?.serverError?.type === "login";
  const errorTypeIsEmail = errors?.root?.serverError?.type === "email";

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="space-y-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <FormControl>
                <Input id="email" placeholder="name@example.com" {...field} />
              </FormControl>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <FormControl>
                <Input id="password" type="password" {...field} />
              </FormControl>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="remember"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <div className="flex justify-start items-center gap-1">
                <FormControl>
                  <Checkbox
                    id="remember"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <Label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </Label>
              </div>
            </FormItem>
          )}
        />

        <Button disabled={isSubmitting} type="submit" className="w-full">
          {isSubmitting ? (
            <div className="flex gap-2 justify-center items-center">
              <p>Logging in</p>
              <Loader2 className="animate-spin" />
            </div>
          ) : (
            <p className="dark:text-white">Login</p>
          )}
        </Button>

        {(errorTypeIsLogin || errorTypeIsEmail) && (
          <p className="text-red-500 italic text-md text-center mt-2">
            {errors?.root?.serverError?.message}
          </p>
        )}
      </form>
    </Form>
  );
}
