import { model } from "mongoose";

const userSchema = {
  name: String,
  email: String,
  phonenumber: String,
  dob: String,
  adress: String,
  disposableIncome: Number,
  incomeExpenditureRatio: Number,
  grade: Number,
};

const User = model("User", userSchema);

export default User;
