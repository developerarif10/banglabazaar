"use client";

import { doSignOut, login } from "@/app/actions/auth.actions";
import checkIfUserExists from "@/utils/checkIfUserExists";
import { validateEmail } from "@/utils/validateEmail";
import { zodResolver } from "@hookform/resolvers/zod";
import moment from "moment";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const formSchema = () =>
  z.object({
    email: z.string().refine((email) => validateEmail(email), {
      message: "Invalid Email",
    }),
    password: z.string(),
    remember: z.boolean(),
  });

const useLogin = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const form = useForm({
    resolver: zodResolver(formSchema()),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const { handleSubmit, setError, formState } = form;

  const onSubmit = async (values) => {
    try {
      // Check if user exists first
      const status = await checkIfUserExists(values.email);

      if (!status) {
        setError("root.serverError", {
          type: "email",
          message: "No user by that email",
        });
        return;
      }

      // Call the login function from auth.actions.js
      const loggedInUser = await login(values);

      if (!loggedInUser) {
        setError("root.serverError", {
          type: "login",
          message: "Wrong Credentials",
        });
        return;
      }

      // Check if user is banned (in jail)
      const jailExpiresDate = loggedInUser?.jail?.expires;

      if (jailExpiresDate) {
        const currentDate = moment();

        if (currentDate.isBefore(jailExpiresDate)) {
          await doSignOut();
          router.push(`/banned/${loggedInUser?._id}`);
          return;
        }
      }

      // Successful login - redirect based on role
      if (loggedInUser.role === "admin") {
        router.push("/admin-dashboard");
      } else {
        // Check for redirected_by parameter
        const redirectedBy = searchParams.get("redirected_by");
        if (redirectedBy) {
          router.push(`/${redirectedBy}`);
        } else {
          router.push("/");
        }
      }

      return loggedInUser;
    } catch (error) {
      console.error("Login error:", error);
      setError("root.serverError", {
        type: "login",
        message: "An error occurred during login",
      });
    }
  };

  return {
    onSubmit,
    form,
    handleSubmit,
    isSubmitting: formState.isSubmitting,
    errors: formState.errors,
  };
};

export default useLogin;
