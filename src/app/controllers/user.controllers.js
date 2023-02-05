const USER_SERVICE = require('../services/user.services');



exports.loginUser = async (req, res, next) => {
    try {
        console.log("xavdacxgvxnb......")
        const USER = await USER_SERVICE.loginUser(req.params.userId)
        res.header("x-auth-token", USER.token);
        return res.status(200).json({
            status: 200,
            data: USER.result,
            message: "Succesfully fetched user"
        });
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e
        });
    }
}

exports.registerUser = async (req, res, next) => {
    try {
        const user = await USER_SERVICE.registerUser(req, res);
        return res.status(200).json({
            status: 200,
            data: user,
            message: "Succesfully added user"
        });
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        });
    }
}

