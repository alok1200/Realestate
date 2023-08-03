const  {createHash} = require('crypto')
require('dotenv').config()

const createHashWithSault = (data) => {
    return createHash("sha256")
        .update(data)
        .update(createHash("sha256").update("Hemloo").digest("hex"))
        .digest("hex")
}


module.exports = {createHashWithSault}