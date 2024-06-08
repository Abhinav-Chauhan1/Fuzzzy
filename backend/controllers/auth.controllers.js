import User from "../models/user.models.js";
import generateToken from "../jwt.token.js";

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (password !== user.password) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        generateToken(user._id, res);
        res.status(200).json({ message: "User logged in successfully", user });

    } catch (error) {
        console.log("Error in login", error);

        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const register = async (req, res) => {
    try {
        const { fullName, email, password, confirmPassword } = req.body;

        if (!fullName || !email || !password || !confirmPassword) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Password does not match" });
        }

        const user = await User.findOne({email});

        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = new User({ fullName, email, password, confirmPassword });


        if (newUser){
            generateToken(newUser._id, res);
            await newUser.save();
    
            res.status(201).json({ 
                message: "User registered successfully",
                user: newUser,
             });

        }


    } catch (error) {
        console.log("Error in register", error);

        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const logout = (req, res) => {    
   try {
         res.clearCookie("token");
         res.status(200).json({ message: "User logged out successfully" });
   } catch (error) {
         console.log("Error in logout", error);
    
         res.status(500).json({ message: "Internal Server Error" });
   }
};