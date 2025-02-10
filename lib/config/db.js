import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://admin:darkpiodos123@darwinblog.q3ecd.mongodb.net/?retryWrites=true&w=majority&appName=darwinblog"
  );
  console.log("DB Connected");
};
