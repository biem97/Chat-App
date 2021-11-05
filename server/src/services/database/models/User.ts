import mongoose, { Document } from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: true,
    },
    username: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      sparse: true,
    },
    image: String,
    isOnline: {
      type: Boolean,
      default: false,
    },
    messages: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export interface IUser extends Document {
  fullName: string;
  email: string;
  username: string;
  image: string;
  isOnline: boolean;
  messages: string[];
}

export default mongoose.model<IUser>("User", UserSchema);
