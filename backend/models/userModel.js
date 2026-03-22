import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
  },
  isPrivate: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    enum: ["individual", "admin", "company"],
    default: "individual",
  }
});

const User = mongoose.model("User", UserSchema);

export default User;