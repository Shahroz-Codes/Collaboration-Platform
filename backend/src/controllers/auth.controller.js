import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { generateToken } from "../utils/jwt.js"

export const signup = async (req, res) => {
    const { fullName, password, email } = req.body;
    try {
        if (!fullName || !password || !email) {
            return res.status(401).json({ message: "incomplete credentionals" })
        }
        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters" });
        }
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            fullName,
            email,
            password: hashedPassword,
        })
        if (newUser) {
            // generate jwt token here
            generateToken(newUser._id, res);
            await newUser.save();

            console.log(`✨ ${newUser.fullName} signedup`);

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
            });
        } else {
            res.status(400).json({ message: "Invalid user data" });
        }
    } catch (error) {
        console.log("error in signup controller");
        return res.status(500).json({ message: "internal server error , auth.controller.signup" })
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid credentials" });

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

        generateToken(user._id, res)

        console.log(`🚪 ${user.fullName} logged in`);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
        })

    } catch (error) {
        console.log("error in login controller");
        return res.status(500).json({ message: "internal server error , auth.controller.login" })
    }
}

export const logout = async (req, res) => {

    try {
        res.cookie("jwt", "", {
            maxAge: 0,
            httpOnly: true,
        })
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("error in logout controller");
        return res.status(500).json({ message: "internal server error , auth.controller.logout" })
    }
}