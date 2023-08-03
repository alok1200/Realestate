const jwt = require('jsonwebtoken')
require('dotenv').config()

const createJWT = (data) => {
    return jwt.sign(data, "hemloo", { expiresIn: "3d"})
}



module.exports = {createJWT};