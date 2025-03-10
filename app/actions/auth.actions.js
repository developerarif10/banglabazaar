"use server";
import { signIn, signOut } from "@/auth";
import connectMongo from "@/database/connectMongo";
import { UserModel } from "@/models/user-model";

export async function doSignOut() {
  await signOut();
}

export async function doSignInWithGoogle() {
  await signIn("google", { callbackUrl: process.env.BASE_URL });
}

export async function doSignInWithFB() {
  await signIn("facebook", { callbackUrl: process.env.BASE_URL });
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
