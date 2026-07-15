import { User } from "../models/User.js";

export const registerUser = async (userData) => {
  const { username, password, email, phoneNumber } = userData;

  //1. Validation Check : password length
  if (!password || password.length < 5) {
    throw new Error("Minimum 5 characters should be there in password.");
  }

  //2. Validation Check : phone. no. digit
  if (!phoneNumber || phoneNumber.toString().length !== 10) {
    throw new Error("Phone number should be 10 digits");
  }

  //3. Validation Check : database
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    throw new Error("User already registered with this username");
  }

  //4. Register the new User details in DB
  const newUser = await User.create({
    username,
    password,
    email,
    phoneNumber,
  });

  return newUser;
};

export const loginUser = async (userData) => {
  const {username, password} = userData;
  const user = await User.findOne({ username, password });

  return user ? true : false;
};
