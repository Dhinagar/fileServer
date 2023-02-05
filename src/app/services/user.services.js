const jwt = require("jsonwebtoken");
const USER_MODEL = require('../models/user.mode');

exports.registerUser = async (req,res) => {
    try {
        const { userId,firstName,lastName,age,email}=req.body;
        const token = jwt.sign({ _id: result._id }, "jwtPrivateKey");
        const user = new USER_MODEL({
            userId: userId,
            first_name: firstName,
            last_name: lastName,
            age: age,
            email: email,
            token
          });
            const result = await user.save();
            return [token,result];
    } catch (e) {
        throw Error('Error while regitering user : ' + e);
    }
}

exports.loginUser = async (userId) => {
    try {
        const user = await USER_MODEL.findOne({
            "userId": userId
        });
        return user;
    } catch (e) {
        throw Error('Error while fetching user : ' + e);
    }
}

