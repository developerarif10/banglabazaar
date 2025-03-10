"use client";
import { validateEmail } from "@/utils/validateEmail";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { z } from "zod";

export const formSchema = () =>
  z.object({
    fullName: z.string().min(3, {
      message: "Name must be at least 3 characters.",
    }),
    email: z.string().refine((email) => validateEmail(email), {
      message: "Invalid Email",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
    confirmedPassword: z.string(),
  });

const useRegister = () => {
  const router = useRouter();
  const [focusedField, setFocusedField] = useState("fullName");

  const form = useForm({
    resolver: zodResolver(formSchema()),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmedPassword: "",
    },
  });

  const {
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    setError,
  } = form;

  const passwordFromInput = watch("password");
  const confirmedPasswordFromInput = watch("confirmedPassword");
  const isPasswordMatching = passwordFromInput === confirmedPasswordFromInput;

  async function onSubmit({ fullName, email, password }) {
    if (!isPasswordMatching) {
      setError("confirmedPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
      return;
    }
    try {
      const { data, status } = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/register`,
        {
          name: fullName,
          email,
          password,
          accountType: "raw",
        }
      );
      if (status === 201) {
        toast.success(`${data}, Please log in now`, { autoClose: 1500 });
        router.push("/login");
      } else if (status === 200) {
        setError("root.userExistsError", {
          type: "custom",
          message: data,
        });
        toast.error("User already exists", { autoClose: 1500 });
      }
    } catch (error) {
      toast.error(error.response?.data || "Registration failed", {
        autoClose: 1500,
      });
    }
  }

  return {
    form,
    handleSubmit,
    onSubmit,
    focusedField,
    confirmedPasswordFromInput,
    isPasswordMatching,
    errors,
    setFocusedField,
    passwordFromInput,
    isSubmitting,
  };
};
export default useRegister;
