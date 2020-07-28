const User = require('../models/user');
const { errorHandler } = require('../helpers/dbErrorHandler')
const jwt =require("jsonwebtoken"); // to generate signed token
const expressJwt = require("express-jwt"); //for authorization check
exports.signup = (req, res) => {
    console.log("req body: ", req.body);
    
    
    const user = new User(req.body);
    user.save((err, user) => {
        if(err) {
            return res.status(400).json(errorHandler(err))
        }
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.cookie("t", token, {expire: new Date() + 9999});

        user.salt = undefined;
        user.hashed_password = undefined;
        const {_id, name, email, role} = user;
        return res.json({token, user: {_id, email, name, role, expire: 9999} })
        // res.json({user})
    })
    
}

exports.signin = (req, res) => {
    //find the user based pn email
    const { email, password} = req.body;
    User.findOne({email}, (err, user) => {
        if(err || !user) {
            return res.status(400).json({
                err: "User with that email does no exist. Please signup"
            })
        }

        //if user is found make sure the email and password macth

        //create authenticate method in user model
        if(!user.authenticate(password)) {
            return res.status(401).json({
                error: "Email and password dont macth"
            })
        }
        //genetate a signed token with user id and secret
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET,{expiresIn: '1h'});
        //presist the token as "t in cookie with expiry date"
        res.cookie("t", token, {expire: new Date() + 3.6});
        //return response with and token to frontend client
        const {_id, name, email, role} = user;
        return res.json({token, user: {_id, email, name, role, expire: 3.6} })

        
    })
};

exports.signout = (req, res) => {
    //clear cookie 
    res.clearCookie("t");
    res.json({ message: "Signout succsess"})
}
// check vs expressJwt 
exports.requireSignin = expressJwt({
    secret: process.env.JWT_SECRET,
    userProperty: "auth"
})

exports.isAuth = (req, res, next) => {
    let user = req.profile && req.auth && req.profile._id == req.auth._id;
    if(!user) {
        return res.status(403).json({
            error: "Access deniend"
        })
    }

    next()
}

// exports.isUser = (req, res, next) => {
//     if(req.profile.role !== 0) {
//         return res.status(403).json({
//             error: "No is User"
//         })
//     }
//     next()
// }
exports.isAdmin = (req, res, next) => {
    if(req.profile.role === 0) {
        return res.status(403).json({
            error: "Admin resourse! Access denied"
        })
    }
    console.log('isAdmin')
    next();
}














