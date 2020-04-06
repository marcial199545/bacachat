import mongoose, { Schema, model } from "mongoose";
import { hash } from "bcrypt";
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    profileSettings: {
        language: {
            type: String,
            default: "en",
        },
    },
});
UserSchema.pre("save", async function (next) {
    try {
        let user = this;
        if (user.isModified("password")) {
            user.password = await hash(user.password, 8);
        }
        next();
    } catch (error) {
        console.error(error);
        next();
    }
});
const User = model("user", UserSchema);
export default User;
