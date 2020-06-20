exports.userSignupValidator = (req, res, next) => {
    req.check("name", "Name is require").notEmpty();
    req.check("email", "Email must be between 3 to 32 characters")
        .matches(/.+\@.+\..+/)
        .withMessage("Email must contain @")
        .isLength({
            min: 4,
            max: 32
        });
    req.check("password", "Password is required").notEmpty();
    req.check("password")
        .isLength({min: 6})
        .withMessage("Password must contain a least 6 character")
        .matches(/\d/)
        .withMessage("Password must contanin a number");

        const error = req.validationErrors()

        if(error) {
            const firstError = error.map(error => error.msg)[0];
            return res.status(400).json({error: firstError})
        }

    next();
}