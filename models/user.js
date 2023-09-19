import { Schema, models, model } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, "Email already exists"],
      required: [true, "Email is required"],
    },
    username: {
      type: String,
      // unique: [true, "Username already exists"],
      required: [true, "Username is required"],
      match: [
        /^(?=.{8,150}$)(?![.])(?!.*[.]{2})[а-яА-Яa-zA-Z0-9.]+(?<![.])$/,
        "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
      ],
    },
    image: {
      type: String,
      // required: [true, "Image is required"],
    },
  },
  { timestamps: true }
);

const User = models.User || model("User", userSchema);

export default User;
