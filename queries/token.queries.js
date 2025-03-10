import connectMongo from "@/database/connectMongo";

export const getAuthTokenByEmail = async (email) => {
  await connectMongo();

  try {
    const token = await AuthTokenModel.findOne({ email });

    return token;
  } catch (error) {
    return null;
  }
};
