import config from "config";
import { verify } from "jsonwebtoken";
import { compare } from "bcrypt";
import User from "../../db/models/User";

export const auth = async function (req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res
            .status(401)
            .json({ errors: [{ msg: "No token, access denied" }] });
    }
    try {
        const decoded = await verify(token, config.get("JWT_SECRET"));
        const { email, id, hashedTrial } = decoded;
        let user = await User.findOne({ email });
        let isValid = await compare(`${email}${user.password}`, hashedTrial);
        if (!isValid) {
            return res
                .status(401)
                .json({ msg: "Token is invalid, authorization denied" });
        }
        req.user = { email, id };
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ msg: "Token is invalid, authorization denied" });
    }
};
