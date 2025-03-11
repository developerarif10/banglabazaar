"use server";
import { signIn, signOut } from "@/auth";
import connectMongo from "@/database/connectMongo";
import { UserModel } from "@/models/user-model";
import { loginFormSchema } from "./zodSchema.actions";
export async function doSignOut() {
  await signOut();
}

export async function doSignInWithGoogle() {
  await signIn("google", { callbackUrl: process.env.BASE_URL });
}

export async function doSignInWithFB() {
  await signIn("facebook", { callbackUrl: process.env.BASE_URL });
}

export async function login(values) {
  try {
    // Validate form inputs
    const validatedFields = loginFormSchema.safeParse(values);

    // Server side validation in case user bypasses the frontend validation
    if (!validatedFields.success) {
      return null; // Return null to trigger the "Wrong Credentials" error
    }

    const { email, password, remember } = validatedFields.data;

    // Attempt to sign in with credentials
    const signInResult = await signIn("credentials", {
      email,
      password,
      remember,
      redirect: false,
    });

    // Check if sign-in was successful
    if (signInResult?.error) {
      console.error("Sign-in error:", signInResult.error);
      // If password is wrong, increase login attempt counter
      await increaseLoginAttemptIfPasswordIsWrong(email);
      return null;
    }

    // If sign-in was successful, get the user from the database
    await connectMongo();
    const user = await UserModel.findOne({ email }).select("-password").lean();

    if (!user) {
      return null;
    }

    // Reset login attempt counter on successful login
    await resetLoginAttempt(email);

    return user;
  } catch (error) {
    console.error("Login function error:", error);
    return null;
  }
}

const ONE_HOUR = new Date(new Date().getTime() + 1 * 60 * 60 * 1000);
export const increaseLoginAttemptIfPasswordIsWrong = async (email) => {
  try {
    await connectMongo();
    // if user tries to log in with wrong password, increase the login attempt
    const user = await UserModel.findOneAndUpdate(
      { email },
      {
        $inc: { "jail.loginAttempt": 1 },
      },
      { new: true }
    );

    if (!user) {
      return {
        msg: "No user found",
      };
    }

    // if failed login attempt reaches 3, 🛑 JAIL the user for 1 hour
    if (user.jail.loginAttempt >= 3) {
      await UserModel.findOneAndUpdate(
        { email },
        {
          $set: {
            "jail.loginAttempt": 0,
            "jail.expires": ONE_HOUR,
          },
        },
        { new: true }
      );
    }

    return { msg: "Login attempt increased" };
  } catch (error) {
    throw error;
  }
};

export const resetLoginAttempt = async (email) => {
  try {
    await connectMongo();
    const user = await UserModel.findOneAndUpdate(
      { email },
      {
        $set: { "jail.loginAttempt": 0 },
      },
      { new: true }
    );

    if (!user) {
      return {
        msg: "No user found",
      };
    }
    return { msg: "Login attempt reset" };
  } catch (error) {
    throw error;
  }
};
