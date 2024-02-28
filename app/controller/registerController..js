const registerService = require("../services/auth/registerService");

const registerController = (req, res) => {
    const { name, email, password } = req.body;
    try {
        if (!email, !name, !password) {
            return res.send("provide name email,password");
        };

        registerService({ name, email, password });

        return res.send("account created done");


    } catch (error) {

        console.log(error);

    };
};


module.exports = registerController;