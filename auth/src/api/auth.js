import express, { Router } from "express";
import { check } from "express-validator";
import { registerUser, loginUser, logoutUser } from "./handlers/index";
import { auth } from "./middlewares/index";
const router = Router();

router.post(
    "/login",
    [
        check(
            "email",
            "Please provide an email in the correct format"
        ).isEmail(),
        check("password", "Please provide a password").not().isEmpty(),
    ],
    (req, res) => {
        loginUser(req, res);
    }
);
router.post(
    "/register",
    [
        check("username", "Name field is required").not().isEmpty(),
        check("email", "Please add an email in the correct format").isEmail(),
        check(
            "password",
            "Please enter a password with 6 or more characters"
        ).isLength({
            min: 6,
        }),
    ],
    (req, res) => {
        registerUser(req, res);
    }
);
router.delete("/logout", (req, res) => {
    logoutUser(req, res);
});
router.get("/me", auth, (req, res) => {
    res.send(req.user);
});
export default router;
