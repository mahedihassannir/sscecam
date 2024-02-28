const register = require("../models/register");

const loginController = async (req, res) => {

    const { email, password } = req.body;

    try {

        if (!email & !password) {
            return res.send("provide email and password");
        };

        const findAccount = await register.findOne({ email })

        if (!findAccount) {
            return res.status(204).json({
                message: "invalid access"
            });
        };

        if (findAccount.password !== password) {
            return res.status(400).json({
                message: "invalid credential"
            });
        };


        res.status(200).json({
            status: "success",
            data: findAccount
        });


    } catch (error) {
        console.log(error);
    };






}


module.exports = loginController;