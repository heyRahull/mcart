import * as userService from '../services/userService.js';

export const register = async (req, res) => {
    try{
        const registeredUser = await userService.registerUser(req.body);

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            details: {
                id: registeredUser._id,
                username: registeredUser.username,
                email: registeredUser.email
            }
        })

    }catch(err){
        res.status(400).json({
            success: false,
            error: err.message
        })
    }
}

export const login = async (req, res) => {
    try{
        const isAuthenticated = await userService.loginUser(req.body);

        if(isAuthenticated){
            res.status(200).json({
            success: true,
            message: "Login Successfull"
        })
        }else{
            res.status(401).json({
            success: false,
            message: "Invalid username or password"
        })
        }
        
    }catch(err){
        res.status(500).json({
            success: false,
            message: "An internal server error occurred",
            error: err.message
        })
    }
}