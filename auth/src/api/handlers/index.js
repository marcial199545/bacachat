import { validationResult, check } from "express-validator";
import User from "../../db/models/User";
import { url } from "gravatar";
import config from "config";
import { sign } from "jsonwebtoken";
import { compare, hash } from "bcrypt";

export const registerUser = async function (req, res) {
    let errors = checkErrors(req, res);
    if (errors.status) {
        return res.status(400).json({ errors: errors.errors.array() });
    }
    try {
        const { username, password, email } = req.body;
        let user = await User.findOne({ email });
        if (user) {
            return res
                .status(400)
                .json({ errors: [{ msg: "User already exists" }] });
        }
        let payload = { email, username, password };
        payload.avatar = url(email, { s: "200", r: "pg", d: "identicon" });
        user = new User(payload);
        await user.save();
        res.send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
};
export const loginUser = async function (req, res) {
    let errors = checkErrors(req, res);
    if (errors.status) {
        return res.status(400).json({ errors: errors.errors.array() });
    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ errors: [{ msg: "Login failed" }] });
        }
        let compareResult = await compare(password, user.password);
        if (!compareResult) {
            return res.status(400).json({ errors: [{ msg: "Login failed" }] });
        }
        let hashedTrial = await hash(`${user.email}${user.password}`, 8);
        const payload = {
            id: user.id,
            email: user.email,
            hashedTrial,
        };
        let token = await sign(
            payload,
            config.get("JWT_SECRET"),
            config.get("JWT_CONFIG")
        );
        // console.log("token", token);
        res.cookie("token", token, { httpOnly: true });
        res.send(user);
    } catch (error) {
        res.status(500).send("Server Error");
    }
};
export const logoutUser = function (req, res) {
    res.clearCookie("token");
    return res.status(200).send("Cookie Removed");
};

const checkErrors = function (req, res) {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        return { status: true, errors };
    }
    return { status: false };
};
