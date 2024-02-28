const register = require("../../models/register");

const registerService = async ({ name, email, password }) => {

    console.log(name, email, password);

    const data = new register({
        name, email, password
    });

    const result = await data.save();

    console.log(result)

    return result;

};


module.exports = registerService;